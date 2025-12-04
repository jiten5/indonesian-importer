import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Listings | Trade Data by Product Category',
  description: 'Browse products by category, HS code, and industry. Access detailed trade statistics, market trends, and supplier information for any product.',
  openGraph: {
    title: 'Product Listings | Trade Data by Product',
    description: 'Browse products with detailed trade statistics.',
    url: 'https://indonesian-importer.vercel.app/products-listing',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-product-listings.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Listings',
    description: 'Trade data by product category.',
    images: ['https://indonesian-importer.vercel.app/og-image-product-listings.jpg'],
  },
}

export default function ProductsListingLayout({ children }: { children: React.ReactNode }) {
  return children
}
