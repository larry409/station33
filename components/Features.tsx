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
      link: '/contact',
      image: '/images/img172.jpg',
    },
    {
      icon: '🍽️',
      title: 'Curated Food Hall',
      description:
        "Chattanooga's premier food hall featuring local chefs, craft cocktails, and outdoor dining. From quick bites to chef-driven concepts, all steps from your door.",
      link: '/community#dining',
      image: '/images/img100.jpg',
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
      link: '/contact',
      image: '/images/img148.jpg',
    },
    {
      icon: '🌊',
      title: 'Riverwalk Connected',
      description:
        'Direct access to 13+ miles of Tennessee Riverwalk. Walk or bike to downtown, Riverfront Parkway, and the Innovation District in minutes.',
      link: '/contact',
      image: '/images/img50.jpg',
    },
  ]

  return (
    <section ref={featuresRef} className="pt-12 md:pt-16 pb-16 md:pb-24 lg:pb-32 bg-bg-darker overflow-hidden">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-16">
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

        {/* Horizontal Scrolling Carousel */}
        <div
          className="overflow-x-auto scroll-smooth pb-8 -mx-[5%] px-[5%] md:-mx-[8%] md:px-[8%] lg:-mx-[10%] lg:px-[10%]"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: '#374151 #1A1A1A',
          }}
        >
          <div className="flex gap-8 w-max">
            {features.map((feature, i) => (
              <a
                key={i}
                href={feature.link}
                className="feature-card group block"
                style={{ scrollSnapAlign: 'start', willChange: 'opacity, transform' }}
              >
                {/* Square Card Container */}
                <div className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-card-bg border border-divider-gray rounded-2xl overflow-hidden hover:border-accent-teal hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-3/5 w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="h-2/5 p-6 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-xl font-bold text-primary-text mb-2 group-hover:text-accent-teal transition-colors line-clamp-2">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-body-text leading-relaxed line-clamp-2">
                        {feature.description}
                      </p>
                    </div>

                    {/* Link */}
                    <div className="inline-flex items-center gap-2 text-station-orange font-semibold hover:text-accent-teal transition-colors group/link mt-2">
                      <span>Learn More</span>
                      <span className="text-xl group-hover/link:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-body-text">
            ← Scroll to explore more amenities →
          </p>
        </div>
      </div>
    </section>
  )
}
