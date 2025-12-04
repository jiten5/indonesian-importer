import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Plans | Trade Data Intelligence Platform',
  description: 'Flexible pricing plans for trade data access. Start free, upgrade as you grow. Enterprise solutions with unlimited data access, API, and dedicated support.',
  openGraph: {
    title: 'Pricing Plans | Trade Data Intelligence Platform',
    description: 'Flexible pricing plans for trade data access. Start free, upgrade as you grow.',
    url: 'https://indonesian-importer.vercel.app/pricing',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-pricing.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans | Trade Data Intelligence Platform',
    description: 'Flexible pricing plans for trade data access.',
    images: ['https://indonesian-importer.vercel.app/og-image-pricing.jpg'],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
