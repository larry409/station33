import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName } from '@/components/BrandName'
import ResidenceGallery, { type GalleryImage } from '@/components/ResidenceGallery'

export const metadata: Metadata = {
  title: 'Residences | Station33',
  description:
    'Two-bedroom condo residences at Station33 — modern finishes, floor-to-ceiling windows, and mountain and Riverwalk views on South Broad in Chattanooga.',
}

const heroStats = [
  { value: '91', label: 'Residences & townhomes' },
  { value: '2BR / 2BA', label: 'Signature layout' },
  { value: '800–1,800', label: 'Sq ft' },
  { value: 'Mountain', label: '& Riverwalk views' },
]

// Growable gallery — add new unit renderings here as they arrive.
const galleryImages: GalleryImage[] = [
  { src: '/images/residences/interior-3.jpg', alt: 'Living room with mountain views and warm modern furnishings', category: 'Living' },
  { src: '/images/residences/interior-4.jpg', alt: 'Open living and dining area with a media wall and wine display', category: 'Living' },
  { src: '/images/residences/interior-1.jpg', alt: "Chef's kitchen with waterfall island and bar seating", category: 'Kitchen' },
  { src: '/images/residences/interior-2.jpg', alt: 'Kitchen with quartz island and natural-stone backsplash', category: 'Kitchen' },
  { src: '/images/residences/interior-5.jpg', alt: 'Primary bedroom with a built-in desk and mountain view', category: 'Bedroom' },
  { src: '/images/residences/interior-7.jpg', alt: 'Bedroom with a paneled accent wall and valley view', category: 'Bedroom' },
  { src: '/images/residences/interior-6.jpg', alt: 'Spa-style bathroom with a soaking tub and walk-in shower', category: 'Bath' },
  { src: '/images/residences/interior-8.jpg', alt: 'Bathroom with a walk-in shower and floating wood vanity', category: 'Bath' },
  { src: '/images/residences/interior-9.jpg', alt: 'Double-vanity bathroom with natural-stone finishes', category: 'Bath' },
]

const highlights = [
  { title: 'Modern finishes', body: 'Quartz countertops, stainless appliances, designer lighting, and warm wood floors throughout.' },
  { title: 'Floor-to-ceiling windows', body: 'Light-filled homes with mountain, valley, and Tennessee Riverwalk views from select units.' },
  { title: 'Everything downstairs', body: 'A fitness center, co-working spaces, and casual and fine-dining restaurants without moving your car.' },
  { title: 'Pet-friendly', body: 'A dog park and pet-wash station on site — bring the whole family.' },
]

export default function ResidencesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero — exterior / context */}
        <section className="relative min-h-[70vh] flex items-end pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/residences/hero-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              src="/video/residences-hero.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/70 to-bg-darker/40" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-text mb-5 md:mb-6 leading-[1.05] tracking-tight">
                Residences
              </h1>
              <p className="text-lg md:text-xl text-primary-text/90 leading-relaxed mb-8 max-w-2xl">
                91 thoughtfully designed condos and townhomes on South Broad — where home is an
                elevator ride from everything else.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl mb-8">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-bg-darker/60 border border-station-gold/25 backdrop-blur-sm px-3 py-4"
                  >
                    <div className="text-xl md:text-2xl font-semibold text-station-gold leading-none">
                      {stat.value}
                    </div>
                    <div className="text-xs text-body-text mt-2 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:-translate-y-1 min-h-[56px]"
              >
                Schedule a tour
                <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro + highlights */}
        <section className="section-standard bg-bg-dark">
          <div className="container">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
                Designed for how you actually live
              </h2>
              <p className="text-lg md:text-xl text-body-text leading-relaxed">
                Two-bedroom homes with high-end finishes, open layouts, and light from every angle —
                steps from the plaza, the Riverwalk, and everything <BrandName /> has to offer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="bg-card-bg border-2 border-station-gold/25 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-text mb-3">{h.title}</h3>
                  <p className="text-body-text leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Floor plan */}
        <section id="floor-plan" className="section-standard bg-bg-darker scroll-mt-24">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
                  Two bedrooms, two baths
                </h2>
                <p className="text-lg md:text-xl text-body-text leading-relaxed mb-8">
                  An open kitchen-and-living core with bedrooms tucked to either side — 800–1,800 sq
                  ft of flexible, light-filled space.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px]"
                >
                  Check availability
                  <span className="text-2xl">→</span>
                </Link>
              </div>
              <div className="lg:col-span-3 bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
                <Image
                  src="/images/residences/floor-plan-2br.jpg"
                  alt="Station33 two-bedroom, two-bath condo floor plan, aerial dollhouse view"
                  width={1800}
                  height={1012}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section-standard bg-bg-dark scroll-mt-24">
          <div className="container">
            <div className="max-w-3xl mb-10 md:mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-4 md:mb-6 leading-tight">
                Inside the residences
              </h2>
              <p className="text-lg md:text-xl text-body-text leading-relaxed">
                A first look at our two-bedroom homes. More renderings are on the way — check back as
                new units are released.
              </p>
            </div>
            <ResidenceGallery images={galleryImages} />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="section-standard bg-bg-darker">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-green/10 to-station-gold/10 border border-station-gold/30 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-6">
                Ready to make <BrandName /> home?
              </h2>
              <p className="text-lg md:text-xl text-body-text mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Schedule a tour to walk the plans, talk finishes, and find your layout.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px]"
                >
                  Schedule a tour
                  <span className="text-2xl">→</span>
                </Link>
                <a
                  href="mailto:info@station33.co"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
                >
                  info@station33.co
                  <span className="text-2xl">✉</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
