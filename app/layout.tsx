import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
  description: 'Experience the future of urban living at Station33 - a $100M+ mixed-use development featuring commercial spaces, residences, hospitality, and riverfront access in downtown Chattanooga, TN.',
  keywords: 'Station33, Chattanooga, mixed-use development, real estate, downtown Chattanooga, commercial space, residential, Tennessee',
  authors: [{ name: 'Station33' }],
  icons: {
    icon: 'https://res.cloudinary.com/dar0tub6u/image/upload/f_png,w_32,h_32/v1767897203/S33_Portrait_Logo_iakogv',
    apple: 'https://res.cloudinary.com/dar0tub6u/image/upload/f_png,w_180,h_180/v1767897203/S33_Portrait_Logo_iakogv',
  },
  openGraph: {
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    url: 'https://station33chattanooga.com',
    siteName: 'Station33',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://res.cloudinary.com/dar0tub6u/image/upload/f_auto,q_auto,w_1200,h_630/v1767897196/S33_Landscape_Logo_pxuskk',
        width: 1200,
        height: 630,
        alt: 'Station33 Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Station33 | Chattanooga\'s Premier Mixed-Use Development',
    description: 'Experience the future of urban living at Station33 in downtown Chattanooga, TN.',
    images: ['https://res.cloudinary.com/dar0tub6u/image/upload/f_auto,q_auto,w_1200,h_630/v1767897196/S33_Landscape_Logo_pxuskk'],
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
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
