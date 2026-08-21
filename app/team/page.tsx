import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import TeamPageClient from './TeamPageClient'

export const metadata: Metadata = pageMetadata({
  title: 'Our Team & Partners | Station33',
  description:
    'Meet the developers, designers, and community builders behind Station33 — the leadership team, the mission and values guiding the project, and our partners.',
  path: '/team',
})

export default function Page() {
  return <TeamPageClient />
}
