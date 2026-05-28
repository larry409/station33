'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroLuxury() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words manually
      if (titleRef.current) {
        const text = titleRef.current.textContent || ''
        const words = text.split(' ')

        titleRef.current.innerHTML = words
          .map((word) => `<span class="inline-block word-animate">${word}</span>`)
          .join(' ')

        // Blur-fade animation on words - faster for better engagement
        gsap.from('.word-animate', {
          opacity: 0,
          filter: 'blur(12px)',
          y: 30,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power1.out',
          delay: 0.2,
        })
      }

      // Fade in subtext and CTA - faster reveal
      gsap.from(['.hero-subtext', '.hero-cta'], {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.9,
        ease: 'power2.out',
      })

      // Animate vertical accent line
      gsap.from('.accent-line', {
        scaleY: 0,
        duration: 0.8,
        delay: 0.2,
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
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/video/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-105 saturate-105"
          src="/video/hero-home.mp4"
        >
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-bg-dark" />
      </div>

      {/* Vertical Accent Line - Right Side */}
      <div className="accent-line absolute right-8 md:right-16 top-1/4 bottom-1/4 w-px bg-primary-text origin-top" />

      {/* Content */}
      <div className="container relative z-10 text-center px-4 sm:px-6 md:px-12">
        {/* Main Headline with word-by-word animation */}
        <h1
          ref={titleRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-text mb-6 sm:mb-8 leading-tight break-words"
        >
          Eat. Live. Play. Shop. Work.
        </h1>

        {/* Subheading */}
        <p className="hero-subtext text-lg sm:text-xl md:text-2xl text-primary-text max-w-4xl mx-auto leading-relaxed">
          Where Chattanooga Comes Together
        </p>
      </div>
    </section>
  )
}
