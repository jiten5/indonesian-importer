import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Medical Trade & Pharma Intelligence',
  description: 'Trade data solutions for healthcare and pharmaceutical industries. Track medical equipment imports, pharma trade flows, and healthcare supply chain intelligence.',
  keywords: ['healthcare trade data', 'pharmaceutical imports', 'medical equipment trade', 'pharma intelligence'],
  openGraph: {
    title: 'Healthcare Solutions | Medical Trade Intelligence',
    description: 'Trade intelligence for healthcare and pharmaceutical sectors.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/healthcare',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-healthcare.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Solutions',
    description: 'Medical trade intelligence.',
    images: ['https://indonesian-importer.vercel.app/og-image-healthcare.jpg'],
  },
}

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return children
}
