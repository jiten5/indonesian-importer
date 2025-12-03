'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Search,
  Database,
  BarChart3,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Target,
  Activity,
  FileText,
} from 'lucide-react';

export default function ResearchSolutionPage() {
  const solutions = [
    {
      title: 'High-Performance Search for Faster Research',
      description: 'Research teams often spend hours sifting through fragmented datasets, delaying insights and slowing decision cycles. Market Inside provides a high-performance search engine that filters millions of shipment records in seconds, helping analysts find accurate answers without manual effort.',
      features: [
        'Search shipments instantly by HS code, country, company, or product',
        'Reduce research time by eliminating manual dataset cleaning and filtering',
      ],
      icon: Search,
    },
    {
      title: 'Standardized & Enriched Data for Cross-Market Comparison',
      description: 'Comparing multiple markets becomes difficult when data formats, HS codes, and classification structures differ by country. Market Inside standardizes and enriches all shipment-level records, giving analysts a clean, unified dataset built for accurate cross-border comparison.',
      features: [
        'Access normalized HS codes and product attributes across all countries',
        'Compare markets, sectors, and supplier performance without inconsistencies',
        'Conduct multi-country analysis with confidence in data accuracy',
      ],
      icon: Database,
    },
    {
      title: 'Analyst-Friendly Dashboards for Clear Insights',
      description: 'Researchers lose time stitching charts, cleaning data, and building visualizations manually. We provide dashboards that turn raw trade flows into ready-to-use visual insights.',
      features: [
        'View pricing patterns, market shares, and trade flows instantly',
        'Identify competitor activity and product movement trends without manual modeling',
        'Convert complex data into visual narratives for reports and presentations',
      ],
      icon: BarChart3,
    },
    {
      title: 'API Access for Automated Research Workflows',
      description: 'Manual data downloads slow down research teams and make updating models difficult. Our API integrates shipment-level data directly into internal tools and research models.',
      features: [
        'Pull data directly into BI platforms, dashboards, and analytics systems',
        'Automate dataset refreshes for reliable research workflows',
      ],
      icon: Zap,
    },
    {
      title: 'Custom Segmentation Tools for Deep Market Discovery',
      description: 'General trade data doesn\'t reveal niche markets, rising suppliers, or emerging product segments. Market Inside enables researchers to slice datasets with precision and uncover insights traditional sources miss.',
      features: [
        'Segment markets by HS code, country, product attributes, or supplier type',
        'Identify emerging suppliers and fast-growing product categories',
        'Discover new opportunities and niche segments before competitors do',
      ],
      icon: Target,
    },
  ];

  const metrics = [
    { value: '38%', label: 'Faster Supplier Validation' },
    { value: '30%', label: 'Lower Procurement Costs' },
    { value: '25%', label: 'Fewer Project Delays' },
  ];

  const useCases = [
    {
      title: 'Research Analytics',
      description: 'Turn raw global trade and shipment data into actionable insights for research planning. Analyze material availability, sourcing trends, and market patterns to support accurate, data-backed decisions.',
      icon: Activity,
      link: '/solutions/usecase/research-analytics',
    },
    {
      title: 'Market Intelligence',
      description: 'Monitor global trade flows, emerging supply trends, and pricing shifts across multiple markets. Use these insights to anticipate shortages, optimize procurement, and forecast research timelines with greater accuracy.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Competitor Benchmarking',
      description: 'Analyze where competing organizations source key materials, their shipment patterns, and trade volumes. Stay ahead by understanding their global movements and planning smarter strategies.',
      icon: BarChart3,
      link: '/solutions/usecase/competitor-benchmarking',
    },
  ];

  const benefits = [
    { icon: TrendingUp, text: 'Market Trend Forecasting: Identify long-term patterns in product demand, pricing, and trade volumes' },
    { icon: BarChart3, text: 'Competitive Strategy Development: Benchmark competitors, analyze shipment behavior, and monitor new market entries' },
    { icon: Target, text: 'Product Expansion Analysis: Understand which regions are growing, declining, or underserved' },
    { icon: Users, text: 'Supplier Mapping & Validation: Find reliable suppliers worldwide using verified shipment histories and compliance checks' },
    { icon: Shield, text: 'Policy & Regulatory Research: Track international movements that may influence trade compliance or market policy' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Research
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Trade Intelligence That Strengthens Your Research Strategy
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Market Inside delivers verified trade data and global insights that help research teams spot trends, assess suppliers, and make smarter, faster, evidence-backed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="shadow-lg">
                Request a Demo
              </Button>
              <Button variant="outline" size="lg">
                Start for Free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-y border-neutral-200 dark:border-neutral-800">
        <div className="container-custom">
          <h2 className="text-xl font-semibold text-center text-neutral-600 dark:text-neutral-400 mb-8">
            Brands That Believe in What We Do
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-32 h-12 bg-neutral-200 dark:bg-neutral-700 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">
              Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Power Your Research With Accurate, Analyst-Ready Trade Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A unified trade intelligence platform that helps research teams analyze markets, compare countries, track pricing, and discover emerging opportunities with confidence.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        <ul className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                              <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Metrics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trade Data That Measures Research Excellence
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              See how Market Inside empowers research teams with verified shipment-level trade data — helping track materials, optimize sourcing, and make faster, smarter, and cost-efficient decisions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">{metric.value}</div>
                <div className="text-lg text-white/90">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Badge variant="primary" className="mb-4">
              Use Cases
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Data That Powers Every Research Decision
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Turn global trade data into actionable insights, helping research teams forecast trends, validate suppliers, analyze markets, and make faster, smarter decisions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                      {useCase.description}
                    </p>
                    <Button variant="ghost" className="group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      Explore Use Case
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Research Smarter. Discover Faster
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Research teams need accurate, timely data and reliable supplier information to make informed decisions. Market Inside's trade intelligence provides shipment-level visibility, market insights, and supplier verification so teams can plan, source, and expand with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 font-medium">{benefit.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Research Smarter?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Use Market Inside trade data to track materials, suppliers, and make faster, informed project decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-50">
                Request A Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Start For Free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

