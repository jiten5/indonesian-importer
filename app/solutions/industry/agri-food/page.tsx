'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  Wheat,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  AlertCircle,
  Shield,
  DollarSign,
  Truck,
  Target,
  BarChart3,
} from 'lucide-react';

export default function AgriFoodSolutionPage() {
  const solutions = [
    {
      title: 'Supply Shortages & Demand Fluctuations',
      description: 'Agri businesses often struggle to predict shortages or sudden demand spikes for crops, oils, spices, and food products. We at Market Inside provide historical and updated data helping teams forecast risks, secure supply, and maintain stable inventories.',
      features: [
        'Detect falling import volumes early to avoid stock-outs',
        'Track demand surges across countries and commodities',
        'Use historical seasonality patterns for accurate planning',
      ],
      icon: AlertCircle,
    },
    {
      title: 'Unreliable or Risky Suppliers',
      description: 'Sourcing teams face difficulties verifying the reliability of suppliers for agri-commodities. Market Inside offers shipment-backed supplier intelligence, risk checks, and compliance signals to help you choose trusted, consistent trade partners.',
      features: [
        'Verify suppliers through real shipment frequency and volumes',
        'Screen companies for sanctions, anomalies, and compliance risks',
        'Identify alternate suppliers during disruptions',
      ],
      icon: Shield,
    },
    {
      title: 'Fluctuating Commodity Prices',
      description: 'Volatile global prices make procurement and budgeting difficult. Market Inside enables teams to monitor price trends, benchmark values, and negotiate with clarity using actual trade data.',
      features: [
        'Compare import prices across regions and suppliers',
        'Track value changes across months and seasons',
        'Benchmark costs using factual shipment-level valuations',
      ],
      icon: DollarSign,
    },
    {
      title: 'Delays in Agri Logistic Chains',
      description: 'Perishable goods are highly sensitive to delays. Market Inside helps logistics teams monitor trade routes, port congestion, and shipment patterns to keep products moving efficiently.',
      features: [
        'Identify challenges at ports and trade corridors',
        'Monitor shipment timelines and optimize routing',
      ],
      icon: Truck,
    },
    {
      title: 'Limited Visibility on Market Opportunities',
      description: 'Agribusinesses struggle to identify high-growth markets for exports. Market Inside trade intelligence highlights demand hotspots, competitor activity, and emerging regions with rising consumption.',
      features: [
        'Detect fast-growing export markets for your commodity',
        'Analyze competitor shipment volumes and new markets entered',
        'Spot emerging trends using trade fluctuations and demand shifts',
      ],
      icon: Target,
    },
  ];

  const metrics = [
    { value: '35%', label: 'Faster Delivery Turnaround' },
    { value: '25%', label: 'Higher Revenue Growth' },
    { value: '20%', label: 'Improved Profit Margins' },
  ];

  const useCases = [
    {
      title: 'Market Intelligence',
      description: 'Think your wheat sells only in Asia? Think again. With Market Inside, you\'ll see where crops like rice, corn, and grains are booming — maybe Ghana or Mexico\'s your next big buyer! Plan your exports around real data, not guesses, and send your produce where demand\'s already heating up.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Buyer-Supplier Discovery',
      description: 'Tired of sending multiple emails into the void for a potential deal? Don\'t worry, we show you who\'s really buying! Say you\'re selling mangoes in Vietnam - you can instantly find which European importers actually received shipments last month. That\'s your next buyer, ready to connect with their contact details.',
      icon: Users,
      link: '/solutions/usecase/buyer-supplier-discovery',
    },
    {
      title: 'Research Analytics',
      description: 'You can track exactly where your competitors are shipping which countries they target, how much they export, and what routes they use with our trade intelligence. If you\'re a coffee exporter, you can check if another supplier is shipping to Japan or Europe, and respond with better prices or faster routes. It\'s about acting fast, not guessing.',
      icon: BarChart3,
      link: '/solutions/usecase/research-analytics',
    },
  ];

  const benefits = [
    { icon: Users, text: 'Diversify Sourcing: Find consistent suppliers even when harvests fail or routes change' },
    { icon: DollarSign, text: 'Maximize Returns: Track commodity values globally and time your sales for better margins' },
    { icon: Target, text: 'Build Trust Networks: Connect with verified importers and exporters that strengthen your trade flow' },
    { icon: TrendingUp, text: 'Fuel Sustainable Growth: Use transparent data to plan smarter procurement and long-term expansion' },
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
              <Wheat className="w-4 h-4 mr-2" />
              Agri & Food
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Where Agri Intelligence Meets Real-World Growth
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Track global agri trade, discover new buyers, and optimize supply chains with insights from 195+ countries. Market Inside helps agribusinesses grow faster and trade smarter.
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
              Where Farmers & Food Businesses Get the Insights They Need to Thrive
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Stay ahead of shortages, risky suppliers, price jumps, and market changes with connected agri trade data that helps farmers and food companies plan smarter and grow faster.
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
              Watch Agri Trade Grow with Trade Intelligence
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              From improved shipment efficiency to increased revenue, see how agri leaders turn data into profit and insights into market advantage.
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
              All-in-One Global Trade Intelligence for Food & Agriculture Leaders
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Turn agri trade data into a competitive edge, discover early, strengthen trade relations, and navigate global markets with strategic foresight.
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
              Grow Beyond Borders - Where Every Crop Finds Its Market
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Global food trade changes fast — prices jump, weather hits yields, and buyers shift overnight. Our trade intelligence gives agri leaders the power to double their revenue, market expansion with a secure supply chain, and turn volatility into growth.
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
              Grow Smarter with Trade Intelligence
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Find global buyers, plan profitable routes, and forecast demand - all powered by real data.
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

