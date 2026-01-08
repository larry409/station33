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
      icon: '🏊',
      title: 'Rooftop Pool & Lounge',
      description:
        'Resort-style rooftop pool with vibrant art installations, cabanas, and panoramic city views. Your urban oasis with poolside service and lounge seating.',
      link: '/community#rooftop',
    },
    {
      icon: '🎪',
      title: 'European-Style Plaza',
      description:
        'Car-free pedestrian plaza with splash fountain, green spaces, and year-round programming. Host markets, concerts, and community gatherings for up to 500 guests.',
      link: '/about#plaza',
    },
    {
      icon: '🍽️',
      title: 'Curated Food Hall',
      description:
        "Chattanooga's premier food hall featuring local chefs, craft cocktails, and outdoor dining. From quick bites to chef-driven concepts, all steps from your door.",
      link: '/community#dining',
    },
    {
      icon: '🏨',
      title: 'Boutique Hotel',
      description:
        '63-room boutique hotel with Marriott partnership. Rooftop bar, guest amenities, and built-in neighborhood energy. Your friends will actually want to visit.',
      link: '/community#hotel',
    },
    {
      icon: '🅿️',
      title: 'Covered Parking + EV Charging',
      description:
        'Secure covered parking with Level 2 EV charging stations. Protected from the elements with convenient elevator access to all buildings.',
      link: '/about#parking',
    },
    {
      icon: '🌊',
      title: 'Riverwalk Connected',
      description:
        'Direct access to 13+ miles of Tennessee Riverwalk. Walk or bike to downtown, Riverfront Parkway, and the Innovation District in minutes.',
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
              className="feature-card bg-card-bg p-8 md:p-10 rounded-xl border border-divider-gray hover:border-station-orange transition-all hover:-translate-y-2 hover:shadow-2xl"
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
