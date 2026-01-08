'use client'

import { useState } from 'react'
import Link from 'next/link'

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
    <footer className="bg-bg-darker py-16 md:py-20 border-t border-divider-gray">
      <div className="container">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Stay Updated</h3>
          <p className="text-body-text mb-6">
            Get exclusive updates on construction progress, leasing opportunities, and community
            events.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-input flex-1"
              disabled={isSubmitting}
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary-text">STATION</span>
              <span className="text-accent-rust">33</span>
            </div>
            <p className="text-body-text text-sm mb-4">
              Where Chattanooga comes together. A transformative mixed-use destination on South
              Broad.
            </p>
            <div className="text-body-text text-sm space-y-1">
              <p>South Broad Street</p>
              <p>Chattanooga, TN 37408</p>
              <p className="mt-3">(423) 555-0133</p>
              <p>info@station33chattanooga.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  About Station33
                </Link>
              </li>
              <li>
                <Link
                  href="/investors"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/leasing"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Residential Leasing
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Commercial Space
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-body-text hover:text-accent-teal transition-colors text-sm"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary-text font-semibold mb-4 uppercase tracking-wider text-sm">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on Facebook"
              >
                <span className="text-xl">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-full flex items-center justify-center text-body-text hover:bg-accent-teal hover:text-white transition-all"
                aria-label="Follow us on LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
            </div>
            <p className="text-body-text text-sm">
              #Station33
              <br />
              #ChatLife
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-divider-gray flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-body-text text-sm">
            © 2026 South Broad Development. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-body-text hover:text-accent-teal transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-body-text hover:text-accent-teal transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
