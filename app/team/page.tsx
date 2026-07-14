'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { BrandName } from '@/components/BrandName'

gsap.registerPlugin(ScrollTrigger)

export default function TeamPage() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })

      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: '.team-grid',
          start: 'top 75%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power2.out',
      })

      gsap.from('.value-item', {
        scrollTrigger: {
          trigger: '.values-section',
          start: 'top 80%',
        },
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      role: 'Principal Developer',
      bio: '25+ years developing transformative mixed-use projects across the Southeast. Led $2B+ in commercial developments.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
      linkedin: '#',
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Operating Officer',
      bio: 'Former VP of Operations for national hospitality group. Expert in mixed-use management and community building.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800',
      linkedin: '#',
    },
    {
      name: 'David Thompson',
      role: 'Chief Financial Officer',
      bio: 'Real estate finance specialist with expertise in capital markets and project financing. MBA from Wharton.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800',
      linkedin: '#',
    },
    {
      name: 'Jennifer Martinez',
      role: 'Director of Leasing',
      bio: '15 years in commercial and residential leasing. Deep connections in Chattanooga business community.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800',
      linkedin: '#',
    },
    {
      name: 'James Wilson',
      role: 'Director of Construction',
      bio: 'Licensed general contractor with extensive mixed-use experience. Delivered 20+ major projects on time and budget.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800',
      linkedin: '#',
    },
    {
      name: 'Emily Parker',
      role: 'Community Relations Manager',
      bio: 'Chattanooga native passionate about urban development and community engagement. Previously with city planning.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800',
      linkedin: '#',
    },
  ]

  const values = [
    {
      title: 'Community First',
      description:
        'We believe great developments strengthen communities. Every decision considers impact on neighbors, businesses, and the broader Chattanooga area.',
      icon: '🤝',
    },
    {
      title: 'Sustainability',
      description:
        'Building for the long term means prioritizing energy efficiency, walkability, and green infrastructure that benefits generations to come.',
      icon: '🌱',
    },
    {
      title: 'Quality & Craftsmanship',
      description:
        'No shortcuts. We partner with the finest architects, contractors, and craftspeople to deliver exceptional spaces that stand the test of time.',
      icon: '⭐',
    },
    {
      title: 'Innovation',
      description:
        'From smart building technology to pioneering mixed-use design, we push boundaries while respecting proven principles of great urbanism.',
      icon: '💡',
    },
    {
      title: 'Transparency',
      description:
        'Open communication with investors, residents, and community stakeholders. We believe trust is built through honest, consistent dialogue.',
      icon: '🔍',
    },
    {
      title: 'Local Impact',
      description:
        'Prioritizing local contractors, artists, and businesses. Built by Chattanooga, for Chattanooga.',
      icon: '📍',
    },
  ]

  const partners = [
    {
      name: 'Summit Architecture Group',
      role: 'Lead Architects',
      description: 'Award-winning design firm specializing in urban mixed-use developments',
    },
    {
      name: 'Riverfront Construction',
      role: 'General Contractor',
      description: 'Chattanooga-based builder with 40+ years of local experience',
    },
    {
      name: 'Marriott International',
      role: 'Hospitality Partner',
      description: 'Operating the 120-room Aloft by Marriott hotel and rooftop amenities',
    },
    {
      name: 'GreenBuild Engineering',
      role: 'Sustainability Consultants',
      description: 'Sustainability and energy-efficiency experts for high-performance building systems',
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000"
            alt="Team Collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg-darker/95 via-bg-dark/90 to-station-gold/20" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-text mb-6 md:mb-8 leading-tight">
              Building Chattanooga's
              <span className="text-station-gold block mt-2">Urban Future</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-body-text mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
              A passionate team of developers, designers, and community builders committed to
              creating spaces where people thrive.
            </p>

            <Link
              href="#team"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-station-gold text-white rounded-lg hover:bg-station-gold/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Meet the Team
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-6 md:mb-8">Our Mission</h2>
            <blockquote className="text-2xl md:text-3xl text-body-text leading-relaxed italic border-l-4 border-station-gold pl-8 py-4">
              "We're building something Chattanooga has never seen before—a walkable urban
              neighborhood where you can live, gather, work, and play without ever getting in your
              car. <BrandName /> isn't just a development; it's a vision for how modern cities should
              feel."
            </blockquote>
            <p className="text-xl text-station-gold mt-8 font-semibold">
              — Michael Rodriguez, Principal Developer
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section id="team" className="section-standard bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Decades of combined experience in real estate development, construction, and
              community building
            </p>
          </div>

          <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card group bg-card-bg border border-divider-gray rounded-2xl overflow-hidden hover:border-station-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Photo */}
                <div className="relative h-60 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary-text mb-2">{member.name}</h3>
                  <p className="text-station-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-body-text leading-relaxed mb-6">{member.bio}</p>

                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 text-accent-teal font-semibold hover:text-station-gold transition-colors group/link"
                  >
                    Connect on LinkedIn
                    <span className="text-xl group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-standard bg-bg-darker">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">Our Values</h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-item bg-card-bg border border-divider-gray rounded-2xl p-8 hover:border-accent-teal hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-station-gold to-station-gold/80 rounded-2xl flex items-center justify-center mb-6 text-4xl shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-primary-text mb-4">{value.title}</h3>
                <p className="text-body-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-4 md:mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Collaborating with industry leaders to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card-bg border border-divider-gray rounded-2xl p-8 hover:border-accent-teal hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-primary-text mb-2">{partner.name}</h3>
                <p className="text-station-gold font-semibold mb-4">{partner.role}</p>
                <p className="text-body-text leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Track Record */}
      <section className="section-standard bg-bg-darker">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-text mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-body-text mb-8 leading-relaxed">
                Our team has successfully delivered over $2 billion in mixed-use developments
                across the Southeast, creating vibrant communities that stand the test of time.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-card-bg border border-divider-gray rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-station-gold mb-2">25+</div>
                  <div className="text-sm text-body-text">Years Experience</div>
                </div>
                <div className="bg-card-bg border border-divider-gray rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-station-gold mb-2">$2B+</div>
                  <div className="text-sm text-body-text">Projects Delivered</div>
                </div>
                <div className="bg-card-bg border border-divider-gray rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-station-gold mb-2">20+</div>
                  <div className="text-sm text-body-text">Major Developments</div>
                </div>
                <div className="bg-card-bg border border-divider-gray rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-station-gold mb-2">100%</div>
                  <div className="text-sm text-body-text">On-Time Delivery</div>
                </div>
              </div>

              <Link
                href="/investors"
                className="inline-flex items-center gap-3 px-8 py-4 bg-station-gold text-white rounded-lg hover:bg-station-gold/90 transition-all duration-300 font-semibold text-lg shadow-xl"
              >
                View Investment Opportunities
                <span className="text-2xl">→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200"
                alt="Development Projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-standard bg-bg-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-gold/10 to-accent-teal/10 border border-station-gold/30 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-body-text mb-10 leading-relaxed">
              Whether you're interested in investment opportunities, leasing space, or learning
              more about the project, we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-station-gold text-white rounded-lg hover:bg-station-gold/90 transition-all duration-300 font-semibold text-lg shadow-xl"
              >
                Get in Touch
                <span className="text-2xl">📧</span>
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-text text-primary-text rounded-lg hover:bg-primary-text hover:text-bg-dark transition-all duration-300 font-semibold text-lg"
              >
                Explore the Community
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
