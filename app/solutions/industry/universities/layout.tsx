import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'University Solutions | Academic Trade Research Data',
  description: 'Trade data solutions for universities and academic institutions. Research datasets, student projects, economic studies, and international trade education resources.',
  keywords: ['academic trade data', 'university research', 'trade education', 'economic research'],
  openGraph: {
    title: 'University Solutions | Academic Trade Research',
    description: 'Trade data for universities and academic research.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/universities',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-universities.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University Solutions',
    description: 'Academic trade research data.',
    images: ['https://indonesian-importer.vercel.app/og-image-universities.jpg'],
  },
}

export default function UniversitiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
