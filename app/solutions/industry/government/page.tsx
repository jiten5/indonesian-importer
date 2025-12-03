'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Landmark,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BarChart3,
  FileText,
  Target,
  AlertCircle,
  Database,
} from 'lucide-react';

export default function GovernmentSolutionPage() {
  const solutions = [
    {
      title: 'End-to-End Trade Visibility',
      description: 'Government agencies often operate with fragmented trade information - multiple sources, inconsistent HS codes, outdated reports, and limited clarity on cross-border flows. This lack of unified visibility makes it harder to validate shipments, track commodity movement, or understand true import–export exposure.',
      features: [
        'See full import–export activity with standardized HS codes, ports, volumes, and values',
        'Analyze multi-year trade flows to understand seasonality, growth, or sudden anomalies',
        'Validate declarations and verify shipment accuracy against trusted data',
        'Support policy, negotiation, and economic assessments with factual trade records',
      ],
      icon: Database,
    },
    {
      title: 'Compliance & Risk Monitoring',
      description: 'Customs and enforcement teams struggle to detect evasion when declarations are misclassified, prices appear normal on paper, or risky goods move through indirect routes. Traditional tools miss early warning signs.',
      features: [
        'Identify suspicious routing and transshipment patterns that indicate risk',
        'Monitor restricted, controlled, or dual-use goods with near-real-time movement data',
        'Prioritize inspections by targeting shipments with the highest risk indicators',
      ],
      icon: Shield,
    },
    {
      title: 'Economic & Market Analytics',
      description: 'Policymakers often rely on lagging indicators - annual surveys, post-event reports, or aggregated stats. These offer limited visibility into real-time economic shifts or changing demand.',
      features: [
        'Track product-level demand and price movements across countries',
        'Measure import dependency and export competitiveness with precision',
        'Benchmark sector performance using multi-year trade trends',
      ],
      icon: BarChart3,
    },
    {
      title: 'Critical Supply Chain Assessment',
      description: 'Essential goods—fuel, food grains, fertilizers, pharmaceuticals, raw materials—often face disruptions long before they are visible through standard reporting. Governments need early detection to prevent shortages.',
      features: [
        'Map critical suppliers across countries and industries',
        'Monitor early bottlenecks caused by logistics, production, or geopolitical events',
        'Forecast shortages or stock risks using trend-based signals',
      ],
      icon: AlertCircle,
    },
    {
      title: 'API & System Integrations',
      description: 'Public-sector teams lose time when data must be manually gathered, verified, or merged from different systems. Delayed information slows enforcement and policy decisions.',
      features: [
        'Connect shipment-level data to customs, risk engines, BI dashboards, and national data platforms',
        'Automate data refresh, risk scoring, and compliance checks',
        'Create common, standardized trade intelligence across departments',
      ],
      icon: FileText,
    },
  ];

  const metrics = [
    { value: '45%', label: 'Faster Policy and Economic Analysis' },
    { value: '52%', label: 'Improvement in Fraud and Risk Detection' },
    { value: '40%', label: 'Reduction in Procurement and Supplier Validation Risk' },
  ];

  const useCases = [
    {
      title: 'Trade Compliance',
      description: 'Rules change fast, and governments need clarity. Our data helps agencies track restricted goods, flag risky patterns, and stay enforcement-ready without compliance gaps.',
      icon: Shield,
      link: '/solutions/usecase/trade-compliance',
    },
    {
      title: 'Market Intelligence',
      description: 'Governments need real visibility into shifting markets. Our insights reveal demand trends, global competition, and emerging opportunities to support stronger trade and economic decisions.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Research Analytics',
      description: 'Every strong policy starts with strong evidence. Analysts use our intelligence to validate trends, catch anomalies, and turn complex trade flows into clear, actionable insights.',
      icon: BarChart3,
      link: '/solutions/usecase/research-analytics',
    },
  ];

  const benefits = [
    { icon: Shield, text: 'Strengthen Enforcement: Validate declarations and detect fraud or risky trade patterns' },
    { icon: FileText, text: 'Build Evidence-Based Policy: Assess import dependency, tariff impact, and sector performance' },
    { icon: AlertCircle, text: 'Monitor Essential Goods: Track sensitive commodities and detect early supply bottlenecks' },
    { icon: Target, text: 'Improve Procurement Decisions: Verify global suppliers using real shipment history' },
    { icon: TrendingUp, text: 'Enhance Risk & Crisis Readiness: Spot disruptions, unusual movements, and national security threats early' },
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
              <Landmark className="w-4 h-4 mr-2" />
              Government
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Stop Guessing. Start Governing With Evidence
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Governments need reliable trade data—not estimates. Market Inside delivers global shipment-level data, HS code insights, and trade trends to help regulators and policymakers detect anomalies, assess exposure, and design targeted interventions with confidence.
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
              Build Smarter, Safer, More Transparent Governance With Data
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Strengthen governance with evidence-backed insights that help craft policies, enhance public services, safeguard essential goods, promote exports, and detect trade-related fraud early.
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
              See It. Analyze It and Govern With Confidence
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              See how government teams strengthen enforcement, improve procurement decisions, and make faster, evidence-backed policies with verified trade intelligence.
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
              From Data to Decision - Government Use Cases
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We support governments with trade intelligence that drives smarter economic planning, regional development, and evidence-based policy and funding decisions.
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
              From Data to Decision - Empowering Governments with Trade Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Governments often work with outdated reports or limited visibility, leading to slower decisions and higher risk. Market Inside delivers shipment-level intelligence that helps public-sector teams act faster, enforce better, and plan with clarity.
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
              Strengthen Your National Trade Intelligence
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Empower your agency with trusted shipment-level data for faster, evidence-based decisions.
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

