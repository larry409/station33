# 🧩 COMPONENTS - Detailed Specifications

## Navigation Component Structure

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-darker/95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex justify-between items-center py-6">
        {/* Left nav */}
        <div className="hidden md:flex gap-8">
          <Link href="/investors" className="text-text-light hover:text-station-orange transition-colors">
            Investors
          </Link>
          <Link href="/community" className="text-text-light hover:text-station-orange transition-colors">
            Community
          </Link>
          <Link href="/about" className="text-text-light hover:text-station-orange transition-colors">
            About
          </Link>
        </div>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <Image src="/logo-landscape.svg" alt="Station33" width={120} height={60} />
        </Link>

        {/* Right button */}
        <Link href="/contact" className="hidden md:block btn-primary">
          Contact
        </Link>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
          <span className="w-6 h-0.5 bg-white transition-transform"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-bg-darker z-40 p-8">
          <nav className="flex flex-col gap-6">
            <Link href="/investors" className="text-2xl text-white">Investors</Link>
            <Link href="/community" className="text-2xl text-white">Community</Link>
            <Link href="/about" className="text-2xl text-white">About</Link>
            <Link href="/contact" className="text-2xl text-white">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
```

---

## Hero Component

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(SplitText)
    
    const ctx = gsap.context(() => {
      const titleSplit = new SplitText('.hero-title', { type: 'words' })
      
      gsap.from(titleSplit.words, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3
      })

      gsap.from(['.hero-subtitle', '.hero-description', '.hero-ctas'], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        delay: 1.2,
        ease: 'power2.out'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-bg-darker to-bg-dark">
      <div className="container text-center">
        <h1 className="hero-title text-hero font-bold text-white mb-8">
          Where Chattanooga Comes Together
        </h1>

        <div className="my-12">
          <Image 
            src="/logo-building.svg" 
            alt="Station33 Building" 
            width={600} 
            height={400}
            className="mx-auto"
          />
        </div>

        <p className="hero-subtitle text-4xl font-semibold text-station-orange mb-6 uppercase tracking-wider">
          Eat. Play. Live. Work. Shop.
        </p>

        <p className="hero-description text-xl text-text-light max-w-4xl mx-auto mb-12 leading-relaxed">
          A transformative mixed-use destination on South Broad. Experience 25,000+ SF of Grade-A commercial space, 
          47 luxury residences, 63 boutique hotel rooms, and vibrant plaza living—all connected to the Riverwalk.
        </p>

        <div className="hero-ctas flex flex-wrap gap-6 justify-center">
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
```

---

## Stats Component

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Stats() {
  const statsRef = useRef(null)

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
            once: true
          },
          innerText: target,
          duration: 2,
          snap: { innerText: target < 100 ? 1 : 10 },
          ease: 'power1.out',
          onUpdate: function() {
            const val = Math.ceil(this.targets()[0].innerText)
            counter.innerText = val.toLocaleString()
          }
        })
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { number: 25000, label: 'SF Commercial Space', suffix: '' },
    { number: 47, label: 'Luxury Residences', suffix: '' },
    { number: 63, label: 'Hotel Rooms', suffix: '' },
    { number: 5, label: 'Restaurants & Bars', suffix: '' },
    { number: 100, label: '$M+ Project Value', suffix: '+' },
  ]

  return (
    <section ref={statsRef} className="py-40 bg-bg-dark">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number text-6xl font-bold text-station-orange mb-2" data-count={stat.number}>
                0{stat.suffix}
              </div>
              <div className="stat-label text-sm text-text-light uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Features Component

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Features() {
  const featuresRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 70%'
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      })
    }, featuresRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: '/icons/commercial.svg',
      title: 'Premium Commercial Space',
      description: '25,000+ SF of Grade-A office space designed for Chattanooga\'s most innovative companies. Perfect for architecture firms, law offices, medical practices, and more.',
      link: '/community#commercial'
    },
    {
      icon: '/icons/residential.svg',
      title: 'Luxury Living',
      description: '47 sophisticated apartments and townhomes with Riverwalk views. Pet-friendly living designed for urban professionals who want it all.',
      link: '/community#residential'
    },
    {
      icon: '/icons/hotel.svg',
      title: 'Boutique Hotel',
      description: '63 rooms with rooftop pool and lounge. A sanctuary for travelers seeking authentic Chattanooga experiences. Marriott partnership.',
      link: '/community#hotel'
    },
    {
      icon: '/icons/dining.svg',
      title: 'Food Hall & Dining',
      description: 'A curated collection of restaurants bringing Chattanooga\'s culinary scene together. From quick bites to fine dining.',
      link: '/community#dining'
    },
    {
      icon: '/icons/plaza.svg',
      title: 'Vibrant Plaza',
      description: 'European-style pedestrian plaza for concerts, markets, and community gatherings. No on-street parking means safe, walkable spaces.',
      link: '/about#plaza'
    },
    {
      icon: '/icons/riverwalk.svg',
      title: 'Riverwalk Connected',
      description: 'Direct access to 13+ miles of walking and biking paths along the Tennessee River. Minutes to downtown, Innovation District, and baseball stadium.',
      link: '/about#location'
    },
  ]

  return (
    <section ref={featuresRef} className="py-40 bg-bg-dark">
      <div className="container">
        <h2 className="text-5xl font-bold text-center text-white mb-16">
          Chattanooga's First True Urban Mixed-Use Destination
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="feature-card bg-card-bg p-10 rounded-xl border border-border-gray hover:border-station-orange transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-station-orange rounded-full flex items-center justify-center mb-6">
                <img src={feature.icon} alt="" className="w-8 h-8 brightness-0 invert" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-text-light leading-relaxed mb-6">{feature.description}</p>
              <a href={feature.link} className="text-station-orange font-medium hover:text-station-red">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## See remaining components in next sections...

**For complete FAQ, Timeline, Location, Carousel, CTA, and Footer components, continue reading below or reference the full build specification document.**

**Key component patterns:**
1. All use 'use client' directive
2. All use useRef for GSAP context
3. All cleanup with ctx.revert()
4. All use ScrollTrigger for animations
5. All are fully responsive with Tailwind
