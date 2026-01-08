import Navigation from '@/components/Navigation'
import HeroLuxury from '@/components/HeroLuxury'
import PropertyCards from '@/components/PropertyCards'
import Statistics from '@/components/Statistics'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroLuxury />
        {/* Phase 1: Navigation + Hero Complete */}
        <PropertyCards />
        <Statistics />
        <Services />
        {/* Phase 2: Property Cards, Statistics, Services Complete */}
        {/* Phase 3: Case Studies, Carousel - Coming Next */}
      </main>
      <Footer />
    </>
  )
}
