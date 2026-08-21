import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName } from '@/components/BrandName'
import PressCopyButton from '@/components/PressCopyButton'
import { formatPostDate, mediaContact, newsPosts } from '@/lib/news'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Press Kit | Station33',
  description:
    'Renderings, fact sheet, approved boilerplate and media contact for Station33 — the $130 million mixed-use development on South Broad Street in Chattanooga, Tennessee.',
  path: '/news/press-kit',
})

type Rendering = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

// Only files that actually exist in public/images. Dimensions are the real
// pixel dimensions of the source files, so the download labels are accurate.
const renderings: Rendering[] = [
  {
    src: '/images/rendering-aerial.jpg',
    alt: 'Aerial rendering of the full Station33 development with the clock tower at the center of a pedestrian plaza',
    caption: 'Aerial view of the full development, looking across the pedestrian plaza.',
    width: 2400,
    height: 1600,
  },
  {
    src: '/images/aerial-station33.jpg',
    alt: 'Aerial rendering of Station33 in context on South Broad Street with Lookout Mountain beyond',
    caption: 'The site in context on the 3300 block of South Broad Street.',
    width: 2000,
    height: 1333,
  },
  {
    src: '/images/rendering-clock-tower.jpg',
    alt: 'Rendering of the Station33 clock tower rising above the courtyard',
    caption: 'The clock tower — a landmark rising more than 75 feet above the courtyard.',
    width: 2000,
    height: 1333,
  },
  {
    src: '/images/rendering-aloft.jpg',
    alt: 'Rendering of the 120-room Aloft Hotel by Marriott at Station33',
    caption: '120-room Aloft Hotel by Marriott, operated by Dynamic Group.',
    width: 1400,
    height: 930,
  },
  {
    src: '/images/rendering-hotel.jpg',
    alt: 'Street-level rendering of the seven-story hotel building at Station33',
    caption: 'The seven-story hotel from street level, with rooftop patio and bar above.',
    width: 3240,
    height: 2160,
  },
  {
    src: '/images/rendering-food-hall.jpg',
    alt: 'Interior rendering of the Station33 food hall with vendor stalls and a shared bar',
    caption: 'The curated food hall — vendor stalls around a shared bar.',
    width: 2000,
    height: 1333,
  },
  {
    src: '/images/rendering-plaza.jpg',
    alt: 'Rendering of the car-free pedestrian plaza at Station33 with greenspace and seating',
    caption: 'The car-free plaza, greenspace and splash pad at the heart of the block.',
    width: 3240,
    height: 2160,
  },
  {
    src: '/images/rendering-archway.jpg',
    alt: 'Rendering of the archway entrance into the Station33 courtyard',
    caption: 'The archway entrance from South Broad into the shared courtyard.',
    width: 2400,
    height: 1600,
  },
  {
    src: '/images/rendering-alley-buildings.jpg',
    alt: 'Rendering of the mixed-use buildings along the pedestrian alley at Station33',
    caption: 'Mixed-use buildings along the pedestrian alley, retail below and homes above.',
    width: 2400,
    height: 1600,
  },
  {
    src: '/images/rendering-medical-office.jpg',
    alt: 'Rendering of the medical office building at Station33',
    caption: 'Office space with ground-floor retail.',
    width: 2000,
    height: 1333,
  },
  {
    src: '/images/rendering-site-plan.jpg',
    alt: 'Site plan rendering showing the five Station33 buildings, courtyard and parking garage',
    caption: 'Site plan — five buildings, the shared courtyard and the 475-space garage.',
    width: 2000,
    height: 1333,
  },
]

const factSheet: { label: string; value: string }[] = [
  { label: 'Project', value: 'Station 33, a mixed-use development' },
  { label: 'Address', value: '3210 Broad Street, Chattanooga, TN 37408 (3300 block of South Broad Street)' },
  { label: 'Investment', value: '$130 million' },
  { label: 'Scale', value: '500,000 sq ft across five buildings and a parking garage' },
  { label: 'Hotel', value: '120-room Aloft Hotel by Marriott, seven stories, operated by Dynamic Group' },
  { label: 'Residential', value: 'More than 100 condos and townhomes, including six penthouse suites' },
  { label: 'Food & retail', value: 'Curated food hall with a shared bar, full-service restaurant and lounge, ground-floor retail' },
  { label: 'Landmark', value: 'Clock tower rising more than 75 feet' },
  { label: 'Parking', value: '475 spaces' },
  { label: 'Jobs', value: 'More than 300' },
  { label: 'Developer', value: 'Barbera Development, supported by The Kinsey Company' },
]

const timeline: { date: string; event: string }[] = [
  { date: 'Aug. 20, 2026', event: 'Groundbreaking' },
  { date: 'Summer 2026', event: 'Sitework begins' },
  { date: 'November 2026', event: 'Vertical construction begins' },
  { date: 'Fall 2028', event: 'Four main buildings complete' },
]

// Site icon files that genuinely exist in public/. The full logo lockup package
// (EPS/PNG) is not in the repo — reporters who need it should email the media
// contact rather than pulling a favicon.
const logoFiles: { href: string; label: string; detail: string }[] = [
  { href: '/favicon.svg', label: 'S33 icon (SVG)', detail: 'Vector, scales to any size' },
  { href: '/android-chrome-512x512.png', label: 'S33 icon (PNG)', detail: '512 × 512, cream ground' },
  { href: '/android-chrome-192x192.png', label: 'S33 icon (PNG)', detail: '192 × 192, cream ground' },
  { href: '/apple-touch-icon.png', label: 'S33 icon (PNG)', detail: '180 × 180, cream ground' },
]

const sections = [
  { id: 'contact', label: 'Media contact' },
  { id: 'releases', label: 'Releases' },
  { id: 'renderings', label: 'Renderings' },
  { id: 'fact-sheet', label: 'Fact sheet' },
  { id: 'boilerplate', label: 'Boilerplate' },
  { id: 'logos', label: 'Logos' },
  { id: 'usage', label: 'Usage & credit' },
]

const CREDIT_LINE = 'Rendering courtesy of Station 33'

const latestPost = newsPosts[0]

const boilerplateText = latestPost
  ? latestPost.boilerplate
      .map((section) => `${section.heading}\n\n${section.paragraphs.join('\n\n')}`)
      .join('\n\n')
  : ''

const contactText = [
  mediaContact.name,
  mediaContact.office && `Office ${mediaContact.office}`,
  mediaContact.cell && `Cell ${mediaContact.cell}`,
  mediaContact.email,
]
  .filter(Boolean)
  .join('\n')

const factSheetText = [
  ...factSheet.map((row) => `${row.label}: ${row.value}`),
  '',
  'Timeline',
  ...timeline.map((row) => `${row.date}: ${row.event}`),
].join('\n')

export default function PressKitPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header + jump nav */}
        <section className="pt-32 md:pt-40 pb-8 md:pb-10 bg-bg-dark">
          <div className="container">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold uppercase tracking-[0.18em] text-station-gold hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg"
            >
              <span aria-hidden="true">←</span> Newsroom
            </Link>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-text leading-[1.05] tracking-tight">
              Press kit
            </h1>
            <p className="mt-5 md:mt-6 max-w-3xl text-lg md:text-xl text-body-text leading-relaxed">
              Renderings, facts, approved boilerplate and a phone number — everything you need to
              file a story about <BrandName />. Images may be republished with credit.
            </p>

            <nav aria-label="Press kit sections" className="mt-8">
              <ul className="flex flex-wrap gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-xl bg-card-bg border border-station-gold/25 text-sm font-semibold text-primary-text hover:border-station-gold hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Media contact — first, because it is the most common reason to be here */}
        <section id="contact" className="pb-12 md:pb-16 bg-bg-dark scroll-mt-24">
          <div className="container">
            <div className="bg-card-bg border border-station-gold/25 rounded-2xl p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 md:gap-10 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-station-gold">
                    Media contact
                  </h2>
                  <p className="mt-3 text-2xl md:text-3xl font-semibold text-primary-text">
                    {mediaContact.name}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-lg text-body-text">
                    {mediaContact.office && (
                      <li>
                        <a
                          href={`tel:+1${mediaContact.office.replace(/\./g, '')}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          Office {mediaContact.office}
                        </a>
                      </li>
                    )}
                    {mediaContact.cell && (
                      <li>
                        <a
                          href={`tel:+1${mediaContact.cell.replace(/\./g, '')}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          Cell {mediaContact.cell}
                        </a>
                      </li>
                    )}
                    {mediaContact.email && (
                      <li>
                        <a
                          href={`mailto:${mediaContact.email}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          {mediaContact.email}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="md:justify-self-end">
                  <PressCopyButton text={contactText} label="Copy contact details" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Releases */}
        {newsPosts.length > 0 && (
          <section id="releases" className="pb-12 md:pb-16 bg-bg-dark scroll-mt-24">
            <div className="container">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-text mb-6 md:mb-8">
                Releases
              </h2>
              <ul className="space-y-4">
                {newsPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/news/${post.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-card-bg border border-station-gold/25 rounded-2xl p-5 md:p-6 hover:border-station-gold/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                    >
                      <time
                        dateTime={post.date}
                        className="text-sm font-semibold uppercase tracking-[0.16em] text-station-gold shrink-0 sm:w-44"
                      >
                        {formatPostDate(post.date)}
                      </time>
                      <span className="text-lg md:text-xl text-primary-text leading-snug group-hover:text-station-gold-light transition-colors">
                        {post.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Renderings */}
        <section id="renderings" className="section-standard bg-bg-darker scroll-mt-24">
          <div className="container">
            <div className="max-w-3xl mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-tight">
                Renderings
              </h2>
              <p className="mt-4 text-lg text-body-text leading-relaxed">
                High-resolution JPEGs, free to republish with the credit line below. Click a
                thumbnail to open the full-size file, or use the download link.
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {renderings.map((rendering) => (
                <li
                  key={rendering.src}
                  className="bg-card-bg border border-station-gold/25 rounded-2xl overflow-hidden flex flex-col"
                >
                  <a
                    href={rendering.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[3/2] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                  >
                    <Image
                      src={rendering.src}
                      alt={rendering.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </a>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-body-text leading-relaxed flex-1">{rendering.caption}</p>
                    <div className="mt-4 flex items-center justify-between gap-4">
                      <span className="text-xs text-body-text/70">
                        JPEG · {rendering.width} × {rendering.height}
                      </span>
                      <a
                        href={rendering.src}
                        download
                        className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl border-2 border-station-gold text-station-gold text-sm font-semibold hover:bg-station-gold hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                      >
                        Download
                        <span aria-hidden="true">↓</span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fact sheet */}
        <section id="fact-sheet" className="section-standard bg-bg-dark scroll-mt-24">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-tight">
                Fact sheet
              </h2>
              <PressCopyButton text={factSheetText} label="Copy fact sheet" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-2">
                <dl className="divide-y divide-divider-gray border-t border-divider-gray">
                  {factSheet.map((row) => (
                    <div key={row.label} className="py-4 grid sm:grid-cols-3 gap-1 sm:gap-6">
                      <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-station-gold">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-2 text-lg text-primary-text leading-snug">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-station-gold mb-4">
                  Timeline
                </h3>
                <ol className="space-y-4 border-l-2 border-station-gold/30 pl-5">
                  {timeline.map((row) => (
                    <li key={row.date}>
                      <span className="block text-primary-text font-semibold">{row.date}</span>
                      <span className="block text-body-text">{row.event}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Boilerplate */}
        {latestPost && (
          <section id="boilerplate" className="section-standard bg-bg-darker scroll-mt-24">
            <div className="container">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6 md:mb-8">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-tight">
                    Approved boilerplate
                  </h2>
                  <p className="mt-4 text-lg text-body-text leading-relaxed">
                    Use this language as-is. Please do not paraphrase the company descriptions.
                  </p>
                </div>
                <PressCopyButton text={boilerplateText} label="Copy all boilerplate" />
              </div>

              <div className="bg-card-bg border border-station-gold/25 rounded-2xl p-6 md:p-10 space-y-8 max-w-[75ch]">
                {latestPost.boilerplate.map((section) => (
                  <div key={section.heading}>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-primary-text">
                        {section.heading}
                      </h3>
                      <PressCopyButton
                        text={section.paragraphs.join('\n\n')}
                        label="Copy"
                        ariaLabel={`Copy ${section.heading} boilerplate`}
                      />
                    </div>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-base md:text-lg text-body-text leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Logos */}
        <section id="logos" className="section-standard bg-bg-dark scroll-mt-24">
          <div className="container">
            <div className="max-w-3xl mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-tight">
                Logos
              </h2>
              <p className="mt-4 text-lg text-body-text leading-relaxed">
                The square <BrandName /> app icon, in the sizes published on this site. The full
                &ldquo;Station 33&rdquo; wordmark lockup, print-resolution files and the brand
                guidelines are not hosted here — email{' '}
                {mediaContact.email ? (
                  <a
                    href={`mailto:${mediaContact.email}`}
                    className="text-station-gold hover:text-station-gold-light underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                  >
                    {mediaContact.email}
                  </a>
                ) : (
                  'the media contact'
                )}{' '}
                and we will send them over.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {logoFiles.map((file) => (
                <li key={file.href}>
                  <a
                    href={file.href}
                    download
                    className="flex flex-col h-full bg-card-bg border border-station-gold/25 rounded-2xl p-5 hover:border-station-gold/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                  >
                    <span className="text-primary-text font-semibold leading-snug">
                      {file.label}
                    </span>
                    <span className="mt-1 text-sm text-body-text">{file.detail}</span>
                    <span className="mt-4 text-sm font-semibold text-station-gold">
                      Download <span aria-hidden="true">↓</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-body-text/80 max-w-3xl">
              Partner and tenant marks (Aloft by Marriott and others) are not licensed for
              redistribution here — request those from the respective companies.
            </p>
          </div>
        </section>

        {/* Usage & credit */}
        <section id="usage" className="section-standard bg-bg-darker scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl bg-card-bg border border-station-gold/25 rounded-2xl p-6 md:p-10">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-text leading-tight">
                Usage &amp; credit
              </h2>
              <p className="mt-5 text-lg text-body-text leading-relaxed">
                News outlets, trade press and broadcasters have permission to reproduce the
                renderings and logos on this page in editorial coverage of <BrandName />, in print,
                online and on air, provided each image carries the credit line below. Images may be
                cropped or resized to fit your layout; please do not alter their content or use them
                in advertising or to imply endorsement.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <p className="text-lg md:text-xl text-primary-text font-semibold bg-bg-darker border border-divider-gray rounded-xl px-5 py-4">
                  {CREDIT_LINE}
                </p>
                <PressCopyButton text={CREDIT_LINE} label="Copy credit line" />
              </div>

              <p className="mt-6 text-body-text leading-relaxed">
                Renderings are artist&apos;s impressions and are subject to change as design and
                construction progress. Questions about a specific use? Call{' '}
                {mediaContact.name} at {mediaContact.cell ?? mediaContact.office}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
