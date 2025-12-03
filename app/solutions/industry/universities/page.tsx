'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  GraduationCap,
  TrendingUp,
  Database,
  CheckCircle,
  ArrowRight,
  BarChart3,
  FileText,
  Users,
  Zap,
  Target,
} from 'lucide-react';

export default function UniversitiesSolutionPage() {
  const solutions = [
    {
      title: 'Multi-Year Trade Trends',
      description: 'Understanding long-term market behavior is difficult when universities only have access to short-term or fragmented data. We at Market Inside provide multi-year import and export trends so researchers and students can analyze how industries, countries, and products evolve over time.',
      features: [
        'Study macro and microeconomic patterns using real global trade flows',
        'Ensure labs and research teams have high-demand materials exactly when needed',
      ],
      icon: TrendingUp,
    },
    {
      title: 'Ready-to-Use Econometric Data',
      description: 'Academic teams often spend more time cleaning data than actually running models. We help deliver clean, structured datasets that are ready for regression analysis, panel data studies, forecasting, and quantitative research.',
      features: [
        'Build econometric models without preprocessing or manual data cleaning',
        'Use standardized, consistent datasets for coursework, thesis work, and published research',
      ],
      icon: Database,
    },
    {
      title: 'Pricing & Market Behavior Insights',
      description: 'Understanding real pricing behavior is essential for economics and business studies. Market Inside provides HS-level price trends, seasonality patterns, and demand–supply signals that help explain why prices move the way they do.',
      features: [
        'Track price bands, volatility, and unit values across countries and time',
        'Analyze demand cycles, cost drivers, and market dynamics with real shipment data',
      ],
      icon: BarChart3,
    },
    {
      title: 'Supply-Chain & Value-Chain Visibility',
      description: 'Most universities lack clear visibility into global supply chains. Market Inside maps supplier networks, country dependencies, and product movement to help researchers and students study how global value chains actually operate.',
      features: [
        'Explore how products move from one country to another and where bottlenecks occur',
        'Understand dependencies between markets, suppliers, and industries for case studies and research',
      ],
      icon: Target,
    },
    {
      title: 'API Access for Data Science & Labs',
      description: 'Data science programs need real datasets that plug directly into coding environments. Market Inside offers Python and R-ready APIs so students and researchers can work with live trade data in classes, labs, and advanced research projects.',
      features: [
        'Pull data directly into Jupyter, RStudio, or analytics tools',
        'Build forecasting models, dashboards, simulations, and machine-learning projects using real trade intelligence',
      ],
      icon: Zap,
    },
  ];

  const metrics = [
    { value: '62%', label: 'Faster Research Data Preparation' },
    { value: '54%', label: 'Improved Accuracy in Academic Modeling' },
    { value: '49%', label: 'Higher Efficiency in Course & Lab Execution' },
  ];

  const useCases = [
    {
      title: 'Research Analytics',
      description: 'Leverage structured trade datasets to uncover patterns, validate academic hypotheses, and support quantitative modeling. Build stronger research outcomes using real, empirical global data.',
      icon: FileText,
      link: '/solutions/usecase/research-analytics',
    },
    {
      title: 'Market Intelligence',
      description: 'Gain visibility into how critical academic materials move globally. Understand market shifts, supply variations, and demand pressure to plan resources with confidence.',
      icon: TrendingUp,
      link: '/solutions/usecase/market-intelligence',
    },
    {
      title: 'Competitor Benchmarking',
      description: 'Map sourcing behaviors across leading universities and labs. Evaluate vendor consistency, compare acquisition strategies, and strengthen your institution\'s procurement edge.',
      icon: BarChart3,
      link: '/solutions/usecase/competitor-benchmarking',
    },
  ];

  const benefits = [
    { icon: BarChart3, text: 'Model real economic behavior using multi-year trade flows, tariff impacts, and country-level market dynamics' },
    { icon: TrendingUp, text: 'Run financial and quantitative analysis with empirical price, volume, volatility, and commodity trend data' },
    { icon: Target, text: 'Teach supply-chain and business concepts through real shipment patterns, supplier networks, and value-chain visibility' },
    { icon: Zap, text: 'Build data science & ML projects using clean, API-ready datasets for Python, R, and analytics labs' },
    { icon: FileText, text: 'Support high-quality academic research with standardized, publication-ready time-series datasets' },
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
              <GraduationCap className="w-4 h-4 mr-2" />
              Universities
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              Transform Learning & Research With Global Trade Intelligence
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Equip students and researchers with structured datasets for modeling markets, studying value chains, analyzing price dynamics, and building ML-driven insights.
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
              Trade Intelligence Built For Universities & Research
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Get multi-year trade trends, econometric-ready datasets, pricing insights, supply-chain visibility, and API access designed for academic teaching, research, and institutional decision-making.
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
              Trade Intelligence That Strengthens Academic Performance
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              See how universities use Market Inside to improve research quality, streamline academic workflows, and enhance data-driven teaching across departments.
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
              Strengthen Teaching, Research, and Analysis With Trade Intelligence
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Turn global trade data into practical academic value. Support economics research, enhance quantitative learning, teach real-world supply-chain behavior, and enable data-driven insights across departments.
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
              Transform Academic Insights With Global Trade Data
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Universities need reliable, empirical datasets to support research, strengthen coursework, and develop data-driven decision-making skills.
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
              Bring Real Trade Data to Your University
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Provide your academic teams with accurate global trade data to support stronger research, better teaching, and industry-ready student outcomes.
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

