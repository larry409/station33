'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Copy-to-clipboard button for the press kit. Client-only by necessity —
 * everything around it stays a server component.
 *
 * Falls back to a visible "Select the text below" hint if the Clipboard API
 * is unavailable (older browsers, non-secure contexts), so the button never
 * silently does nothing.
 */
export default function PressCopyButton({
  text,
  label = 'Copy',
  ariaLabel,
  className = '',
}: {
  text: string
  label?: string
  /** Accessible name, when the visible label is too terse to stand alone. */
  ariaLabel?: string
  className?: string
}) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  async function copy() {
    if (timer.current) clearTimeout(timer.current)
    try {
      await navigator.clipboard.writeText(text)
      setStatus('copied')
    } catch {
      setStatus('failed')
    }
    timer.current = setTimeout(() => setStatus('idle'), 3000)
  }

  const message =
    status === 'copied' ? 'Copied' : status === 'failed' ? 'Select the text below' : label

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[44px] rounded-xl border-2 border-station-gold text-station-gold text-sm font-semibold hover:bg-station-gold hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold ${className}`}
      >
        {message}
      </button>
      <span aria-live="polite" className="sr-only">
        {status === 'copied' ? 'Copied to clipboard' : status === 'failed' ? 'Copy failed' : ''}
      </span>
    </>
  )
}
