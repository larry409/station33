import type { MetadataRoute } from 'next'
import { newsPosts } from '@/lib/news'
import { absoluteUrl } from '@/lib/seo'

type Entry = MetadataRoute.Sitemap[number]

const staticRoutes: Array<{
  path: string
  changeFrequency: Entry['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/spaces/residences', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/spaces/retail', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/spaces/offices', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/spaces/restaurants', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/community', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/investors', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/team', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/news/press-kit', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const latestPostDate = newsPosts.reduce<Date | null>((latest, post) => {
    const date = new Date(post.date)
    return !latest || date > latest ? date : latest
  }, null)

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: absoluteUrl(path),
      // The news index changes whenever a post is added.
      lastModified: path === '/news' ? latestPostDate ?? now : now,
      changeFrequency,
      priority,
    })),
    ...newsPosts.map((post) => ({
      url: absoluteUrl(`/news/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ]
}
