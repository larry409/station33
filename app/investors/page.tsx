'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function InvestorsPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('.opportunity-card', {
        scrollTrigger: {
          trigger: '.opportunity-section',
          start: 'top 75%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      })

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.4)',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const opportunities = [
    {
      title: 'Prime Location',
      description:
        'Strategic position on South Broad Street, Chattanooga\'s fastest-growing corridor with direct Riverwalk access and downtown proximity.',
      icon: '📍',
    },
    {
      title: 'Diversified Revenue',
      description:
        'Multiple income streams from residential leasing, commercial tenants, hospitality operations, and retail spaces create stability.',
      icon: '💼',
    },
    {
      title: 'Market Leadership',
      description:
        'First true urban mixed-use development in Chattanooga, setting the standard for future developments in the region.',
      icon: '🏆',
    },
    {
      title: 'Proven Team',
      description:
        'Experienced development team with successful track record of large-scale mixed-use projects across the Southeast.',
      icon: '👥',
    },
    {
      title: 'Strong Fundamentals',
      description:
        'Chattanooga\'s growing economy, low unemployment, and increasing population create favorable investment conditions.',
      icon: '📈',
    },
    {
      title: 'Sustainable Design',
      description:
        'Energy-efficient systems, EV charging infrastructure, and walkable urban design align with future market demands.',
      icon: '🌱',
    },
  ]

  const projectStats = [
    { label: 'Total Investment', value: '$100M+', icon: '💰' },
    { label: 'Commercial Space', value: '25,000+ SF', icon: '🏢' },
    { label: 'Residential Units', value: '47 Units', icon: '🏠' },
    { label: 'Hotel Rooms', value: '63 Rooms', icon: '🏨' },
    { label: 'Target ROI', value: 'Competitive', icon: '📊' },
    { label: 'Timeline', value: '2026-2027', icon: '⏱️' },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000"
            alt="Investment Opportunity"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-dark/90 to-accent-rust/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-station-orange/20 text-station-orange text-sm font-semibold rounded-full mb-8 border border-station-orange/30">
              Accredited Investors Only
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-8 leading-tight">
              Invest in Chattanooga's
              <span className="text-station-orange block mt-2">Urban Future</span>
            </h1>

            <p className="text-xl md:text-2xl text-body-text mb-12 leading-relaxed max-w-3xl mx-auto">
              Join a transformative $100M+ mixed-use development that's redefining urban living on
              South Broad. Exceptional location, diversified revenue streams, and proven market
              demand.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#opportunities"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-station-orange text-white rounded-lg hover:bg-station-red transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                View Investment Details
                <span className="text-2xl">→</span>
              </Link>
              <a
                href="mailto:investors@station33.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-bold text-lg"
              >
                Contact Investor Relations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              Project Overview
            </h2>
            <p className="text-xl text-body-text max-w-2xl mx-auto">
              A comprehensive mixed-use development designed for long-term value creation
            </p>
          </div>

          <div className="stats-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {projectStats.map((stat, index) => (
              <div
                key={index}
                className="stat-item bg-card-bg border border-divider-gray rounded-2xl p-6 text-center hover:border-station-orange hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-station-orange mb-2">{stat.value}</div>
                <div className="text-sm text-body-text font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="opportunities" className="opportunity-section section-standard bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              Why Invest in Station33?
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              A unique opportunity to participate in Chattanooga's most ambitious urban development
              project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="opportunity-card bg-card-bg border border-divider-gray rounded-2xl p-8 hover:border-accent-teal hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-station-orange to-station-red rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-lg">
                  {opportunity.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-text mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-body-text leading-relaxed">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                alt="Chattanooga Skyline"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
                Strong Market Fundamentals
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                Chattanooga's economy continues to outpace national averages, creating ideal
                conditions for mixed-use development.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border border-divider-gray">
                  <div className="text-3xl">📈</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">Growing Economy</h4>
                    <p className="text-body-text">
                      Diverse economy with tech, healthcare, and manufacturing driving consistent
                      growth
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border border-divider-gray">
                  <div className="text-3xl">👥</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">
                      Increasing Population
                    </h4>
                    <p className="text-body-text">
                      Young professionals and families relocating to Chattanooga for quality of
                      life
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border border-divider-gray">
                  <div className="text-3xl">🏙️</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">
                      Urban Development
                    </h4>
                    <p className="text-body-text">
                      South Broad corridor experiencing rapid transformation and investment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-orange/10 to-accent-rust/10 border border-station-orange/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Contact our investor relations team to receive detailed financial projections,
              development timeline, and partnership opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:investors@station33.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-station-orange text-white rounded-lg hover:bg-station-red transition-all duration-300 font-bold text-lg shadow-xl"
              >
                investors@station33.com
                <span className="text-2xl">✉</span>
              </a>
              <a
                href="tel:+14235550133"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-bold text-lg"
              >
                (423) 555-0133
                <span className="text-2xl">📞</span>
              </a>
            </div>

            <p className="text-sm text-body-text">
              Investment opportunities are limited to accredited investors only. Securities offered
              in accordance with SEC regulations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
