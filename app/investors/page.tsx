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
      title: 'Prime South Broad Location',
      description:
        'Strategic position on Chattanooga\'s fastest-growing corridor. Direct Riverwalk access serves 11M annual tourists. Surrounded by $1B+ in concurrent development projects.',
      icon: '📍',
      metrics: '13+ miles Riverwalk access',
    },
    {
      title: 'Diversified Revenue Streams',
      description:
        'Four income sources create stability: residential leasing (47 units), Grade-A commercial (25K+ SF), boutique hotel (63 rooms, Marriott partnership), and retail/F&B operations.',
      icon: '💼',
      metrics: '4 revenue streams',
    },
    {
      title: 'First-Mover Advantage',
      description:
        'Only true mixed-use development in Chattanooga\'s urban core. Setting premium pricing as market leader while surrounding neighborhoods rapidly gentrify.',
      icon: '🏆',
      metrics: 'Zero direct competition',
    },
    {
      title: 'Proven Development Team',
      description:
        'Experienced team with $500M+ in completed Southeast projects. Strong relationships with city officials, contractors, and major tenants including Marriott International.',
      icon: '👥',
      metrics: '25+ years experience',
    },
    {
      title: 'Explosive Market Growth',
      description:
        'Chattanooga home prices up 9.5% YoY. Building permits +12.8% in 2024. Population growing 1.82% annually. Tech sector expanding 18%. All indicators trending positive.',
      icon: '📈',
      metrics: '9.5% price appreciation YoY',
    },
    {
      title: 'Future-Proof Design',
      description:
        'EV charging infrastructure, walkable urban layout, energy-efficient systems. Targeting LEED certification. Aligns with millennial/Gen-Z preferences driving 70% of new rentals.',
      icon: '🌱',
      metrics: 'LEED certification target',
    },
  ]

  const projectStats = [
    { label: 'Total Investment', value: '$100M+', icon: '💰', subtext: 'Multi-phase development' },
    { label: 'Commercial Space', value: '25,000+ SF', icon: '🏢', subtext: 'Grade-A office' },
    { label: 'Residential Units', value: '47 Units', icon: '🏠', subtext: 'Luxury apartments' },
    { label: 'Hotel Rooms', value: '63 Rooms', icon: '🏨', subtext: 'Marriott partnership' },
    { label: 'Market Growth', value: '9.5%', icon: '📊', subtext: 'Home price YoY' },
    { label: 'Delivery', value: 'Q2 2026', icon: '⏱️', subtext: 'Phased opening' },
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
            src="https://images.unsplash.com/photo-1600298882525-4db16bce04a2?q=80&w=2000"
            alt="Chattanooga Skyline Investment Opportunity"
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
              Invest in America's
              <span className="text-station-orange block mt-2">Fastest-Growing City</span>
            </h1>

            <p className="text-xl md:text-2xl text-body-text mb-12 leading-relaxed max-w-3xl mx-auto">
              Join a transformative $100M+ mixed-use development in Chattanooga—where 1.82% annual
              population growth, $1.8B tourism revenue, and historic 2.5% unemployment create
              exceptional investment fundamentals.
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
                <div className="text-sm text-primary-text font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-body-text">{stat.subtext}</div>
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
                <p className="text-body-text leading-relaxed mb-4">{opportunity.description}</p>
                <div className="inline-block px-4 py-2 bg-accent-teal/20 text-accent-teal text-sm font-semibold rounded-lg">
                  {opportunity.metrics}
                </div>
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
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000"
                alt="Chattanooga Walnut Street Bridge"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-darker/95 to-transparent p-8">
                <p className="text-sm text-body-text italic">
                  Iconic Walnut Street Bridge - 13+ miles of connected Riverwalk infrastructure
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
                Exceptional Market Fundamentals
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                Chattanooga's economy is experiencing unprecedented growth across all key metrics,
                creating ideal conditions for mixed-use development investment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border-l-4 border-station-orange">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">Real Estate Boom</h4>
                    <p className="text-body-text mb-3">
                      Median home prices reached $345K in Dec 2024 (+9.5% YoY). 10,300+ closings
                      annually. Building permits up 12.8% as demand outpaces supply.
                    </p>
                    <div className="text-sm text-station-orange font-semibold">
                      Source: Norada Real Estate Market Analysis 2024
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border-l-4 border-accent-teal">
                  <div className="text-3xl">👥</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">Population Influx</h4>
                    <p className="text-body-text mb-3">
                      Metro population 588K and growing 1.82% annually (3x national average). Young
                      professionals relocating for quality of life and career opportunities.
                    </p>
                    <div className="text-sm text-accent-teal font-semibold">
                      Source: MacroTrends & US Census Bureau 2024
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card-bg rounded-xl border-l-4 border-station-orange">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-2">
                      Economic Diversification
                    </h4>
                    <p className="text-body-text mb-3">
                      Tech sector growing 18%. $1B+ in new corporate investments (Novonix, Westar).
                      Tourism revenue $1.8B (+4.23% YoY). Unemployment at historic 2.5%.
                    </p>
                    <div className="text-sm text-station-orange font-semibold">
                      Source: BLS & Greater Chattanooga Economic Partnership
                    </div>
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
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-orange/20 to-accent-rust/20 border-2 border-station-orange rounded-3xl p-12 md:p-16">
            <div className="inline-block px-6 py-3 bg-station-red text-white text-sm font-bold rounded-full mb-6">
              Limited Offering - Accredited Investors Only
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
              Investment Opportunity Closes Q1 2026
            </h2>

            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Receive detailed financial projections, site plans, market analysis, and partnership
              structure. Chattanooga's premier mixed-use development won't wait.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card-bg rounded-xl p-6 border border-divider-gray">
                <div className="text-3xl mb-3">📊</div>
                <div className="text-sm text-body-text">Detailed Pro Forma</div>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-divider-gray">
                <div className="text-3xl mb-3">🏗️</div>
                <div className="text-sm text-body-text">Site Plans & Renderings</div>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border border-divider-gray">
                <div className="text-3xl mb-3">🤝</div>
                <div className="text-sm text-body-text">Partnership Terms</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:investors@station33.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-station-red text-white rounded-lg hover:bg-station-orange transition-all duration-300 font-bold text-lg shadow-xl"
              >
                Request Investment Package
                <span className="text-2xl">→</span>
              </a>
              <a
                href="tel:+14235550133"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-bold text-lg"
              >
                Schedule Call
                <span className="text-2xl">📞</span>
              </a>
            </div>

            <p className="text-xs text-body-text leading-relaxed">
              This offering is intended for accredited investors only as defined by SEC Rule 501 of
              Regulation D. Securities offered in accordance with federal and state regulations.
              Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
