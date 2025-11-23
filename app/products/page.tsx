'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Database, Code, FileKey, Check, ArrowRight, Zap, Shield, Globe, Users, BarChart3, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 'data-platform',
    name: 'Data Platform',
    tagline: 'Complete Trade Intelligence Access',
    description: 'Access comprehensive trade data from 195+ countries through our intuitive web platform with advanced search, filtering, and analytics.',
    icon: Database,
    color: 'primary' as const,
    features: [
      'Real-time trade data updates',
      'Advanced search and filtering',
      'Custom reports and analytics',
      'Data export (CSV, Excel)',
      'Unlimited searches',
      'Historical data access (from 2010)',
      'Company profiles and contacts',
      'Shipment tracking',
    ],
    benefits: [
      {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Transform data into insights with powerful visualization tools',
      },
      {
        icon: Globe,
        title: 'Global Coverage',
        description: '195+ countries with 50M+ trade records',
      },
      {
        icon: Shield,
        title: 'Compliance Tools',
        description: 'Built-in sanctions screening and compliance checks',
      },
    ],
    useCases: [
      'Market research and analysis',
      'Competitor intelligence',
      'Supplier/buyer discovery',
      'Trade route analysis',
    ],
    pricing: 'From $150/month',
    cta: {
      label: 'Start Free Trial',
      href: '/pricing',
    },
  },
  {
    id: 'api-access',
    name: 'Trade Data API',
    tagline: 'Integrate Trade Data into Your Systems',
    description: 'Programmatic access to our trade intelligence data via RESTful API with real-time webhooks and comprehensive documentation.',
    icon: Code,
    color: 'secondary' as const,
    features: [
      'RESTful API endpoints',
      'Real-time webhooks',
      'JSON/XML responses',
      'Rate limiting: 10,000 req/day',
      'Comprehensive documentation',
      'SDKs (Python, Node.js, PHP)',
      'Sandbox environment',
      'Dedicated support',
    ],
    benefits: [
      {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Sub-100ms response times for instant integration',
      },
      {
        icon: Code,
        title: 'Developer Friendly',
        description: 'Clean API design with extensive documentation',
      },
      {
        icon: Users,
        title: 'Dedicated Support',
        description: 'Priority technical support for API customers',
      },
    ],
    useCases: [
      'Custom application integration',
      'Automated data pipelines',
      'Real-time notifications',
      'Internal dashboard development',
    ],
    pricing: 'From $400/month',
    cta: {
      label: 'View API Docs',
      href: '/products/trade-data-api',
    },
  },
  {
    id: 'data-license',
    name: 'Data License',
    tagline: 'Enterprise Data Solutions',
    description: 'License raw trade data for your internal systems and custom applications with flexible delivery options and formats.',
    icon: FileKey,
    color: 'success' as const,
    features: [
      'Bulk data downloads',
      'Custom data formats',
      'Quarterly/monthly updates',
      'Country-specific datasets',
      'Historical archives (2010+)',
      'White-label options',
      'Dedicated account manager',
      'SLA guarantees',
    ],
    benefits: [
      {
        icon: Database,
        title: 'Complete Control',
        description: 'Own your data with offline access and custom formats',
      },
      {
        icon: TrendingUp,
        title: 'Scalable',
        description: 'From single countries to global datasets',
      },
      {
        icon: Shield,
        title: 'Enterprise Grade',
        description: 'SLA guarantees and dedicated support',
      },
    ],
    useCases: [
      'Enterprise BI systems',
      'Custom analytics platforms',
      'Research institutions',
      'Government agencies',
    ],
    pricing: 'Custom pricing',
    cta: {
      label: 'Contact Sales',
      href: '/contact',
    },
  },
];

const comparisonFeatures = [
  { name: 'Web Interface', platform: true, api: false, license: false },
  { name: 'API Access', platform: false, api: true, license: true },
  { name: 'Bulk Data Downloads', platform: false, api: false, license: true },
  { name: 'Real-time Updates', platform: true, api: true, license: false },
  { name: 'Custom Integration', platform: false, api: true, license: true },
  { name: 'Historical Data', platform: true, api: true, license: true },
  { name: 'Dedicated Support', platform: false, api: true, license: true },
  { name: 'White-label Options', platform: false, api: false, license: true },
];

export default function ProductsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="primary" className="mb-4">
          Products
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Discover Next-Gen Trade & Risk Intelligence Solutions
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Whether you need a web platform, API access, or raw data licensing, we have the perfect
          solution for your trade intelligence needs.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <Card
              key={product.id}
              className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
              padding="lg"
            >
              {/* Icon & Header */}
              <div className="mb-6">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${
                    product.color === 'primary'
                      ? 'bg-primary-100 dark:bg-primary-900/30'
                      : product.color === 'secondary'
                      ? 'bg-secondary-100 dark:bg-secondary-900/30'
                      : 'bg-success-100 dark:bg-success-900/30'
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      product.color === 'primary'
                        ? 'text-primary-600 dark:text-primary-400'
                        : product.color === 'secondary'
                        ? 'text-secondary-600 dark:text-secondary-400'
                        : 'text-success-600 dark:text-success-400'
                    }`}
                  />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
                  {product.name}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {product.tagline}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">{product.description}</p>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-6">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-3 uppercase tracking-wide">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-success-600 dark:text-success-400 flex-shrink-0" />
                      <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6 pb-6 border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4 uppercase tracking-wide">
                  Benefits
                </h3>
                <div className="space-y-3">
                  {product.benefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div key={index} className="flex items-start gap-3">
                        <BenefitIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                            {benefit.title}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400">
                            {benefit.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                    {product.pricing}
                  </span>
                </div>
                <Link href={product.cta.href}>
                  <Button
                    variant={product.color === 'primary' ? 'primary' : 'outline'}
                    className="w-full group"
                  >
                    {product.cta.label}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 text-center mb-12">
          Product Comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-neutral-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b-2 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                  Feature
                </th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    className="text-center py-4 px-6 text-sm font-semibold text-neutral-900 dark:text-neutral-50"
                  >
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-neutral-200 dark:border-neutral-700 ${
                    index % 2 === 0 ? '' : 'bg-neutral-50 dark:bg-neutral-800/50'
                  }`}
                >
                  <td className="py-4 px-6 text-sm text-neutral-700 dark:text-neutral-300">
                    {feature.name}
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.platform ? (
                      <Check className="w-5 h-5 text-success-600 dark:text-success-400 mx-auto" />
                    ) : (
                      <span className="text-neutral-300 dark:text-neutral-600">—</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.api ? (
                      <Check className="w-5 h-5 text-success-600 dark:text-success-400 mx-auto" />
                    ) : (
                      <span className="text-neutral-300 dark:text-neutral-600">—</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {feature.license ? (
                      <Check className="w-5 h-5 text-success-600 dark:text-success-400 mx-auto" />
                    ) : (
                      <span className="text-neutral-300 dark:text-neutral-600">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Not Sure Which Product is Right for You?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Our team can help you choose the perfect solution based on your specific needs and use
          cases.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Schedule a Demo
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
