'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'living',
    label: 'Living',
    title: 'Modern Urban Living',
    description:
      'Experience luxury apartment living in the heart of South Broad. Our residences feature high-end finishes, floor-to-ceiling windows, and access to premium amenities including fitness center, rooftop terrace, and co-working spaces.',
    features: [
      'Premium finishes and appliances',
      'Floor-to-ceiling windows',
      '24/7 concierge service',
      'Pet-friendly community',
      'Rooftop terrace access',
      'Fitness and wellness center',
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200',
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
        <div className="services-heading text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-text mb-6">
            Amenities & Services
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Everything you need for living, working, and gathering in one vibrant community
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="service-tabs flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`service-tab px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
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
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src={activeService.image}
              alt={activeService.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-4xl font-bold text-primary-text mb-6">
              {activeService.title}
            </h3>
            <p className="text-lg text-body-text mb-8 leading-relaxed">
              {activeService.description}
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
