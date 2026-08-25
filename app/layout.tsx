import type { Metadata, Viewport } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { absoluteUrl, siteName, siteUrl } from '@/lib/seo'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
  description: 'Experience the future of urban living at Station33 - a $100M+ mixed-use development featuring commercial spaces, residences, hospitality, and riverfront access in downtown Chattanooga, TN.',
  keywords: 'Station33, Chattanooga, mixed-use development, real estate, downtown Chattanooga, commercial space, residential, Tennessee',
  authors: [{ name: 'Station33' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    url: 'https://station33.co',
    siteName: 'Station33',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-station33-aerial.jpg',
        width: 1200,
        height: 630,
        alt: 'Aerial view of Station33, a mixed-use development in downtown Chattanooga at dusk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    images: ['/images/og-station33-aerial.jpg'],
  },
}

// Next 16 warns when `viewport` lives inside the `metadata` export.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Matches --bg-dark so mobile browser chrome and the pre-paint canvas are
  // dark rather than white.
  themeColor: '#2b2f33',
  colorScheme: 'dark',
  // No maximumScale: capping zoom at 1 blocks pinch-to-zoom, which fails
  // WCAG 2.1 SC 1.4.4 (Resize Text).
}

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: '3210 Broad Street',
  addressLocality: 'Chattanooga',
  addressRegion: 'TN',
  postalCode: '37408',
  addressCountry: 'US',
}

// Sitewide structured data. `sameAs` is intentionally empty until verified
// social profile URLs exist, and the Place omits `geo` rather than publishing
// unverified coordinates.
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': absoluteUrl('/#organization'),
  name: siteName,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/android-chrome-512x512.png'),
  description:
    'Developer of Station33, a mixed-use development on South Broad in Chattanooga, Tennessee.',
  address: postalAddress,
  sameAs: [],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'info@station33.co',
      areaServed: 'US',
      availableLanguage: ['en'],
    },
  ],
}

const placeSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': absoluteUrl('/#place'),
  name: siteName,
  description:
    'Station33 — a mixed-use development in the South Broad District of Chattanooga, Tennessee, with residences, commercial space, dining, and a 120-room Aloft by Marriott.',
  url: absoluteUrl('/'),
  image: absoluteUrl('/images/og-station33-aerial.jpg'),
  address: postalAddress,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className={interTight.className}>
        <JsonLd data={[organizationSchema, placeSchema]} />
        {children}
      </body>
    </html>
  )
}
