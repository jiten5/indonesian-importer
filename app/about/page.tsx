'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Anderson',
    role: 'CEO & Founder',
    bio: '15+ years in international trade and data analytics',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Former Google engineer, AI and machine learning expert',
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP of Product',
    bio: '10+ years building enterprise SaaS platforms',
  },
  {
    name: 'Emily Watson',
    role: 'Head of Customer Success',
    bio: 'Dedicated to delivering exceptional customer experiences',
  },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from data quality to customer service.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Our customers success is our success. We listen, adapt, and deliver solutions that work.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We think globally and act locally, understanding diverse markets and cultures.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously innovate to stay ahead of market trends and customer needs.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Badge variant="primary" className="mb-4">
          About Us
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Empowering Global Trade with Data Intelligence
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          We're on a mission to make global trade transparent, accessible, and efficient for businesses worldwide
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/30 border-primary-200 dark:border-primary-800">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-600 dark:bg-primary-700 rounded-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                Our Mission
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                To democratize access to global trade intelligence, empowering businesses of all sizes
                to make informed decisions, identify opportunities, and compete effectively in the
                international marketplace.
              </p>
            </div>
          </div>
        </Card>

        <Card padding="lg" className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/30 border-secondary-200 dark:border-secondary-800">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary-600 dark:bg-secondary-700 rounded-lg">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                Our Vision
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300">
                To become the world's most trusted and comprehensive trade intelligence platform,
                enabling seamless global commerce and fostering economic growth across borders and
                industries.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-8 text-center">
          Our Story
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-neutral-700 dark:text-neutral-300">
          <p>
            Founded in 2015, our journey began with a simple observation: businesses were making
            critical international trade decisions with incomplete information. Import and export data
            was scattered, expensive, and difficult to analyze.
          </p>
          <p>
            Our founders, experienced professionals in international trade and technology, envisioned
            a platform that would aggregate, standardize, and deliver trade intelligence in real-time.
            What started as a small team working from a garage has grown into a global company serving
            over 10,000 businesses across 195 countries.
          </p>
          <p>
            Today, we process over 50 million trade records, provide insights on billions of dollars
            in global trade, and help our customers identify opportunities, mitigate risks, and grow
            their international business. Our commitment to innovation, data quality, and customer
            success remains unwavering.
          </p>
          <p>
            As we look to the future, we're excited to continue expanding our coverage, enhancing our
            AI capabilities, and building new tools that empower businesses to thrive in an
            increasingly complex global marketplace.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          Leadership Team
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member) => (
            <motion.div key={member.name} variants={staggerItem}>
              <Card padding="lg" className="text-center">
              <div className="w-24 h-24 rounded-full bg-neutral-200 dark:bg-neutral-700 mx-auto mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-neutral-400 dark:text-neutral-600">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{member.bio}</p>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-12 text-center">
          Our Values
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700"
              >
                <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-flex mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="mb-20 bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-8 lg:p-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 text-center">
          Compliance & Security
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 text-center">
            We take data security and compliance seriously. Our platform is built with enterprise-grade
            security and adheres to international standards.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Badge variant="success" className="mb-2">
                SOC 2 Type II
              </Badge>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Certified</p>
            </div>
            <div className="text-center">
              <Badge variant="success" className="mb-2">
                GDPR
              </Badge>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Compliant</p>
            </div>
            <div className="text-center">
              <Badge variant="success" className="mb-2">
                ISO 27001
              </Badge>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">Certified</p>
            </div>
            <div className="text-center">
              <Badge variant="success" className="mb-2">
                99.99% Uptime
              </Badge>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">SLA Guaranteed</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Join Us on Our Mission
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Whether you're looking to partner with us, join our team, or become a customer, we'd love to
          hear from you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Get in Touch
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline" size="lg">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
