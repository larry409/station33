'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const properties = [
  {
    id: 1,
    title: 'Premium Retail Spaces',
    description: 'Ground-floor retail with high ceilings and abundant natural light',
    size: '1,200 - 3,500 sq ft',
    badge: 'Available Now',
    image: '/images/img212.jpg',
  },
  {
    id: 2,
    title: 'Urban Loft Residences',
    description: 'Modern apartments with industrial-chic design and city views',
    size: '800 - 1,800 sq ft',
    badge: 'Leasing',
    image: '/images/rendering-alley-buildings.jpg',
  },
  {
    id: 3,
    title: 'Event & Meeting Spaces',
    description: 'Flexible venues perfect for corporate events and private gatherings',
    size: '2,000 - 5,000 sq ft',
    badge: 'Book Now',
    image: '/images/img172.jpg',
  },
  {
    id: 4,
    title: 'Rooftop Terrace',
    description: 'Outdoor space with panoramic views of downtown Chattanooga',
    size: '3,200 sq ft',
    badge: 'Resident Access',
    image: '/images/img50.jpg',
  },
  {
    id: 5,
    title: 'Co-Working Studios',
    description: 'Dedicated workspace for entrepreneurs and remote professionals',
    size: '150 - 800 sq ft',
    badge: 'Available',
    image: '/images/img44.jpg',
  },
  {
    id: 6,
    title: 'Restaurant & Bar',
    description: 'Full-service dining with indoor and outdoor seating',
    size: '4,500 sq ft',
    badge: 'Coming 2026',
    image: '/images/rendering-archway.jpg',
  },
  {
    id: 7,
    title: 'Medical Office Space',
    description: 'Purpose-built medical office suites with street-level access and modern infrastructure',
    size: '1,500 - 6,000 sq ft',
    badge: 'Pre-Leasing',
    image: '/images/rendering-medical-office.jpg',
  },
]

export default function PropertyCards() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in section heading
      gsap.from('.properties-heading', {
        scrollTrigger: {
          trigger: '.properties-heading',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Stagger animation for property cards
      gsap.from('.property-card', {
        scrollTrigger: {
          trigger: '.properties-grid',
          start: 'top 75%',
        },
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark">
      <div className="container">
        {/* Section Heading */}
        <div className="properties-heading text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
            Explore Station33
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Chattanooga, TN's premier mixed-use destination on South Broad
          </p>
        </div>

        {/* Property Grid */}
        <div className="properties-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/spaces/${property.id}`}
              className="property-card group block"
            >
              <div className="feature-card h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-accent-teal text-white text-sm font-semibold rounded-full">
                      {property.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-primary-text mb-3 group-hover:text-accent-teal transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-body-text mb-4 leading-relaxed flex-1">
                    {property.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-divider-gray">
                    <span className="text-sm text-body-text font-medium">{property.size}</span>
                    <span className="text-accent-teal font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Learn More <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
