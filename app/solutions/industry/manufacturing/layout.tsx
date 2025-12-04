import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Industry Solutions | Trade Intelligence for Manufacturers',
  description: 'Trade data solutions for manufacturing companies. Find suppliers, track competitors, analyze market trends, and optimize procurement with trade intelligence.',
  keywords: ['manufacturing trade data', 'supplier intelligence', 'procurement analytics', 'industrial data'],
  openGraph: {
    title: 'Manufacturing Industry Solutions',
    description: 'Trade intelligence for manufacturing and procurement.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/manufacturing',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-manufacturing.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing Solutions',
    description: 'Trade intelligence for manufacturers.',
    images: ['https://indonesian-importer.vercel.app/og-image-manufacturing.jpg'],
  },
}

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children
}
