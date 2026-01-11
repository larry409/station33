'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const featuresRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state explicitly before animating
      gsap.set('.feature-card', { opacity: 0, y: 60 })

      // Animate to visible state
      gsap.to('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
      })
    }, featuresRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: '🏊',
      title: 'Rooftop Pool & Lounge',
      description:
        'Resort-style rooftop pool with vibrant art installations, cabanas, and panoramic city views. Your urban oasis with poolside service and lounge seating.',
      link: '/community#rooftop',
      image: '/images/img88.jpg',
    },
    {
      icon: '🎪',
      title: 'European-Style Plaza',
      description:
        'Car-free pedestrian plaza with splash fountain, green spaces, and year-round programming. Host markets, concerts, and community gatherings for up to 500 guests.',
      link: '/about#plaza',
      image: '/images/img172.jpg',
    },
    {
      icon: '🍽️',
      title: 'Curated Food Hall',
      description:
        "Chattanooga's premier food hall featuring local chefs, craft cocktails, and outdoor dining. From quick bites to chef-driven concepts, all steps from your door.",
      link: '/community#dining',
      image: '/images/img64.jpg',
    },
    {
      icon: '🏨',
      title: 'Boutique Hotel',
      description:
        '63-room boutique hotel with Marriott partnership. Rooftop bar, guest amenities, and built-in neighborhood energy. Your friends will actually want to visit.',
      link: '/community#hotel',
      image: '/images/img80.jpg',
    },
    {
      icon: '🅿️',
      title: 'Covered Parking + EV Charging',
      description:
        'Secure covered parking with Level 2 EV charging stations. Protected from the elements with convenient elevator access to all buildings.',
      link: '/about#parking',
      image: '/images/img12.jpg',
    },
    {
      icon: '🌊',
      title: 'Riverwalk Connected',
      description:
        'Direct access to 13+ miles of Tennessee Riverwalk. Walk or bike to downtown, Riverfront Parkway, and the Innovation District in minutes.',
      link: '/about#location',
      image: '/images/img50.jpg',
    },
  ]

  return (
    <section ref={featuresRef} className="section-standard bg-bg-darker">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-4">
            Chattanooga's First True Urban
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-station-orange mb-6">
            Mixed-Use Destination
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Unparalleled amenities and experiences designed for modern urban living
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card group bg-card-bg border border-divider-gray rounded-2xl overflow-hidden hover:border-accent-teal hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ willChange: 'opacity, transform' }}
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-station-orange to-station-red rounded-xl flex items-center justify-center text-3xl shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-primary-text mb-4 group-hover:text-accent-teal transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-body-text leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Link */}
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-station-orange font-semibold hover:text-accent-teal transition-colors group/link"
                >
                  Learn More
                  <span className="text-xl group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
