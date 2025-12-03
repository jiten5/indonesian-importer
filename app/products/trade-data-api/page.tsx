'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Code, Zap, BookOpen, Webhook, FileJson, Cpu, Shield, CheckCircle, Terminal, Package } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Clean, well-documented REST endpoints with consistent response formats.',
  },
  {
    icon: Webhook,
    title: 'Real-time Webhooks',
    description: 'Get instant notifications when new trade data matching your criteria is available.',
  },
  {
    icon: FileJson,
    title: 'Multiple Formats',
    description: 'JSON and XML response formats to fit your application architecture.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Average response time under 100ms with 99.99% uptime SLA.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Docs',
    description: 'Detailed documentation with examples, tutorials, and interactive API explorer.',
  },
  {
    icon: Package,
    title: 'SDK Libraries',
    description: 'Official SDKs for Python, Node.js, PHP, Ruby, and more coming soon.',
  },
];

const codeExamples = {
  python: `# Install the SDK
pip install tradeintel-python

# Initialize client
from tradeintel import TradeIntelClient

client = TradeIntelClient(api_key='your_api_key')

# Search trade data
results = client.search(
    country='Indonesia',
    hs_code='8542.31',
    date_from='2024-01-01',
    limit=100
)

# Process results
for shipment in results:
    print(f"{shipment.importer} - {shipment.product}")`,
  
  javascript: `// Install the SDK
npm install @tradeintel/node

// Initialize client
const TradeIntel = require('@tradeintel/node');
const client = new TradeIntel('your_api_key');

// Search trade data
const results = await client.search({
  country: 'Indonesia',
  hsCode: '8542.31',
  dateFrom: '2024-01-01',
  limit: 100
});

// Process results
results.forEach(shipment => {
  console.log(\`\${shipment.importer} - \${shipment.product}\`);
});`,

  curl: `# Direct API call
curl -X GET "https://api.tradeintel.com/v1/search" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "country": "Indonesia",
    "hs_code": "8542.31",
    "date_from": "2024-01-01",
    "limit": 100
  }'`,
};

const useCases = [
  {
    title: 'In-App Analytics',
    description: 'Embed trade intelligence directly into your application dashboard.',
    benefits: ['Real-time data integration', 'Custom visualizations', 'User-specific insights'],
  },
  {
    title: 'Custom Dashboards',
    description: 'Build tailored dashboards for specific industries or use cases.',
    benefits: ['Full data control', 'Flexible querying', 'Custom metrics'],
  },
  {
    title: 'Third-Party Integration',
    description: 'Connect trade data to CRM, ERP, or other business systems.',
    benefits: ['Automated workflows', 'Data enrichment', 'System synchronization'],
  },
  {
    title: 'Automated Reports',
    description: 'Generate scheduled reports and alerts based on trade activity.',
    benefits: ['Scheduled deliveries', 'Alert triggers', 'Custom formatting'],
  },
];

const apiFeatures = [
  '10,000 requests per day',
  'Real-time data access',
  'Webhook notifications',
  'JSON & XML formats',
  'Rate limiting controls',
  'Sandbox environment',
  'Priority support',
  'SLA guarantee',
];

export default function TradeDataAPIPage() {
  const [selectedLanguage, setSelectedLanguage] = React.useState<'python' | 'javascript' | 'curl'>('python');

  return (
    <PageLayout>
      <div className="text-center max-w-4xl mx-auto mb-16 pt-24">
        <Badge variant="secondary" className="mb-4">
          Trade Data API
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Integrate Global Trade Data Into Your Systems
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          Access 50M+ trade records programmatically with our powerful REST API. Build custom
          solutions, automate workflows, and unlock trade intelligence at scale.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing">
            <Button variant="primary" size="lg">
              Get API Access
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Talk to Developer Team
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          API Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} padding="lg" className="hover:border-secondary-300 dark:hover:border-secondary-700 transition-colors">
                <div className="p-3 bg-secondary-50 dark:bg-secondary-900/30 rounded-lg inline-flex mb-4">
                  <Icon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">
          Quick Start Code Examples
        </h2>
        <Card padding="lg">
          <div className="flex gap-2 mb-4 border-b border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => setSelectedLanguage('python')}
              className={`px-4 py-2 font-medium transition-colors ${
                selectedLanguage === 'python'
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setSelectedLanguage('javascript')}
              className={`px-4 py-2 font-medium transition-colors ${
                selectedLanguage === 'javascript'
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              JavaScript
            </button>
            <button
              onClick={() => setSelectedLanguage('curl')}
              className={`px-4 py-2 font-medium transition-colors ${
                selectedLanguage === 'curl'
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              cURL
            </button>
          </div>
          <pre className="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 p-6 rounded-lg overflow-x-auto">
            <code>{codeExamples[selectedLanguage]}</code>
          </pre>
          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <Terminal className="w-4 h-4" />
            <span>Full documentation and more examples available in our API docs</span>
          </div>
        </Card>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.title} padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                {useCase.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900/10 dark:to-primary-900/10 rounded-2xl p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">
            Developer-Friendly Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary-600 dark:bg-secondary-700 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Lightning Fast
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Average API response time under 100ms with globally distributed CDN and optimized
                  query processing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-600 dark:bg-primary-700 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Developer Friendly
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Comprehensive documentation, interactive API explorer, and official SDKs in multiple
                  languages.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-success-600 dark:bg-success-700 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  OAuth 2.0 authentication, encrypted connections, and 99.99% uptime SLA guarantee.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning-600 dark:bg-warning-700 rounded-lg">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Dedicated Support
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Priority technical support, dedicated Slack channel, and regular office hours with
                  our dev team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <Card padding="lg" className="bg-gradient-to-br from-secondary-600 to-primary-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Build with Trade Data
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Trusted by developers at leading companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {apiFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2 justify-center text-sm">
                  <CheckCircle className="w-4 h-4" />
                  {feature}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View API Pricing
                </Button>
              </Link>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-secondary-600"
                >
                  Read API Documentation
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Compare Our Products
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Not sure if the API is right for you? Compare with our other offerings.
        </p>
        <Link href="/products">
          <Button variant="outline">
            Compare All Products
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}

