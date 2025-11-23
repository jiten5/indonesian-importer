'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { 
  Building2, 
  MapPin, 
  Globe, 
  Mail, 
  Phone,
  TrendingUp,
  TrendingDown,
  Package,
  Ship,
  Users,
  DollarSign,
  Calendar,
  BarChart3,
  Download,
  Share2,
  Star,
  CheckCircle
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

// Mock company data
const companyData = {
  id: '12345',
  name: 'PT Global Trade Solutions Indonesia',
  type: 'Importer & Exporter',
  industry: 'Electronics & Technology',
  established: '2015',
  verified: true,
  rating: 4.8,
  logo: '/images/company-logo.png',
  address: {
    street: 'Jl. Sudirman Kav. 52-53',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postal: '12190',
    country: 'Indonesia'
  },
  contact: {
    phone: '+62 21 5555 8888',
    email: 'info@globaltradesolutions.co.id',
    website: 'www.globaltradesolutions.co.id'
  },
  stats: {
    totalShipments: 2847,
    totalValue: '$125.4M',
    activeProducts: 342,
    tradingPartners: 87,
    avgShipmentValue: '$44,000'
  },
  description: 'PT Global Trade Solutions Indonesia is a leading import-export company specializing in electronics, technology equipment, and industrial machinery. With over 8 years of experience in international trade, we connect Indonesian businesses with global markets.',
  certifications: [
    { name: 'ISO 9001:2015', icon: CheckCircle },
    { name: 'Customs Certified', icon: CheckCircle },
    { name: 'Export Excellence Award 2024', icon: Star },
    { name: 'Green Trade Partner', icon: CheckCircle }
  ]
}

const recentShipments = [
  {
    id: 1,
    date: '2025-11-15',
    type: 'Import',
    product: 'Digital Cameras',
    hsCode: '8525.80',
    origin: 'Japan',
    value: '$285,000',
    quantity: '500 Units',
    trend: 'up'
  },
  {
    id: 2,
    date: '2025-11-10',
    type: 'Export',
    product: 'Palm Oil',
    hsCode: '1511.10',
    destination: 'India',
    value: '$425,000',
    quantity: '50,000 Kg',
    trend: 'up'
  },
  {
    id: 3,
    date: '2025-11-05',
    type: 'Import',
    product: 'Laptop Computers',
    hsCode: '8471.30',
    origin: 'China',
    value: '$520,000',
    quantity: '1,200 Units',
    trend: 'down'
  },
  {
    id: 4,
    date: '2025-10-28',
    type: 'Export',
    product: 'Coffee Beans',
    hsCode: '0901.11',
    destination: 'USA',
    value: '$180,000',
    quantity: '15,000 Kg',
    trend: 'up'
  },
  {
    id: 5,
    date: '2025-10-20',
    type: 'Import',
    product: 'Smartphone Parts',
    hsCode: '8517.12',
    origin: 'South Korea',
    value: '$650,000',
    quantity: '8,000 Units',
    trend: 'up'
  }
]

const topProducts = [
  { name: 'Electronics & Components', share: 35, value: '$43.9M', trend: 'up' },
  { name: 'Industrial Machinery', share: 25, value: '$31.4M', trend: 'up' },
  { name: 'Agricultural Products', share: 20, value: '$25.1M', trend: 'neutral' },
  { name: 'Automotive Parts', share: 12, value: '$15.0M', trend: 'down' },
  { name: 'Other Products', share: 8, value: '$10.0M', trend: 'neutral' }
]

const topPartners = [
  { country: 'Japan', flag: '🇯🇵', trades: 485, value: '$28.5M' },
  { country: 'China', flag: '🇨🇳', trades: 623, value: '$31.2M' },
  { country: 'USA', flag: '🇺🇸', trades: 287, value: '$22.8M' },
  { country: 'South Korea', flag: '🇰🇷', trades: 341, value: '$19.4M' },
  { country: 'India', flag: '🇮🇳', trades: 398, value: '$23.5M' }
]

export default function CompanyProfilePage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState<'overview' | 'shipments' | 'analytics'>('overview')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />

      {/* Company Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-12">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Company Logo & Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                      {companyData.name}
                    </h1>
                    {companyData.verified && (
                      <Badge variant="success" size="sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="primary" size="md">
                      {companyData.type}
                    </Badge>
                    <Badge variant="outline" size="md">
                      {companyData.industry}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.rating}
                      </span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        /5.0
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-3xl">
                    {companyData.description}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.address.city}, {companyData.address.country}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.website}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" leftIcon={<Download className="w-4 h-4" />}>
                Download Report
              </Button>
              <Button variant="outline" size="lg" leftIcon={<Share2 className="w-4 h-4" />}>
                Share Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            <Card padding="md" className="text-center">
              <Ship className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.totalShipments}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Total Shipments
              </div>
            </Card>
            <Card padding="md" className="text-center">
              <DollarSign className="w-8 h-8 text-success-600 dark:text-success-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.totalValue}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Trade Volume
              </div>
            </Card>
            <Card padding="md" className="text-center">
              <Package className="w-8 h-8 text-secondary-600 dark:text-secondary-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.activeProducts}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Active Products
              </div>
            </Card>
            <Card padding="md" className="text-center">
              <Users className="w-8 h-8 text-accent-600 dark:text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.tradingPartners}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Trade Partners
              </div>
            </Card>
            <Card padding="md" className="text-center">
              <BarChart3 className="w-8 h-8 text-warning-600 dark:text-warning-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.avgShipmentValue}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Avg Shipment
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('shipments')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'shipments'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Recent Shipments
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Details */}
              <div className="lg:col-span-2 space-y-8">
                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Established
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.established}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Industry
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.industry}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Full Address
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.address.street}, {companyData.address.city}
                        <br />
                        {companyData.address.province} {companyData.address.postal}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Company Type
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.type}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Certifications & Awards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyData.certifications.map((cert, index) => {
                      const IconComponent = cert.icon
                      return (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                          <IconComponent className="w-6 h-6 text-success-600 dark:text-success-400" />
                          <span className="font-medium text-neutral-900 dark:text-white">
                            {cert.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Product Categories
                  </h3>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-neutral-900 dark:text-white">
                              {product.name}
                            </span>
                            {product.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-success-600 dark:text-success-400" />
                            ) : product.trend === 'down' ? (
                              <TrendingDown className="w-4 h-4 text-error-600 dark:text-error-400" />
                            ) : null}
                          </div>
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {product.value}
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                            style={{ width: `${product.share}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Trading Partners
                  </h3>
                  <div className="space-y-4">
                    {topPartners.map((partner, index) => (
                      <div key={index} className="flex items-center justify-between pb-4 border-b dark:border-neutral-800 last:border-0 last:pb-0">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{partner.flag}</span>
                          <div>
                            <div className="font-medium text-neutral-900 dark:text-white">
                              {partner.country}
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                              {partner.trades} shipments
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-neutral-900 dark:text-white">
                            {partner.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'shipments' && (
            <Card padding="lg">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Recent Trade Activity
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-800">
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Date
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Type
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Product
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        HS Code
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Origin/Destination
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Value
                      </th>
                      <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                        Trend
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentShipments.map((shipment) => (
                      <tr
                        key={shipment.id}
                        className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                      >
                        <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                          {shipment.date}
                        </td>
                        <td className="p-4">
                          <Badge 
                            variant={shipment.type === 'Import' ? 'primary' : 'secondary'} 
                            size="sm"
                          >
                            {shipment.type}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-neutral-900 dark:text-white">
                          {shipment.product}
                        </td>
                        <td className="p-4">
                          <Badge variant="outline" size="sm">
                            {shipment.hsCode}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                          {shipment.origin || shipment.destination}
                        </td>
                        <td className="p-4 font-semibold text-neutral-900 dark:text-white">
                          {shipment.value}
                        </td>
                        <td className="p-4">
                          {shipment.trend === 'up' ? (
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
            </Card>
          )}

          {activeTab === 'analytics' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card padding="lg">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Trade Volume Trend
                </h3>
                <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Chart visualization placeholder
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card padding="lg">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                  Geographic Distribution
                </h3>
                <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                  <div className="text-center">
                    <Globe className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Map visualization placeholder
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
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
