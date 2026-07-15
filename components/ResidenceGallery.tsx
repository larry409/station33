'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export type GalleryImage = { src: string; alt: string }

/**
 * Growable residence gallery: a responsive grid with an accessible lightbox.
 * Pass any number of images — the grid and lightbox scale as more
 * renderings are added, so new unit shots need no code changes.
 */
export default function ResidenceGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<number | null>(null)

  const open = (i: number) => {
    lastTrigger.current = i
    setActive(i)
  }
  const close = useCallback(() => setActive(null), [])
  const step = useCallback(
    (delta: number) =>
      setActive((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length]
  )

  // While open: move focus into the dialog, trap Tab, handle keys, lock scroll.
  useEffect(() => {
    if (active === null) return
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return close()
      if (e.key === 'ArrowRight') return step(1)
      if (e.key === 'ArrowLeft') return step(-1)
      if (e.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('button')
        if (!nodes || nodes.length === 0) return
        const first = nodes[0]
        const last = nodes[nodes.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  // On close: restore focus to the thumbnail that opened the viewer.
  useEffect(() => {
    if (active === null && lastTrigger.current !== null) {
      triggerRefs.current[lastTrigger.current]?.focus()
      lastTrigger.current = null
    }
  }, [active])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <button
            key={img.src}
            ref={(el) => {
              triggerRefs.current[i] = el
            }}
            type="button"
            onClick={() => open(i)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
            aria-label={`View larger: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <span className="absolute inset-0 bg-bg-darker/0 group-hover:bg-bg-darker/20 transition-colors" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg-darker/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Residence photo viewer"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-card-bg/80 text-primary-text text-2xl flex items-center justify-center hover:bg-station-gold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
            aria-label="Close viewer"
          >
            ×
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-card-bg/80 text-primary-text text-2xl flex items-center justify-center hover:bg-station-gold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-card-bg/80 text-primary-text text-2xl flex items-center justify-center hover:bg-station-gold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
            aria-label="Next photo"
          >
            ›
          </button>
          <p
            className="absolute bottom-4 left-0 right-0 text-center text-sm text-body-text px-4"
            aria-live="polite"
            aria-atomic="true"
          >
            {images[active].alt} · {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
