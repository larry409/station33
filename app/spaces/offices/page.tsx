import type { Metadata } from 'next'
import SpaceInterestPage from '@/components/SpaceInterestPage'
import { pageMetadata } from '@/lib/seo'
import { offices } from '@/lib/spaces'

export const metadata: Metadata = pageMetadata({
  title: offices.metaTitle,
  description: offices.metaDescription,
  path: '/spaces/offices',
  image: offices.heroImage,
  imageAlt: offices.heroImageAlt,
})

export default function Page() {
  return <SpaceInterestPage config={offices} />
}
