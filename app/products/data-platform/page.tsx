'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Database, Search, FileText, TrendingUp, Users, Globe, BarChart3, Shield, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Advanced Search & Filters',
    description: 'Find exactly what you need with powerful search capabilities across 50M+ trade records.',
  },
  {
    icon: FileText,
    title: 'Custom Reports',
    description: 'Generate detailed reports tailored to your business needs with customizable templates.',
  },
  {
    icon: TrendingUp,
    title: 'Market Analytics',
    description: 'Track market trends, identify opportunities, and analyze competitor activities.',
  },
  {
    icon: Users,
    title: 'Company Profiles',
    description: 'Access comprehensive profiles of importers, exporters, and trading partners worldwide.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Trade data from 195+ countries with regular updates and historical archives.',
  },
  {
    icon: BarChart3,
    title: 'Interactive Dashboards',
    description: 'Visualize data with charts, graphs, and customizable dashboards.',
  },
];

const useCases = [
  {
    title: 'Market Research',
    description: 'Identify new markets, understand demand patterns, and evaluate market size for your products.',
    benefits: ['Discover emerging markets', 'Analyze import/export volumes', 'Identify trending products'],
  },
  {
    title: 'Competitor Intelligence',
    description: 'Track competitor shipments, supplier relationships, and market strategies.',
    benefits: ['Monitor competitor activities', 'Discover their suppliers', 'Analyze pricing strategies'],
  },
  {
    title: 'Supplier Discovery',
    description: 'Find reliable suppliers and manufacturers across global markets.',
    benefits: ['Verify supplier credibility', 'Compare supplier performance', 'Diversify supply chain'],
  },
  {
    title: 'Buyer Identification',
    description: 'Locate potential customers and understand their purchasing patterns.',
    benefits: ['Find active buyers', 'Understand buying cycles', 'Personalize outreach'],
  },
];

const pricingHighlights = [
  'Real-time data updates',
  'Unlimited searches',
  'Advanced filters & analytics',
  'Custom report builder',
  'Historical data from 2010',
  'Multi-user access',
  'Priority support',
  'API integration available',
];

export default function DataPlatformPage() {
  return (
    <PageLayout>
      <div className="text-center max-w-4xl mx-auto mb-16 pt-24">
        <Badge variant="primary" className="mb-4">
          Data Platform
        </Badge>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Our Leading Global Trade Intelligence Platform
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          Access the most comprehensive trade database with powerful analytics, intuitive interface,
          and actionable insights to drive your international business growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing">
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} padding="lg" className="hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-flex mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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

      <div className="mb-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 rounded-2xl p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">
            Powerful Benefits for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-600 dark:bg-primary-700 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Supply Chain Mapping
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Visualize your entire supply chain, identify dependencies, and discover alternative
                  suppliers to mitigate risks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary-600 dark:bg-secondary-700 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Competitor Analysis
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Track competitor shipments, understand their strategies, and stay ahead with real-time
                  intelligence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-success-600 dark:bg-success-700 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Contact Discovery
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Access contact details of importers and exporters to expand your network and close
                  more deals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-warning-600 dark:bg-warning-700 rounded-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Shipment Records
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  View detailed shipment records including quantities, values, ports, and shipping
                  methods.
                </p>
              </div>
            </div>
          </div>
        </div>
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

      <div className="mb-20">
        <Card padding="lg" className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Everything You Need to Succeed in Global Trade
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 10,000+ businesses already using our platform to drive growth
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {pricingHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2 justify-center text-sm">
                  <Zap className="w-4 h-4" />
                  {highlight}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pricing">
                <Button variant="secondary" size="lg">
                  View Pricing Plans
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Compare Our Products
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Not sure if the Data Platform is right for you? Compare with our other offerings.
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

