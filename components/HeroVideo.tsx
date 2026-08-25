'use client'

import { useEffect, useState } from 'react'

type HeroVideoProps = {
  src: string
  poster: string
  /**
   * Applied to both the poster and the video so the reduced-motion fallback is
   * visually identical to the video's first frame — including any
   * brightness/contrast filters the page layers on.
   */
  className?: string
}

/**
 * Autoplaying background video that honours `prefers-reduced-motion`.
 *
 * The global reduced-motion rule in globals.css zeroes out animation and
 * transition durations, but video playback is neither — `autoPlay` sails
 * straight past it — so this has to be handled per-element.
 *
 * State starts as "no motion", so the server and first paint both render the
 * poster and the video attaches only after we've confirmed the visitor hasn't
 * asked for reduced motion. That means the video is never even requested for
 * those who have, which is worth 1–3 MB per page on top of the re-encode.
 */
export default function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const [allowMotion, setAllowMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setAllowMotion(!query.matches)
    apply()
    // Subscribe so toggling the OS setting takes effect without a reload.
    query.addEventListener('change', apply)
    return () => query.removeEventListener('change', apply)
  }, [])

  if (!allowMotion) {
    // Decorative: the gradient sits over it and the heading carries the meaning.
    // Deliberately a plain <img>: it stands in for the <video>'s own poster, so it
    // must be the exact same file and object-cover geometry. next/image would
    // fetch a second, differently-sized asset for the same pixels.
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={poster}
        alt=""
        // This poster is the hero's LCP element on first paint, so it has to
        // outrank the lazy imagery further down the document.
        fetchPriority="high"
        decoding="async"
        className={className}
      />
    )
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className={className}
      src={src}
    />
  )
}
