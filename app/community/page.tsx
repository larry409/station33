'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { BrandName } from '@/components/BrandName'
import {
  Dumbbell,
  PawPrint,
  CircleParking,
  Square,
  Route,
  Hotel,
  Wine,
  Bike,
  Package,
  TreeDeciduous,
  Music,
} from 'lucide-react'

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
        '91 residences and townhomes with modern finishes, Riverwalk views, and pet-friendly amenities. Walk downstairs for coffee, not to your car.',
      image: '/images/img132.jpg',
      icon: '🏠',
    },
    {
      title: 'Work',
      description:
        '25,000+ SF of Class-A commercial space designed for innovation. Take the elevator from your residence to your office.',
      image: '/images/img44.jpg',
      icon: '💼',
    },
    {
      title: 'Dine',
      description:
        'Curated food hall featuring local chefs and diverse cuisine. From morning coffee to fine dining, all steps from your door.',
      image: '/images/rendering-food-hall.jpg',
      icon: '🍽️',
    },
    {
      title: 'Play',
      description:
        'European-style plaza, fitness center, and year-round events. Every day offers something new to discover.',
      image: '/images/img88.jpg',
      icon: '🎪',
    },
  ]

  const amenities = [
    { icon: Dumbbell, title: 'Fitness Center', description: '24/7 state-of-the-art equipment' },
    { icon: PawPrint, title: 'Pet-Friendly', description: 'Dog park and pet wash station' },
    { icon: CircleParking, title: 'Covered Parking', description: 'Secure parking with EV charging' },
    { icon: Square, title: 'Event Plaza', description: 'Host private events for 500+' },
    { icon: Route, title: 'Riverwalk Access', description: 'Direct access to 13+ miles' },
    { icon: Hotel, title: 'Aloft by Marriott', description: '120-room hotel with amenities' },
    { icon: Wine, title: 'Rooftop Bar', description: 'Craft cocktails and sunset views' },
    { icon: Bike, title: 'Bike Storage', description: 'Secure indoor bike parking' },
    { icon: Package, title: 'Package Lockers', description: '24/7 secure package delivery' },
    { icon: TreeDeciduous, title: 'Green Spaces', description: 'Landscaped courtyards and gardens' },
    { icon: Music, title: 'Live Music', description: 'Regular concerts and performances' },
  ]

  const events = [
    {
      title: 'Farmers Market',
      frequency: 'Every Saturday',
      description: 'Fresh local produce, artisan goods, and community gathering',
      icon: '🌾',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200',
    },
    {
      title: 'Live Music Series',
      frequency: 'Friday & Saturday Nights',
      description: 'Regional musicians performing on the plaza',
      icon: '🎸',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200',
    },
    {
      title: 'Food Truck Fridays',
      frequency: 'Every Friday',
      description: 'Rotating selection of Chattanooga\'s best food trucks',
      icon: '🚚',
      image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=1200',
    },
    {
      title: 'Yoga in the Plaza',
      frequency: 'Sunday Mornings',
      description: 'Free community yoga classes with certified instructors',
      icon: '🧘',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
    },
    {
      title: 'Art Walks',
      frequency: 'First Thursday',
      description: 'Monthly showcase of local artists and galleries',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200',
    },
    {
      title: 'Movie Nights',
      frequency: 'Monthly',
      description: 'Outdoor movie screenings under the stars',
      icon: '🎬',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200',
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
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/video/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            src="/video/hero.mp4"
          >
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-dark/90 to-station-green/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center px-4">
            <div className="inline-block px-5 md:px-6 py-2.5 md:py-3 bg-station-gold/20 text-station-gold text-sm md:text-base font-semibold rounded-full mb-6 md:mb-8 border border-station-gold/30">
              Now Leasing
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-text mb-6 md:mb-8 leading-tight">
              Join a Thriving
              <span className="text-station-gold block mt-2">Urban Community</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body-text mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              Everything you need is within walking distance — from rooftop lounges to riverside
              trails. This is what connected, walkable living looks like in Chattanooga.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="#lifestyle"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 min-h-[56px]"
              >
                Explore the Lifestyle
                <span className="text-2xl">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Live <span style={{ color: 'var(--color-copper)' }}>+</span> Gather{' '}
              <span style={{ color: 'var(--color-copper)' }}>+</span> Work{' '}
              <span style={{ color: 'var(--color-copper)' }}>+</span> Play
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
                <div className="relative h-[280px] sm:h-[350px] md:h-[400px]">
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
                  <h3 className="text-3xl font-semibold text-primary-text mb-3">{feature.title}</h3>
                  <p className="text-white leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              World-Class Amenities
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Everyday convenience, dialed up — amenities designed for modern life on South Broad.
            </p>
          </div>

          <div className="amenities-grid max-w-5xl mx-auto bg-card-bg border border-divider-gray rounded-3xl p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="amenity-item flex items-start gap-4 group hover:translate-x-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <amenity.icon
                      className="w-14 h-14 text-station-gold group-hover:text-station-gold-light transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary-text mb-1 group-hover:text-station-gold transition-colors">
                      {amenity.title}
                    </h4>
                    <p className="text-sm text-body-text leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Year-Round Events
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Regular activities that drive deeper connections, creating lasting friendships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-card-bg border border-divider-gray rounded-2xl overflow-hidden hover:border-station-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/80 to-transparent" />
                </div>

                {/* Event Content */}
                <div className="p-8">
                  <div className="inline-block px-4 py-2 bg-station-gold/20 text-station-gold text-sm font-semibold rounded-lg mb-4">
                    {event.frequency}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-text mb-3">{event.title}</h3>
                  <p className="text-body-text leading-relaxed">{event.description}</p>
                </div>
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-6">
                Residences
                <span className="text-station-gold block mt-2">Now Leasing</span>
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                91 thoughtfully designed residences and townhomes featuring high-end finishes,
                floor-to-ceiling windows, and modern open layouts.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-text mb-1">
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
                    <h4 className="text-xl font-semibold text-primary-text mb-1">Pet-Friendly</h4>
                    <p className="text-body-text">
                      Welcome your furry friends with dog park and pet wash station
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">✓</span>
                  <div>
                    <h4 className="text-xl font-semibold text-primary-text mb-1">
                      Riverwalk Views
                    </h4>
                    <p className="text-body-text">
                      Select units feature panoramic views of the Tennessee River
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/spaces/residences"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px]"
              >
                View Floor Plans
                <span className="text-2xl">→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/residences/interior-3.jpg"
                alt="Station33 two-bedroom condo living room with mountain views"
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
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-green/10 to-station-gold/10 border border-station-gold/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-6">
              Ready to Make <BrandName /> Home?
            </h2>
            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Join a vibrant, walkable community on South Broad. Schedule a tour today and
              experience the <BrandName /> lifestyle firsthand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px]"
              >
                Schedule a Tour
                <span className="text-2xl">📅</span>
              </Link>
              <a
                href="mailto:info@station33.co"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
              >
                info@station33.co
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
