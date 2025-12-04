import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Trade Data Intelligence Platform',
  description: 'Terms and conditions for using our trade data intelligence platform, API access, and data services.',
  openGraph: {
    title: 'Terms of Service | Trade Data Intelligence Platform',
    description: 'Read our terms and conditions for platform usage.',
    url: 'https://indonesian-importer.vercel.app/terms',
    siteName: 'Trade Data Intelligence Platform',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
