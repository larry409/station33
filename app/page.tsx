import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Timeline from '@/components/Timeline'
import Location from '@/components/Location'
import EventsCarousel from '@/components/EventsCarousel'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Features />
        <Timeline />
        <Location />
        <EventsCarousel />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
