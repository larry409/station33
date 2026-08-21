import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import CommunityPageClient from './CommunityPageClient'

export const metadata: Metadata = pageMetadata({
  title: 'Community & Amenities | Station33',
  description:
    'Rooftop lounges, a 120-room Aloft by Marriott, Riverwalk access, and year-round events — see what walkable living looks like at Station33 in Chattanooga.',
  path: '/community',
})

export default function Page() {
  return <CommunityPageClient />
}
