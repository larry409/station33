import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SpaceInterestForm from '@/components/SpaceInterestForm'
import { BrandName } from '@/components/BrandName'
import { HighlightCard, StatCard } from '@/components/Cards'
import type { SpaceConfig } from '@/lib/spaces'

/**
 * Shared layout for the three commercial space pages. Deliberately form-first:
 * until unit renderings exist there is no gallery to build a page around, so
 * the hero and highlights set the case and everything points at the interest
 * list. Drop a gallery section in above the form when renderings land.
 */

const listBenefits = [
  {
    title: 'First look',
    body: 'Plans and pricing reach the list before they go public.',
  },
  {
    title: 'A named spot',
    body: 'Your details go straight to the leasing team, not a general inbox.',
  },
  {
    title: 'Progress as it happens',
    body: 'Construction updates and move-in timing, as soon as they are set.',
  },
]

export default function SpaceInterestPage({ config }: { config: SpaceConfig }) {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={config.heroImage}
              alt={config.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-darker via-bg-darker/75 to-bg-darker/45" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-station-gold text-xs md:text-sm font-semibold uppercase tracking-[0.24em] mb-5">
                {config.eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-text mb-5 md:mb-6 leading-[1.05] tracking-tight">
                {config.title}
              </h1>
              <p className="text-lg md:text-xl text-primary-text/90 leading-relaxed mb-8 max-w-2xl">
                {config.lede}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl mb-8">
                {config.stats.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>

              <a
                href="#interest"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl hover:-translate-y-1 min-h-[56px]"
              >
                Join the interest list
                <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* The case for the space */}
        <section className="section-standard bg-bg-dark">
          <div className="container">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
                {config.sectionHeading}
              </h2>
              <p className="text-lg md:text-xl text-body-text leading-relaxed">{config.sectionBody}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {config.highlights.map((h) => (
                <HighlightCard key={h.title} title={h.title} body={h.body} />
              ))}
            </div>
          </div>
        </section>

        {/* Interest list — how it works, plus the form */}
        <section id="interest" className="section-standard bg-bg-darker scroll-mt-24">
          <div className="container">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
              {/* Left — what the list is */}
              <div className="lg:sticky lg:top-32">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5 md:mb-6 leading-tight">
                  Be first in line
                </h2>
                <p className="text-lg md:text-xl text-body-text leading-relaxed mb-10">
                  <BrandName /> is under construction, and the businesses on this list are the ones
                  we call first. Add your name and you will see plans, pricing, and move-in dates
                  ahead of everyone else.
                </p>

                <dl className="divide-y divide-white/10 border-t border-white/10">
                  {listBenefits.map((benefit) => (
                    <div key={benefit.title} className="py-6">
                      <dt className="text-xs uppercase tracking-[0.22em] text-station-gold font-semibold mb-2">
                        {benefit.title}
                      </dt>
                      <dd className="text-base md:text-lg text-body-text leading-relaxed">
                        {benefit.body}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-8 text-base text-body-text leading-relaxed">
                  Prefer to talk it through?{' '}
                  <a
                    href="mailto:info@station33.co"
                    className="text-station-gold hover:text-station-gold-light underline underline-offset-4 transition-colors"
                  >
                    info@station33.co
                  </a>
                </p>
              </div>

              {/* Right — form */}
              <div className="rounded-3xl bg-card-bg/60 border border-white/10 p-6 md:p-10 lg:p-12">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary-text mb-2">
                  {config.formHeading}
                </h3>
                <p className="text-base md:text-lg text-body-text mb-8">{config.formIntro}</p>
                <SpaceInterestForm config={config} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
