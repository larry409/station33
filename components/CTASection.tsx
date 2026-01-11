'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const investorCardRef = useRef<HTMLDivElement>(null)
  const communityCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards with stagger on scroll
      gsap.from('.cta-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Subtle floating animation for investor card
      gsap.to(investorCardRef.current, {
        y: -8,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Subtle floating animation for community card (offset timing)
      gsap.to(communityCardRef.current, {
        y: -8,
        duration: 2.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.25, // Offset by half the duration for alternating effect
      })

      // Gradient shift animation on hover for investor card
      const investorGradient = investorCardRef.current?.querySelector('.gradient-overlay')
      if (investorGradient) {
        investorCardRef.current?.addEventListener('mouseenter', () => {
          gsap.to(investorGradient, {
            opacity: 0.85,
            duration: 0.6,
            ease: 'power2.out',
          })
        })
        investorCardRef.current?.addEventListener('mouseleave', () => {
          gsap.to(investorGradient, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          })
        })
      }

      // Gradient shift animation on hover for community card
      const communityGradient = communityCardRef.current?.querySelector('.gradient-overlay')
      if (communityGradient) {
        communityCardRef.current?.addEventListener('mouseenter', () => {
          gsap.to(communityGradient, {
            opacity: 0.85,
            duration: 0.6,
            ease: 'power2.out',
          })
        })
        communityCardRef.current?.addEventListener('mouseleave', () => {
          gsap.to(communityGradient, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark">
      <div className="container">
        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Investor Card */}
          <div
            ref={investorCardRef}
            className="cta-card relative rounded-3xl overflow-hidden p-12 md:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-rust/20"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200)',
              }}
            />
            {/* Gradient Overlay */}
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-br from-accent-rust/95 via-accent-rust/90 to-bg-darker/95 transition-opacity duration-600" />

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary-text transition-all duration-500 hover:h-40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg mb-6 w-fit backdrop-blur-sm">
                Investment Opportunity
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Invest in Station33
              </h3>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join a transformative $100M+ mixed-use development in the heart of Chattanooga's fastest-growing district. Prime South Broad location with exceptional ROI potential.
              </p>

              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Prime South Broad location</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Mixed-use development model</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Strong market fundamentals</span>
                </li>
              </ul>

              <Link
                href="/investors"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-accent-rust rounded-lg hover:bg-white/90 hover:gap-4 transition-all duration-300 font-bold text-lg group"
              >
                View Investment Details
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Community Card */}
          <div
            ref={communityCardRef}
            className="cta-card relative rounded-3xl overflow-hidden p-12 md:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-teal/20"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200)',
              }}
            />
            {/* Gradient Overlay */}
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-br from-accent-teal/95 via-accent-teal/90 to-bg-darker/95 transition-opacity duration-600" />

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary-text transition-all duration-500 hover:h-40" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg mb-6 w-fit backdrop-blur-sm">
                Now Leasing
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Join the Community
              </h3>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience luxury urban living and premium commercial spaces in Chattanooga's most vibrant neighborhood. Residential units and retail spaces now available.
              </p>

              <ul className="space-y-3 mb-10 flex-grow">
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Modern apartments & lofts</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Premium retail & office space</span>
                </li>
                <li className="flex items-start gap-3 text-white/90">
                  <span className="text-white text-xl mt-1">✓</span>
                  <span>Vibrant community events</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-accent-teal rounded-lg hover:bg-white/90 hover:gap-4 transition-all duration-300 font-bold text-lg group"
              >
                Schedule a Tour
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Below Cards */}
        <div className="mt-16 pt-12 border-t border-divider-gray text-center">
          <p className="text-body-text mb-6">
            Questions? Contact our team
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
    </section>
  )
}
