import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
  description: 'Experience the future of urban living at Station33 - a $100M+ mixed-use development featuring commercial spaces, residences, hospitality, and riverfront access in downtown Chattanooga, TN.',
  keywords: 'Station33, Chattanooga, mixed-use development, real estate, downtown Chattanooga, commercial space, residential, Tennessee',
  authors: [{ name: 'Station33' }],
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
        url: '/images/og-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Station33 - Chattanooga\'s premier mixed-use development at dusk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    images: ['/images/og-share.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className={interTight.className}>{children}</body>
    </html>
  )
}
