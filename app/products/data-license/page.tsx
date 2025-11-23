'use client';

import React from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { FileKey, Download, Shield, Database, TrendingUp, Users, CheckCircle, Clock, HardDrive } from 'lucide-react';

const features = [
  {
    icon: Download,
    title: 'Bulk Downloads',
    description: 'Download complete datasets in CSV, Excel, or database-ready formats.',
  },
  {
    icon: Database,
    title: 'Historical Archives',
    description: 'Access comprehensive historical data dating back to 2010 and beyond.',
  },
  {
    icon: HardDrive,
    title: 'Offline Access',
    description: 'Work with data locally without internet connectivity or API dependencies.',
  },
  {
    icon: Clock,
    title: 'Regular Updates',
    description: 'Receive quarterly or monthly data updates based on your subscription.',
  },
  {
    icon: Shield,
    title: 'White-Label Ready',
    description: 'Rebrand and integrate data into your own products and services.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal account manager and priority technical support.',
  },
];

const dataTypes = [
  {
    category: 'By Country',
    description: 'Country-specific datasets covering imports, exports, and bilateral trade flows.',
    examples: ['Indonesia trade data', 'USA import records', 'China export statistics'],
  },
  {
    category: 'By HS Code',
    description: 'Product-specific data organized by Harmonized System codes at various levels.',
    examples: ['Electronics (HS 85)', 'Textiles (HS 50-63)', 'Machinery (HS 84)'],
  },
  {
    category: 'By Shipment Type',
    description: 'Filtered datasets based on shipment characteristics and trade patterns.',
    examples: ['Sea freight shipments', 'Air cargo data', 'Container movements'],
  },
  {
    category: 'Custom Extracts',
    description: 'Tailored datasets matching your specific criteria and business needs.',
    examples: ['Multi-country analysis', 'Industry-specific data', 'Time-series compilations'],
  },
];

const useCases = [
  {
    title: 'Research & Analysis',
    description: 'Conduct in-depth market research and academic studies with comprehensive datasets.',
    benefits: ['Complete historical data', 'Statistical analysis ready', 'No query limitations'],
  },
  {
    title: 'Product Integration',
    description: 'Embed trade data into your own software products and platforms.',
    benefits: ['White-label licensing', 'Commercial use rights', 'Redistribution options'],
  },
  {
    title: 'Enterprise Analytics',
    description: 'Build internal data warehouses and business intelligence systems.',
    benefits: ['Database-ready formats', 'ETL pipeline friendly', 'Unlimited processing'],
  },
  {
    title: 'Consulting Services',
    description: 'Power consulting and advisory services with authoritative trade data.',
    benefits: ['Client deliverables', 'Report generation', 'Presentation materials'],
  },
];

const licenseTypes = [
  {
    title: 'Single-User License',
    description: 'Ideal for individual researchers and small businesses',
    features: ['1 user access', 'Personal use only', 'Quarterly updates', 'Email support'],
    pricing: 'Starting at $2,000/year',
  },
  {
    title: 'Team License',
    description: 'Perfect for departments and project teams',
    features: ['Up to 10 users', 'Internal use rights', 'Monthly updates', 'Priority support'],
    pricing: 'Starting at $8,000/year',
  },
  {
    title: 'Enterprise License',
    description: 'Comprehensive solution for large organizations',
    features: ['Unlimited users', 'Commercial use rights', 'Real-time updates', 'Dedicated manager'],
    pricing: 'Custom pricing',
  },
  {
    title: 'Redistribution License',
    description: 'For resellers and product integration',
    features: ['White-label rights', 'Redistribution allowed', 'Custom branding', 'Revenue sharing'],
    pricing: 'Custom pricing',
  },
];

export default function DataLicensePage() {
  return (
    <PageLayout>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Badge variant="success" className="mb-4">
          Data License
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Secure, Offline Access to Trade Datasets
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          License comprehensive trade data for research, product integration, or enterprise
          analytics. Get complete datasets with flexible usage rights and regular updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Request License Quote
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Schedule Consultation
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
              <Card key={feature.title} padding="lg" className="hover:border-success-300 dark:hover:border-success-700 transition-colors">
                <div className="p-3 bg-success-50 dark:bg-success-900/30 rounded-lg inline-flex mb-4">
                  <Icon className="w-6 h-6 text-success-600 dark:text-success-400" />
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
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          Available Data Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataTypes.map((dataType) => (
            <Card key={dataType.category} padding="lg">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                {dataType.category}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {dataType.description}
              </p>
              <div className="space-y-2">
                {dataType.examples.map((example) => (
                  <div key={example} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                    {example}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          License Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenseTypes.map((license) => (
            <Card key={license.title} padding="lg" className="flex flex-col">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                {license.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                {license.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {license.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                  {license.pricing}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-20 bg-gradient-to-br from-success-50 to-primary-50 dark:from-success-900/10 dark:to-primary-900/10 rounded-2xl p-8 lg:p-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase) => (
              <div key={useCase.title}>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20">
        <Card padding="lg" className="bg-gradient-to-br from-success-600 to-primary-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <FileKey className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Complete Control Over Your Trade Data
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Flexible licensing options designed for enterprise needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Database className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Complete Datasets</h4>
                <p className="text-sm opacity-90">Full access to all fields and records</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                <p className="text-sm opacity-90">Grow from single user to enterprise</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">Enterprise Grade</h4>
                <p className="text-sm opacity-90">SLA, dedicated support, and compliance</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-success-600"
                >
                  Compare All Products
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Contact our sales team to discuss your specific requirements and receive a custom quote
          tailored to your organization's needs.
        </p>
        <Link href="/contact">
          <Button variant="primary" size="lg">
            Contact Sales Team
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
}
