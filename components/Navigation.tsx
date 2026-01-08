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
        scrolled ? 'bg-bg-dark/90 backdrop-blur-lg' : 'bg-bg-dark/50 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-6">
        {/* Left nav */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/investors"
            className="text-primary-text hover:text-accent-teal transition-colors text-sm font-medium"
          >
            Investors
          </Link>
          <Link
            href="/community"
            className="text-primary-text hover:text-accent-teal transition-colors text-sm font-medium"
          >
            Community
          </Link>
          <Link
            href="/about"
            className="text-primary-text hover:text-accent-teal transition-colors text-sm font-medium"
          >
            About
          </Link>
        </div>

        {/* Center logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-0"
        >
          <Image
            src="https://res.cloudinary.com/dar0tub6u/image/upload/f_auto,q_auto,h_80,e_brightness:20,e_vibrance:30/v1767897196/S33_Landscape_Logo_pxuskk"
            alt="Station33 Logo"
            width={240}
            height={80}
            priority
            className="h-16 md:h-20 w-auto brightness-110"
          />
        </Link>

        {/* Right button - rounded with arrow */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 text-sm font-medium"
        >
          Contact
          <span className="text-lg">→</span>
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
