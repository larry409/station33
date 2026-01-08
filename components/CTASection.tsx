'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in background
      gsap.from('.cta-background', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power2.out',
      })

      // Animate content
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: '.cta-content',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Animate buttons
      gsap.from('.cta-button', {
        scrollTrigger: {
          trigger: '.cta-buttons',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark">
      <div className="container">
        <div
          className="cta-background relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-dark/90 to-bg-darker/95" />

          {/* Accent Lines */}
          <div className="absolute top-0 left-0 w-1 h-32 bg-accent-teal" />
          <div className="absolute bottom-0 right-0 w-1 h-32 bg-accent-rust" />

          {/* Content */}
          <div className="cta-content relative z-10 text-center py-32 px-8 md:px-16">
            {/* Badge */}
            <div className="inline-block px-5 py-2 bg-accent-teal/10 text-accent-teal text-sm font-semibold rounded-full mb-8">
              Now Leasing & Taking Reservations
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-8 leading-tight">
              Be Part of Station33
            </h2>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-body-text max-w-3xl mx-auto mb-12 leading-relaxed">
              Join a vibrant community where living, working, and gathering come together
              in the heart of Chattanooga's South Broad district
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="cta-button btn-primary text-lg px-10 py-5">
                Schedule a Tour
              </Link>
              <Link href="/spaces" className="cta-button btn-secondary text-lg px-10 py-5">
                Explore Spaces
              </Link>
              <Link href="/investors" className="cta-button btn-rust text-lg px-10 py-5">
                Investor Information
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-16 pt-12 border-t border-divider-gray">
              <p className="text-body-text mb-4">
                Questions? Contact our leasing team
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-text">
                <a
                  href="tel:+14235551234"
                  className="hover:text-accent-teal transition-colors flex items-center gap-2"
                >
                  <span className="text-accent-teal">📞</span> (423) 555-1234
                </a>
                <span className="hidden sm:block text-divider-gray">|</span>
                <a
                  href="mailto:leasing@station33.com"
                  className="hover:text-accent-teal transition-colors flex items-center gap-2"
                >
                  <span className="text-accent-teal">✉</span> leasing@station33.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
