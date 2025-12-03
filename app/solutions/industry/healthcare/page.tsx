'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Heart,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  BarChart3,
  Package,
  AlertCircle,
  DollarSign,
} from 'lucide-react';

export default function HealthcareSolutionPage() {
  const solutions = [
    {
      title: 'Medicine & Equipment Shortages',
      description: 'Healthcare providers often face sudden shortages of drugs, APIs (Active Pharmaceutical Ingredient), and medical devices due to supply disruptions. Market Inside data helps forecast risks by tracking global import volumes, shipment delays, and sourcing dependencies - enabling smarter inventory planning and uninterrupted patient care.',
      features: [
        'Detect declining import volumes early to anticipate shortages',
        'Track supplier reliability through real shipment history',
        'Identify alternate sourcing hubs during disruptions',
      ],
      icon: Package,
    },
    {
      title: 'Unverified or Risky Suppliers',
      description: 'Hospitals and pharma companies struggle to evaluate the credibility of suppliers for APIs, equipment, and consumables. Market Inside provides authentic supplier data, sanctions checks, and trade history insights to ensure safe, compliant procurement decisions.',
      features: [
        'Verify suppliers using actual shipment records',
        'Screen companies against sanctions and compliance risks',
        'Compare supplier performance by volumes, frequency, and regions',
      ],
      icon: Shield,
    },
    {
      title: 'Rising Procurement Costs',
      description: 'Fluctuating prices of drug ingredients and medical equipment impact budgets. Market Inside helps organizations benchmark import prices, analyze cost trends, and negotiate better.',
      features: [
        'Compare pricing trends across countries and suppliers',
        'Track value fluctuations for pharmaceutical products',
        'Benchmark procurement costs against real global market rates',
      ],
      icon: DollarSign,
    },
    {
      title: 'Delays in Medical Supply Chains',
      description: 'Healthcare supply chains suffer when shipments of critical products are delayed at ports or stuck in transit. Market Inside data offers route, port, and shipment visibility to help logistics teams act quickly and maintain operational continuity.',
      features: [
        'Monitor shipment progress across ports and trade routes',
        'Detect bottlenecks causing delays or stock-outs',
        'Improve planning with historical lead-time insights',
      ],
      icon: AlertCircle,
    },
    {
      title: 'Pharma & Product Demand Mapping',
      description: 'Manufacturers and distributors often lack clarity on where demand is rising globally. Market Inside trade intelligence reveals market movements, helping healthcare companies expand, target the right regions, and meet unmet needs.',
      features: [
        'Identify regions with growing demand for your product',
        'Analyze competitor shipment patterns and market entry trends',
        'Spot emerging markets using trade fluctuations',
      ],
      icon: TrendingUp,
    },
  ];

  const metrics = [
    { value: '30%', label: 'Reduced Stockouts' },
    { value: '50%', label: 'Enhanced Supply Chain Resilience' },
  ];

  const useCases = [
    {
      title: 'Buyer-Supplier Discovery',
      description: 'Find global manufacturers, distributors, and institutional buyers that match your medical-supply requirements. Build reliable partnerships, validate trade activity, and strengthen procurement networks for uninterrupted patient care.',
      icon: Users,
      link: '/solutions/usecase/buyer-supplier-discovery',
    },
    {
      title: 'Market Intelligence',
      description: 'Data alone isn\'t enough. Our intelligence shows which countries are buying, what\'s trending, and where your next healthcare win lies.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Competitor Benchmarking',
      description: 'Compare your procurement & distribution options with market peers to identify supplier price gaps, capacity constraints, and new buyer clusters, backed by our shipment-level intelligence.',
      icon: BarChart3,
      link: '/solutions/usecase/competitor-benchmarking',
    },
  ];

  const benefits = [
    { icon: Users, text: 'Find Manufacturers: Find producers of pharmaceuticals, PPE, and medical devices' },
    { icon: TrendingUp, text: 'Monitor Global Movements: Track exports and imports to detect market shifts' },
    { icon: Shield, text: 'Cut Procurement Risks: Compare supplier reliability, performance, and consistency before contracting' },
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
              <Heart className="w-4 h-4 mr-2" />
              Healthcare
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Smarter Healthcare Starts With Smarter Trade Intelligence
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Gain complete visibility into how medical products move across borders. Use our trade intelligence to source reliably, avoid shortages, and strengthen your supply chain.
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
              The Data Backbone for Smarter, Safer Patient Care
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Simple, practical ways data transforms clinical accuracy, hospital efficiency, patient safety, and long-term health outcomes.
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
              Data You Trust. Decisions You Act On
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              While others react to shortages, leaders prevent them. Our unique trade intelligence platform helps you with risk checks, ensuring compliant, on-time delivery of every critical medical supply.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
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
              The Intelligence Layer Behind Every Reliable Healthcare System
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We give healthcare teams the data backbone they need with clear visibility into supplies, risks, and markets to keep care running without disruptions.
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
              Your Safety Net When the World Runs Out
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              When critical minerals run short and a few dominate supply chains. We help you find new global supply routes, top tendering partners, so that you can adapt smarter resource allocation, and keep operations moving.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
              Need Clear Visibility Across Your Entire Healthcare Network?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Market Inside empowers your teams with shipment insights, risk alerts, and market signals for safer, faster operations.
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

