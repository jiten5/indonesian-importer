import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trade Data API | REST API for Import Export Data',
  description: 'RESTful API for trade data access. Get real-time import-export data, shipment records, supplier info, and customs data with simple API calls.',
  keywords: ['trade data API', 'import export API', 'customs data API', 'REST API', 'shipment data API'],
  openGraph: {
    title: 'Trade Data API | REST API for Import Export Data',
    description: 'RESTful API for accessing global trade data and shipment records.',
    url: 'https://indonesian-importer.vercel.app/platform/api',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-api.jpg',
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
    description: 'RESTful API for global trade data access.',
    images: ['https://indonesian-importer.vercel.app/og-image-api.jpg'],
  },
}

export default function APILayout({ children }: { children: React.ReactNode }) {
  return children
}
