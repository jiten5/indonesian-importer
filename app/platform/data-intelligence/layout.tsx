import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Intelligence Platform | Real-time Trade Analytics',
  description: 'Powerful data intelligence platform for trade analysis. Access real-time shipment data, supplier insights, market trends, and competitive intelligence.',
  openGraph: {
    title: 'Data Intelligence Platform | Real-time Trade Analytics',
    description: 'Powerful data intelligence platform for trade analysis and market insights.',
    url: 'https://indonesian-importer.vercel.app/platform/data-intelligence',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-platform.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Intelligence Platform',
    description: 'Real-time trade analytics and market insights.',
    images: ['https://indonesian-importer.vercel.app/og-image-platform.jpg'],
  },
}

export default function DataIntelligenceLayout({ children }: { children: React.ReactNode }) {
  return children
}
