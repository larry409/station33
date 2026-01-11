'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      // Prevent body scroll when menu is open
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
            className={`text-primary-text hover:text-accent-teal transition-colors text-sm font-medium pb-1 ${
              pathname === '/investors' ? 'text-accent-teal border-b-2 border-accent-teal' : ''
            }`}
          >
            Investors
          </Link>
          <Link
            href="/community"
            className={`text-primary-text hover:text-accent-teal transition-colors text-sm font-medium pb-1 ${
              pathname === '/community' ? 'text-accent-teal border-b-2 border-accent-teal' : ''
            }`}
          >
            Community
          </Link>
          <Link
            href="/about"
            className={`text-primary-text hover:text-accent-teal transition-colors text-sm font-medium pb-1 ${
              pathname === '/about' ? 'text-accent-teal border-b-2 border-accent-teal' : ''
            }`}
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
            src="https://res.cloudinary.com/dar0tub6u/image/upload/f_auto,q_100,h_256,dpr_2.0,e_brightness:20,e_vibrance:30/v1767897196/S33_Landscape_Logo_pxuskk"
            alt="Station33 Logo"
            width={360}
            height={120}
            priority
            className="h-24 md:h-32 w-auto brightness-110"
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
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-0 bg-bg-darker/98 backdrop-blur-lg z-40 pt-24 px-8"
        >
          <nav className="flex flex-col gap-6">
            <Link
              href="/investors"
              className={`text-2xl text-white hover:text-station-orange transition-colors ${
                pathname === '/investors' ? 'text-station-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Investors
            </Link>
            <Link
              href="/community"
              className={`text-2xl text-white hover:text-station-orange transition-colors ${
                pathname === '/community' ? 'text-station-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              href="/about"
              className={`text-2xl text-white hover:text-station-orange transition-colors ${
                pathname === '/about' ? 'text-station-orange' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-2xl text-white hover:text-station-orange transition-colors ${
                pathname === '/contact' ? 'text-station-orange' : ''
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
