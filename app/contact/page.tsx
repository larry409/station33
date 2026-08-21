import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = pageMetadata({
  title: 'Contact | Station33',
  description:
    'Leasing, investment, or partnership — send the Station33 team a message at info@station33.co, or visit 3210 Broad Street in Chattanooga’s South Broad District.',
  path: '/contact',
})

export default function Page() {
  return <ContactPageClient />
}
