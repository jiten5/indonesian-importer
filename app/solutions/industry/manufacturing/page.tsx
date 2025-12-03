'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Factory,
  Package,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  BarChart3,
  Zap,
  Globe,
  Activity,
} from 'lucide-react';

export default function ManufacturingSolutionPage() {
  const solutions = [
    {
      title: 'Production Efficiency',
      description: 'Optimize production with insights from historical trade and shipment data. Identify bottlenecks, trace delays to material or supply issues, and benchmark line performance against real-world trade patterns. Empower plant managers and production teams to reduce downtime, improve efficiency, and align operations with supply chain realities for smoother, cost-effective manufacturing.',
      features: [
        'Identify slow or waste-heavy steps across lines',
        'Pinpoint root causes linked to material or supply delays',
        'Benchmark performance against historical trade patterns',
      ],
      icon: Activity,
    },
    {
      title: 'Inventory, Demand & Supply Chain Intelligence',
      description: 'Procurement and supply chain teams struggle when they can\'t see demand shifts or supplier reliability. We combine trade flows, supplier activity, and consumption patterns to help you stock smarter, plan production accurately, and avoid production gaps.',
      features: [
        'Detect stock risks via consumption insights',
        'Track supplier reliability and shipment consistency',
        'Use trade patterns to adjust production in advance',
      ],
      icon: Package,
    },
    {
      title: 'Quality, Safety & Compliance Intelligence',
      description: 'Maintaining consistent quality, safety, and compliance is challenging without complete visibility across production and supply chains. Using historical trade data, shipment insights, and company-level risk analysis, we help quality teams detect defects early, monitor safety and compliance, and prevent repeat issues.',
      features: [
        'Track safety, compliance, and sanction deviations across suppliers and shipments',
        'Analyze root causes using operational and trade-driven signals',
        'Maintain historical records for audits and risk reporting',
      ],
      icon: Shield,
    },
  ];

  const metrics = [
    { value: '30%', label: 'Faster Production Cycles' },
    { value: '40%', label: 'Improved Procurement Efficiency' },
    { value: '25%', label: 'Boosted Production Profit Margins' },
  ];

  const useCases = [
    {
      title: 'Buyer-Supplier Discovery',
      description: 'Find global suppliers and buyers that match your manufacturing needs. Build reliable partnerships, verify trade activity, and strengthen your supply chain with trusted connections.',
      icon: Users,
      link: '/solutions/usecase/buyer-supplier-discovery',
    },
    {
      title: 'Market Intelligence',
      description: 'Use trade insights to spot growing markets, track demand for your products, and plan sourcing strategies that keep you ahead of supply chain disruptions.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Competitor Benchmarking',
      description: 'Compare your trade performance with competitors to identify new buyers, pricing gaps, and growth markets - all backed by shipment-level intelligence.',
      icon: BarChart3,
      link: '/solutions/usecase/competitor-benchmarking',
    },
  ];

  const benefits = [
    { icon: Target, text: 'Source Smarter: Discover alternative suppliers when your current ones fail to deliver' },
    { icon: Globe, text: 'Anticipate Market Shifts: Track trade flow changes to act before disruptions hit' },
    { icon: Zap, text: 'Optimize Procurement: Compare supplier activity, pricing trends, and delivery consistency' },
    { icon: TrendingUp, text: 'Expand Exports: Find global buyers actively importing your category' },
    { icon: Shield, text: 'Stay Competitive: Turn global trade uncertainty into confident, data-driven manufacturing growth' },
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
              <Factory className="w-4 h-4 mr-2" />
              Manufacturing
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Empowering Manufacturing Through Trade Intelligence
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Make better sourcing and production decisions with clear visibility into global trade.
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
              Your Data Advantage for Modern, Efficient Manufacturing
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Make manufacturing simpler, smoother, and more reliable with data you can trust.
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
              Numbers That Prove Manufacturing Wins with Data
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Real improvements across production, procurement, and global expansion, powered by data you can trust.
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
              The Smart Way to Build, Buy, and Sell Across Borders
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Get the visibility you need to source better, plan production smarter, and keep supply chains running without disruption.
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
              The Smart Way to Build, Buy, and Sell Across Borders
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              When tariffs, economic policies, and export controls disrupt supply chains, raw material prices affect production. Our data-driven trade insights put you back in control.
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
              Looking for Data That Actually Solves Manufacturing Chaos?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Try the platform built for sourcing clarity, supply stability, and faster growth.
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

