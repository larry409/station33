'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-darker/95 backdrop-blur-lg shadow-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-6">
        {/* Left nav */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/investors"
            className="text-text-light hover:text-station-orange transition-colors font-medium"
          >
            Investors
          </Link>
          <Link
            href="/community"
            className="text-text-light hover:text-station-orange transition-colors font-medium"
          >
            Community
          </Link>
          <Link
            href="/about"
            className="text-text-light hover:text-station-orange transition-colors font-medium"
          >
            About
          </Link>
        </div>

        {/* Center logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-0"
        >
          <div className="text-2xl font-bold text-white">
            <span className="text-station-red">STATION</span>
            <span className="text-station-orange">33</span>
          </div>
        </Link>

        {/* Right button */}
        <Link href="/contact" className="hidden md:block btn-primary text-sm">
          Contact
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-bg-darker/98 backdrop-blur-lg z-40 p-8">
          <nav className="flex flex-col gap-6">
            <Link
              href="/investors"
              className="text-2xl text-white hover:text-station-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </Link>
            <Link
              href="/community"
              className="text-2xl text-white hover:text-station-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/about"
              className="text-2xl text-white hover:text-station-orange transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-2xl text-white hover:text-station-orange transition-colors"
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
