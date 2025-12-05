'use client'

import { Metadata } from 'next'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
// import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  Shield, 
  Database, 
  Clock, 
  Users, 
  Download,
  CheckCircle,
  Lock,
  FileText,
  TrendingUp,
  Globe,
  Zap,
  Award
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

// Note: Metadata export removed due to 'use client' directive
// export const metadata: Metadata = {
//   title: 'Data Licensing | Trade Data Intelligence Platform',
//   description: 'Access comprehensive trade data with flexible licensing options. Choose from Basic, Professional, or Enterprise plans with full legal compliance and data protection.',
//   openGraph: {
//     title: 'Data Licensing | Trade Data Intelligence Platform',
//     description: 'Access comprehensive trade data with flexible licensing options. Choose from Basic, Professional, or Enterprise plans with full legal compliance and data protection.',
//     type: 'website'
//   }
// }

const licenseTiers = [
  {
    name: 'Basic License',
    price: '$299',
    period: 'per month',
    description: 'Perfect for small businesses and startups exploring trade data',
    icon: Database,
    color: 'primary',
    features: [
      '100,000 data records per month',
      '1 year historical data access',
      'Basic API access (1,000 calls/day)',
      'Standard data refresh (weekly)',
      'Email support (48h response)',
      'Single user license',
      'Export to CSV/Excel',
      'Basic analytics dashboard'
    ],
    restrictions: [
      'No data redistribution',
      'Limited to 1 concurrent user',
      'No white-label options'
    ]
  },
  {
    name: 'Professional License',
    price: '$899',
    period: 'per month',
    description: 'For growing businesses requiring comprehensive data access',
    icon: TrendingUp,
    color: 'secondary',
    popular: true,
    features: [
      '500,000 data records per month',
      '3 years historical data access',
      'Advanced API access (10,000 calls/day)',
      'Real-time data refresh (daily)',
      'Priority support (12h response)',
      'Up to 5 user licenses',
      'Export to multiple formats',
      'Advanced analytics & visualizations',
      'Custom data filters',
      'Data alerts & notifications',
      'Integration support'
    ],
    restrictions: [
      'Limited data redistribution (internal use only)',
      'Maximum 5 concurrent users'
    ]
  },
  {
    name: 'Enterprise License',
    price: 'Custom',
    period: 'contact sales',
    description: 'Complete data access with unlimited possibilities',
    icon: Award,
    color: 'accent',
    features: [
      'Unlimited data records',
      'Complete historical archive (10+ years)',
      'Unlimited API access',
      'Real-time data streaming',
      'Dedicated account manager',
      'Unlimited user licenses',
      'All export formats including API',
      'Custom analytics & reporting',
      'White-label options',
      'Data redistribution rights (upon agreement)',
      'Custom integrations',
      'SLA guarantee (99.9% uptime)',
      'On-premise deployment options',
      'Training & onboarding'
    ],
    restrictions: []
  }
]

const dataCategories = [
  {
    name: 'Import/Export Records',
    description: 'Detailed shipment data from customs declarations',
    coverage: '200+ countries',
    updateFrequency: 'Daily',
    icon: Globe
  },
  {
    name: 'Company Profiles',
    description: 'Comprehensive business information and trade history',
    coverage: '10M+ companies',
    updateFrequency: 'Real-time',
    icon: Users
  },
  {
    name: 'Product Intelligence',
    description: 'HS code classification and product specifications',
    coverage: '50M+ products',
    updateFrequency: 'Weekly',
    icon: Database
  },
  {
    name: 'Market Analytics',
    description: 'Trade trends, forecasts, and competitive insights',
    coverage: 'All major markets',
    updateFrequency: 'Monthly',
    icon: TrendingUp
  }
]

const legalTerms = [
  {
    title: 'Data Ownership',
    icon: Shield,
    content: 'All data remains the property of Trade Data Intelligence Platform. Licensees are granted usage rights as specified in their license tier.'
  },
  {
    title: 'Usage Rights',
    icon: CheckCircle,
    content: 'Data may be used for internal business purposes, market research, and competitive analysis. Redistribution is restricted unless explicitly permitted in Enterprise agreements.'
  },
  {
    title: 'Data Privacy',
    icon: Lock,
    content: 'All data is sourced from public customs declarations and official trade records. We comply with GDPR, CCPA, and international data protection regulations.'
  },
  {
    title: 'License Duration',
    icon: Clock,
    content: 'Licenses are valid for the subscription period. Data access is provided as long as the subscription remains active. Historical data downloaded during active periods may be retained.'
  },
  {
    title: 'Compliance',
    icon: FileText,
    content: 'Licensees must comply with all applicable trade laws, export control regulations, and sanctions. We reserve the right to terminate licenses for non-compliance.'
  },
  {
    title: 'Data Quality',
    icon: Award,
    content: 'We maintain 99.5% data accuracy through automated validation and manual verification. Data is provided "as-is" from official sources with best-effort quality assurance.'
  }
]

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />
      <div className="container-custom pt-20">
        {/* <Breadcrumb items={[{ label: 'License', href: '/license' }]} /> */}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Data Licensing
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Flexible Data Access with Full Legal Compliance
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8">
              Choose the licensing option that fits your business needs. All plans include full legal compliance, data protection, and quality guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* License Tiers */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Choose Your License Tier
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              All licenses include complete data access within tier limits, legal compliance, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licenseTiers.map((tier, index) => {
              const IconComponent = tier.icon
              return (
                <Card 
                  key={index} 
                  padding="lg"
                  className={tier.popular ? 'border-2 border-secondary-600 dark:border-secondary-400 relative' : ''}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="secondary" size="md">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${tier.color}-100 dark:bg-${tier.color}-900/20 mb-4`}>
                      <IconComponent className={`w-8 h-8 text-${tier.color}-600 dark:text-${tier.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      {tier.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                        {tier.price}
                      </span>
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {' '}/{tier.period}
                      </span>
                    </div>
                    <Button 
                      variant={tier.popular ? 'primary' : 'outline'} 
                      size="lg" 
                      className="w-full"
                    >
                      {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t dark:border-neutral-800 pt-6">
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
                        Features Included:
                      </h4>
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tier.restrictions.length > 0 && (
                      <div className="border-t dark:border-neutral-800 pt-6">
                        <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">
                          Restrictions:
                        </h4>
                        <ul className="space-y-2">
                          {tier.restrictions.map((restriction, idx) => (
                            <li key={idx} className="text-sm text-neutral-500 dark:text-neutral-500">
                              • {restriction}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Data Categories */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Data Categories Included
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Access comprehensive trade intelligence across multiple data categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} padding="lg" className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/20 mb-4">
                    <IconComponent className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Database className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {category.coverage}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Zap className="w-4 h-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {category.updateFrequency}
                      </span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Legal Terms */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              License Terms & Conditions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Understanding your rights and responsibilities as a data licensee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalTerms.map((term, index) => {
              const IconComponent = term.icon
              return (
                <Card key={index} padding="lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                        {term.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {term.content}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Card padding="lg" className="max-w-3xl mx-auto bg-neutral-50 dark:bg-neutral-800/50">
              <div className="flex items-start space-x-4">
                <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    Complete License Agreement
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    For full legal terms, data usage policies, and compliance requirements, please review our complete license agreement.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="primary" size="md" leftIcon={<Download className="w-4 h-4" />}>
                      Download Full Agreement (PDF)
                    </Button>
                    <Button variant="outline" size="md">
                      View Online
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Access Trade Intelligence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose your license tier and start exploring comprehensive trade data today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Compare All Plans
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Sales Team
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

