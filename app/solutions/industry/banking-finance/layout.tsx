import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banking & Finance Solutions | Trade Finance Intelligence',
  description: 'Trade data solutions for banking and finance. Risk assessment, trade finance decisions, compliance monitoring, and market analysis for financial institutions.',
  keywords: ['trade finance data', 'banking intelligence', 'financial risk assessment', 'compliance monitoring'],
  openGraph: {
    title: 'Banking & Finance Solutions',
    description: 'Trade finance intelligence for financial institutions.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/banking-finance',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-banking.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banking & Finance Solutions',
    description: 'Trade finance intelligence.',
    images: ['https://indonesian-importer.vercel.app/og-image-banking.jpg'],
  },
}

export default function BankingFinanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
