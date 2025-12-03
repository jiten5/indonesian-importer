
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
// import Breadcrumb from '@/components/ui/Breadcrumb';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { FeatureCard } from '@/components/ui/FeatureCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import {
  Database,
  TrendingUp,
  Users,
  Ship,
  Shield,
  Network,
  Target,
  LineChart,
  Factory,
  Truck,
  Building2,
  Heart,
  Car,
  Wheat,
  Landmark,
} from 'lucide-react';
import { solutions } from '@/constants/data';

const industries = [
  { id: 'importers', name: 'Importers', icon: Ship, solutions: [1, 2, 3, 4] },
  { id: 'exporters', name: 'Exporters', icon: TrendingUp, solutions: [1, 2, 3, 6] },
  { id: 'logistics', name: 'Logistics', icon: Truck, solutions: [4, 6, 7] },
  { id: 'finance', name: 'Finance', icon: Building2, solutions: [1, 5, 7, 8] },
  { id: 'manufacturing', name: 'Manufacturing', icon: Factory, solutions: [2, 3, 4, 8] },
  { id: 'construction', name: 'Construction', icon: Building2, solutions: [2, 3, 4] },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, solutions: [2, 3, 5] },
  { id: 'automotive', name: 'Automotive', icon: Car, solutions: [2, 3, 4, 6] },
  { id: 'agri-food', name: 'Agri & Food', icon: Wheat, solutions: [1, 2, 3, 5] },
  { id: 'government', name: 'Government', icon: Landmark, solutions: [1, 5, 7, 8] },
];

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const filteredSolutions = selectedIndustry
    ? solutions.filter((solution) => {
        const industry = industries.find((ind) => ind.id === selectedIndustry);
        return industry?.solutions.includes(parseInt(solution.id));
      })
    : solutions;

  return (
    <MainLayout>
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 pt-24"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Badge variant="secondary" className="mb-4">
          Solutions
        </Badge>
        {/* <Breadcrumb items={[{ label: 'Solutions', href: '/solutions' }]} /> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            Heading: Solutions Sections
          </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Comprehensive trade intelligence solutions tailored to your industry and business needs
        </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Subheading: Discover how businesses leverage Market Inside to expand globally, manage risks, and grow with actionable trade data.
          </p>
      </motion.div>

      {/* Industry Filter */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-4 text-center">
          Filter by Industry
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedIndustry(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedIndustry === null
                ? 'bg-primary-600 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            All Solutions
          </button>
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedIndustry === industry.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Solutions Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {filteredSolutions.map((solution, idx) => {
          // Use a default icon based on index
          const icons = [Database, TrendingUp, Users, Ship, Shield, Network, Target, LineChart];
          const SolutionIcon = icons[idx % icons.length];

          return (
            <motion.div
              key={solution.id}
              variants={staggerItem}
              className="group relative p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors inline-flex w-fit mb-4">
                  <SolutionIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {solution.subtitle}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-1">
                  {solution.description}
                </p>

                {/* Use Cases */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-neutral-900 dark:text-neutral-50 mb-2 uppercase tracking-wide">
                    Use Cases
                  </h4>
                  <ul className="space-y-1">
                    {solution.useCases.slice(0, 3).map((useCase, index) => (
                      <li
                        key={index}
                        className="text-sm text-neutral-600 dark:text-neutral-400 flex items-start"
                      >
                        <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                        {useCase.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href={solution.cta.href}>
                  <Button variant="outline" className="w-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20">
                    {solution.cta.text}
                  </Button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Industry Use Cases Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 text-center mb-12">
          Industry-Specific Use Cases
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="text-center p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors cursor-pointer"
                onClick={() => setSelectedIndustry(industry.id)}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-3">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                  {industry.name}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                  {industry.solutions.length} solutions
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <motion.div
        className="mb-20 bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-8 lg:p-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 text-center mb-12">
          Why Choose Our Solutions?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Database}
            title="Data-Driven"
            description="Make decisions based on 50M+ verified trade records and real-time insights"
          />
          <FeatureCard
            icon={Shield}
            title="Compliance Ready"
            description="Built-in sanctions screening and regulatory compliance tools"
          />
          <FeatureCard
            icon={Network}
            title="Global Network"
            description="Access trade data from 195+ countries and all major ports"
          />
          <FeatureCard
            icon={LineChart}
            title="Actionable Insights"
            description="AI-powered analytics turn raw data into strategic opportunities"
          />
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-2xl p-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Trade Intelligence?
        </h2>
        <p className="text-primary-50 mb-8 max-w-2xl mx-auto">
          Discover how our solutions can help your business identify opportunities, mitigate risks,
          and grow globally.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 border-white"
            >
              View Pricing
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20"
            >
              Schedule Demo
            </Button>
          </Link>
        </div>
      </motion.div>
    </MainLayout>
  );
}

