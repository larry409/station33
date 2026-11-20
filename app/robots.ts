import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'

// No `host` line: it is a Yandex-only directive that Google ignores.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
