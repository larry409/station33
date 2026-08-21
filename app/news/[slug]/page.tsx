import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { brandify } from '@/components/BrandName'
import {
  formatPostDate,
  getPost,
  newsPosts,
  type NewsBlock,
  type NewsPost,
} from '@/lib/news'
import { absoluteUrl, siteName } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    return { title: 'Not found | Station33 Newsroom' }
  }

  const url = `/news/${post.slug}`

  return {
    title: `${post.title} | Station33`,
    description: post.dek,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.dek,
      url: absoluteUrl(url),
      siteName,
      locale: 'en_US',
      publishedTime: post.date,
      images: [
        {
          url: post.heroImage,
          width: post.heroWidth,
          height: post.heroHeight,
          alt: post.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.dek,
      images: [post.heroImage],
    },
  }
}

/** Long-form measure. Body copy here is much longer than anywhere else on the site. */
const MEASURE = 'max-w-[68ch]'

function Block({ block }: { block: NewsBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className={`${MEASURE} text-lg md:text-xl text-body-text leading-relaxed`}>
          {brandify(block.text)}
        </p>
      )

    case 'heading':
      return (
        <h2
          className={`${MEASURE} text-2xl md:text-3xl font-semibold text-primary-text pt-4 leading-tight`}
        >
          {brandify(block.text)}
        </h2>
      )

    case 'list': {
      const items = block.items.map((item, i) => (
        <li key={i} className="pl-2 marker:text-station-gold marker:font-semibold">
          {brandify(item)}
        </li>
      ))
      const listClass = `${MEASURE} space-y-3 pl-6 text-lg md:text-xl text-body-text leading-relaxed`
      return block.ordered ? (
        <ol className={`${listClass} list-decimal`}>{items}</ol>
      ) : (
        <ul className={`${listClass} list-disc`}>{items}</ul>
      )
    }

    case 'quote':
      return (
        <figure className={`${MEASURE} my-2 border-l-4 border-station-gold pl-6 md:pl-8 py-1`}>
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-primary-text leading-snug font-medium">
            <span aria-hidden="true" className="text-station-gold">
              &ldquo;
            </span>
            {brandify(block.text)}
            <span aria-hidden="true" className="text-station-gold">
              &rdquo;
            </span>
          </blockquote>
          <figcaption className="mt-4 text-base text-body-text">
            <span className="text-station-gold font-semibold">{block.attribution}</span>
            {block.role && <span>, {block.role}</span>}
            {block.note && <span className="italic"> ({block.note})</span>}
          </figcaption>
        </figure>
      )
  }
}

function ArticleJsonLd({ post }: { post: NewsPost }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    description: post.dek,
    datePublished: post.date,
    image: [absoluteUrl(post.heroImage)],
    author: { '@type': 'Organization', name: siteName },
    publisher: { '@type': 'Organization', name: siteName },
    mainEntityOfPage: absoluteUrl(`/news/${post.slug}`),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main>
        <ArticleJsonLd post={post} />

        {/* Hero */}
        <section className="relative pt-24 md:pt-32">
          <div className="container">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold uppercase tracking-[0.18em] text-station-gold hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded-lg"
            >
              <span aria-hidden="true">←</span> Newsroom
            </Link>

            {/* alt="" is deliberate: the figcaption below carries the same
                description, so alt text would make it read twice. */}
            <figure className="mt-6">
              <div className="relative rounded-2xl overflow-hidden border border-station-gold/25">
                <Image
                  src={post.heroImage}
                  alt=""
                  width={post.heroWidth}
                  height={post.heroHeight}
                  priority
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-sm text-body-text/70">{post.heroAlt}</figcaption>
            </figure>
          </div>
        </section>

        {/* Headline block */}
        <section className="pt-10 md:pt-14 pb-8 md:pb-10 bg-bg-dark">
          <div className="container">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold uppercase tracking-[0.18em] text-station-gold">
                <span>{post.kind}</span>
                <span aria-hidden="true" className="text-divider-gray">
                  /
                </span>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text leading-[1.1] tracking-tight">
                {brandify(post.title)}
              </h1>

              <p className="mt-5 md:mt-6 text-lg md:text-2xl text-body-text leading-relaxed">
                {brandify(post.dek)}
              </p>
            </div>
          </div>
        </section>

        {/* Stat strip */}
        <section className="pb-10 md:pb-14 bg-bg-dark">
          <div className="container">
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {post.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse rounded-2xl bg-card-bg border border-station-gold/25 px-4 py-5"
                >
                  {/* Reversed column so the value reads above the label visually
                      while the dt/dd pair stays in the order a11y tools expect. */}
                  <dt className="text-xs md:text-sm text-body-text mt-2 leading-tight">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl md:text-3xl font-semibold text-station-gold leading-none">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Body */}
        <article className="pb-16 md:pb-24 bg-bg-dark">
          <div className="container">
            <div className="space-y-7 md:space-y-8">
              {post.dateline && (
                <p className={`${MEASURE} text-sm font-semibold uppercase tracking-[0.14em] text-body-text/80`}>
                  {post.dateline}
                </p>
              )}
              {post.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <p className="mt-12 text-center text-station-gold font-semibold tracking-[0.4em]" aria-hidden="true">
              # # #
            </p>
          </div>
        </article>

        {/* Development team */}
        {post.credits.length > 0 && (
          <section className="section-standard bg-bg-darker">
            <div className="container">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-text mb-8 md:mb-12 leading-tight">
                Development team
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {post.credits.map((credit) => (
                  <div
                    key={`${credit.role}-${credit.name}`}
                    className="bg-card-bg border border-station-gold/25 rounded-2xl p-5 md:p-6"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-station-gold">
                      {credit.role}
                    </dt>
                    <dd className="mt-2 text-lg text-primary-text leading-snug">
                      {credit.url ? (
                        <a
                          href={credit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-station-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          {credit.name}
                        </a>
                      ) : (
                        credit.name
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Boilerplate + media contact */}
        <section className="section-standard bg-bg-dark">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              <div className="lg:col-span-2 space-y-8">
                {post.boilerplate.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-xl md:text-2xl font-semibold text-primary-text mb-3">
                      {brandify(section.heading)}
                    </h2>
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-base md:text-lg text-body-text leading-relaxed">
                        {brandify(paragraph)}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <aside className="lg:col-span-1">
                <div className="bg-card-bg border border-station-gold/25 rounded-2xl p-6 md:p-8 lg:sticky lg:top-28">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-station-gold">
                    Media contact
                  </h2>
                  <p className="mt-3 text-xl text-primary-text font-semibold">
                    {post.mediaContact.name}
                  </p>
                  <ul className="mt-4 space-y-2 text-body-text">
                    {post.mediaContact.office && (
                      <li>
                        <a
                          href={`tel:+1${post.mediaContact.office.replace(/\./g, '')}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          Office {post.mediaContact.office}
                        </a>
                      </li>
                    )}
                    {post.mediaContact.cell && (
                      <li>
                        <a
                          href={`tel:+1${post.mediaContact.cell.replace(/\./g, '')}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          Cell {post.mediaContact.cell}
                        </a>
                      </li>
                    )}
                    {post.mediaContact.email && (
                      <li>
                        <a
                          href={`mailto:${post.mediaContact.email}`}
                          className="inline-flex items-center min-h-[44px] hover:text-station-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold rounded"
                        >
                          {post.mediaContact.email}
                        </a>
                      </li>
                    )}
                  </ul>

                  <Link
                    href="/news/press-kit"
                    className="mt-6 inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-station-gold text-white rounded-2xl hover:bg-station-gold-light transition-all duration-300 font-semibold min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-station-gold focus-visible:ring-offset-2 focus-visible:ring-offset-card-bg"
                  >
                    Press kit &amp; renderings
                    <span aria-hidden="true" className="text-2xl">
                      →
                    </span>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
