import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Solutions | Trade Data for Research Institutions',
  description: 'Trade data solutions for research institutions and think tanks. Comprehensive datasets for economic research, policy analysis, and international trade studies.',
  keywords: ['research trade data', 'economic research', 'policy analysis', 'trade studies'],
  openGraph: {
    title: 'Research Solutions | Trade Data Research',
    description: 'Trade data for research institutions and think tanks.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/research',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-research.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research Solutions',
    description: 'Trade data for research.',
    images: ['https://indonesian-importer.vercel.app/og-image-research.jpg'],
  },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
