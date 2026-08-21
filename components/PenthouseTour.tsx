'use client'

import { useRef, useState } from 'react'

const features = [
  { title: 'Two-story living', body: 'A sculptural floating stair connects the main level to a private upper floor.' },
  { title: 'Floor-to-ceiling glass', body: 'Double-height window walls frame Lookout Mountain and the valley beyond.' },
  { title: 'Designer interiors', body: 'Warm walnut millwork, waterfall stone islands, and a linear fireplace wall.' },
  { title: 'Terrace access', body: 'Glass-railed outdoor space opening directly off the main living level.' },
]

/**
 * Penthouse showcase built around the walkthrough rendering. The video element
 * stays mounted with `preload="none"` so the 8 MB file never touches initial
 * page load — the poster carries the section — while `play()` can still fire
 * synchronously inside the click handler, where browsers accept it.
 *
 * Because nothing is buffered at click time, the first few seconds are a dead
 * wait on a slow connection; `buffering` drives a spinner so the click always
 * produces immediate feedback.
 */
export default function PenthouseTour() {
  const [started, setStarted] = useState(false)
  const [buffering, setBuffering] = useState(false)
  const [failed, setFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const play = () => {
    const video = videoRef.current
    if (!video) return
    setFailed(false)
    setBuffering(true)
    setStarted(true)
    // Controls only render once `started` is true, so hand focus to the video
    // on the next frame — otherwise a keyboard user's focus lands on <body>
    // and the controls that just appeared are unreachable by Tab.
    requestAnimationFrame(() => videoRef.current?.focus())
    // A previous attempt may have fallen back to muted; start each run unmuted.
    video.muted = false
    video.play().catch(() => {
      // Some browsers refuse unmuted playback even on a gesture; muted still runs.
      video.muted = true
      video.play().catch((err) => {
        console.error('Penthouse tour failed to play:', err)
        setBuffering(false)
        setFailed(true)
        setStarted(false)
      })
    })
  }

  return (
    <section id="penthouses" className="section-standard bg-bg-dark scroll-mt-24">
      <div className="container">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-station-gold mb-4">
            Now revealed
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
            The Penthouses
          </h2>
          <p className="text-lg md:text-xl text-body-text leading-relaxed">
            Six two-story penthouse suites crown the development — floor-to-ceiling glass walls,
            private terraces, and uninterrupted views of Lookout Mountain. Take the walkthrough.
          </p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-station-gold/25 bg-bg-darker">
          <video
            ref={videoRef}
            controls={started}
            playsInline
            preload="none"
            poster="/images/residences/penthouse-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/penthouse-tour.mp4"
            onWaiting={() => setBuffering(true)}
            onPlaying={() => setBuffering(false)}
            onCanPlay={() => setBuffering(false)}
            onError={() => {
              setBuffering(false)
              setFailed(true)
              setStarted(false)
            }}
            onEnded={() => {
              // Returning to the poster mid-fullscreen would strip the controls
              // and leave no way out but Esc, so only reset when inline.
              if (!document.fullscreenElement) setStarted(false)
            }}
          />

          {buffering && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-bg-darker/40 pointer-events-none"
              role="status"
            >
              <span className="w-12 h-12 rounded-full border-[3px] border-station-gold/30 border-t-station-gold motion-safe:animate-spin" />
              <span className="sr-only">Loading the penthouse tour…</span>
            </div>
          )}

          {!started && (
            <button
              type="button"
              onClick={play}
              className="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-bg-darker/25 hover:bg-bg-darker/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold focus-visible:ring-inset"
            >
              <span className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-station-gold/95 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10 ml-1" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              {/* Names the button. An aria-label here would override this visible
                  text and break voice control ("click Watch the tour"). */}
              <span className="text-primary-text font-semibold text-base md:text-lg drop-shadow-lg">
                Watch the tour · 1:00
              </span>
              {failed && (
                <span className="mt-1 px-4 text-center text-sm text-primary-text/90 max-w-sm">
                  The tour couldn’t load. Check your connection and try again, or email
                  info@station33.co and we’ll send it over.
                </span>
              )}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card-bg border border-station-gold/25 rounded-2xl p-5 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-semibold text-primary-text mb-2">{f.title}</h3>
              <p className="text-body-text text-sm md:text-base leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
