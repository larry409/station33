'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function CommunityPage() {
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

      gsap.from('.lifestyle-card', {
        scrollTrigger: {
          trigger: '.lifestyle-section',
          start: 'top 75%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      })

      gsap.from('.amenity-item', {
        scrollTrigger: {
          trigger: '.amenities-grid',
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.2)',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const lifestyleFeatures = [
    {
      title: 'Live',
      description:
        '47 luxury residences and townhomes with modern finishes, Riverwalk views, and pet-friendly amenities. Your urban sanctuary awaits.',
      image: 'https://images.unsplash.com/photo-1502672260066-6bc19a9ee3a0?q=80&w=1200',
      icon: '🏠',
    },
    {
      title: 'Work',
      description:
        '25,000+ SF of Grade-A commercial space designed for innovation. Take the elevator from your residence to your office.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
      icon: '💼',
    },
    {
      title: 'Dine',
      description:
        'Curated food hall featuring local chefs and diverse cuisine. From morning coffee to fine dining, all steps from your door.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
      icon: '🍽️',
    },
    {
      title: 'Play',
      description:
        'Rooftop pool, European-style plaza, fitness center, and year-round events. Every day offers something new to discover.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200',
      icon: '🎪',
    },
  ]

  const amenities = [
    { icon: '🏊', title: 'Rooftop Pool', description: 'Resort-style pool with city views' },
    { icon: '🏋️', title: 'Fitness Center', description: '24/7 state-of-the-art equipment' },
    { icon: '🐕', title: 'Pet-Friendly', description: 'Dog park and pet wash station' },
    { icon: '🅿️', title: 'Covered Parking', description: 'Secure parking with EV charging' },
    { icon: '🎪', title: 'Event Plaza', description: 'Host private events for 500+' },
    { icon: '🌊', title: 'Riverwalk Access', description: 'Direct access to 13+ miles' },
    { icon: '🏨', title: 'Boutique Hotel', description: '63-room hotel with amenities' },
    { icon: '🍹', title: 'Rooftop Bar', description: 'Craft cocktails and sunset views' },
    { icon: '🚴', title: 'Bike Storage', description: 'Secure indoor bike parking' },
    { icon: '📦', title: 'Package Lockers', description: '24/7 secure package delivery' },
    { icon: '🌿', title: 'Green Spaces', description: 'Landscaped courtyards and gardens' },
    { icon: '🎵', title: 'Live Music', description: 'Regular concerts and performances' },
  ]

  const events = [
    {
      title: 'Farmers Market',
      frequency: 'Every Saturday',
      description: 'Fresh local produce, artisan goods, and community gathering',
      icon: '🌾',
    },
    {
      title: 'Live Music Series',
      frequency: 'Friday & Saturday Nights',
      description: 'Regional musicians performing on the plaza',
      icon: '🎸',
    },
    {
      title: 'Food Truck Fridays',
      frequency: 'Every Friday',
      description: 'Rotating selection of Chattanooga\'s best food trucks',
      icon: '🚚',
    },
    {
      title: 'Yoga in the Plaza',
      frequency: 'Sunday Mornings',
      description: 'Free community yoga classes with certified instructors',
      icon: '🧘',
    },
    {
      title: 'Art Walks',
      frequency: 'First Thursday',
      description: 'Monthly showcase of local artists and galleries',
      icon: '🎨',
    },
    {
      title: 'Movie Nights',
      frequency: 'Monthly',
      description: 'Outdoor movie screenings under the stars',
      icon: '🎬',
    },
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
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000"
            alt="Community Living"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-dark/90 to-accent-teal/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <div className="inline-block px-6 py-3 bg-accent-teal/20 text-accent-teal text-sm font-semibold rounded-full mb-8 border border-accent-teal/30">
              Now Leasing
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-8 leading-tight">
              Join a Thriving
              <span className="text-accent-teal block mt-2">Urban Community</span>
            </h1>

            <p className="text-xl md:text-2xl text-body-text mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience luxury living where everything you need is within walking distance. From
              rooftop pools to riverside trails, Station33 offers an unparalleled urban lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#lifestyle"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-teal text-white rounded-lg hover:bg-accent-teal/90 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Explore the Lifestyle
                <span className="text-2xl">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-bold text-lg"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Features */}
      <section id="lifestyle" className="lifestyle-section section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              Eat. Play. Live. Work. Shop.
            </h2>
            <p className="text-xl text-body-text max-w-2xl mx-auto">
              Everything you need, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lifestyleFeatures.map((feature, index) => (
              <div
                key={index}
                className="lifestyle-card group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="relative h-[400px]">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-3xl font-bold text-primary-text mb-3">{feature.title}</h3>
                  <p className="text-body-text leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Resort-style living meets urban convenience with amenities designed for modern life
            </p>
          </div>

          <div className="amenities-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="amenity-item bg-card-bg border border-divider-gray rounded-2xl p-6 text-center hover:border-accent-teal hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h4 className="text-lg font-bold text-primary-text mb-2">{amenity.title}</h4>
                <p className="text-sm text-body-text">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
              Year-Round Events
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Regular programming that brings neighbors together and creates lasting connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-card-bg border border-divider-gray rounded-2xl p-8 hover:border-station-orange hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-station-orange to-station-red rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-lg">
                  {event.icon}
                </div>
                <div className="inline-block px-4 py-2 bg-accent-teal/20 text-accent-teal text-sm font-semibold rounded-lg mb-4">
                  {event.frequency}
                </div>
                <h3 className="text-2xl font-bold text-primary-text mb-3">{event.title}</h3>
                <p className="text-body-text leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residences Preview */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
                Luxury Residences
                <span className="text-accent-teal block mt-2">Now Leasing</span>
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                47 thoughtfully designed apartments and townhomes featuring high-end finishes,
                floor-to-ceiling windows, and modern open layouts.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-1">
                      Modern Finishes
                    </h4>
                    <p className="text-body-text">
                      Quartz countertops, stainless appliances, and designer fixtures throughout
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-1">Pet-Friendly</h4>
                    <p className="text-body-text">
                      Welcome your furry friends with dog park and pet wash station
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="text-xl font-bold text-primary-text mb-1">
                      Riverwalk Views
                    </h4>
                    <p className="text-body-text">
                      Select units feature panoramic views of the Tennessee River
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-teal text-white rounded-lg hover:bg-accent-teal/90 transition-all duration-300 font-bold text-lg shadow-xl"
              >
                View Floor Plans
                <span className="text-2xl">→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200"
                alt="Luxury Apartment Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-accent-teal/10 to-station-orange/10 border border-accent-teal/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-6">
              Ready to Make Station33 Home?
            </h2>
            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Join a vibrant community where luxury meets convenience. Schedule a tour today and
              experience the Station33 lifestyle firsthand.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-teal text-white rounded-lg hover:bg-accent-teal/90 transition-all duration-300 font-bold text-lg shadow-xl"
              >
                Schedule a Tour
                <span className="text-2xl">📅</span>
              </Link>
              <a
                href="mailto:leasing@station33.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-bold text-lg"
              >
                leasing@station33.com
                <span className="text-2xl">✉</span>
              </a>
            </div>

            <p className="text-sm text-body-text">
              Residential leasing begins mid-2026. Contact us to join the interest list.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
