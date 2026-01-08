'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Timeline() {
  const timelineRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power2.out',
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  const timelineItems = [
    {
      time: '8:00 AM',
      title: 'Morning Coffee',
      description:
        'Step out of your residence and grab artisan coffee in the plaza. Watch the city wake up from your favorite café.',
    },
    {
      time: '9:00 AM',
      title: 'Walk to Work',
      description:
        'Take the elevator or stairs to Building 2. Your law firm, architecture office, or medical practice is right here.',
    },
    {
      time: '12:30 PM',
      title: 'Lunch at the Food Hall',
      description:
        'Choose from diverse cuisine options. Grab a sandwich and enjoy it poolside with mountain views.',
    },
    {
      time: '6:00 PM',
      title: 'Sunset Happy Hour',
      description:
        'Meet friends at the rooftop pool deck. Watch the sun set over Lookout Mountain with a craft cocktail.',
    },
    {
      time: '8:00 PM',
      title: 'Evening Entertainment',
      description:
        'Live concert in the plaza, walk to the baseball game, or enjoy dinner at a fine dining restaurant.',
    },
  ]

  return (
    <section ref={timelineRef} className="py-32 md:py-40 bg-bg-dark">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          A Day in the Life at Station33
        </h2>
        <p className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-20">
          Experience urban living at its finest—where every moment flows seamlessly from work to
          play.
        </p>

        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`timeline-item flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Time label */}
              <div className="flex-shrink-0 w-32 md:w-40">
                <div
                  className={`text-right ${
                    i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="inline-block bg-station-orange text-white px-4 py-2 rounded-lg font-bold text-lg">
                    {item.time}
                  </div>
                </div>
              </div>

              {/* Content card */}
              <div className="timeline-card flex-1 bg-card-bg p-8 rounded-xl border border-border-gray">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-text-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
