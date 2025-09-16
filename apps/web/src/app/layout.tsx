import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TOFI - Swiss Flower Marketplace',
  description: 'Premium flowers and gifts delivered across Deutschschweiz. Same-day delivery available in Zürich, Basel, Bern, and more.',
  keywords: ['flowers', 'gifts', 'delivery', 'Switzerland', 'Schweiz', 'bouquet'],
  authors: [{ name: 'TOFI' }],
  creator: 'TOFI',
  publisher: 'TOFI',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    alternateLocale: 'en',
    url: 'https://tofi.ch',
    siteName: 'TOFI',
    title: 'TOFI - Swiss Flower Marketplace',
    description: 'Premium flowers and gifts delivered across Deutschschweiz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOFI - Swiss Flower Marketplace',
    description: 'Premium flowers and gifts delivered across Deutschschweiz',
  },
  other: {
    'color-scheme': 'light dark',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH" dir="ltr">
      <head>
        <meta name="theme-color" content="#0b3d3d" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#e8f6f6" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  )
}