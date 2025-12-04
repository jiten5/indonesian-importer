import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Data API | Developer-Friendly REST API',
  description: 'Developer-friendly trade data API with comprehensive documentation. Access import-export data, shipment records, and analytics programmatically with our REST API.',
  openGraph: {
    title: 'Trade Data API | Developer-Friendly REST API',
    description: 'Access trade data programmatically with our REST API.',
    url: 'https://indonesian-importer.vercel.app/products/trade-data-api',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-trade-api.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Data API',
    description: 'Developer-friendly REST API for trade data.',
    images: ['https://indonesian-importer.vercel.app/og-image-trade-api.jpg'],
  },
}

export default function TradeDataAPILayout({ children }: { children: React.ReactNode }) {
  return children
}
