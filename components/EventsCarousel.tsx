'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function EventsCarousel() {
  const carouselRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.carousel-item', {
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 70%',
        },
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, carouselRef)

    return () => ctx.revert()
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const events = [
    {
      title: 'Live Music',
      description:
        'Monthly concerts featuring local artists. Bluegrass, folk, and contemporary sounds in our outdoor plaza.',
      emoji: '🎵',
    },
    {
      title: 'Sunday Market',
      description:
        'Local artisans, jewelry makers, and food vendors create a vibrant weekly gathering space.',
      emoji: '🛍️',
    },
    {
      title: 'Cars & Coffee',
      description:
        'Monthly meetup for automotive enthusiasts. Show off your ride and enjoy great coffee.',
      emoji: '🚗',
    },
    {
      title: 'Holiday Celebrations',
      description:
        'Tree lighting ceremonies, Santa visits, and seasonal festivities that bring the community together.',
      emoji: '🎄',
    },
    {
      title: 'Pet Adoption Days',
      description:
        'Partner with local shelters for monthly adoption events. Station33 is proudly pet-friendly.',
      emoji: '🐕',
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const scrollAmount = 400
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={carouselRef} className="py-32 md:py-40 bg-bg-dark overflow-hidden">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-6">
          Live, Gather, Celebrate
        </h2>
        <p className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-12">
          Station33 is designed for community—from weekly markets to annual celebrations.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-station-orange rounded-full text-white font-semibold hover:bg-station-red transition-colors shadow-xl"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-station-orange rounded-full text-white font-semibold hover:bg-station-red transition-colors shadow-xl"
            aria-label="Scroll right"
          >
            →
          </button>

          {/* Carousel container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, i) => (
              <div
                key={i}
                className="carousel-item flex-shrink-0 w-80 md:w-96 bg-card-bg rounded-xl overflow-hidden border border-divider-gray hover:border-station-orange transition-all hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6">{event.emoji}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{event.title}</h3>
                  <p className="text-text-light leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-text-light text-sm mt-8">
          Drag to scroll or use arrow buttons
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
