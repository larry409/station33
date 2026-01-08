'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Features() {
  const featuresRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, featuresRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: '🏢',
      title: 'Premium Commercial Space',
      description:
        "25,000+ SF of Grade-A office space designed for Chattanooga's most innovative companies. Perfect for architecture firms, law offices, medical practices, and more.",
      link: '/community#commercial',
    },
    {
      icon: '🏠',
      title: 'Luxury Living',
      description:
        '47 sophisticated apartments and townhomes with Riverwalk views. Pet-friendly living designed for urban professionals who want it all.',
      link: '/community#residential',
    },
    {
      icon: '🏨',
      title: 'Boutique Hotel',
      description:
        '63 rooms with rooftop pool and lounge. A sanctuary for travelers seeking authentic Chattanooga experiences. Marriott partnership.',
      link: '/community#hotel',
    },
    {
      icon: '🍽️',
      title: 'Food Hall & Dining',
      description:
        "A curated collection of restaurants bringing Chattanooga's culinary scene together. From quick bites to fine dining.",
      link: '/community#dining',
    },
    {
      icon: '🎪',
      title: 'Vibrant Plaza',
      description:
        'European-style pedestrian plaza for concerts, markets, and community gatherings. No on-street parking means safe, walkable spaces.',
      link: '/about#plaza',
    },
    {
      icon: '🌊',
      title: 'Riverwalk Connected',
      description:
        'Direct access to 13+ miles of walking and biking paths along the Tennessee River. Minutes to downtown, Innovation District, and baseball stadium.',
      link: '/about#location',
    },
  ]

  return (
    <section ref={featuresRef} className="py-32 md:py-40 bg-bg-darker">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Chattanooga's First True Urban
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-station-orange mb-16">
          Mixed-Use Destination
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card bg-card-bg p-8 md:p-10 rounded-xl border border-border-gray hover:border-station-orange transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-station-orange rounded-full flex items-center justify-center mb-6 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed mb-6">{feature.description}</p>
              <a href={feature.link} className="link-arrow">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
