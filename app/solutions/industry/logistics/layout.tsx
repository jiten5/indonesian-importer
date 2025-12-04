import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logistics Industry Solutions | Supply Chain Trade Intelligence',
  description: 'Trade data solutions for logistics companies. Optimize routes, reduce costs, track shipments, and gain supply chain visibility with real-time trade intelligence.',
  keywords: ['logistics trade data', 'supply chain intelligence', 'freight analytics', 'shipping data'],
  openGraph: {
    title: 'Logistics Industry Solutions | Supply Chain Intelligence',
    description: 'Trade data solutions for logistics and supply chain optimization.',
    url: 'https://indonesian-importer.vercel.app/solutions/industry/logistics',
    siteName: 'Trade Data Intelligence Platform',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image-logistics.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Solutions',
    description: 'Supply chain trade intelligence.',
    images: ['https://indonesian-importer.vercel.app/og-image-logistics.jpg'],
  },
}

export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
  return children
}
