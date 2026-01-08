'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    id: 1,
    quote:
      "Station33 has transformed how we do business in Chattanooga. The modern amenities and central South Broad location have been invaluable for our retail operations.",
    author: 'Sarah Mitchell',
    role: 'Retail Business Owner',
    company: 'Mitchell & Co.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
  },
  {
    id: 2,
    quote:
      "Living at Station33 combines the best of urban convenience with luxury amenities. The rooftop views and community atmosphere make it feel like home.",
    author: 'David Chen',
    role: 'Resident',
    company: 'Unit 304',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
  },
  {
    id: 3,
    quote:
      "We've hosted multiple corporate events at Station33 and the experience has been exceptional every time. The event spaces are flexible, modern, and perfectly equipped.",
    author: 'Jessica Rodriguez',
    role: 'Event Coordinator',
    company: 'Chattanooga Events Group',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
  },
  {
    id: 4,
    quote:
      "The co-working spaces at Station33 provide exactly what remote professionals need - fast internet, great atmosphere, and a vibrant community of entrepreneurs.",
    author: 'Marcus Thompson',
    role: 'Entrepreneur',
    company: 'Tech Startup Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
  },
  {
    id: 5,
    quote:
      "Station33 represents the future of mixed-use development. It's revitalizing the South Broad corridor and creating opportunities for the entire community.",
    author: 'Emily Patterson',
    role: 'Community Leader',
    company: 'Southside District Alliance',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400',
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

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
      gsap.from('.carousel-container', {
        scrollTrigger: {
          trigger: '.carousel-container',
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

  useEffect(() => {
    // Animate slide transition
    if (carouselRef.current) {
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      )
    }
  }, [currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section ref={sectionRef} className="section-standard bg-bg-darker">
      <div className="container">
        {/* Section Heading */}
        <div className="carousel-heading text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-primary-text mb-6">
            Community Voices
          </h2>
          <p className="text-xl text-body-text max-w-3xl mx-auto">
            Hear from residents, businesses, and community members about their Station33 experience
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div
            ref={carouselRef}
            className="bg-card-bg rounded-2xl p-12 md:p-16 border border-divider-gray"
          >
            {/* Quote Icon */}
            <div className="text-accent-teal text-6xl mb-8 leading-none">"</div>

            {/* Quote Text */}
            <blockquote className="text-2xl md:text-3xl text-primary-text font-light leading-relaxed mb-12">
              {currentTestimonial.quote}
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-6">
              {/* Author Image */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Author Details */}
              <div>
                <div className="text-xl font-bold text-primary-text mb-1">
                  {currentTestimonial.author}
                </div>
                <div className="text-body-text">
                  {currentTestimonial.role}
                </div>
                <div className="text-accent-teal text-sm font-medium">
                  {currentTestimonial.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            {/* Prev/Next Buttons */}
            <div className="flex gap-4">
              <button
                onClick={goToPrev}
                className="w-14 h-14 rounded-lg border-2 border-primary-text text-primary-text hover:bg-primary-text hover:text-bg-dark transition-all duration-300 flex items-center justify-center font-bold text-xl"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="w-14 h-14 rounded-lg border-2 border-primary-text text-primary-text hover:bg-primary-text hover:text-bg-dark transition-all duration-300 flex items-center justify-center font-bold text-xl"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent-teal w-8'
                      : 'bg-divider-gray hover:bg-body-text'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
