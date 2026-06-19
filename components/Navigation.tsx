'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">
      {/* Floating Pill Nav */}
      <nav
        className={`pointer-events-auto mx-auto max-w-5xl flex justify-between items-center px-4 md:px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl border-station-gold/30 shadow-xl shadow-black/30'
            : 'backdrop-blur-md border-white/10'
        }`}
        style={{
          backgroundColor: scrolled
            ? 'rgba(37, 42, 46, 0.95)'
            : 'rgba(37, 42, 46, 0.75)',
        }}
      >
        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/investors"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors min-h-[44px] flex items-center px-3 ${
              pathname === '/investors'
                ? 'text-station-gold'
                : 'text-white/90 hover:text-station-gold'
            }`}
          >
            Investors
          </Link>
          <Link
            href="/community"
            className={`text-sm font-semibold uppercase tracking-wider transition-colors min-h-[44px] flex items-center px-3 ${
              pathname === '/community'
                ? 'text-station-gold'
                : 'text-white/90 hover:text-station-gold'
            }`}
          >
            Community
          </Link>
        </div>

        {/* Center logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 min-h-[44px] flex items-center"
        >
          <Logo tagline className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Right CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-station-gold text-station-dark rounded-full hover:bg-white transition-all duration-300 text-sm font-semibold uppercase tracking-wider min-h-[44px]"
        >
          Contact
          <span className="text-base">→</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 z-50 min-w-[44px] min-h-[44px] justify-center items-center ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="pointer-events-auto md:hidden fixed inset-0 top-0 bg-station-dark/98 backdrop-blur-lg z-40 pt-28 px-6"
        >
          <nav className="flex flex-col gap-6">
            <Link
              href="/investors"
              className={`text-2xl font-semibold uppercase tracking-wider py-3 min-h-[56px] flex items-center transition-colors ${
                pathname === '/investors' ? 'text-station-gold' : 'text-white hover:text-station-gold'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </Link>
            <Link
              href="/community"
              className={`text-2xl font-semibold uppercase tracking-wider py-3 min-h-[56px] flex items-center transition-colors ${
                pathname === '/community' ? 'text-station-gold' : 'text-white hover:text-station-gold'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/contact"
              className={`text-2xl font-semibold uppercase tracking-wider py-3 min-h-[56px] flex items-center transition-colors ${
                pathname === '/contact' ? 'text-station-gold' : 'text-white hover:text-station-gold'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
