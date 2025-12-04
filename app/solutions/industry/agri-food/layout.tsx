import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agri-Food Solutions | Agriculture Trade Intelligence',
  description: 'Trade data solutions for agriculture and food industries. Track commodity flows, food imports/exports, agricultural trends, and global food trade intelligence.',
  keywords: ['agriculture trade data', 'food imports exports', 'commodity intelligence', 'agri trade'],
  openGraph: {
    title: 'Agri-Food Solutions | Agriculture Trade Intelligence',
    description: 'Trade intelligence for agriculture and food sectors.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/agri-food',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-agrifood.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agri-Food Solutions',
    description: 'Agriculture trade intelligence.',
    images: ['https://indonesian-importer.vercel.app/og-image-agrifood.jpg'],
  },
}

export default function AgriFoodLayout({ children }: { children: React.ReactNode }) {
  return children
}
