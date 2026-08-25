import type { Metadata } from 'next'
import SpaceInterestPage from '@/components/SpaceInterestPage'
import { pageMetadata } from '@/lib/seo'
import { restaurants } from '@/lib/spaces'

export const metadata: Metadata = pageMetadata({
  title: restaurants.metaTitle,
  description: restaurants.metaDescription,
  path: '/spaces/restaurants',
  image: restaurants.heroImage,
  imageAlt: restaurants.heroImageAlt,
})

export default function Page() {
  return <SpaceInterestPage config={restaurants} />
}
