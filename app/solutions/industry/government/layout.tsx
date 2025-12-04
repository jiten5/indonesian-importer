import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Solutions | Trade Policy & Economic Intelligence',
  description: 'Trade data solutions for government agencies. Trade policy analysis, economic monitoring, customs intelligence, and international trade statistics.',
  keywords: ['government trade data', 'trade policy', 'customs intelligence', 'economic statistics'],
  openGraph: {
    title: 'Government Solutions | Trade Policy Intelligence',
    description: 'Trade intelligence for government and policy makers.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/government',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-government.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Government Solutions',
    description: 'Trade policy intelligence.',
    images: ['https://indonesian-importer.vercel.app/og-image-government.jpg'],
  },
}

export default function GovernmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
