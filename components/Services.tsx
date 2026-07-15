'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { brandify } from './BrandName'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'living',
    label: 'Living',
    title: 'Modern Urban Living',
    description:
      "Home is an elevator ride from everything else. Station33's residences feature high-end finishes, floor-to-ceiling windows, and access to on-site amenities — a fitness center, co-working spaces, and casual and fine-dining restaurants, all without moving your car.",
    features: [
      'Premium finishes and appliances',
      'Floor-to-ceiling windows',
      '24/7 concierge service',
      'Pet-friendly community',
      'Casual & fine-dining on-site',
      'Fitness and wellness center',
    ],
    image: '/images/img140.jpg',
  },
  {
    id: 'working',
    label: 'Working',
    title: 'Professional Workspaces',
    description:
      'From retail storefronts to private offices and co-working studios, Station33 offers flexible commercial spaces designed for modern businesses. High-speed internet, meeting rooms, and prime South Broad location.',
    features: [
      'Flexible lease terms',
      'High-speed fiber internet',
      'Shared meeting rooms',
      'On-site parking',
      'Ground-floor visibility',
      'Loading dock access',
    ],
    image: '/images/img44.jpg',
  },
  {
    id: 'gathering',
    label: 'Gathering',
    title: 'Event & Community Spaces',
    description:
      'Host your next corporate event, private party, or community gathering in our versatile event spaces. Modern AV equipment, catering kitchen, and professional event coordination available.',
    features: [
      'Flexible event spaces',
      'Professional AV equipment',
      'Catering kitchen',
      'Event coordination services',
      'Indoor and outdoor options',
      'Capacity up to 500 guests',
    ],
    image: '/images/img164.jpg',
  },
  {
    id: 'dining',
    label: 'Dining',
    title: 'Food & Beverage',
    description:
      'Station33 will feature a curated selection of dining options, from casual cafes to upscale restaurants. Ground-floor retail spaces designed for culinary excellence with outdoor seating and full bar capabilities.',
    features: [
      'Restaurant-ready spaces',
      'Full bar capabilities',
      'Outdoor seating options',
      'High foot traffic location',
      'Grease trap infrastructure',
      'Ample ventilation systems',
    ],
    image: '/images/rendering-food-hall.jpg',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('living')
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const activeService = services.find((s) => s.id === activeTab) || services[0]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.from('.services-heading', {
        scrollTrigger: {
          trigger: '.services-heading',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Animate tabs
      gsap.from('.service-tab', {
        scrollTrigger: {
          trigger: '.service-tabs',
          start: 'top 80%',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    // Animate content change
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      )
    }
  }, [activeTab])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark">
      <div className="container">
        {/* Section Heading */}
        <div className="services-heading text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
            Amenities & Services
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Everything you need for living, working, and gathering in one vibrant community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="service-tabs flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 md:mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`service-tab px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === service.id
                  ? 'bg-accent-teal text-white'
                  : 'bg-card-bg text-body-text hover:bg-card-bg/70 hover:text-primary-text'
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-4xl font-semibold text-primary-text mb-6">
              {activeService.title}
            </h3>
            <p className="text-lg text-body-text mb-8 leading-relaxed">
              {brandify(activeService.description)}
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {activeService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent-teal text-xl mt-1">✓</span>
                  <span className="text-body-text">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="btn-primary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
