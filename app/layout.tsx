import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

/* ─── Fonts ─── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

/* ─── Root Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL('https://thepurplemango.in'),
  title: {
    default: 'The Purple Mango | Luxury Resort in Lonavala, Western Ghats',
    template: '%s | The Purple Mango',
  },
  description:
    'Experience a luxury mountain retreat at The Purple Mango resort in the Western Ghats at Karla, Lonavala. 100% pure vegetarian. Breathtaking views, elevated dining and thoughtful hospitality.',
  keywords: [
    'The Purple Mango',
    'Lonavala resort',
    'luxury resort Karla',
    'Western Ghats retreat',
    'vegetarian resort India',
    'Jain friendly resort',
    'boutique hotel Lonavala',
    'mountain resort Maharashtra',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thepurplemango.in',
    siteName: 'The Purple Mango',
    title: 'The Purple Mango | Luxury Resort in Lonavala, Western Ghats',
    description:
      'A luxury mountain retreat nestled in the mist-covered Western Ghats. Wholesome food, expansive views and unhurried hospitality.',
    images: [
      {
        url: '/images/hero/hero-1.jpg',
        width: 1920,
        height: 1080,
        alt: 'Aerial view of The Purple Mango resort in the Western Ghats hills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Purple Mango | Luxury Resort in Lonavala',
    description:
      'A luxury mountain retreat in the Western Ghats at Karla, Lonavala.',
    images: ['/images/hero/hero-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable}`}
    >
      <head>
        <link rel="canonical" href="https://thepurplemango.in" />
        <meta name="theme-color" content="#3D2050" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-montserrat antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
