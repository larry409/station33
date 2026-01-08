'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Location() {
  const locationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.location-item', {
        scrollTrigger: {
          trigger: locationRef.current,
          start: 'top 70%',
        },
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, locationRef)

    return () => ctx.revert()
  }, [])

  const locations = [
    {
      icon: '📍',
      title: 'Riverwalk Adjacent',
      description:
        '2-minute walk to 13+ miles of walking and biking paths along the Tennessee River',
    },
    {
      icon: '🏙️',
      title: 'Downtown Living',
      description:
        "5-minute walk to restaurants, entertainment, and Chattanooga's vibrant downtown core",
    },
    {
      icon: '⚾',
      title: 'Baseball Stadium District',
      description: 'Adjacent to new stadium district—closest hotel to the ballpark',
    },
    {
      icon: '🚶',
      title: 'Walk Score 95+',
      description: 'Car optional, not required. Everything you need within walking distance',
    },
    {
      icon: '🏔️',
      title: 'Lookout Mountain Access',
      description: 'Closest hotel to Rock City, Ruby Falls, and Incline Railway attractions',
    },
    {
      icon: '🏃',
      title: 'On Ironman Route',
      description: "Directly on Chattanooga's famous Ironman race route—twice a year",
    },
  ]

  return (
    <section ref={locationRef} className="py-32 md:py-40 bg-bg-darker">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          South Broad's Most Connected Address
        </h2>
        <p className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-16">
          Everything that makes Chattanooga special is within walking distance of Station33.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, i) => (
            <div
              key={i}
              className="location-item bg-card-bg p-8 rounded-xl border border-border-gray hover:border-station-orange transition-all"
            >
              <div className="text-5xl mb-6">{location.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {location.title}
              </h3>
              <p className="text-text-light leading-relaxed">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-card-bg rounded-xl overflow-hidden border border-border-gray h-96 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-text-light text-lg">Interactive Map Coming Soon</p>
            <p className="text-text-light text-sm mt-2">
              Located on South Broad Street, Chattanooga, TN
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
