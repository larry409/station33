'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to('.case-study-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: 100,
        ease: 'none',
      })

      // Fade in content
      gsap.from('.case-study-content', {
        scrollTrigger: {
          trigger: '.case-study-content',
          start: 'top 80%',
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: 'power2.out',
      })

      // Stagger fade-in for feature items
      gsap.from('.case-study-feature', {
        scrollTrigger: {
          trigger: '.case-study-features',
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-dark overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image Side - with parallax */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] xl:h-[700px] rounded-xl overflow-hidden">
            <div className="case-study-image absolute inset-0 -top-20 -bottom-20">
              <Image
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200"
                alt="Station33 South Broad Development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="case-study-content">
            <div className="inline-block px-4 py-2 bg-accent-teal/10 text-accent-teal text-sm font-semibold rounded-full mb-6">
              Featured Development
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Redefining South Broad
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-body-text mb-6 md:mb-8 leading-relaxed">
              Station33 represents the future of mixed-use development in Chattanooga.
              Strategically located on South Broad, we're creating a vibrant community
              hub that seamlessly blends residential living, retail experiences, and
              event spaces into one cohesive destination.
            </p>

            <p className="text-lg text-body-text mb-12 leading-relaxed">
              Our commitment to quality, sustainability, and community engagement sets
              Station33 apart as a landmark development that will shape the Southside
              district for generations to come.
            </p>

            {/* Key Features Grid */}
            <div className="case-study-features grid grid-cols-2 gap-6 mb-12">
              <div className="case-study-feature">
                <div className="text-3xl font-semibold text-accent-rust mb-2">LEED</div>
                <div className="text-sm text-body-text uppercase tracking-wider">
                  Certified Green
                </div>
              </div>
              <div className="case-study-feature">
                <div className="text-3xl font-semibold text-accent-rust mb-2">Prime</div>
                <div className="text-sm text-body-text uppercase tracking-wider">
                  South Broad Location
                </div>
              </div>
              <div className="case-study-feature">
                <div className="text-3xl font-semibold text-accent-rust mb-2">Mixed</div>
                <div className="text-sm text-body-text uppercase tracking-wider">
                  Use Development
                </div>
              </div>
              <div className="case-study-feature">
                <div className="text-3xl font-semibold text-accent-rust mb-2">2026</div>
                <div className="text-sm text-body-text uppercase tracking-wider">
                  Grand Opening
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request Information
              </Link>
              <Link href="/contact" className="btn-rust">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
