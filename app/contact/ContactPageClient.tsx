'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName } from '@/components/BrandName'

export default function ContactPage() {
  const rootRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-intro', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      })
      gsap.from('.contact-form-panel', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.3,
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

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

      setSubmitMessage('Thanks for reaching out — we’ll get back to you within one business day.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setErrorMessage('Something went wrong sending your message. Please email info@station33.co or try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />

      <main ref={rootRef} className="bg-bg-darker">
        <section className="container pt-28 md:pt-36 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            {/* Left — intro + details */}
            <div className="contact-intro lg:sticky lg:top-32">
              <span className="inline-block text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.24em] mb-5">
                Contact
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-text leading-[1.05] tracking-tight mb-6">
                Let’s talk
              </h1>
              <p className="text-lg md:text-xl text-body-text leading-relaxed max-w-md mb-10 md:mb-12">
                Leasing, investment, or partnership — tell us what you have in mind and the{' '}
                <BrandName /> team will be in touch.
              </p>

              <dl className="divide-y divide-white/10 border-t border-white/10">
                <div className="py-6">
                  <dt className="text-xs uppercase tracking-[0.22em] text-station-gold font-semibold mb-2">
                    Email
                  </dt>
                  <dd>
                    <a
                      href="mailto:info@station33.co"
                      className="text-xl md:text-2xl text-primary-text hover:text-station-gold transition-colors"
                    >
                      info@station33.co
                    </a>
                  </dd>
                </div>
                <div className="py-6">
                  <dt className="text-xs uppercase tracking-[0.22em] text-station-gold font-semibold mb-2">
                    Visit
                  </dt>
                  <dd className="text-xl md:text-2xl text-primary-text leading-snug">
                    3210 Broad Street
                    <span className="block text-base md:text-lg text-body-text mt-1">
                      South Broad District · Chattanooga, TN 37408
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="relative mt-10 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
                <Image
                  src="/images/aerial-station33.jpg"
                  alt="Aerial view of Station33 on South Broad at dusk"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/70 to-transparent" />
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-panel">
              <div className="rounded-3xl bg-card-bg/60 border border-white/10 p-6 md:p-10 lg:p-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-primary-text mb-2">Send a message</h2>
                <p className="text-base md:text-lg text-body-text mb-8">
                  Fields marked <span className="text-station-gold">*</span> are required.
                </p>

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field — hidden from users, catches bots */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label text-sm md:text-base">
                        Name <span className="text-station-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input text-base md:text-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label text-sm md:text-base">
                        Email <span className="text-station-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input text-base md:text-lg"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label text-sm md:text-base">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input text-base md:text-lg"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label text-sm md:text-base">
                      Message <span className="text-station-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input resize-none text-base md:text-lg"
                      placeholder="Tell us about your inquiry…"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[56px]"
                  >
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </button>

                  {submitMessage && (
                    <div
                      className="p-4 bg-accent-teal/15 border border-accent-teal/60 rounded-2xl text-accent-teal text-center"
                      role="status"
                      aria-live="polite"
                    >
                      {submitMessage}
                    </div>
                  )}
                  {errorMessage && (
                    <div
                      className="p-4 bg-station-red/15 border border-station-red/60 rounded-2xl text-station-red text-center"
                      role="alert"
                    >
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
