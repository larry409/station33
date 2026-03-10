'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words manually
      if (titleRef.current) {
        const text = titleRef.current.textContent || ''
        const words = text.split(' ')

        titleRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block word">${word}</span></span>`)
          .join(' ')

        // Animate words
        gsap.from('.word', {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.3,
        })
      }

      // Animate subtitle, description, and CTAs
      gsap.from(['.hero-subtitle', '.hero-description', '.hero-ctas'], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.2,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-bg-darker to-bg-dark"
    >
      <div className="container text-center">
        <h1
          ref={titleRef}
          className="hero-title text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-12 leading-tight tracking-tight"
        >
          Where Chattanooga Comes Together
        </h1>

        <p className="hero-subtitle text-2xl md:text-3xl lg:text-4xl font-semibold text-station-orange mb-6 uppercase tracking-wider">
          Eat. Play. Live. Work. Shop.
        </p>

        <p className="hero-description text-lg md:text-xl text-text-light max-w-4xl mx-auto mb-12 leading-relaxed">
          A transformative mixed-use destination on South Broad. Experience 25,000+ SF of Grade-A
          commercial space, 47 luxury residences, 63 boutique hotel rooms, and vibrant plaza
          living—all connected to the Riverwalk.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
          <Link href="/investors" className="btn-primary">
            Invest in Station33
          </Link>
          <Link href="/community" className="btn-secondary">
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  )
}
