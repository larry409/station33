import type { Metadata } from 'next'

/**
 * Absolute base for canonicals and OG/Twitter image URLs. Netlify sets
 * DEPLOY_PRIME_URL on deploy previews/branch deploys and URL on production;
 * fall back to the prod domain for local dev. Without this, Next resolves
 * URLs to localhost, which social/link-preview crawlers can't reach.
 */
export const siteUrl =
  process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://station33.co'

export const siteName = 'Station33'

/** Default social share image, used when a page doesn't supply its own. */
export const defaultOgImage = '/images/og-station33-aerial.jpg'

/** Join a site-relative path onto the resolved site URL. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, siteUrl).toString()
}

type PageMetadataInput = {
  title: string
  description: string
  /** Site-relative route, e.g. `/community`. Used for canonical + og:url. */
  path: string
  /** Site-relative image path. Defaults to the aerial share image. */
  image?: string
  imageAlt?: string
  openGraphType?: 'website' | 'article'
}

/**
 * Build per-page metadata with a canonical URL. `openGraph` is replaced rather
 * than merged by Next, so this repeats siteName/locale/images for every page.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  imageAlt = 'Aerial view of Station33, a mixed-use development in downtown Chattanooga at dusk',
  openGraphType = 'website',
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: 'en_US',
      type: openGraphType,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
