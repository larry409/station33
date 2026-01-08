'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import { HERO_VIDEO } from '@/lib/cloudinary'

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
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_VIDEO.getPosterUrl()}
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* Desktop video source */}
          <source src={HERO_VIDEO.getDesktopUrl()} type="video/mp4" media="(min-width: 1024px)" />
          {/* Mobile video source */}
          <source src={HERO_VIDEO.getMobileUrl()} type="video/mp4" />
        </video>
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
          Eat. Live. Play. Shop. Work.
        </h1>

        {/* Subheading */}
        <p className="hero-subtext text-xl md:text-2xl text-primary-text max-w-4xl mx-auto leading-relaxed">
          Where Chattanooga Comes Together
        </p>
      </div>
    </section>
  )
}
