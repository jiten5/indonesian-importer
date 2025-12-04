import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search Trade Data | Import Export Shipment Records',
  description: 'Search 50M+ import-export shipment records. Filter by product, HS code, country, supplier, port, and date. Real-time trade data analytics.',
  openGraph: {
    title: 'Search Trade Data | Import Export Shipment Records',
    description: 'Search 50M+ import-export shipment records with advanced filters.',
    url: 'https://indonesian-importer.vercel.app/search',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-search.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search Trade Data | Import Export Shipment Records',
    description: 'Search 50M+ import-export shipment records.',
    images: ['https://indonesian-importer.vercel.app/og-image-search.jpg'],
  },
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
