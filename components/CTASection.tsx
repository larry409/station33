'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Image from 'next/image'
import InvestorContactModal from './InvestorContactModal'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state - cards start visible but will animate
      gsap.set('.cta-card', {
        opacity: 1,
        y: 0,
      })

      // Animate cards with stagger on scroll (keep this - it's performant)
      gsap.from('.cta-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark">
      <div className="container">
        {/* Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Investor Card */}
          <div
            className="cta-card group relative rounded-3xl overflow-hidden p-8 sm:p-10 md:p-12 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-station-gold/30 min-h-[420px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          >
            {/* Background Image - Optimized with Next.js Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
                alt="Investment opportunity"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
                quality={85}
              />
            </div>

            {/* Gradient Overlay - Now with CSS hover for vibrant color shift */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-rust/95 via-accent-rust/90 to-bg-darker/95 transition-all duration-500 group-hover:from-station-gold/98 group-hover:via-station-gold/95 group-hover:to-bg-darker/90" />

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary-text transition-all duration-500 group-hover:h-40 group-hover:bg-white" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-lg mb-4 md:mb-6 w-fit backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                Investment Opportunity
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                Invest in Station33
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-colors duration-300 group-hover:text-white">
                Join a transformative $100M+ mixed-use development in the heart of Chattanooga's fastest-growing district. Prime South Broad location with exceptional ROI potential.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Prime South Broad location</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Mixed-use development model</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Strong market fundamentals</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-white text-accent-rust rounded-lg hover:bg-white hover:gap-4 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
              >
                Contact Investor Relations
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Community Card */}
          <div
            className="cta-card group relative rounded-3xl overflow-hidden p-8 sm:p-10 md:p-12 lg:p-16 transition-all duration-500 hover:shadow-2xl hover:shadow-station-gold/30 min-h-[420px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          >
            {/* Background Image - Optimized with Next.js Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200"
                alt="Community spaces"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
                quality={85}
              />
            </div>

            {/* Gradient Overlay - Now with CSS hover for vibrant color shift */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/95 via-accent-teal/90 to-bg-darker/95 transition-all duration-500 group-hover:from-station-gold/98 group-hover:via-station-gold/95 group-hover:to-bg-darker/90" />

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-primary-text transition-all duration-500 group-hover:h-40 group-hover:bg-white" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-block px-4 py-2 bg-white/10 text-white text-xs sm:text-sm font-semibold rounded-lg mb-4 md:mb-6 w-fit backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20">
                Now Leasing
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
                Join the Community
              </h3>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed transition-colors duration-300 group-hover:text-white">
                Experience elevated urban living and modern commercial spaces in Chattanooga's most vibrant neighborhood. Residential units and retail spaces now available.
              </p>

              <ul className="space-y-2 md:space-y-3 mb-8 md:mb-10 flex-grow">
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Modern condos & lofts</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Premium retail & office space</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base text-white/90 transition-colors duration-300 group-hover:text-white">
                  <span className="text-white text-lg sm:text-xl mt-0.5 sm:mt-1">✓</span>
                  <span>Vibrant community events</span>
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-white text-accent-teal rounded-lg hover:bg-white hover:gap-4 hover:shadow-lg hover:shadow-white/30 transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
              >
                Schedule a Tour
                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info Below Cards */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-divider-gray text-center px-4">
          <p className="text-base md:text-lg text-body-text mb-4 md:mb-6">
            Questions? Contact our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-primary-text">
            <a
              href="mailto:info@station33.co"
              className="hover:text-accent-teal transition-colors flex items-center gap-2 text-base md:text-lg min-h-[44px]"
            >
              <span className="text-accent-teal">✉</span> info@station33.co
            </a>
          </div>
        </div>
      </div>

      <InvestorContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  )
}
