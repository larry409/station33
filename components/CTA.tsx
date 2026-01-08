'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

export default function CTA() {
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.cta-card', {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
      })
    }, ctaRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ctaRef}
      className="py-32 md:py-40 bg-gradient-to-b from-bg-darker via-station-red/10 to-bg-darker"
    >
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Be Part of Something Extraordinary
        </h2>
        <p className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-16">
          Station33 is more than a development—it's where Chattanooga's future takes shape.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Investor Card */}
          <div className="cta-card bg-card-bg p-10 md:p-12 rounded-2xl border-2 border-station-red hover:border-station-orange transition-all hover:shadow-2xl">
            <div className="mb-6">
              <span className="inline-block bg-station-red text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
                For Investors
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Position
            </h3>

            <p className="text-text-light text-lg leading-relaxed mb-8">
              Secure your position in a $100M+ transformative development. Limited investment
              opportunities available in one of America's fastest-growing cities.
            </p>

            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Multiple revenue streams</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Proven development team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Strong municipal partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">18-month first phase completion</span>
              </li>
            </ul>

            <Link href="/investors" className="btn-primary w-full text-center block">
              View Investment Opportunities
            </Link>
          </div>

          {/* Community Card */}
          <div className="cta-card bg-card-bg p-10 md:p-12 rounded-2xl border-2 border-station-orange hover:border-station-red transition-all hover:shadow-2xl">
            <div className="mb-6">
              <span className="inline-block bg-station-orange text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider">
                For Community
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Movement
            </h3>

            <p className="text-text-light text-lg leading-relaxed mb-8">
              Be the first to know about residential leasing, retail opportunities, and community
              events at Chattanooga's premier urban destination.
            </p>

            <ul className="space-y-3 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Pre-leasing notifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Construction progress updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Event calendar access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-station-orange text-xl">✓</span>
                <span className="text-text-light">Exclusive community perks</span>
              </li>
            </ul>

            <Link href="/community" className="btn-secondary w-full text-center block">
              Join Our Community
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
