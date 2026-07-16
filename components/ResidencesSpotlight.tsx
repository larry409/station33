import Image from 'next/image'
import Link from 'next/link'
import { BrandName } from './BrandName'

const stats = [
  { value: '91', label: 'Residences' },
  { value: '800–1,800', label: 'Sq ft' },
  { value: '2 BR / 2 BA', label: 'Layout' },
]

const thumbs = [
  { src: '/images/residences/interior-1.jpg', alt: "Chef's kitchen rendering" },
  { src: '/images/residences/interior-5.jpg', alt: 'Bedroom with mountain view rendering' },
  { src: '/images/residences/interior-7.jpg', alt: 'Bedroom with accent wall rendering' },
]

/**
 * Homepage entry point for the residences — a prominent, funnel-first section
 * that routes visitors to the residences overview, floor plan, and renderings.
 */
export default function ResidencesSpotlight() {
  return (
    <section className="section-standard bg-bg-darker">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-station-gold/15 border border-station-gold/30 text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.18em] px-4 py-1.5 mb-5">
              <span className="h-2 w-2 rounded-full bg-station-gold" /> Now leasing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
              Find your place at <BrandName />
            </h2>
            <p className="text-lg md:text-xl text-body-text leading-relaxed mb-8 max-w-xl">
              91 modern condos and townhomes on South Broad — high-end finishes, floor-to-ceiling
              windows, and mountain and Riverwalk views, with everything you need an elevator ride away.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-semibold text-station-gold leading-none">{s.value}</div>
                  <div className="text-xs md:text-sm text-body-text mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/spaces/residences"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:-translate-y-1 min-h-[56px]"
              >
                Explore Residences
                <span className="text-2xl">→</span>
              </Link>
              <Link
                href="/spaces/residences#floor-plan"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px]"
              >
                View Floor Plan
              </Link>
            </div>
          </div>

          {/* Imagery — primary rendering + a renderings signpost */}
          <div>
            <Link
              href="/spaces/residences"
              className="group block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
            >
              <Image
                src="/images/residences/interior-3.jpg"
                alt="Station33 two-bedroom condo living room with mountain views"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
              />
            </Link>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
              {thumbs.map((t) => (
                <Link
                  key={t.src}
                  href="/spaces/residences#gallery"
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 1024px) 33vw, 17vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                </Link>
              ))}
            </div>

            <Link
              href="/spaces/residences#gallery"
              className="inline-flex items-center gap-2 mt-4 text-station-gold font-semibold hover:text-station-gold-light transition-colors"
            >
              See all 9 renderings
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
