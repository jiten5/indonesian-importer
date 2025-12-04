import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Trade Data Solutions & Analytics Tools',
  description: 'Explore our trade data products: Data Platform, Trade Data API, and Data License. Powerful tools for import-export intelligence and market research.',
  openGraph: {
    title: 'Products | Trade Data Solutions & Analytics Tools',
    description: 'Explore our trade data products and analytics tools for businesses.',
    url: 'https://indonesian-importer.vercel.app/products',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-products.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Trade Data Solutions',
    description: 'Explore our trade data products and analytics tools.',
    images: ['https://indonesian-importer.vercel.app/og-image-products.jpg'],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
