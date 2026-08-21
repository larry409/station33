import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BrandName, brandify } from '@/components/BrandName'
import { formatPostDate, mediaContact, newsPosts } from '@/lib/news'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Newsroom | Station33',
  description:
    'Announcements, press releases and construction updates from Station33, the mixed-use development on South Broad Street in Chattanooga, Tennessee.',
  path: '/news',
})

// The lead story gets the full-width treatment; anything after it stacks below.
// With a single post this reads as an intentional feature, not an empty grid.
const [leadPost, ...archivePosts] = newsPosts

export default function NewsIndexPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-32 md:pt-40 pb-10 md:pb-14 bg-bg-dark">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-station-gold">
                  Newsroom
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-text leading-[1.05] tracking-tight">
                  News &amp; announcements
                </h1>
                <p className="mt-5 md:mt-6 text-lg md:text-xl text-body-text leading-relaxed">
                  Press releases, milestones and construction updates from <BrandName /> on South
                  Broad Street in Chattanooga.
                </p>
              </div>

              <Link
                href="/news/press-kit"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold shrink-0"
              >
                Press kit &amp; renderings
                <span aria-hidden="true" className="text-2xl">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Lead story */}
        {leadPost && (
          <section className="pb-16 md:pb-24 bg-bg-dark">
            <div className="container">
              <article className="group bg-card-bg border border-station-gold/25 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-station-gold/60">
                <div className="grid lg:grid-cols-2">
                  <Link
                    href={`/news/${leadPost.slug}`}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[3/2] lg:aspect-auto lg:min-h-[380px] overflow-hidden"
                  >
                    <Image
                      src={leadPost.heroImage}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </Link>

                  <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-station-gold">
                      <span>{leadPost.kind}</span>
                      <span aria-hidden="true" className="text-divider-gray">
                        /
                      </span>
                      <time dateTime={leadPost.date}>{formatPostDate(leadPost.date)}</time>
                    </div>

                    <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-text leading-tight">
                      <Link
                        href={`/news/${leadPost.slug}`}
                        className="hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg"
                      >
                        {brandify(leadPost.title)}
                      </Link>
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-body-text leading-relaxed">
                      {brandify(leadPost.dek)}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-station-gold font-semibold">
                      Read the release
                      <span aria-hidden="true" className="text-xl">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* Archive */}
        {archivePosts.length > 0 && (
          <section className="section-standard bg-bg-darker">
            <div className="container">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-text mb-8 md:mb-12">
                More from the newsroom
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {archivePosts.map((post) => (
                  <li key={post.slug}>
                    <article className="group h-full bg-card-bg border border-station-gold/25 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 hover:border-station-gold/60">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={post.heroImage}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-station-gold">
                          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                        </div>
                        <h3 className="mt-3 text-xl font-semibold text-primary-text leading-snug">
                          <Link
                            href={`/news/${post.slug}`}
                            className="hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg"
                          >
                            {brandify(post.title)}
                          </Link>
                        </h3>
                        <p className="mt-3 text-body-text leading-relaxed">{brandify(post.dek)}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Media contact */}
        <section className="section-standard bg-bg-darker">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-station-green/10 to-station-gold/10 border border-station-gold/30 rounded-3xl p-10 md:p-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-5">
                Working on a story?
              </h2>
              <p className="text-lg md:text-xl text-body-text mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Renderings, fact sheet and approved boilerplate are in the press kit. For interviews
                and everything else, reach {mediaContact.name}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/news/press-kit"
                  className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold text-base md:text-lg shadow-xl min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                >
                  Open the press kit
                  <span aria-hidden="true" className="text-2xl">
                    →
                  </span>
                </Link>
                {mediaContact.email && (
                  <a
                    href={`mailto:${mediaContact.email}`}
                    className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 border-2 border-station-gold text-station-gold rounded-2xl hover:bg-station-gold hover:text-white transition-all duration-300 font-semibold text-base md:text-lg min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold"
                  >
                    {mediaContact.email}
                    <span aria-hidden="true" className="text-2xl">
                      ✉
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
