import Navigation from '@/components/Navigation'
import HeroLuxury from '@/components/HeroLuxury'
import PropertyCards from '@/components/PropertyCards'
import Statistics from '@/components/Statistics'
import Services from '@/components/Services'
import CaseStudy from '@/components/CaseStudy'
import Carousel from '@/components/Carousel'
import CTASection from '@/components/CTASection'
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
        <CaseStudy />
        <Carousel />
        <CTASection />
        {/* Phase 3: Case Study, Carousel, CTA Complete */}
        {/* Phase 4: Final animations, mobile optimization, polish - Coming Next */}
      </main>
      <Footer />
    </>
  )
}
