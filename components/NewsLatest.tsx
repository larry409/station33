import Image from 'next/image'
import Link from 'next/link'
import { brandify } from './BrandName'
import { formatPostDate, newsPosts } from '@/lib/news'

/**
 * Homepage newsroom teaser.
 *
 * The newest post gets the same two-column feature treatment as the lead story
 * on `/news`, so a single-post newsroom reads as a deliberate feature rather
 * than a grid with holes. Any older posts stack underneath in a card grid.
 */
const [leadPost, ...morePosts] = newsPosts
const recentPosts = morePosts.slice(0, 2)

export default function NewsLatest() {
  if (!leadPost) return null

  return (
    <section className="section-standard bg-bg-darker" aria-labelledby="latest-news-heading">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-8 md:mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-station-gold">
              Newsroom
            </p>
            <h2
              id="latest-news-heading"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-tight"
            >
              Latest news
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-station-gold font-semibold hover:text-station-gold-light transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg shrink-0"
          >
            All news
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </Link>
        </div>

        <article className="group bg-card-bg border border-station-gold/25 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-station-gold/60">
          <div className="grid lg:grid-cols-2">
            <Link
              href={`/news/${leadPost.slug}`}
              tabIndex={-1}
              aria-hidden="true"
              className="relative block aspect-[3/2] lg:aspect-auto lg:min-h-[340px] overflow-hidden"
            >
              <Image
                src={leadPost.heroImage}
                alt=""
                fill
                sizes="(max-width: 1024px) 92vw, (min-width: 1920px) 740px, 42vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </Link>

            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-station-gold">
                <span>{leadPost.kind}</span>
                <span aria-hidden="true" className="text-divider-gray">
                  /
                </span>
                <time dateTime={leadPost.date}>{formatPostDate(leadPost.date)}</time>
              </div>

              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-primary-text leading-tight">
                <Link
                  href={`/news/${leadPost.slug}`}
                  className="hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg"
                >
                  {brandify(leadPost.title)}
                </Link>
              </h3>

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

        {recentPosts.length > 0 && (
          <ul className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <article className="group h-full bg-card-bg border border-station-gold/25 rounded-2xl overflow-hidden flex flex-col transition-colors duration-300 hover:border-station-gold/60">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 92vw, (min-width: 1920px) 740px, 42vw"
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
        )}
      </div>
    </section>
  )
}
