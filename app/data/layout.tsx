import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Data Solutions | Access Import Export Intelligence',
  description: 'Comprehensive trade data solutions for businesses. Access global customs data, market intelligence, and supply chain insights.',
  openGraph: {
    title: 'Trade Data Solutions',
    description: 'Access global trade data and market intelligence.',
    url: 'https://indonesian-importer.vercel.app/data',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-data.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Data Solutions',
    description: 'Access global trade data.',
    images: ['https://indonesian-importer.vercel.app/og-image-data.jpg'],
  },
}

export default function DataLayout({ children }: { children: React.ReactNode }) {
  return children
}
