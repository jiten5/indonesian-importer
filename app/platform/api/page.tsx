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
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Code, Copy, CheckCircle, Book, Zap, Shield, Globe } from 'lucide-react'

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

const codeExamples = {
  authentication: {
    curl: `curl -X POST https://api.tradeintelligence.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key",
    "api_secret": "your_api_secret"
  }'`,
    javascript: `const axios = require('axios');

const getAccessToken = async () => {
  const response = await axios.post(
    'https://api.tradeintelligence.com/v1/auth/token',
    {
      api_key: 'your_api_key',
      api_secret: 'your_api_secret'
    }
  );
  return response.data.access_token;
};`,
    python: `import requests

def get_access_token():
    response = requests.post(
        'https://api.tradeintelligence.com/v1/auth/token',
        json={
            'api_key': 'your_api_key',
            'api_secret': 'your_api_secret'
        }
    )
    return response.json()['access_token']`
  },
  searchTrades: {
    curl: `curl -X GET "https://api.tradeintelligence.com/v1/trades/search?country=ID&hs_code=8471&limit=10" \\
  -H "Authorization: Bearer your_access_token"`,
    javascript: `const searchTrades = async (params) => {
  const response = await axios.get(
    'https://api.tradeintelligence.com/v1/trades/search',
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`
      },
      params: {
        country: 'ID',
        hs_code: '8471',
        limit: 10
      }
    }
  );
  return response.data;
};`,
    python: `def search_trades(access_token, params):
    response = requests.get(
        'https://api.tradeintelligence.com/v1/trades/search',
        headers={'Authorization': f'Bearer {access_token}'},
        params={
            'country': 'ID',
            'hs_code': '8471',
            'limit': 10
        }
    )
    return response.json()`
  },
  getCompany: {
    curl: `curl -X GET "https://api.tradeintelligence.com/v1/companies/12345" \\
  -H "Authorization: Bearer your_access_token"`,
    javascript: `const getCompany = async (companyId) => {
  const response = await axios.get(
    \`https://api.tradeintelligence.com/v1/companies/\${companyId}\`,
    {
      headers: {
        'Authorization': \`Bearer \${accessToken}\`
      }
    }
  );
  return response.data;
};`,
    python: `def get_company(access_token, company_id):
    response = requests.get(
        f'https://api.tradeintelligence.com/v1/companies/{company_id}',
        headers={'Authorization': f'Bearer {access_token}'}
    )
    return response.json()`
  }
}

const endpoints = [
  {
    method: 'POST',
    path: '/v1/auth/token',
    description: 'Authenticate and get access token',
    category: 'Authentication'
  },
  {
    method: 'GET',
    path: '/v1/trades/search',
    description: 'Search trade records with filters',
    category: 'Trade Data'
  },
  {
    method: 'GET',
    path: '/v1/trades/{id}',
    description: 'Get specific trade record details',
    category: 'Trade Data'
  },
  {
    method: 'GET',
    path: '/v1/companies/search',
    description: 'Search for companies',
    category: 'Companies'
  },
  {
    method: 'GET',
    path: '/v1/companies/{id}',
    description: 'Get company profile and trade history',
    category: 'Companies'
  },
  {
    method: 'GET',
    path: '/v1/products/search',
    description: 'Search products by HS code or description',
    category: 'Products'
  },
  {
    method: 'GET',
    path: '/v1/analytics/trends',
    description: 'Get trade trends and analytics',
    category: 'Analytics'
  },
  {
    method: 'GET',
    path: '/v1/analytics/forecast',
    description: 'Get AI-powered trade forecasts',
    category: 'Analytics'
  }
]

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Sub-100ms response times with global CDN distribution'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: '99.99% uptime SLA with enterprise-grade security'
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access data from 200+ countries in real-time'
  },
  {
    icon: Book,
    title: 'Well Documented',
    description: 'Comprehensive docs with examples in multiple languages'
  }
]

export default function APIPage() {
  const [activeExample, setActiveExample] = useState<'authentication' | 'searchTrades' | 'getCompany'>('authentication')
  const [activeLanguage, setActiveLanguage] = useState<'curl' | 'javascript' | 'python'>('curl')
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar navigation={navigation} />
      <div className="container-custom pt-24">
        {/* <Breadcrumb items={[{ label: 'Platform', href: '/platform' }, { label: 'API', href: '/platform/api' }]} /> */}
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              RESTful API
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              Trade Data API Documentation
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto">
              Integrate comprehensive trade intelligence directly into your applications with our powerful RESTful API. Access real-time data, analytics, and insights programmatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get API Key
              </Button>
              <Button variant="outline" size="lg">
                View Full Documentation
              </Button>
            </div>

            {/* API Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">&lt;100ms</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">99.99%</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Endpoints</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">Unlimited</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Rate Limit*</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-20 lg:py-32 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} padding="lg" className="text-center">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Quick Start Examples
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Get started quickly with code examples in your favorite language
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Example Selector */}
            <div className="lg:col-span-3">
              <Card padding="md">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveExample('authentication')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeExample === 'authentication'
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <div className="font-semibold mb-1">Authentication</div>
                    <div className="text-xs opacity-80">Get access token</div>
                  </button>
                  <button
                    onClick={() => setActiveExample('searchTrades')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeExample === 'searchTrades'
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <div className="font-semibold mb-1">Search Trades</div>
                    <div className="text-xs opacity-80">Find trade records</div>
                  </button>
                  <button
                    onClick={() => setActiveExample('getCompany')}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeExample === 'getCompany'
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700'
                    }`}
                  >
                    <div className="font-semibold mb-1">Get Company</div>
                    <div className="text-xs opacity-80">Fetch company data</div>
                  </button>
                </div>
              </Card>
            </div>

            {/* Code Display */}
            <div className="lg:col-span-9">
              <Card padding="none" className="overflow-hidden">
                {/* Language Tabs */}
                <div className="flex space-x-1 bg-neutral-100 dark:bg-neutral-800 p-2 border-b dark:border-neutral-700">
                  <button
                    onClick={() => setActiveLanguage('curl')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeLanguage === 'curl'
                        ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    cURL
                  </button>
                  <button
                    onClick={() => setActiveLanguage('javascript')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeLanguage === 'javascript'
                        ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    JavaScript
                  </button>
                  <button
                    onClick={() => setActiveLanguage('python')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeLanguage === 'python'
                        ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Python
                  </button>
                </div>

                {/* Code Content */}
                <div className="relative bg-neutral-900 dark:bg-neutral-950">
                  <button
                    onClick={() => copyToClipboard(codeExamples[activeExample][activeLanguage])}
                    className="absolute top-4 right-4 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
                  >
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-success-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-neutral-400" />
                    )}
                  </button>
                  <pre className="p-6 overflow-x-auto text-sm">
                    <code className="text-neutral-100 font-mono">
                      {codeExamples[activeExample][activeLanguage]}
                    </code>
                  </pre>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 lg:py-32 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Available Endpoints
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Comprehensive API endpoints for all your trade data needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Method
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Endpoint
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Description
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                  >
                    <td className="p-4">
                      <Badge
                        variant={endpoint.method === 'GET' ? 'success' : 'primary'}
                        size="sm"
                      >
                        {endpoint.method}
                      </Badge>
                    </td>
                    <td className="p-4 font-mono text-sm text-neutral-900 dark:text-white">
                      {endpoint.path}
                    </td>
                    <td className="p-4 text-neutral-600 dark:text-neutral-400">
                      {endpoint.description}
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" size="sm">
                        {endpoint.category}
                      </Badge>
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
            <Code className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your API key and start integrating trade intelligence into your applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Get API Key
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Read Full Docs
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

