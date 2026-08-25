import type { Metadata } from 'next'
import SpaceInterestPage from '@/components/SpaceInterestPage'
import { pageMetadata } from '@/lib/seo'
import { retail } from '@/lib/spaces'

export const metadata: Metadata = pageMetadata({
  title: retail.metaTitle,
  description: retail.metaDescription,
  path: '/spaces/retail',
  image: retail.heroImage,
  imageAlt: retail.heroImageAlt,
})

export default function Page() {
  return <SpaceInterestPage config={retail} />
}
