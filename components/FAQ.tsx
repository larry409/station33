'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function FAQ() {
  const faqRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
      })
    }, faqRef)

    return () => ctx.revert()
  }, [])

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  const faqs = [
    {
      question: 'What makes Station33 different from other developments?',
      answer:
        "Station33 is Chattanooga's first true urban mixed-use development on South Broad. Unlike suburban developments, we offer European-style walkability with no on-street parking, direct Riverwalk access, and everything you need within walking distance. It's a \"mini city within the city\" designed for true urban living.",
    },
    {
      question: 'What is the project timeline?',
      answer:
        'Groundbreaking occurred July 2, 2024. First residential units will be ready approximately 18 months from groundbreaking (mid-2026), with full project completion by fall 2026. Construction updates are shared regularly via our newsletter.',
    },
    {
      question: 'What types of businesses are you seeking?',
      answer:
        'We\'re seeking a diverse mix: architecture firms, law offices, medical practices, insurance companies (commercial space); independent restaurants, cafés, boutique retail (retail space). We prioritize local businesses and diverse offerings that serve multiple income levels—true "melting pot" accessibility.',
    },
    {
      question: 'Is parking available?',
      answer:
        'Yes! Covered parking is included with residential units and available for commercial tenants and visitors. The parking structure ensures cars are protected while keeping the plaza pedestrian-friendly and safe.',
    },
    {
      question: 'Is Station33 pet-friendly?',
      answer:
        "Absolutely! Pet-friendly living is a core part of our vision, inspired by founder Claudia Pullen's background in veterinary medicine. The development includes pet-friendly amenities and direct Riverwalk access for walks.",
    },
    {
      question: 'How can I invest in Station33?',
      answer:
        'Investment opportunities are available for accredited investors. Visit our Investors page to learn more about investment tiers, expected returns, and schedule a consultation with our development team.',
    },
  ]

  return (
    <section ref={faqRef} className="py-32 md:py-40 bg-bg-dark">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-lg md:text-xl text-text-light text-center max-w-3xl mx-auto mb-16">
          Whether you're an investor, future resident, or business owner, we've answered the most
          common questions to help you understand Station33.
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-card-bg rounded-xl border border-border-gray overflow-hidden hover:border-station-orange transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left gap-4"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                <span
                  className={`text-station-orange text-2xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-text-light leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
