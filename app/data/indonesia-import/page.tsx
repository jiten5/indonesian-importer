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

// Sample import data
const importData = [
  {
    id: 1,
    date: '2025-11-20',
    hsCode: '8471.30',
    product: 'Portable Digital Automatic Data Processing Machines',
    importer: 'PT Tech Solutions Indonesia',
    exporter: 'Samsung Electronics Co., Ltd',
    origin: 'South Korea',
    quantity: 2500,
    unit: 'Units',
    value: 2850000,
    port: 'Jakarta',
    trend: 'up'
  },
  {
    id: 2,
    date: '2025-11-19',
    hsCode: '8517.12',
    product: 'Telephones for Cellular Networks',
    importer: 'PT Mobile Distribusi',
    exporter: 'Apple Inc.',
    origin: 'China',
    quantity: 5000,
    unit: 'Units',
    value: 4500000,
    port: 'Surabaya',
    trend: 'up'
  },
  {
    id: 3,
    date: '2025-11-18',
    hsCode: '8708.29',
    product: 'Other Parts and Accessories of Motor Vehicles',
    importer: 'PT Automotive Parts Indonesia',
    exporter: 'Toyota Motor Corporation',
    origin: 'Japan',
    quantity: 1200,
    unit: 'Kg',
    value: 850000,
    port: 'Jakarta',
    trend: 'down'
  },
  {
    id: 4,
    date: '2025-11-17',
    hsCode: '8544.42',
    product: 'Electric Conductors for Voltage Not Exceeding 1000V',
    importer: 'PT Electrical Supplies',
    exporter: 'Prysmian Group',
    origin: 'Italy',
    quantity: 5000,
    unit: 'Meters',
    value: 125000,
    port: 'Semarang',
    trend: 'up'
  },
  {
    id: 5,
    date: '2025-11-16',
    hsCode: '3004.90',
    product: 'Medicaments Containing Other Ingredients',
    importer: 'PT Pharma Indonesia',
    exporter: 'Pfizer Inc.',
    origin: 'USA',
    quantity: 800,
    unit: 'Kg',
    value: 950000,
    port: 'Jakarta',
    trend: 'up'
  }
]

const topCategories = [
  { name: 'Electronics', value: '$45.2M', share: 28, trend: 'up', change: '+12.5%' },
  { name: 'Machinery', value: '$38.7M', share: 24, trend: 'up', change: '+8.3%' },
  { name: 'Automotive Parts', value: '$25.1M', share: 16, trend: 'down', change: '-2.1%' },
  { name: 'Pharmaceuticals', value: '$18.9M', share: 12, trend: 'up', change: '+15.7%' },
  { name: 'Textiles', value: '$15.3M', share: 10, trend: 'neutral', change: '+0.5%' }
]

const topOrigins = [
  { country: 'China', flag: '🇨🇳', value: '$52.3M', share: 32 },
  { country: 'Japan', flag: '🇯🇵', value: '$28.7M', share: 18 },
  { country: 'South Korea', flag: '🇰🇷', value: '$22.1M', share: 14 },
  { country: 'USA', flag: '🇺🇸', value: '$18.4M', share: 11 },
  { country: 'Germany', flag: '🇩🇪', value: '$15.8M', share: 10 }
]

export default function IndonesiaImportPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPort, setSelectedPort] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [dateRange, setDateRange] = useState('30')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="success" size="lg" className="mb-6">
              🇮🇩 Indonesia Import Data
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
              Indonesia Import Trade Data
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Access comprehensive import shipment data from Indonesia customs. Search, filter, and analyze real-time trade transactions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">3.2M+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Import Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">150K+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Importers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">Daily</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">200+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
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
                label="Port of Entry"
                value={selectedPort}
                onChange={(e) => setSelectedPort(e.target.value)}
                options={[
                  { value: '', label: 'All Ports' },
                  { value: 'jakarta', label: 'Jakarta' },
                  { value: 'surabaya', label: 'Surabaya' },
                  { value: 'semarang', label: 'Semarang' },
                  { value: 'medan', label: 'Medan' },
                  { value: 'makassar', label: 'Makassar' }
                ]}
              />
              <Select
                label="Product Category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                options={[
                  { value: '', label: 'All Categories' },
                  { value: 'electronics', label: 'Electronics' },
                  { value: 'machinery', label: 'Machinery' },
                  { value: 'automotive', label: 'Automotive' },
                  { value: 'pharma', label: 'Pharmaceuticals' },
                  { value: 'textiles', label: 'Textiles' }
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
                  Top Import Categories
                </h3>
                <Package className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
                        className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                        style={{ width: `${category.share}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Top Origins */}
            <Card padding="lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Top Origin Countries
                </h3>
                <Ship className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div className="space-y-4">
                {topOrigins.map((origin, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{origin.flag}</span>
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {origin.country}
                        </span>
                      </div>
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {origin.value}
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary-600 dark:bg-secondary-400 rounded-full"
                        style={{ width: `${origin.share}%` }}
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
              Recent Import Shipments
            </h2>
            <Badge variant="success" size="md">
              Live Data
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-primary-600">
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
                    Importer
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Origin
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
                {importData.map((item) => (
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
                      {item.importer}
                    </td>
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.origin}
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
              Showing 1-5 of 127,543 records
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="primary" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">50</Button>
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
