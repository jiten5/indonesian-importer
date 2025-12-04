import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Directory | Importers & Exporters Database',
  description: 'Browse verified importers and exporters worldwide. Access company profiles, trade history, suppliers, buyers, and shipment records.',
  openGraph: {
    title: 'Company Directory | Importers & Exporters Database',
    description: 'Browse verified importers and exporters worldwide with detailed trade data.',
    url: 'https://indonesian-importer.vercel.app/companies',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-companies.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Directory | Importers & Exporters Database',
    description: 'Browse verified importers and exporters worldwide.',
    images: ['https://indonesian-importer.vercel.app/og-image-companies.jpg'],
  },
}

export default function CompaniesLayout({ children }: { children: React.ReactNode }) {
  return children
}
