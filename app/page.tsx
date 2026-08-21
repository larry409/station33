import Navigation from '@/components/Navigation'
import AnnouncementBand from '@/components/AnnouncementBand'
import HeroLuxury from '@/components/HeroLuxury'
import PropertyCards from '@/components/PropertyCards'
import ResidencesSpotlight from '@/components/ResidencesSpotlight'
import Statistics from '@/components/Statistics'
import Features from '@/components/Features'
import Services from '@/components/Services'
import CaseStudy from '@/components/CaseStudy'
import Carousel from '@/components/Carousel'
import NewsLatest from '@/components/NewsLatest'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        {/* The ribbon overlays the top of the hero so the hero keeps its
            full-viewport treatment under the floating nav. */}
        <div className="relative">
          <AnnouncementBand />
          <HeroLuxury />
        </div>
        {/* Phase 1: Navigation + Hero Complete */}
        <PropertyCards />
        <ResidencesSpotlight />
        <Statistics />
        <Features />
        <Services />
        {/* Phase 2: Property Cards, Statistics, Services Complete */}
        <CaseStudy />
        <Carousel />
        <NewsLatest />
        <CTASection />
        {/* Phase 3: Case Study, Carousel, CTA Complete */}
        {/* Phase 4: Final animations, mobile optimization, polish - Coming Next */}
      </main>
      <Footer />
    </>
  )
}
