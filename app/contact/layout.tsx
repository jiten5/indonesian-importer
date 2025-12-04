import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Trade Data Intelligence Platform',
  description: 'Get in touch with our team for trade data solutions, custom analytics, API access, and enterprise support. We respond within 24 hours.',
  openGraph: {
    title: 'Contact Us | Trade Data Intelligence Platform',
    description: 'Get in touch with our team for trade data solutions and enterprise support.',
    url: 'https://indonesian-importer.vercel.app/contact',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-contact.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Trade Data Intelligence Platform',
    description: 'Get in touch with our team for trade data solutions.',
    images: ['https://indonesian-importer.vercel.app/og-image-contact.jpg'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
