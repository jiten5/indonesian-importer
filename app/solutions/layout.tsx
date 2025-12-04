import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions | Trade Data Intelligence for Every Industry',
  description: 'Industry-specific trade data solutions for logistics, manufacturing, consulting, banking, healthcare, government, and research institutions.',
  openGraph: {
    title: 'Solutions | Trade Data Intelligence for Every Industry',
    description: 'Industry-specific trade data solutions for businesses worldwide.',
    url: 'https://indonesian-importer.vercel.app/solutions',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-solutions.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Trade Data Intelligence',
    description: 'Industry-specific trade data solutions.',
    images: ['https://indonesian-importer.vercel.app/og-image-solutions.jpg'],
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
