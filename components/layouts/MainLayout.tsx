import dynamic from 'next/dynamic'
import { Database, Search, TrendingUp } from 'lucide-react'

const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false })

interface MainLayoutProps {
  children: React.ReactNode
}

const defaultNavigation = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products',
    items: [
      { label: 'Data Platform', href: '/products/data-platform', icon: <Database className="w-4 h-4" /> },
      { label: 'Trade Data API', href: '/products/trade-data-api', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Data License', href: '/products/data-license', icon: <Search className="w-4 h-4" /> },
    ]
  },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Search', href: '/search' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const defaultFooterSections = [
  {
    title: 'Products',
    links: [
      { label: 'Data Platform', href: '/products/data-platform' },
      { label: 'Trade Data API', href: '/products/trade-data-api' },
      { label: 'Data License', href: '/products/data-license' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Search Data', href: '/search' },
      { label: 'Indonesia Imports', href: '/data/indonesia-imports' },
      { label: 'Indonesia Exports', href: '/data/indonesia-exports' },
    ]
  }
]

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navigation={defaultNavigation} />
      <main className="flex-1">{children}</main>
      <Footer sections={defaultFooterSections} />
    </div>
  )
}
