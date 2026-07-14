'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { BrandName } from './BrandName'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setMessage('Thank you for subscribing!')
        setEmail('')
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-bg-darker py-12 md:py-16 lg:py-20 border-t border-divider-gray">
      <div className="container">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-text mb-3 md:mb-4">Stay Updated</h3>
          <p className="text-sm sm:text-base md:text-lg text-body-text mb-6">
            Get exclusive updates on construction progress, leasing opportunities, and community
            events.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-input flex-1 text-base md:text-lg"
              disabled={isSubmitting}
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px] px-6 md:px-8 text-base md:text-lg"
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm md:text-base ${
                message.includes('Thank you') ? 'text-accent-teal' : 'text-red-400'
              }`}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          )}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Company Info */}
          <div className="px-4">
            <Link href="/" className="block mb-4 min-h-[44px] flex items-center">
              <Logo tagline className="h-16 md:h-20 w-auto" />
            </Link>
            <p className="text-body-text text-sm md:text-base mb-4">
              Where Chattanooga comes together. A transformative mixed-use destination on South
              Broad.
            </p>
            <div className="text-body-text text-sm md:text-base space-y-1">
              <p>3210 Broad Street</p>
              <p>Chattanooga, TN 37408</p>
              <p className="mt-3">info@station33.co</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="px-4">
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/community"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  About <BrandName />
                </Link>
              </li>
              <li>
                <Link
                  href="/investors"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="px-4">
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm md:text-base">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Residential Leasing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Commercial Space
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  Events & Community
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm md:text-base inline-block min-h-[44px] flex items-center"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="px-4">
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm md:text-base">
              Follow Us
            </h4>
            <div className="flex gap-3 md:gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on Facebook"
              >
                <span className="text-xl md:text-2xl">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on Instagram"
              >
                <span className="text-xl md:text-2xl">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on LinkedIn"
              >
                <span className="text-xl md:text-2xl">in</span>
              </a>
            </div>
            <p className="text-body-text text-sm md:text-base">
              #Station33
              <br />
              #ChatLife
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-divider-gray flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <p className="text-body-text text-xs sm:text-sm text-center md:text-left">
            © 2026 South Broad Development. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="text-body-text hover:text-accent-teal transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-body-text hover:text-accent-teal transition-colors text-xs sm:text-sm min-h-[44px] flex items-center justify-center"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
