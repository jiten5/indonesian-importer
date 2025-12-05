'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  Database, 
  TrendingUp, 
  BarChart3, 
  Globe,
  Zap,
  Filter,
  Download,
  RefreshCw,
  ArrowRight,
  Play,
  CheckCircle,
  Eye,
  Shield
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

const platformFeatures = [
  {
    icon: Database,
    title: 'Real-Time Data Feeds',
    description: 'Access live trade data with sub-second latency from customs authorities and shipping manifests worldwide.',
    stats: [
      { label: 'Data Points', value: '50M+' },
      { label: 'Update Frequency', value: 'Real-time' }
    ]
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Analytics',
    description: 'Machine learning algorithms analyze patterns, predict trends, and surface actionable insights automatically.',
    stats: [
      { label: 'ML Models', value: '50+' },
      { label: 'Prediction Accuracy', value: '94%' }
    ]
  },
  {
    icon: BarChart3,
    title: 'Advanced Visualizations',
    description: 'Transform complex data into intuitive charts, graphs, and dashboards with 50+ visualization types.',
    stats: [
      { label: 'Chart Types', value: '50+' },
      { label: 'Custom Dashboards', value: 'Unlimited' }
    ]
  },
  {
    icon: Filter,
    title: 'Smart Filtering',
    description: 'Powerful filters allow you to drill down into specific products, companies, routes, and time periods.',
    stats: [
      { label: 'Filter Options', value: '100+' },
      { label: 'Saved Searches', value: 'Unlimited' }
    ]
  },
  {
    icon: Download,
    title: 'Flexible Exports',
    description: 'Export data in multiple formats including CSV, Excel, JSON, and direct API integration.',
    stats: [
      { label: 'Export Formats', value: '10+' },
      { label: 'Bulk Exports', value: 'Supported' }
    ]
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, role-based access, and comprehensive audit logs.',
    stats: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Security Audits', value: 'Monthly' }
    ]
  }
]

const dataSources = [
  { name: 'US Customs', coverage: '100%', records: '5M+', frequency: 'Daily' },
  { name: 'EU Trade Database', coverage: '100%', records: '8M+', frequency: 'Daily' },
  { name: 'China Customs', coverage: '100%', records: '12M+', frequency: 'Daily' },
  { name: 'India Customs', coverage: '100%', records: '6M+', frequency: 'Daily' },
  { name: 'Indonesia Trade', coverage: '100%', records: '3M+', frequency: 'Daily' },
  { name: 'Singapore Trade', coverage: '100%', records: '2M+', frequency: 'Daily' },
  { name: 'Japan Customs', coverage: '100%', records: '4M+', frequency: 'Daily' },
  { name: 'UK Trade Statistics', coverage: '100%', records: '2M+', frequency: 'Daily' }
]

const dashboardMetrics = [
  { label: 'Total Shipments Today', value: '127,543', change: '+12.5%', trend: 'up' },
  { label: 'Active Trade Routes', value: '2,847', change: '+5.2%', trend: 'up' },
  { label: 'Top Import Category', value: 'Electronics', change: '23.4% share', trend: 'neutral' },
  { label: 'Data Freshness', value: '< 1 min', change: '99.9% uptime', trend: 'up' }
]

export default function DataPlatformPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'exports'>('overview')

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />
      <div className="container-custom pt-24">
        {/* <Breadcrumb items={[{ label: 'Platform', href: '/platform' }, { label: 'Data Intelligence', href: '/platform/data-intelligence' }]} /> */}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-200/30 to-transparent dark:from-primary-900/20 blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Enterprise Data Platform
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Complete Trade Data Platform with Real-Time Intelligence
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
              Access comprehensive import/export data from 200+ countries with AI-powered analytics, real-time updates, and enterprise-grade security. Everything you need in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" leftIcon={<Play className="w-5 h-5" />}>
                Watch Platform Demo
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">200+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50M+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Trade Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">&lt;100ms</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Query Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">99.99%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 lg:py-32 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Real-Time Dashboard
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Monitor global trade activity with live updates and interactive visualizations
            </p>
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {dashboardMetrics.map((metric, index) => (
              <Card key={index} padding="lg">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    {metric.label}
                  </span>
                  {metric.trend === 'up' && (
                    <TrendingUp className="w-4 h-4 text-success-600 dark:text-success-400" />
                  )}
                </div>
                <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-success-600 dark:text-success-400">
                  {metric.change}
                </div>
              </Card>
            ))}
          </div>

          {/* Interactive Tabs */}
          <div className="mb-8">
            <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'analytics'
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                Analytics
              </button>
              <button
                onClick={() => setActiveTab('exports')}
                className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                  activeTab === 'exports'
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                Data Exports
              </button>
            </div>
          </div>

          {/* Tab Content - Dashboard Preview */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
            <div className="grid grid-cols-12 gap-6">
              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-3 space-y-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                  <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-3">
                    FILTERS
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 bg-neutral-100 dark:bg-neutral-800 rounded" />
                    <div className="h-8 bg-neutral-100 dark:bg-neutral-800 rounded" />
                    <div className="h-8 bg-neutral-100 dark:bg-neutral-800 rounded" />
                  </div>
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-neutral-200 dark:border-neutral-700">
                  <div className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 mb-3">
                    SAVED SEARCHES
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-neutral-100 dark:bg-neutral-800 rounded" />
                    <div className="h-6 bg-neutral-100 dark:bg-neutral-800 rounded" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 lg:col-span-9 space-y-6">
                {/* Chart Placeholder */}
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-neutral-900 dark:text-white">
                      Trade Volume Trends
                    </div>
                    <Badge variant="success" size="sm">Live</Badge>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-16 h-16 text-primary-400 dark:text-primary-600" />
                  </div>
                </div>

                {/* Data Grid */}
                <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-neutral-50 dark:bg-neutral-800">
                        <tr>
                          <th className="text-left p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                            HS CODE
                          </th>
                          <th className="text-left p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                            PRODUCT
                          </th>
                          <th className="text-left p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                            VOLUME
                          </th>
                          <th className="text-left p-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                            TREND
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <tr key={i} className="border-t border-neutral-200 dark:border-neutral-800">
                            <td className="p-4">
                              <div className="h-4 w-20 bg-neutral-100 dark:bg-neutral-800 rounded" />
                            </td>
                            <td className="p-4">
                              <div className="h-4 w-40 bg-neutral-100 dark:bg-neutral-800 rounded" />
                            </td>
                            <td className="p-4">
                              <div className="h-4 w-24 bg-neutral-100 dark:bg-neutral-800 rounded" />
                            </td>
                            <td className="p-4">
                              <div className="h-4 w-16 bg-success-100 dark:bg-success-900/30 rounded" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Powerful Platform Features
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Everything you need for comprehensive trade intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} hover padding="lg" className="h-full">
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-neutral-800">
                    {feature.stats.map((stat, idx) => (
                      <div key={idx}>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {stat.value}
                        </div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 lg:py-32 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Comprehensive Data Sources
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Real-time data feeds from official customs authorities worldwide
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Data Source
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Coverage
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Records
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Update Frequency
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((source, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                  >
                    <td className="p-4 font-medium text-neutral-900 dark:text-white">
                      {source.name}
                    </td>
                    <td className="p-4">
                      <Badge variant="success" size="sm">{source.coverage}</Badge>
                    </td>
                    <td className="p-4 text-neutral-600 dark:text-neutral-400">
                      {source.records}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <RefreshCw className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {source.frequency}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Access Real-Time Trade Data?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your free trial today and explore the most comprehensive trade intelligence platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Schedule Demo
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

