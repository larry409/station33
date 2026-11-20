import type { Metadata } from 'next'

/** The one domain search engines should index. */
export const productionUrl = 'https://station33.co'

/**
 * True only for Netlify's production build. Netlify sets CONTEXT to
 * `production`, `deploy-preview` or `branch-deploy`; local dev has none.
 */
export const isProductionBuild = process.env.CONTEXT === 'production'

/**
 * Absolute base for canonicals, sitemap, robots and OG/Twitter image URLs.
 *
 * Production always uses the custom domain. Do NOT read DEPLOY_PRIME_URL here
 * for production: on production builds Netlify sets it to
 * `https://main--<site>.netlify.app`, which made every canonical and sitemap
 * entry point Google at the Netlify branch URL instead of station33.co.
 * Previews use their own URL so share images resolve; they are noindexed.
 */
export const siteUrl = isProductionBuild
  ? productionUrl
  : process.env.DEPLOY_PRIME_URL || productionUrl

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
