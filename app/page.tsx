'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { DualSearch } from '@/components/ui/DualSearch';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { TestimonialCarousel } from '@/components/ui/TestimonialCarousel';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { fadeInUp, staggerContainer, staggerItem, heroAnimation } from '@/lib/animations';
import {
  Database,
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  Users,
  Search as SearchIcon,
  Zap,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: Database,
    title: 'Real-Time Trade Data',
    description:
      'Access live import/export data from 195+ countries with daily updates. Track shipments, identify trends, and make data-driven decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description:
      'AI-powered forecasting to predict market trends, demand patterns, and identify emerging opportunities before your competitors.',
  },
  {
    icon: Shield,
    title: 'Compliance & Security',
    description:
      'Enterprise-grade security with SOC 2 certification, GDPR compliance, and automated sanctions screening.',
  },
  {
    icon: Zap,
    title: 'Instant Insights',
    description:
      'Transform raw data into actionable insights with intuitive dashboards and customizable reports in seconds.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description:
      '195+ countries, 50M+ trade records, covering all major ports and trade routes worldwide.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Visualizations',
    description:
      'Interactive charts, trade flow maps, and trend analysis tools to understand complex data patterns.',
  },
];

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'VP of Trade',
    company: 'GlobalCorp',
    content:
      'This platform transformed how we identify new market opportunities. The AI-powered insights are incredibly accurate and have helped us increase our export revenue by 35%.',
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Director of Exports',
    company: 'TechTrade',
    content:
      'The real-time data and analytics have given us a competitive edge. We can now respond to market changes within hours instead of weeks.',
  },
  {
    id: '3',
    name: 'Jennifer Park',
    role: 'CTO',
    company: 'DataDriven Inc',
    content:
      'Outstanding platform with exceptional support. The API integration was seamless and the documentation is top-notch.',
  },
];

const clientLogos = [
  { name: 'GlobalCorp', logo: '/logos/globalcorp.svg' },
  { name: 'TechTrade', logo: '/logos/techtrade.svg' },
  { name: 'DataDriven', logo: '/logos/datadriven.svg' },
  { name: 'ExportPro', logo: '/logos/exportpro.svg' },
  { name: 'TradeHub', logo: '/logos/tradehub.svg' },
  { name: 'LogisticsCo', logo: '/logos/logisticsco.svg' },
];

export default function HomePage() {
  const router = useRouter();

  const handleSearch = (searchType: string, searchBy: string, query: string) => {
    router.push(`/search?type=${searchType}&searchBy=${searchBy}&q=${encodeURIComponent(query)}`);
  };

  return (
    <MainLayout>


      {/* Clay.com-inspired Hero Section */}
      <section className="relative overflow-hidden section-spacing section-bg flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        <div className="relative z-10 w-full">
          <div className="container-custom text-center mx-auto flex flex-col items-center justify-center">
            {/* Headline split into two lines */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight text-neutral-900 dark:text-white" style={{letterSpacing: '-2px'}}>
              Go to market with <br className="hidden sm:block" /> unique data — and the ability to act on it
            </h1>
            {/* Supporting text */}
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Access premium data, AI enrichment, and automated workflows to turn insights into action instantly.
            </p>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
              <Link href="/pricing">
                <Button 
                  variant="primary" 
                  size="lg" 
                  gradient 
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-primary-500/50 transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-4 text-lg font-semibold border-2 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  Get a Demo
                </Button>
              </Link>
            </div>
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto w-full mb-10">
              <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6">
                <DualSearch onSearch={handleSearch} />
              </div>
            </div>
            {/* Social proof / main logo */}
            <div className="flex items-center justify-center mt-2 mb-2">
              <img src="/logos/indonesianimporterlogo" alt="Indonesian Importer Logo" className="h-16 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-y-2 border-neutral-300 dark:border-neutral-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            <div className="text-center group cursor-pointer">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text mb-4 transition-all duration-500 group-hover:scale-125 group-hover:from-primary-500 group-hover:to-secondary-500">
                <AnimatedCounter end={50000000} suffix="+" duration={2.5} />
              </div>
              <div className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Trade Records
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text mb-4 transition-all duration-500 group-hover:scale-125 group-hover:from-primary-500 group-hover:to-secondary-500">
                <AnimatedCounter end={195} suffix="+" duration={2} />
              </div>
              <div className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Countries
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text mb-4 transition-all duration-500 group-hover:scale-125 group-hover:from-primary-500 group-hover:to-secondary-500">
                <AnimatedCounter end={10000} suffix="+" duration={2} />
              </div>
              <div className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Active Users
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text mb-4 transition-all duration-500 group-hover:scale-125 group-hover:from-primary-500 group-hover:to-secondary-500">
                <AnimatedCounter end={99.99} suffix="%" decimals={2} duration={2} />
              </div>
              <div className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 font-bold uppercase tracking-wider group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Uptime SLA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 dark:text-white mb-8 leading-tight tracking-tight">
              Everything You Need for Trade Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-semibold">
              Comprehensive tools and insights to power your international business decisions
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={staggerItem}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Join 10,000+ companies leveraging our platform for trade intelligence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mb-8 uppercase tracking-wide font-semibold">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-12 text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
              >
                <div className="text-xl font-bold">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Trade Intelligence?
          </h2>
          <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover why 10,000+ companies trust us with their
            trade data needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 border-white"
              >
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
