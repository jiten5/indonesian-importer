import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Solutions | Trade Intelligence for Consultants',
  description: 'Trade data solutions for consulting firms. Market research, competitive analysis, client reports, and strategic insights with comprehensive trade intelligence.',
  keywords: ['consulting trade data', 'market research', 'competitive intelligence', 'strategic consulting'],
  openGraph: {
    title: 'Consulting Solutions | Trade Intelligence',
    description: 'Trade intelligence for consulting and advisory firms.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/consulting',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-consulting.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting Solutions',
    description: 'Trade intelligence for consultants.',
    images: ['https://indonesian-importer.vercel.app/og-image-consulting.jpg'],
  },
}

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children
}
