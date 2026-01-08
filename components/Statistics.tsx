'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    id: 1,
    number: '8',
    label: 'Buildings',
    suffix: '',
  },
  {
    id: 2,
    number: '250',
    label: 'SqFT Total Development',
    suffix: 'K',
  },
  {
    id: 3,
    number: '120',
    label: 'Residential Units',
    suffix: '',
  },
  {
    id: 4,
    number: '63',
    label: 'Boutique Hotel Rooms',
    suffix: '',
  },
  {
    id: 5,
    number: '400',
    label: 'Parking Spots',
    suffix: '',
  },
  {
    id: 6,
    number: '5',
    label: 'Event Capacity',
    suffix: '+',
  },
  {
    id: 7,
    number: '100',
    label: 'Committed Investment',
    suffix: 'M+',
  },
]

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats with stagger
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      })

      // Count-up animation for numbers
      const statNumbers = document.querySelectorAll('.stat-number')
      statNumbers.forEach((stat) => {
        const targetNum = stat.getAttribute('data-count')
        const targetNumber = parseInt(targetNum || '0')
        const suffix = stat.getAttribute('data-suffix') || ''

        gsap.fromTo(stat,
          { textContent: 0 },
          {
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              once: true,
            },
            textContent: targetNumber,
            duration: 2,
            ease: 'power1.out',
            snap: { textContent: 1 },
            onUpdate: function () {
              const current = Math.round(this.targets()[0].textContent)
              const formatted = current.toLocaleString()
              this.targets()[0].textContent = formatted + suffix
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-standard bg-bg-darker">
      <div className="container">
        {/* Stats Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-item text-center px-6 ${
                index < stats.length - 1 ? 'lg:border-r border-divider-gray' : ''
              }`}
            >
              <div
                className="stat-number text-5xl md:text-6xl lg:text-7xl font-bold text-accent-rust mb-3"
                data-count={stat.number}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="stat-label text-xs md:text-sm text-body-text uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
