'use client'

import { useState } from 'react'
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
  Download, 
  Filter, 
  TrendingUp,
  TrendingDown,
  Calendar,
  Package,
  DollarSign,
  Ship,
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

// Sample export data
const exportData = [
  {
    id: 1,
    date: '2025-11-20',
    hsCode: '1511.10',
    product: 'Crude Palm Oil',
    exporter: 'PT Perkebunan Nusantara',
    importer: 'Global Foods Ltd',
    destination: 'India',
    quantity: 50000,
    unit: 'Kg',
    value: 3250000,
    port: 'Jakarta',
    trend: 'up'
  },
  {
    id: 2,
    date: '2025-11-19',
    hsCode: '4407.11',
    product: 'Sawn Wood of Pine',
    exporter: 'PT Timber Resources',
    importer: 'BuildCo International',
    destination: 'Australia',
    quantity: 25000,
    unit: 'Cubic Meters',
    value: 1850000,
    port: 'Surabaya',
    trend: 'up'
  },
  {
    id: 3,
    date: '2025-11-18',
    hsCode: '0801.31',
    product: 'Cashew Nuts, In Shell',
    exporter: 'PT Agro Export Indonesia',
    importer: 'Premium Nuts Inc.',
    destination: 'USA',
    quantity: 8000,
    unit: 'Kg',
    value: 640000,
    port: 'Semarang',
    trend: 'down'
  },
  {
    id: 4,
    date: '2025-11-17',
    hsCode: '6403.99',
    product: 'Leather Footwear',
    exporter: 'PT Footwear Manufacturing',
    importer: 'Fashion Retail Group',
    destination: 'Germany',
    quantity: 15000,
    unit: 'Pairs',
    value: 425000,
    port: 'Jakarta',
    trend: 'up'
  },
  {
    id: 5,
    date: '2025-11-16',
    hsCode: '0901.11',
    product: 'Coffee, Not Roasted, Not Decaffeinated',
    exporter: 'PT Kopi Indonesia',
    importer: 'Coffee Masters Europe',
    destination: 'Netherlands',
    quantity: 12000,
    unit: 'Kg',
    value: 780000,
    port: 'Medan',
    trend: 'up'
  }
]

const topCategories = [
  { name: 'Palm Oil Products', value: '$89.3M', share: 35, trend: 'up', change: '+18.2%' },
  { name: 'Textiles & Garments', value: '$52.6M', share: 21, trend: 'up', change: '+9.7%' },
  { name: 'Wood Products', value: '$38.4M', share: 15, trend: 'neutral', change: '+1.2%' },
  { name: 'Agricultural Products', value: '$31.8M', share: 12, trend: 'up', change: '+12.4%' },
  { name: 'Footwear', value: '$25.2M', share: 10, trend: 'down', change: '-3.8%' }
]

const topDestinations = [
  { country: 'India', flag: '🇮🇳', value: '$68.7M', share: 27 },
  { country: 'China', flag: '🇨🇳', value: '$55.2M', share: 22 },
  { country: 'USA', flag: '🇺🇸', value: '$42.9M', share: 17 },
  { country: 'Japan', flag: '🇯🇵', value: '$31.5M', share: 12 },
  { country: 'Germany', flag: '🇩🇪', value: '$24.8M', share: 10 }
]

export default function IndonesiaExportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPort, setSelectedPort] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [dateRange, setDateRange] = useState('30')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="warning" size="lg" className="mb-6">
              🇮🇩 Indonesia Export Data
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Indonesia Export Trade Data
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Comprehensive export shipment data from Indonesian customs. Track global trade flows, identify buyers, and analyze market trends.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">4.1M+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Export Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">180K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Exporters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">Daily</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">180+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Destinations</div>
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
                label="Search Products/Companies"
                placeholder="Search by HS code, product, or company..."
                leftIcon={<Search className="w-4 h-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Select
                label="Port of Exit"
                value={selectedPort}
                onChange={(e) => setSelectedPort(e.target.value)}
                options={[
                  { value: '', label: 'All Ports' },
                  { value: 'jakarta', label: 'Jakarta' },
                  { value: 'surabaya', label: 'Surabaya' },
                  { value: 'medan', label: 'Medan' },
                  { value: 'semarang', label: 'Semarang' },
                  { value: 'makassar', label: 'Makassar' }
                ]}
              />
              <Select
                label="Product Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={[
                  { value: '', label: 'All Categories' },
                  { value: 'palm-oil', label: 'Palm Oil Products' },
                  { value: 'textiles', label: 'Textiles & Garments' },
                  { value: 'wood', label: 'Wood Products' },
                  { value: 'agriculture', label: 'Agricultural' },
                  { value: 'footwear', label: 'Footwear' }
                ]}
              />
              <Select
                label="Date Range"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                options={[
                  { value: '7', label: 'Last 7 Days' },
                  { value: '30', label: 'Last 30 Days' },
                  { value: '90', label: 'Last 90 Days' },
                  { value: '365', label: 'Last Year' }
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
                Export Data
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Top Categories */}
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Top Export Categories
                </h3>
                <Package className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {category.name}
                        </span>
                        {category.trend === 'up' ? (
                          <span className="text-success-600 dark:text-success-400 text-sm flex items-center">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            {category.change}
                          </span>
                        ) : category.trend === 'down' ? (
                          <span className="text-error-600 dark:text-error-400 text-sm flex items-center">
                            <TrendingDown className="w-4 h-4 mr-1" />
                            {category.change}
                          </span>
                        ) : (
                          <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                            {category.change}
                          </span>
                        )}
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {category.value}
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary-600 dark:bg-secondary-400 rounded-full"
                        style={{ width: `${category.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Destinations */}
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Top Destination Countries
                </h3>
                <Ship className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="space-y-4">
                {topDestinations.map((destination, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{destination.flag}</span>
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {destination.country}
                        </span>
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {destination.value}
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                        style={{ width: `${destination.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Recent Export Shipments
            </h2>
            <Badge variant="warning" size="md">
              Live Data
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-secondary-600">
                      <Calendar className="w-4 h-4" />
                      <span>Date</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    HS Code
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Product Description
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Exporter
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Destination
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Value (USD)</span>
                    </div>
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {exportData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/30 cursor-pointer"
                  >
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.date}
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" size="sm">
                        {item.hsCode}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-neutral-900 dark:text-white max-w-xs">
                      {item.product}
                    </td>
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.exporter}
                    </td>
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.destination}
                    </td>
                    <td className="p-4 font-semibold text-neutral-900 dark:text-white">
                      ${item.value.toLocaleString()}
                    </td>
                    <td className="p-4">
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing 1-5 of 142,891 records
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="primary" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">57</Button>
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
          { platform: 'linkedin', href: 'https://linkedin.com' },
          { platform: 'twitter', href: 'https://twitter.com' },
          { platform: 'github', href: 'https://github.com' }
        ]}
      />
    </div>
  )
}
