'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function HeroLuxury() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words manually
      if (titleRef.current) {
        const text = titleRef.current.textContent || ''
        const words = text.split(' ')

        titleRef.current.innerHTML = words
          .map((word) => `<span class="inline-block word-animate">${word}</span>`)
          .join(' ')

        // Blur-fade animation on words
        gsap.from('.word-animate', {
          opacity: 0,
          filter: 'blur(12px)',
          y: 30,
          duration: 0.6,
          stagger: 0.09,
          ease: 'power1.out',
          delay: 0.5,
        })
      }

      // Fade in subtext and CTA
      gsap.from(['.hero-subtext', '.hero-cta'], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        delay: 1.5,
        ease: 'power2.out',
      })

      // Animate vertical accent line
      gsap.from('.accent-line', {
        scaleY: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-bg-dark" />
      </div>

      {/* Vertical Accent Line - Right Side */}
      <div className="accent-line absolute right-8 md:right-16 top-1/4 bottom-1/4 w-px bg-primary-text origin-top" />

      {/* Content */}
      <div className="container relative z-10 text-center px-6 md:px-12">
        {/* Main Headline with word-by-word animation */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text mb-8 leading-tight"
        >
          Where Chattanooga Comes Together
        </h1>

        {/* Subheading */}
        <p className="hero-subtext text-xl md:text-2xl text-primary-text max-w-4xl mx-auto mb-12 leading-relaxed">
          Experience luxury urban living at Station33 - Chattanooga's premier mixed-use destination
          on South Broad
        </p>

        {/* CTA Button with Arrow */}
        <div className="hero-cta">
          <Link
            href="/explore"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-full hover:bg-primary-text hover:text-bg-dark transition-all duration-300 text-lg font-medium"
          >
            Explore Station33
            <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
