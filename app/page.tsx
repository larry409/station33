import Navigation from '@/components/Navigation'
import HeroLuxury from '@/components/HeroLuxury'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroLuxury />
        {/* Phase 1: Navigation + Hero Complete */}
        {/* Phase 2: Property Cards, Statistics, Services - Coming Next */}
      </main>
      <Footer />
    </>
  )
}
