import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
  description: 'Experience the future of urban living at Station33 - a $100M+ mixed-use development featuring commercial spaces, residences, hospitality, and riverfront access in downtown Chattanooga, TN.',
  keywords: 'Station33, Chattanooga, mixed-use development, real estate, downtown Chattanooga, commercial space, residential, Tennessee',
  authors: [{ name: 'Station33' }],
  openGraph: {
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    url: 'https://station33chattanooga.com',
    siteName: 'Station33',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
