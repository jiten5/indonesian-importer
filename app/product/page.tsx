'use client'

import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// import Breadcrumb from '@/components/ui/Breadcrumb';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  Database, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  FileSearch,
  Users,
  Lock,
  RefreshCw,
  Download,
  Filter,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

// Note: Metadata export removed due to 'use client' directive
// export const metadata: Metadata = {
//   title: 'Product Features - Trade Data Intelligence Platform',
//   description: 'Comprehensive trade data intelligence platform with real-time import/export data, AI-powered analytics, and enterprise-grade security. Access data from 200+ countries.',
//   keywords: 'trade data, import export data, trade intelligence, customs data, shipment tracking, supplier intelligence',
//   openGraph: {
//     title: 'Product Features - Trade Data Intelligence Platform',
//     description: 'Access comprehensive trade data from 200+ countries with AI-powered analytics',
//     type: 'website',
//     url: 'https://tradeintelligence.com/product',
//     images: ['/og-product.jpg']
//   }
// }

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

const features = [
  {
    icon: Database,
    title: 'Comprehensive Trade Data',
    description: 'Access over 50 million trade records from 200+ countries with detailed shipment information, including HS codes, quantities, values, and parties involved.',
    benefits: [
      'Real-time data updates',
      'Historical data access',
      'Detailed shipment records',
      'HS code classification'
    ]
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Analytics',
    description: 'Leverage machine learning algorithms to identify trends, forecast market movements, and discover new opportunities before your competitors.',
    benefits: [
      'Predictive analytics',
      'Trend identification',
      'Market forecasting',
      'Competitive intelligence'
    ]
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified platform with end-to-end encryption, role-based access control, and comprehensive audit logs.',
    benefits: [
      'SOC 2 Type II certified',
      'End-to-end encryption',
      'RBAC implementation',
      'Audit trail logging'
    ]
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'Sub-second query responses powered by distributed caching, smart indexing, and edge computing infrastructure.',
    benefits: [
      'Sub-100ms query speed',
      'Distributed caching',
      'Smart data indexing',
      'Global CDN delivery'
    ]
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Complete trade data coverage across North America, Europe, Asia-Pacific, Latin America, and emerging African markets.',
    benefits: [
      '200+ countries covered',
      'All major trade routes',
      'Emerging market data',
      'Multi-language support'
    ]
  },
  {
    icon: BarChart3,
    title: 'Advanced Visualizations',
    description: 'Transform complex trade data into actionable insights with interactive charts, dashboards, and customizable reports.',
    benefits: [
      '50+ chart types',
      'Custom dashboards',
      'Export to PDF/Excel',
      'Automated reporting'
    ]
  }
]

const useCases = [
  {
    title: 'Supplier Discovery',
    description: 'Find and verify new suppliers by analyzing their import/export history, trade volumes, and business relationships.',
    icon: FileSearch,
    stats: { label: 'Suppliers Found', value: '10M+' }
  },
  {
    title: 'Market Research',
    description: 'Understand market dynamics, pricing trends, and competitive landscape across different regions and product categories.',
    icon: Users,
    stats: { label: 'Markets Analyzed', value: '200+' }
  },
  {
    title: 'Compliance Monitoring',
    description: 'Ensure regulatory compliance by tracking shipments, verifying certifications, and monitoring restricted parties.',
    icon: Lock,
    stats: { label: 'Compliance Checks', value: '1M+/day' }
  },
  {
    title: 'Competitive Intelligence',
    description: 'Track competitor activities, identify their suppliers, analyze their trade patterns, and stay ahead of market moves.',
    icon: TrendingUp,
    stats: { label: 'Companies Tracked', value: '500K+' }
  }
]

const integrations = [
  { name: 'REST API', description: 'Full-featured API with comprehensive documentation', available: true },
  { name: 'Webhooks', description: 'Real-time notifications for data updates', available: true },
  { name: 'Excel Plugin', description: 'Direct data access from Excel', available: true },
  { name: 'Power BI', description: 'Native Power BI connector', available: true },
  { name: 'Tableau', description: 'Tableau Web Data Connector', available: true },
  { name: 'Salesforce', description: 'CRM integration for sales teams', available: true }
]

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-200/30 to-transparent dark:from-primary-900/20 blur-3xl" />
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <Badge variant="primary" size="lg" className="mb-6">
                Enterprise-Grade Platform
              </Badge>
            </motion.div>
            {/* <Breadcrumb items={[{ label: 'Product', href: '/product' }]} /> */}
            <motion.h1 
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
            >
              The Most Comprehensive Trade Data Intelligence Platform
            </motion.h1>
            <motion.p 
              variants={staggerItem}
              className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto"
            >
              Access real-time import/export data from 200+ countries, powered by AI analytics and enterprise-grade security. Make informed decisions with the world's most trusted trade intelligence platform.
            </motion.p>
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={staggerItem}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  <AnimatedCounter end={200} suffix="+" duration={2.5} />
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  <AnimatedCounter end={50} suffix="M+" duration={2.5} />
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Trade Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  <AnimatedCounter end={500} suffix="+" duration={2.5} />
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  <AnimatedCounter end={99.9} decimals={1} suffix="%" duration={2.5} />
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Uptime SLA</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <motion.section 
        className="py-20 lg:py-32 bg-white dark:bg-neutral-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Powerful Features for Trade Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Everything you need to make data-driven trade decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card hover padding="lg" className="h-full">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                      </div>
                    </CardHeader>
                    <CardTitle className="mb-3">{feature.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {feature.description}
                    </CardDescription>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <CheckCircle className="w-4 h-4 text-success-600 dark:text-success-400 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Use Cases */}
      <motion.section 
        className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Built for Your Business Needs
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Real-world applications across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card hover padding="lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                      </div>
                      <Badge variant="info" size="sm">{useCase.stats.label}</Badge>
                    </div>
                    <CardTitle className="mb-3">{useCase.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {useCase.description}
                    </CardDescription>
                    <div className="pt-4 border-t dark:border-neutral-800">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {useCase.stats.value}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {useCase.stats.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section 
        className="py-20 lg:py-32 bg-white dark:bg-neutral-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Connect with your existing tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="flex items-center justify-between p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-600 dark:hover:border-primary-500 transition-colors"
              >
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-white mb-1">
                    {integration.name}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {integration.description}
                  </div>
                </div>
                {integration.available && (
                  <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 ml-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trade Intelligence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ companies making smarter decisions with real-time trade data
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
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer sections={footerSections} socialLinks={[
        { platform: 'linkedin', href: 'https://linkedin.com' },
        { platform: 'twitter', href: 'https://twitter.com' },
        { platform: 'github', href: 'https://github.com' }
      ]} />
    </div>
  )
}

