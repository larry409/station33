'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    id: 1,
    title: 'Community Launch Event',
    date: 'March 15, 2026',
    category: 'Grand Opening',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200',
    description: 'Join us for the grand opening celebration of Station33'
  },
  {
    id: 2,
    title: 'Food Truck Friday',
    date: 'Weekly',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?q=80&w=1200',
    description: 'Local food trucks gather every Friday evening'
  },
  {
    id: 3,
    title: 'South Broad Art Walk',
    date: 'First Thursday',
    category: 'Arts & Culture',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200',
    description: 'Monthly art walk featuring local artists'
  },
  {
    id: 4,
    title: 'Live Music Series',
    date: 'Saturday Nights',
    category: 'Entertainment',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200',
    description: 'Live performances from regional musicians'
  },
  {
    id: 5,
    title: 'Farmers Market',
    date: 'Saturday Mornings',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1200',
    description: 'Fresh local produce and artisan goods'
  },
]

export default function Carousel() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.from('.carousel-heading', {
        scrollTrigger: {
          trigger: '.carousel-heading',
          start: 'top 80%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Animate carousel container
      gsap.from('.carousel-scroll', {
        scrollTrigger: {
          trigger: '.carousel-scroll',
          start: 'top 80%',
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark overflow-hidden">
      <div className="container">
        {/* Section Heading */}
        <div className="carousel-heading text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-text mb-6">
            Events & Happenings
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Experience the vibrant community life at Station33 with regular events and gatherings
          </p>
        </div>

        {/* Horizontal Scrolling Carousel */}
        <div
          ref={scrollRef}
          className="carousel-scroll overflow-x-auto scroll-smooth pb-8 -mx-[5%] px-[5%] md:-mx-[8%] md:px-[8%] lg:-mx-[10%] lg:px-[10%]"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'thin',
            scrollbarColor: '#374151 #1A1A1A',
          }}
        >
          <div className="flex gap-8 w-max">
            {events.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="carousel-card group block"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image */}
                <div className="relative h-72 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-accent-teal text-white text-sm font-semibold rounded-lg">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="text-sm text-accent-rust font-semibold mb-2 uppercase tracking-wider">
                    {event.date}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-text mb-3 group-hover:text-accent-teal transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-body-text leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="text-center mt-8">
          <p className="text-sm text-body-text">
            ← Scroll to explore more events →
          </p>
        </div>
      </div>
    </section>
  )
}
