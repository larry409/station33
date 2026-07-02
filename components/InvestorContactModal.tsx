'use client'

import { useEffect, useState } from 'react'

interface InvestorContactModalProps {
  open: boolean
  onClose: () => void
}

export default function InvestorContactModal({ open, onClose }: InvestorContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setErrorMessage('')

    // Encode all named fields (including form-name and the honeypot) for Netlify Forms
    const params = new URLSearchParams()
    new FormData(e.currentTarget).forEach((value, key) => params.append(key, value.toString()))

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      })
      if (!res.ok) throw new Error(`Netlify Forms responded ${res.status}`)

      setSubmitMessage('Thank you for your interest! Our investor relations team will be in touch within 24 hours.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error('Investor Relations form submission failed:', err)
      setErrorMessage('Sorry — something went wrong sending your message. Please email investors@station33.com or try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Close modal on Escape and lock body scroll while open
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="investor-contact-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card-bg border-2 border-station-gold/40 rounded-2xl p-6 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-body-text hover:text-primary-text hover:bg-white/10 transition-colors text-2xl leading-none"
        >
          ×
        </button>

        <h2
          id="investor-contact-title"
          className="text-2xl sm:text-3xl font-semibold text-primary-text mb-2 pr-8"
        >
          Contact Investor Relations
        </h2>
        <p className="text-base text-body-text mb-6">
          Share your details and our investor relations team will reach out within 24 hours.
        </p>

        <form
          name="investor-relations"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="investor-relations" />
          {/* Honeypot field — hidden from users, catches bots */}
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>

          <div>
            <label htmlFor="investor-name" className="form-label text-sm md:text-base">
              Name *
            </label>
            <input
              type="text"
              id="investor-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input text-base md:text-lg"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="investor-email" className="form-label text-sm md:text-base">
              Email *
            </label>
            <input
              type="email"
              id="investor-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input text-base md:text-lg"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="investor-phone" className="form-label text-sm md:text-base">
              Phone
            </label>
            <input
              type="tel"
              id="investor-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input text-base md:text-lg"
              placeholder="(423) 555-0133"
            />
          </div>

          <div>
            <label htmlFor="investor-message" className="form-label text-sm md:text-base">
              Message *
            </label>
            <textarea
              id="investor-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="form-input resize-none text-base md:text-lg"
              placeholder="Tell us about your investment interest..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 md:px-8 py-4 bg-station-gold text-white rounded-lg hover:bg-station-gold-light transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {submitMessage && (
          <div className="mt-6 p-4 bg-accent-teal/20 border border-accent-teal rounded-lg text-accent-teal text-center">
            {submitMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mt-6 p-4 bg-station-red/20 border border-station-red rounded-lg text-station-red text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  )
}
