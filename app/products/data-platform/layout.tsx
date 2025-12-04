import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Platform | Cloud-Based Trade Intelligence Solution',
  description: 'Enterprise-grade data platform for trade intelligence. Cloud-based solution with unlimited data access, advanced analytics, and seamless integrations.',
  openGraph: {
    title: 'Data Platform | Cloud-Based Trade Intelligence',
    description: 'Enterprise-grade data platform for trade intelligence.',
    url: 'https://indonesian-importer.vercel.app/products/data-platform',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-data-platform.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Platform',
    description: 'Enterprise-grade trade intelligence platform.',
    images: ['https://indonesian-importer.vercel.app/og-image-data-platform.jpg'],
  },
}

export default function DataPlatformLayout({ children }: { children: React.ReactNode }) {
  return children
}
