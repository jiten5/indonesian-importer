import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data License | Custom Trade Data Licensing Solutions',
  description: 'Flexible data licensing options for trade intelligence. Custom data packages, white-label solutions, and enterprise data distribution rights.',
  openGraph: {
    title: 'Data License | Custom Trade Data Licensing',
    description: 'Flexible data licensing options for trade intelligence.',
    url: 'https://indonesian-importer.vercel.app/products/data-license',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-data-license.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data License',
    description: 'Custom trade data licensing solutions.',
    images: ['https://indonesian-importer.vercel.app/og-image-data-license.jpg'],
  },
}

export default function DataLicenseLayout({ children }: { children: React.ReactNode }) {
  return children
}
