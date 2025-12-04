import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Trade Data Intelligence Platform',
  description: 'Learn about our mission to provide comprehensive trade data analysis and help businesses expand globally with actionable insights from 50M+ shipment records.',
  openGraph: {
    title: 'About Us | Trade Data Intelligence Platform',
    description: 'Learn about our mission to provide comprehensive trade data analysis and help businesses expand globally.',
    url: 'https://indonesian-importer.vercel.app/about',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Trade Data Intelligence Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Trade Data Intelligence Platform',
    description: 'Learn about our mission to provide comprehensive trade data analysis.',
    images: ['https://indonesian-importer.vercel.app/og-image-about.jpg'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
