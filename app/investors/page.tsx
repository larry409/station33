'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import InvestorContactModal from '@/components/InvestorContactModal'
import Link from 'next/link'
import Image from 'next/image'
import { BrandName } from '@/components/BrandName'

gsap.registerPlugin(ScrollTrigger)

export default function InvestorsPage() {
  const heroRef = useRef<HTMLElement>(null)
  const [contactOpen, setContactOpen] = useState(false)

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
      metrics: '13+ miles Riverwalk access',
      accentColor: 'station-orange',
    },
    {
      title: 'Diversified Revenue Streams',
      description:
        'Four income sources create stability: residential leasing (91 units), Class-A commercial (25K+ SF), Aloft by Marriott hotel (120 rooms), and retail/F&B operations.',
      metrics: '4 revenue streams',
      accentColor: 'accent-teal',
    },
    {
      title: 'First-Mover Advantage',
      description:
        'Only true mixed-use development in Chattanooga\'s urban core. Setting premium pricing as market leader while surrounding neighborhoods rapidly gentrify.',
      metrics: 'Zero direct competition',
      accentColor: 'station-orange',
    },
    {
      title: 'Proven Development Team',
      description:
        'Experienced team with $500M+ in completed Southeast projects. Strong relationships with city officials, contractors, and major tenants including Marriott International.',
      metrics: '25+ years experience',
      accentColor: 'accent-teal',
    },
    {
      title: 'Explosive Market Growth',
      description:
        'Chattanooga home prices up 6.0% YoY (Jan 2025). Building permits +12.8%. Population growing 1.82% annually. $1.2B tech sector anchored by VW and Novonix. All indicators trending positive.',
      metrics: '6.0% price appreciation YoY',
      accentColor: 'station-orange',
    },
    {
      title: 'Future-Proof Design',
      description:
        'EV charging infrastructure, walkable urban layout, and energy-efficient systems. Sustainable, future-ready design that aligns with millennial/Gen-Z preferences driving 70% of new rentals.',
      metrics: 'Energy-efficient design',
      accentColor: 'accent-teal',
    },
  ]

  const projectStats = [
    { label: 'Total Investment', value: '$100M+', subtext: 'Multi-phase development' },
    { label: 'Commercial Space', value: '25,000+ SF', subtext: 'Class-A office' },
    { label: 'Residential Units', value: '91 Units', subtext: 'Condos & townhomes' },
    { label: 'Hotel Rooms', value: '120 Rooms', subtext: 'Aloft by Marriott' },
    { label: 'Market Growth', value: '6.0%', subtext: 'Jan 2025 YoY' },
    { label: 'Delivery', value: 'Q2 2026', subtext: 'Phased opening' },
  ]

  // Scannable market signals for the hero (replaces the dense stat paragraph)
  const heroStats = [
    { value: '$365K', label: 'Median home price' },
    { value: '+6.0%', label: 'Prices YoY' },
    { value: '800', label: 'Closings / month' },
    { value: '1.82%', label: 'Population growth' },
  ]

  // "Across the street" — the South Broad District transformation Station33 fronts
  const neighborhood = [
    {
      name: 'Erlanger Park',
      tag: 'Open now',
      blurb:
        'The new home of the Chattanooga Lookouts, built on the historic U.S. Pipe & Wheland Foundry site—with the original Powerhouse and Pattern Shop preserved as its gates.',
      stats: [
        { value: 'Apr 2026', label: 'Opened' },
        { value: '8,032', label: 'Seats' },
        { value: '$115M', label: 'Ballpark' },
      ],
    },
    {
      name: 'The Foundry District',
      tag: 'Rising now',
      blurb:
        '140 acres of former foundry land reborn as a live-work-play neighborhood of residences, Class-A office, and public space—Chattanooga’s gateway from I-24.',
      stats: [
        { value: '140 ac', label: 'Master plan' },
        { value: '$1B+', label: 'Investment' },
        { value: '$2.3B', label: 'Economic impact' },
      ],
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden"
      >
        {/* Background Video — dimmed and scrimmed so the copy stays legible */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/video/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.5] contrast-105"
            src="/video/hero-home.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-darker/85 via-bg-darker/70 to-bg-darker/92" />
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-rust/20 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center px-4">
            <div className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-station-gold/20 text-station-gold text-sm md:text-base font-semibold rounded-full mb-6 md:mb-8 border border-station-gold/30">
              Accredited Investors Only
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-text mb-6 md:mb-8 leading-[1.05] tracking-tight">
              Invest in America's
              <span className="text-station-gold block mt-2">Fastest-Growing City</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-primary-text/90 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto">
              A $100M+ mixed-use development on South Broad—directly across the street from{' '}
              <span className="text-station-gold font-semibold">Erlanger Park</span> and{' '}
              <span className="text-station-gold font-semibold">The Foundry</span>, Chattanooga’s
              $1B+ stadium-anchored district.
            </p>

            {/* Scannable market signals — far easier to read than the old number-packed sentence */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-6 md:mb-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-bg-darker/60 border border-station-gold/25 backdrop-blur-sm px-3 py-4 md:py-5"
                >
                  <div className="text-2xl md:text-3xl font-semibold text-station-gold leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-body-text mt-2 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-body-text/80 mb-8 md:mb-10">
              Anchored by VW’s $4.3B EV plant and Novonix’s $1B battery facility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 min-h-[56px]"
              >
                Contact Investor Relations
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Across the Street — The Foundry & Erlanger Park */}
      <section className="section-standard bg-bg-dark relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 px-4">
            <span className="inline-block text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.22em] mb-4">
              Across Broad Street
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
              Our front yard is a{' '}
              <span className="text-station-gold">$1B+ transformation</span>
            </h2>
            <p className="text-lg md:text-xl text-body-text leading-relaxed">
              Station33 fronts the South Broad District—the largest urban redevelopment in
              Chattanooga’s history, anchored by a new ballpark that opened in April 2026.
            </p>
          </div>

          {/* Proximity motif — two anchors, one street between them */}
          <div className="max-w-md mx-auto mb-10 md:mb-14">
            <div className="flex items-center justify-center gap-3 md:gap-5 text-sm md:text-base">
              <span className="font-semibold text-primary-text whitespace-nowrap">Station33</span>
              <span className="flex-1 flex items-center gap-2 text-station-gold">
                <span className="h-2 w-2 rounded-full bg-station-gold shrink-0" />
                <span className="flex-1 border-t-2 border-dashed border-station-gold/50" />
                <span className="h-2 w-2 rounded-full bg-station-gold shrink-0" />
              </span>
              <span className="font-semibold text-primary-text whitespace-nowrap">The District</span>
            </div>
            <p className="text-center text-xs md:text-sm text-body-text/70 uppercase tracking-[0.18em] mt-3">
              across Broad Street
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {neighborhood.map((place) => (
              <div
                key={place.name}
                className="bg-card-bg border-2 border-station-gold/30 rounded-2xl p-6 md:p-8 hover:border-station-gold transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-primary-text">{place.name}</h3>
                  <span className="shrink-0 mt-1 px-3 py-1 rounded-full bg-station-gold/15 border border-station-gold/30 text-station-gold text-xs font-semibold uppercase tracking-wider">
                    {place.tag}
                  </span>
                </div>
                <p className="text-body-text leading-relaxed mb-6">{place.blurb}</p>
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-divider-gray">
                  {place.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl md:text-2xl font-semibold text-station-gold leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-body-text/80 mt-1.5 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-base md:text-lg text-body-text max-w-3xl mx-auto mt-10 md:mt-12 leading-relaxed">
            A stadium district on the doorstep means built-in foot traffic, rising land values, and a
            year-round destination that fills Station33’s retail, restaurants, and residences.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Project Overview
            </h2>
            <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto">
              A comprehensive mixed-use development designed for long-term value creation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Image - takes 3 columns */}
            <div className="lg:col-span-3 relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rendering-clock-tower.jpg"
                alt="Station33 clock tower viewed from the hotel courtyard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-bg-darker/20 to-transparent" />
            </div>

            {/* Data Table - takes 2 columns */}
            <div className="lg:col-span-2 bg-card-bg border-2 border-station-gold/30 rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-primary-text mb-6 pb-4 border-b-2 border-station-gold/30">
                Key Metrics
              </h3>

              <div className="space-y-4 md:space-y-5">
                {projectStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-divider-gray last:border-0"
                  >
                    <div>
                      <div className="text-sm md:text-base text-body-text">{stat.label}</div>
                      <div className="text-xs md:text-sm text-body-text/70 mt-1">{stat.subtext}</div>
                    </div>
                    <div className="text-xl md:text-2xl font-semibold text-station-gold">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 pt-6 border-t-2 border-station-gold/30">
                <Link
                  href="#opportunities"
                  className="block w-full text-center px-6 py-4 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-colors font-semibold text-base md:text-lg min-h-[56px] flex items-center justify-center"
                >
                  View Investment Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Site Plan */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-10 md:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Master Site Plan
            </h2>
            <p className="text-lg md:text-xl text-body-text max-w-2xl mx-auto">
              A walkable, mixed-use layout integrating residential, commercial, hotel, and retail across the full South Broad block
            </p>
          </div>

          <div className="relative aspect-[3/2] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-bg-darker">
            <Image
              src="/images/rendering-site-plan.jpg"
              alt="Station33 master site plan, aerial top-down view at dusk"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="opportunities" className="opportunity-section section-standard bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Why Invest in <BrandName />?
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
                className={`opportunity-card bg-card-bg border-2 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                  opportunity.accentColor === 'station-orange'
                    ? 'border-station-gold/30 hover:border-station-gold'
                    : 'border-accent-teal/30 hover:border-accent-teal'
                }`}
              >
                <h3 className="text-2xl font-semibold text-primary-text mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-body-text leading-relaxed mb-4">{opportunity.description}</p>
                <div className={`inline-block px-4 py-2 text-sm font-semibold rounded-lg ${
                  opportunity.accentColor === 'station-orange'
                    ? 'bg-station-gold/20 text-station-gold'
                    : 'bg-accent-teal/20 text-accent-teal'
                }`}>
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
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/rendering-aerial.jpg"
                alt="Aerial rendering of Station33 development at dusk with clock tower and plaza"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-darker/95 to-transparent p-8">
                <p className="text-sm text-body-text italic">
                  <BrandName /> at dusk - A walkable mixed-use destination at the convergence of commerce, culture, and community
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-6">
                Exceptional Market Fundamentals
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                Chattanooga's economy is experiencing unprecedented growth across all key metrics,
                creating ideal conditions for mixed-use development investment.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-card-bg rounded-xl border-l-4 border-station-gold">
                  <div>
                    <h4 className="text-xl font-semibold text-primary-text mb-2">Real Estate Surge</h4>
                    <p className="text-body-text mb-3">
                      Median home prices reached $365K in Jan 2025 (+6.0% YoY). 800 monthly closings
                      indicate robust demand. Building permits up 12.8% while inventory surges +34.5%,
                      signaling strong development confidence.
                    </p>
                    <div className="text-sm text-station-gold font-semibold">
                      Source: Redfin & Norada Real Estate (Jan 2025)
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card-bg rounded-xl border-l-4 border-accent-teal">
                  <div>
                    <h4 className="text-xl font-semibold text-primary-text mb-2">Population Growth</h4>
                    <p className="text-body-text mb-3">
                      Metro population 437K growing 0.92% annually. City proper growing 1.82% annually
                      (3x national average). Young professionals and remote workers relocating for quality
                      of life and career opportunities.
                    </p>
                    <div className="text-sm text-accent-teal font-semibold">
                      Source: MacroTrends & US Census Bureau (2025)
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card-bg rounded-xl border-l-4 border-station-gold">
                  <div>
                    <h4 className="text-xl font-semibold text-primary-text mb-2">
                      Major Industrial Investment
                    </h4>
                    <p className="text-body-text mb-3">
                      VW's $4.3B EV facility and Novonix's $1B battery plant anchor $1.2B tech sector.
                      Tourism revenue $1.8B with 11M+ annual visitors. Unemployment at 3.3%—among lowest
                      in Southeast.
                    </p>
                    <div className="text-sm text-station-gold font-semibold">
                      Source: BLS, Visit Chattanooga & Economic Partnership (2025)
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
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-orange/20 to-accent-rust/20 border-2 border-station-gold rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-6 leading-tight">
              Receive detailed financial projections, site plans, market analysis, and partnership structure.
            </h2>

            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Chattanooga's premier mixed-use development won't wait.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card-bg rounded-xl p-6 border-2 border-station-gold/30 hover:border-station-gold transition-colors">
                <div className="text-lg font-semibold text-station-gold mb-2">Pro Forma</div>
                <div className="text-sm text-body-text">Detailed financial projections</div>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border-2 border-station-gold/30 hover:border-station-gold transition-colors">
                <div className="text-lg font-semibold text-station-gold mb-2">Site Plans</div>
                <div className="text-sm text-body-text">Architectural renderings</div>
              </div>
              <div className="bg-card-bg rounded-xl p-6 border-2 border-station-gold/30 hover:border-station-gold transition-colors">
                <div className="text-lg font-semibold text-station-gold mb-2">Partnership</div>
                <div className="text-sm text-body-text">Investment structure</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
              <button
                type="button"
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px]"
              >
                Request Investment Package
                <span className="text-2xl">→</span>
              </button>
              <a
                href="mailto:info@station33.co"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
              >
                Email Us
                <span className="text-2xl">→</span>
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

      <InvestorContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <Footer />
    </>
  )
}
