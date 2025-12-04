import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Company Listings | Verified Importers & Exporters Directory',
  description: 'Browse comprehensive directory of verified importers and exporters. Search companies by industry, country, products, and trade activity.',
  openGraph: {
    title: 'Company Listings | Importers & Exporters Directory',
    description: 'Comprehensive directory of verified trading companies.',
    url: 'https://indonesian-importer.vercel.app/companies-listing',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-listings.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company Listings',
    description: 'Verified importers & exporters directory.',
    images: ['https://indonesian-importer.vercel.app/og-image-listings.jpg'],
  },
}

export default function CompaniesListingLayout({ children }: { children: React.ReactNode }) {
  return children
}
