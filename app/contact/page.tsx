'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('.contact-info-card', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.6,
      })

      gsap.from('.contact-form', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.8,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Log form data to console for Phase 1
    console.log('Contact Form Submission:', formData)

    // Simulate submission delay
    setTimeout(() => {
      setSubmitMessage('Thank you for contacting us! We will get back to you within 24 hours.')
      setIsSubmitting(false)

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    }, 1000)
  }

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-[50vh] flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden bg-bg-darker"
      >
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-body-text leading-relaxed">
              Ready to be part of something transformative? Contact our team to learn more about
              leasing, investment opportunities, or partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* General Inquiries */}
            <div className="contact-info-card bg-card-bg border-2 border-accent-teal/30 rounded-2xl p-6 md:p-8 text-center hover:border-accent-teal transition-all duration-300">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl text-accent-teal">📧</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3">General Inquiries</h3>
              <p className="text-sm md:text-base text-body-text mb-4">For general questions and information</p>
              <a
                href="mailto:leasing@station33.com"
                className="text-accent-teal hover:text-accent-teal/80 transition-colors font-semibold text-base md:text-lg inline-block min-h-[44px] flex items-center justify-center"
              >
                leasing@station33.com
              </a>
            </div>

            {/* Phone */}
            <div className="contact-info-card bg-card-bg border-2 border-station-orange/30 rounded-2xl p-6 md:p-8 text-center hover:border-station-orange transition-all duration-300">
              <div className="w-16 h-16 bg-station-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl text-station-orange">📞</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3">Call Us</h3>
              <p className="text-sm md:text-base text-body-text mb-4">Monday - Friday, 9am - 5pm EST</p>
              <a
                href="tel:+14235550133"
                className="text-station-orange hover:text-station-red transition-colors font-semibold text-lg md:text-xl inline-block min-h-[44px] flex items-center justify-center"
              >
                (423) 555-0133
              </a>
            </div>

            {/* Investors */}
            <div className="contact-info-card bg-card-bg border-2 border-accent-teal/30 rounded-2xl p-6 md:p-8 text-center hover:border-accent-teal transition-all duration-300">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-3xl text-accent-teal">💼</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary-text mb-3">Investor Relations</h3>
              <p className="text-sm md:text-base text-body-text mb-4">For investment opportunities</p>
              <a
                href="mailto:investors@station33.com"
                className="text-accent-teal hover:text-accent-teal/80 transition-colors font-semibold text-base md:text-lg inline-block min-h-[44px] flex items-center justify-center"
              >
                investors@station33.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="contact-form bg-card-bg border-2 border-station-orange/30 rounded-2xl p-6 md:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-3 text-center">
                Send Us a Message
              </h2>
              <p className="text-base md:text-lg text-body-text text-center mb-6 md:mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="form-label text-sm md:text-base">
                    Name *
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

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label text-sm md:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input text-base md:text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
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
                    placeholder="(423) 555-0133"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="form-label text-sm md:text-base">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-input resize-none text-base md:text-lg"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 md:px-8 py-4 md:py-5 bg-station-orange text-white rounded-lg hover:bg-station-red transition-all duration-300 font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[56px]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              {/* Success Message */}
              {submitMessage && (
                <div className="mt-6 p-4 bg-accent-teal/20 border border-accent-teal rounded-lg text-accent-teal text-center">
                  {submitMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-text mb-4 md:mb-6">
              Visit Us
            </h2>
            <p className="text-lg md:text-xl text-body-text mb-6 md:mb-8 px-4">
              Station33 is located in the heart of Chattanooga's vibrant South Broad district,
              where innovation meets community.
            </p>
            <div className="bg-card-bg border-2 border-station-orange/30 rounded-2xl p-6 md:p-8">
              <p className="text-xl md:text-2xl text-primary-text font-semibold mb-2">Station33</p>
              <p className="text-body-text text-base md:text-lg mb-6">
                South Broad Street
                <br />
                Chattanooga, TN 37408
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+14235550133"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-station-orange text-white rounded-lg hover:bg-station-red transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
                >
                  Call Now
                  <span className="text-xl">→</span>
                </a>
                <a
                  href="mailto:leasing@station33.com"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
                >
                  Email Us
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
