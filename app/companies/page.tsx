'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  Search, 
  Filter, 
  Building2, 
  MapPin, 
  TrendingUp,
  Star,
  CheckCircle,
  Download,
  ArrowUpDown
} from 'lucide-react'

const navigation = [
  {
    label: 'Platform',
    href: '/platform',
    items: [
      { label: 'Data Intelligence', href: '/platform/data-intelligence' },
      { label: 'Analytics', href: '/platform/analytics' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'API', href: '/platform/api' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Import/Export', href: '/solutions/import-export' },
      { label: 'Market Research', href: '/solutions/market-research' },
      { label: 'Compliance', href: '/solutions/compliance' }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' }
]

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Data Intelligence', href: '/platform/data-intelligence' },
      { label: 'Analytics', href: '/platform/analytics' },
      { label: 'API Documentation', href: '/platform/api' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Import/Export', href: '/solutions/import-export' },
      { label: 'Market Research', href: '/solutions/market-research' },
      { label: 'Enterprise', href: '/solutions/enterprise' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' }
    ]
  }
]

const companies = [
  {
    id: '12345',
    name: 'PT Global Trade Solutions Indonesia',
    type: 'Importer & Exporter',
    industry: 'Electronics & Technology',
    location: 'Jakarta, Indonesia',
    verified: true,
    rating: 4.8,
    shipments: 2847,
    tradeValue: '$125.4M',
    products: 342
  },
  {
    id: '12346',
    name: 'PT Agro Export International',
    type: 'Exporter',
    industry: 'Agriculture',
    location: 'Surabaya, Indonesia',
    verified: true,
    rating: 4.6,
    shipments: 1523,
    tradeValue: '$58.2M',
    products: 156
  },
  {
    id: '12347',
    name: 'PT Manufacturing Industries',
    type: 'Importer',
    industry: 'Manufacturing',
    location: 'Bandung, Indonesia',
    verified: false,
    rating: 4.3,
    shipments: 892,
    tradeValue: '$42.8M',
    products: 228
  },
  {
    id: '12348',
    name: 'PT Textile Export Hub',
    type: 'Exporter',
    industry: 'Textiles & Garments',
    location: 'Solo, Indonesia',
    verified: true,
    rating: 4.7,
    shipments: 2156,
    tradeValue: '$76.5M',
    products: 487
  },
  {
    id: '12349',
    name: 'PT Automotive Parts Supplier',
    type: 'Importer & Exporter',
    industry: 'Automotive',
    location: 'Jakarta, Indonesia',
    verified: true,
    rating: 4.9,
    shipments: 1687,
    tradeValue: '$98.3M',
    products: 312
  },
  {
    id: '12350',
    name: 'PT Food & Beverage International',
    type: 'Exporter',
    industry: 'Food & Beverage',
    location: 'Medan, Indonesia',
    verified: true,
    rating: 4.5,
    shipments: 1234,
    tradeValue: '$45.7M',
    products: 189
  }
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [companyType, setCompanyType] = useState('')
  const [industry, setIndustry] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Company Directory
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Indonesia Trade Companies Database
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Search and connect with verified importers and exporters. Access detailed company profiles, trade history, and business intelligence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">180K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">95K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">200+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">Daily</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white dark:bg-neutral-900 border-b dark:border-neutral-800">
        <div className="container-custom">
          <Card padding="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Input
                label="Search Companies"
                placeholder="Company name or keyword..."
                leftIcon={<Search className="w-4 h-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select
                label="Company Type"
                value={companyType}
                onChange={(e) => setCompanyType(e.target.value)}
                options={[
                  { value: '', label: 'All Types' },
                  { value: 'importer', label: 'Importer' },
                  { value: 'exporter', label: 'Exporter' },
                  { value: 'both', label: 'Importer & Exporter' }
                ]}
              />
              <Select
                label="Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                options={[
                  { value: '', label: 'All Industries' },
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'agriculture', label: 'Agriculture' },
                  { value: 'textiles', label: 'Textiles' },
                  { value: 'automotive', label: 'Automotive' },
                  { value: 'food', label: 'Food & Beverage' }
                ]}
              />
              <Select
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                options={[
                  { value: '', label: 'All Locations' },
                  { value: 'jakarta', label: 'Jakarta' },
                  { value: 'surabaya', label: 'Surabaya' },
                  { value: 'bandung', label: 'Bandung' },
                  { value: 'medan', label: 'Medan' },
                  { value: 'semarang', label: 'Semarang' }
                ]}
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <Button variant="primary" size="md" leftIcon={<Filter className="w-4 h-4" />}>
                Apply Filters
              </Button>
              <Button variant="outline" size="md">
                Reset
              </Button>
              <Button variant="secondary" size="md" leftIcon={<Download className="w-4 h-4" />}>
                Export List
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Company Listings
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                Showing 6 of 180,542 companies
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Sort by:</span>
              <Select
                value=""
                onChange={() => {}}
                options={[
                  { value: 'relevance', label: 'Relevance' },
                  { value: 'trade-volume', label: 'Trade Volume' },
                  { value: 'rating', label: 'Rating' },
                  { value: 'shipments', label: 'Shipments' }
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {companies.map((company) => (
              <Link key={company.id} href={`/companies/${company.id}`}>
                <Card padding="lg" className="hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary-100 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                              {company.name}
                            </h3>
                            {company.verified && (
                              <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400" />
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="primary" size="sm">
                              {company.type}
                            </Badge>
                            <Badge variant="outline" size="sm">
                              {company.industry}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                          <span className="font-semibold text-neutral-900 dark:text-white">
                            {company.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{company.location}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-4 border-t dark:border-neutral-800">
                        <div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                            Shipments
                          </div>
                          <div className="font-bold text-neutral-900 dark:text-white">
                            {company.shipments.toLocaleString()}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                            Trade Value
                          </div>
                          <div className="font-bold text-success-600 dark:text-success-400">
                            {company.tradeValue}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mb-1">
                            Products
                          </div>
                          <div className="font-bold text-neutral-900 dark:text-white">
                            {company.products}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-12">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing 1-6 of 180,542 companies
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">500</Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer
        sections={footerSections}
        socialLinks={[
          { platform: 'facebook', href: 'https://www.facebook.com/exportgenius' },
          { platform: 'linkedin', href: 'https://www.linkedin.com/company/export-genius' },
          { platform: 'twitter', href: 'https://twitter.com/exportgenius' },
          { platform: 'youtube', href: 'https://www.youtube.com/channel/UCESozaA6z4e0nQxyVqS8I1A' }
        ]}
      />
    </div>
  )
}

