import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indonesia Import Data | Real-time Shipment Records & Analytics',
  description: 'Access real-time Indonesia import data with detailed shipment records, HS codes, suppliers, ports, and values. Updated daily from customs data.',
  keywords: ['Indonesia import data', 'Indonesia customs data', 'import statistics', 'shipment records', 'HS code data'],
  openGraph: {
    title: 'Indonesia Import Data | Real-time Shipment Records',
    description: 'Access real-time Indonesia import data with detailed shipment records and analytics.',
    url: 'https://indonesian-importer.vercel.app/data/indonesia-import',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-import-data.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indonesia Import Data | Real-time Shipment Records',
    description: 'Access real-time Indonesia import data.',
    images: ['https://indonesian-importer.vercel.app/og-image-import-data.jpg'],
  },
}

export default function IndonesiaImportLayout({ children }: { children: React.ReactNode }) {
  return children
}
