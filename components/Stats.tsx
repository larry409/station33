'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Stats() {
  const statsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const statNumbers = gsap.utils.toArray('.stat-number')

      statNumbers.forEach((counter: any) => {
        const target = parseFloat(counter.dataset.count)

        gsap.to(counter, {
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
            once: true,
          },
          innerText: target,
          duration: 2,
          snap: { innerText: target < 100 ? 1 : 10 },
          ease: 'power1.out',
          onUpdate: function () {
            const val = Math.ceil(this.targets()[0].innerText)
            const suffix = counter.dataset.suffix || ''
            counter.innerText = val.toLocaleString() + suffix
          },
        })
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: 8, label: 'Buildings', suffix: '' },
    { number: 250, label: 'K SqFT Total Development', suffix: 'K' },
    { number: 120, label: 'Residential Units', suffix: '' },
    { number: 63, label: 'Boutique Hotel Rooms', suffix: '' },
    { number: 400, label: 'Parking Spots', suffix: '' },
    { number: 5, label: 'Event Capacity', suffix: '+' },
    { number: 100, label: '$M+ Committed Investment', suffix: '+' },
  ]

  return (
    <section ref={statsRef} className="py-32 md:py-40 bg-bg-dark">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div
                className="stat-number text-5xl md:text-6xl lg:text-7xl font-bold text-station-orange mb-2 leading-none"
                data-count={stat.number}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="stat-label text-xs md:text-sm text-text-light uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
