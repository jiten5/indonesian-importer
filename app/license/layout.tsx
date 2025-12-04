import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'License Information | Data Licensing & Terms',
  description: 'Information about data licensing, usage rights, and terms for our trade intelligence platform. Enterprise licensing options available.',
  openGraph: {
    title: 'License Information | Data Licensing',
    description: 'Data licensing information and terms.',
    url: 'https://indonesian-importer.vercel.app/license',
    siteName: 'Trade Data Intelligence Platform',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LicenseLayout({ children }: { children: React.ReactNode }) {
  return children
}
