import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import InvestorsPageClient from './InvestorsPageClient'

export const metadata: Metadata = pageMetadata({
  title: 'Investment Opportunity | Station33',
  description:
    'A $100M+ mixed-use development on South Broad, across from Erlanger Park and The Foundry — the Station33 project overview, market data, and investment case.',
  path: '/investors',
})

export default function Page() {
  return <InvestorsPageClient />
}
