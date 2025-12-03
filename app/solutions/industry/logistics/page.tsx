'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Truck,
  Package,
  MapPin,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  AlertCircle,
} from 'lucide-react';

export default function LogisticsSolutionPage() {
  const solutions = [
    {
      title: 'Shipment Visibility & Predictability',
      description: 'When shipments move without clear updates, teams struggle to manage delays or answer customer queries. Our platform uses historical shipment data to give operations, customer service, and control-tower teams deeper visibility—helping them analyze patterns, plan better, and improve delivery performance.',
      features: [
        'Access reliable ETAs built from historical patterns',
        'Review full shipment timelines for end-to-end clarity',
      ],
      icon: MapPin,
    },
    {
      title: 'Route, Delivery & Network Performance Optimization',
      description: 'Route planning becomes inefficient when decisions rely on assumptions instead of proven lane behavior. Our platform uses historical trade-lane performance, congestion patterns, and carrier reliability to help 3PLs, freight forwarders, shippers, and control-tower teams build stronger routing decisions and improve on-time delivery across their networks.',
      features: [
        'Compare transit reliability and seasonal patterns to choose stronger routes',
        'Use data-backed recommendations to boost delivery speed, accuracy, and SLA performance',
      ],
      icon: TrendingUp,
    },
    {
      title: 'Operational Efficiency & Cost Control',
      description: 'Logistics costs rise when teams lack visibility into where operational waste occurs. Using historical trade-lane data, shipment-level metadata, and lane-wise cost structures, our platform pinpoints fuel-heavy segments, idle time, and routing inefficiencies—helping operations, cost-control, and fleet teams build tighter, more cost-efficient networks.',
      features: [
        'Benchmark costs across carriers, lanes, and shipment types with freight rate comparisons and cost-per-TEU/MT analysis',
        'Identify unused capacity through load factor insights and improve consolidation planning',
        'Automate reporting with standardized trade-data schemas, reducing manual effort and errors',
      ],
      icon: BarChart3,
    },
    {
      title: 'Warehouse, Inventory & Demand Intelligence',
      description: 'Warehouse operations become unstable when inbound volumes shift without clear signals. By analyzing historical shipment timelines, commodity-level demand cycles, and origin–destination volume trends, our platform helps warehouse planners, inventory teams, and supply chain managers prepare space, labor, and capacity in advance.',
      features: [
        'Understand inventory movement trends and correct stock imbalances through SKU-flow and turnover insights',
        'Track seasonality and commodity-specific demand cycles for better procurement and stocking decisions',
        'Monitor regional import–export volume shifts to plan warehouse capacity earlier and avoid last-minute bottlenecks',
      ],
      icon: Package,
    },
    {
      title: 'Risk, Compliance & Partner Reliability',
      description: 'Delays escalate when carriers are inconsistent or documentation is inaccurate. We surface early risk signals and verify compliance requirements, helping compliance teams, carrier managers, and cross-border logistics teams maintain predictable, compliant, and disruption-free operations.',
      features: [
        'Validate documentation with accurate HS codes and guidelines',
        'Evaluate carriers using multi-year shipment performance',
        'Review partner reliability for consistent, on-time delivery',
      ],
      icon: Shield,
    },
  ];

  const metrics = [
    { value: '35%', label: 'Faster Delivery Turnaround' },
    { value: '40%', label: 'Increased Operational Efficiency' },
    { value: '90%', label: 'Enhanced Supply Chain Visibility' },
  ];

  const useCases = [
    {
      title: 'Market Intelligence',
      description: 'Logistics teams often see demand only after volumes shift. We help you spot these changes early with import-export trends, lane performance, and commodity flows so you can expand into routes that are already growing.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Buyer-Supplier Discovery',
      description: 'Identifying real shippers is difficult without verified activity. Our intelligence database shows companies with actual shipment history, helping sales and commercial teams focus on active exporters and importers.',
      icon: Users,
      link: '/solutions/usecase/buyer-supplier-discovery',
    },
    {
      title: 'Trade Compliance',
      description: 'Constant regulation changes disrupt logistics operations. We keep you ahead with clear compliance insights, helping you minimize delays and move goods across borders smoothly.',
      icon: Shield,
      link: '/solutions/usecase/trade-compliance',
    },
  ];

  const benefits = [
    { icon: Target, text: 'Plan Smarter: Optimize routes with trade insights' },
    { icon: Globe, text: 'Find Demand: Target fast-growing markets' },
    { icon: Zap, text: 'Boost Growth: Win more clients, faster' },
    { icon: TrendingUp, text: 'Stay Ahead: Track rivals and trends' },
    { icon: Shield, text: 'Stay Compliant: Avoid delays and risks' },
    { icon: BarChart3, text: 'Scale Up: Match capacity with expected volumes' },
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
              <Truck className="w-4 h-4 mr-2" />
              Logistics
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Your Go-To Data Platform for Smarter Logistics Decisions
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              See who's shipping what, where, and how often. Our logistics intelligence helps companies connect with new clients, move faster, and operate smarter.
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
              Your Source for Clear, Actionable Logistics Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A clear look at how logistics teams streamline operations and stay ahead using our insights.
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
              Where Logistics Meets the World's Most Reliable Trade Data
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our platform brings together the world's most reliable shipment data, helping logistics teams streamline operations and stay ahead of every shift
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
              All-in-One Trade Insights for Smarter Logistics
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Leverage comprehensive trade insights to enhance market planning, identify reliable partners, benchmark competitors, and stay compliant across borders.
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
              Grow Faster With Logistics Insights You Can Act On
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Plan better, partner smarter, and stay compliant with data-backed logistics intelligence built for global growth.
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
              Looking for Smarter Logistics Insights?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Unlock actionable trade intelligence to monitor shipments, assess risks, and make faster logistics decisions.
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

