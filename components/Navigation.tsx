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
          <div className="relative group">
            <Link
              href="/spaces/residences"
              className={`text-sm font-semibold uppercase tracking-wider transition-colors min-h-[44px] flex items-center gap-1 px-3 ${
                pathname === '/spaces/residences'
                  ? 'text-station-gold'
                  : 'text-white/90 hover:text-station-gold'
              }`}
            >
              Residences
              <span className="text-[10px] mt-0.5 transition-transform duration-200 group-hover:rotate-180">▾</span>
            </Link>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
              <div className="min-w-[190px] rounded-2xl border border-station-gold/20 bg-station-dark/98 backdrop-blur-xl shadow-xl shadow-black/30 py-2">
                {[
                  { href: '/spaces/residences', label: 'Overview' },
                  { href: '/spaces/residences#floor-plan', label: 'Floor Plan' },
                  { href: '/spaces/residences#gallery', label: 'Gallery' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm font-semibold text-white/90 hover:text-station-gold hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
              href="/spaces/residences"
              className={`text-2xl font-semibold uppercase tracking-wider py-3 min-h-[56px] flex items-center transition-colors ${
                pathname === '/spaces/residences' ? 'text-station-gold' : 'text-white hover:text-station-gold'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Residences
            </Link>
            <div className="-mt-3 pl-4 flex flex-col gap-3 border-l-2 border-station-gold/20">
              <Link
                href="/spaces/residences#floor-plan"
                className="text-lg font-medium text-white/75 hover:text-station-gold min-h-[44px] flex items-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Floor Plan
              </Link>
              <Link
                href="/spaces/residences#gallery"
                className="text-lg font-medium text-white/75 hover:text-station-gold min-h-[44px] flex items-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
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
