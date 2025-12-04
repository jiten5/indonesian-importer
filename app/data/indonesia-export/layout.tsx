import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indonesia Export Data | Real-time Shipment Records & Analytics',
  description: 'Access real-time Indonesia export data with detailed shipment records, HS codes, buyers, ports, and values. Updated daily from customs data.',
  keywords: ['Indonesia export data', 'Indonesia customs data', 'export statistics', 'shipment records', 'HS code data'],
  openGraph: {
    title: 'Indonesia Export Data | Real-time Shipment Records',
    description: 'Access real-time Indonesia export data with detailed shipment records and analytics.',
    url: 'https://indonesian-importer.vercel.app/data/indonesia-export',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-export-data.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indonesia Export Data | Real-time Shipment Records',
    description: 'Access real-time Indonesia export data.',
    images: ['https://indonesian-importer.vercel.app/og-image-export-data.jpg'],
  },
}

export default function IndonesiaExportLayout({ children }: { children: React.ReactNode }) {
  return children
}
