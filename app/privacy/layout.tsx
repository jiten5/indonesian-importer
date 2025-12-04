import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Trade Data Intelligence Platform',
  description: 'Our privacy policy explains how we collect, use, protect, and handle your personal information and trade data.',
  openGraph: {
    title: 'Privacy Policy | Trade Data Intelligence Platform',
    description: 'Learn about our privacy practices and data protection policies.',
    url: 'https://indonesian-importer.vercel.app/privacy',
    siteName: 'Trade Data Intelligence Platform',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
