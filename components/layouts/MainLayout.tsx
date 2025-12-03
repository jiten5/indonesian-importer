import dynamic from 'next/dynamic'
import { Database, Search, TrendingUp, FileText, Truck, Factory, Landmark, Briefcase, Heart, GraduationCap, Wheat, DollarSign } from 'lucide-react'

const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

interface MainLayoutProps {
  children: React.ReactNode
}

const defaultNavigation = [
  // { label: 'Home', href: '/' },
  {
    label: 'Products',
    href: '/products',
    items: [
      { label: 'Data Platform', href: '/products/data-platform', icon: <Database className="w-4 h-4" /> },
      { label: 'Trade Data API', href: '/products/trade-data-api', icon: <TrendingUp className="w-4 h-4" /> },
      { label: 'Data License', href: '/products/data-license', icon: <Search className="w-4 h-4" /> },
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Logistics', href: '/solutions/industry/logistics', icon: <Truck className="w-4 h-4" />, description: 'Solutions for logistics providers' },
      { label: 'Manufacturing', href: '/solutions/industry/manufacturing', icon: <Factory className="w-4 h-4" />, description: 'Trade insights for manufacturers' },
      { label: 'Research', href: '/solutions/industry/research', icon: <FileText className="w-4 h-4" />, description: 'Academic research intelligence' },
      { label: '---', href: '#' }, // Divider
      { label: 'Banking & Finance', href: '/solutions/industry/banking-finance', icon: <DollarSign className="w-4 h-4" />, description: 'Financial trade intelligence' },
      { label: 'Government', href: '/solutions/industry/government', icon: <Landmark className="w-4 h-4" />, description: 'Government trade analytics' },
      { label: 'Consulting', href: '/solutions/industry/consulting', icon: <Briefcase className="w-4 h-4" />, description: 'Consulting trade insights' },
      { label: '---', href: '#' }, // Divider
      { label: 'Healthcare', href: '/solutions/industry/healthcare', icon: <Heart className="w-4 h-4" />, description: 'Healthcare supply chain data' },
      { label: 'Universities', href: '/solutions/industry/universities', icon: <GraduationCap className="w-4 h-4" />, description: 'Academic trade data resources' },
      { label: 'Agri & Food', href: '/solutions/industry/agri-food', icon: <Wheat className="w-4 h-4" />, description: 'Agriculture trade intelligence' },
    ]
  },
  { label: 'Search', href: '/search' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const defaultFooterSections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Data', href: '/data' },
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
    ]
  },
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
      { label: 'Indonesia Export', href: '/data/indonesia-export' },
      { label: 'Indonesia Import', href: '/data/indonesia-import' },
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Search Data', href: '/search' },
      { label: 'Product Listing', href: '/products-listing' },
      { label: 'Companies Listing', href: '/companies-listing' },
      { label: 'Company Profiles', href: '/companies' }
    ]
  }
]

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navigation={defaultNavigation} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer
        sections={defaultFooterSections}
        socialLinks={[
          { platform: 'linkedin', href: 'https://linkedin.com' },
          { platform: 'twitter', href: 'https://twitter.com' },
          { platform: 'github', href: 'https://github.com' }
        ]}
      />
    </div>
  )
}

