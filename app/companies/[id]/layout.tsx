import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // In a real app, you'd fetch company data here
  const companyName = 'PT Glory Global Solutions Indonesia' // Placeholder
  
  return {
    title: `${companyName} | Company Profile & Trade Data`,
    description: `Detailed company profile for ${companyName}. View import/export history, suppliers, buyers, shipment records, and comprehensive trade statistics.`,
    keywords: ['company profile', 'importer', 'exporter', 'trade history', 'suppliers', 'buyers'],
    openGraph: {
      title: `${companyName} | Company Profile`,
      description: `View detailed trade data and company profile for ${companyName}.`,
      url: `https://indonesian-importer.vercel.app/companies/${params.id}`,
      siteName: 'Trade Data Intelligence Platform',
      images: [
        {
          url: 'https://indonesian-importer.vercel.app/og-image-company.jpg',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${companyName} Profile`,
      description: 'Detailed trade data and company profile.',
      images: ['https://indonesian-importer.vercel.app/og-image-company.jpg'],
    },
  }
}

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return children
}
