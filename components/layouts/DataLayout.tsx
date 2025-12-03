'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Database, Search, TrendingUp } from 'lucide-react'

const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: false })
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false })

interface DataLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
  title?: string
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

export default function DataLayout({ children, sidebar, title }: DataLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar navigation={defaultNavigation} />
      
      <div className="flex-1 bg-neutral-50 dark:bg-neutral-950">
        {title && (
          <div className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
            <div className="container-custom py-6">
              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
                {title}
              </h1>
            </div>
          </div>
        )}
        
        <div className="container-custom py-6">
          <div className="flex gap-6">
            {/* Sidebar */}
            <aside
              className={cn(
                'transition-all duration-300 ease-in-out',
                sidebarOpen ? 'w-80' : 'w-0 overflow-hidden'
              )}
            >
              <div className="sticky top-24 space-y-4">
                {sidebar}
              </div>
            </aside>

            {/* Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="fixed left-6 top-24 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow-md transition-all hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800 lg:hidden"
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {sidebarOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {children}
            </div>
          </div>
        </div>
      </div>

      <Footer sections={defaultFooterSections} />
    </div>
  )
}

