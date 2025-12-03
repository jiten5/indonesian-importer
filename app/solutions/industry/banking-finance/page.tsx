'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  DollarSign,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  FileText,
  Target,
  AlertCircle,
  Zap,
} from 'lucide-react';

export default function BankingFinanceSolutionPage() {
  const solutions = [
    {
      title: 'Transaction-Level Credit Intelligence',
      description: 'Financial teams need real operational data not assumptions to evaluate a borrower\'s strength. Our platform delivers trade footprints that reveal continuity, seasonality, and stability across market cycles.',
      features: [
        'Analyze shipment frequency, seasonality, and business continuity',
        'Assess operational stability using historical trade footprints',
        'Identify concentration risks across products, suppliers, and markets',
        'Benchmark companies against sector averages and peer groups',
        'Track sudden drops or surges indicating stress or growth',
      ],
      icon: BarChart3,
    },
    {
      title: 'Trade Finance & Compliance Validation',
      description: 'Trade finance processes depend on accurate documents. We verify letters of credit, invoices, and BOLs against real shipment data, enabling compliance, AML, and trade-finance teams to validate every detail with confidence.',
      features: [
        'Validate letters of credit, invoices, and BOLs against actual shipments',
        'Detect mismatches in product volume, value, or origin',
        'Identify sanctioned entities, high-risk corridors, or dual-use goods',
      ],
      icon: Shield,
    },
    {
      title: 'Market & Investment Signal Analytics',
      description: 'Investment and research teams need early signals—not delayed market reports. Our trade intelligence provides leading indicators that reveal sector strength, commodity trends, and market shifts ahead of financial disclosures.',
      features: [
        'Map sector expansion using multi-year import–export patterns',
        'Track commodity price movements and demand-side signals',
        'Identify emerging suppliers and high-growth product categories',
      ],
      icon: TrendingUp,
    },
  ];

  const metrics = [
    { value: '35%', label: 'Faster Credit-Risk Evaluations' },
    { value: '31%', label: 'Fewer Trade-Finance Fraud Cases' },
    { value: '40%', label: 'Better AML/KYC Anomaly Detection' },
  ];

  const useCases = [
    {
      title: 'Buyer-Supplier Discovery',
      description: 'Market Inside helps financial teams verify if a company is real and active by showing shipment history, trading frequency, and counterparties—enabling faster, confident credit and finance checks.',
      icon: Users,
      link: '/solutions/usecase/buyer-supplier-discovery',
    },
    {
      title: 'Market Intelligence',
      description: 'Get early signals on sector performance with real trade flows. Identify growing industries, emerging markets, and demand patterns to guide lending and investment decisions.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Trade Compliance',
      description: 'Strengthen AML and regulatory checks with verified shipment trails, accurate HS codes, and product movement insights—quickly spotting TBML risks and suspicious trade behavior.',
      icon: Shield,
      link: '/solutions/usecase/trade-compliance',
    },
  ];

  const benefits = [
    { icon: Target, text: 'Confident Lending: Use shipment-backed performance to score borrowers' },
    { icon: AlertCircle, text: 'Risk Control: Detect market or operational weakening early' },
    { icon: BarChart3, text: 'Better Allocation: Follow trade flows to guide investment decisions' },
    { icon: Shield, text: 'Smooth Compliance: Perform AML/KYC checks using real activity histories' },
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
              <DollarSign className="w-4 h-4 mr-2" />
              Banking & Finance
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Finance Decisions That Start with Trade Data
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Trade Intelligence for High-Precision Financial Decisions. Strengthen credit scoring, fraud detection, and investment insights with verified global trade data and analytics.
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
              Finance Every Transaction With Clear Trade Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Turn trade flows and company behavior into clear financial decisions.
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
              Built on Transparency. Backed by Measurable Impact
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Financial institutions experience measurable improvements in fraud detection, credit scoring, and compliance accuracy when power is shifted from self-reported data to verifiable trade intelligence.
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
              Finance Decisions That Move With Global Trade
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Use global trade intelligence to evaluate risks, assess partners, and make faster, data-driven financial decisions.
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
              Finance that Moves Fast as Global Trade
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Financial institutions rely on transparent, shipment-based intelligence to assess exposure, validate transactions, and understand real business performance.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              Finance Decisions Start with Trade Data You Can Trust
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Improve credit decisions, detect fraud, and strengthen compliance using shipment-level import-export intelligence.
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

