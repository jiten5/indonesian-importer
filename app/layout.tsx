import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trade Data Intelligence Platform | Import Export Data Analytics',
  description: 'Comprehensive B2B SaaS platform for trade data analysis, import-export intelligence, supplier discovery, and market insights. Access 50M+ shipment records.',
  keywords: ['trade data', 'import export', 'trade intelligence', 'supply chain analytics', 'Indonesia trade data', 'customs data'],
  authors: [{ name: 'Trade Data Intelligence Platform' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://indonesian-importer.vercel.app',
    siteName: 'Trade Data Intelligence Platform',
    title: 'Trade Data Intelligence Platform | Import Export Data Analytics',
    description: 'Comprehensive B2B SaaS platform for trade data analysis, import-export intelligence, and market insights.',
    images: [
      {
        url: 'https://indonesian-importer.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trade Data Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trade Data Intelligence Platform | Import Export Data Analytics',
    description: 'Comprehensive B2B SaaS platform for trade data analysis and market insights.',
    images: ['https://indonesian-importer.vercel.app/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trade Data Intelligence Platform",
    "description": "B2B SaaS platform for comprehensive trade data analysis and insights",
    "url": "https://indonesian-importer.vercel.app",
    "logo": "https://indonesian-importer.vercel.app/logo.png",
    "sameAs": [
      "https://twitter.com/tradedataintel",
      "https://linkedin.com/company/tradedataintel"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@tradedataintel.com",
      "availableLanguage": ["English"]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Trade Data Intelligence Platform",
    "url": "https://indonesian-importer.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://indonesian-importer.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

