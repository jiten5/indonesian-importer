'use client'

import { Metadata } from 'next'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layouts/MainLayout'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { CheckCircle, X, ArrowRight, HelpCircle } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: number
    annual: number
  }
  badge?: string
  badgeVariant?: 'primary' | 'success' | 'secondary'
  features: {
    name: string
    included: boolean
    limit?: string
  }[]
  cta: string
  ctaVariant: 'primary' | 'outline' | 'secondary'
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams getting started',
    price: {
      monthly: 99,
      annual: 79
    },
    features: [
      { name: 'Trade data access', included: true, limit: '10 countries' },
      { name: 'Monthly data updates', included: true },
      { name: 'Basic analytics dashboard', included: true },
      { name: 'Export to CSV/Excel', included: true, limit: '1,000 records/month' },
      { name: 'Email support', included: true },
      { name: 'API access', included: false },
      { name: 'Custom reports', included: false },
      { name: 'Dedicated account manager', included: false },
      { name: 'SSO/SAML', included: false },
      { name: 'Custom integrations', included: false }
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'outline'
  },
  {
    name: 'Professional',
    description: 'For growing businesses requiring advanced insights',
    price: {
      monthly: 299,
      annual: 249
    },
    badge: 'Most Popular',
    badgeVariant: 'primary',
    popular: true,
    features: [
      { name: 'Trade data access', included: true, limit: '50 countries' },
      { name: 'Real-time data updates', included: true },
      { name: 'Advanced analytics & AI insights', included: true },
      { name: 'Export to CSV/Excel', included: true, limit: '10,000 records/month' },
      { name: 'Priority email & chat support', included: true },
      { name: 'API access', included: true, limit: '10,000 calls/month' },
      { name: 'Custom reports', included: true, limit: '5/month' },
      { name: 'Dedicated account manager', included: false },
      { name: 'SSO/SAML', included: false },
      { name: 'Custom integrations', included: false }
    ],
    cta: 'Start Free Trial',
    ctaVariant: 'primary'
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom requirements',
    price: {
      monthly: 0,
      annual: 0
    },
    badge: 'Custom',
    badgeVariant: 'secondary',
    features: [
      { name: 'Trade data access', included: true, limit: 'All 200+ countries' },
      { name: 'Real-time data updates', included: true },
      { name: 'Advanced analytics & AI insights', included: true },
      { name: 'Unlimited exports', included: true },
      { name: '24/7 phone & chat support', included: true },
      { name: 'API access', included: true, limit: 'Unlimited' },
      { name: 'Custom reports', included: true, limit: 'Unlimited' },
      { name: 'Dedicated account manager', included: true },
      { name: 'SSO/SAML', included: true },
      { name: 'Custom integrations', included: true }
    ],
    cta: 'Contact Sales',
    ctaVariant: 'secondary'
  }
]

const faqs = [
  {
    question: 'What is included in the free trial?',
    answer: 'The 14-day free trial includes full access to all features of your selected plan with no credit card required. You can explore the platform, access trade data, and test all analytics features.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits to your account.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express), ACH transfers for annual plans, and wire transfers for enterprise customers.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any plan. You only pay the monthly or annual subscription fee.'
  },
  {
    question: 'What happens if I exceed my API limits?',
    answer: 'If you approach your API limit, we\'ll notify you in advance. You can either upgrade your plan or purchase additional API calls at $0.01 per call.'
  },
  {
    question: 'Do you offer discounts for non-profits or educational institutions?',
    answer: 'Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Contact our sales team for details.'
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee for annual plans. If you\'re not satisfied within the first 30 days, we\'ll provide a full refund.'
  },
  {
    question: 'Can I get a custom plan?',
    answer: 'Yes, for enterprise customers with specific requirements, we can create a custom plan tailored to your needs. Contact our sales team to discuss your requirements.'
  }
]

export default function PricingPage() {
  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
              <motion.h1 
                variants={staggerItem}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6"
              >
                Discover Next-Gen Trade & Risk Intelligence Solutions
              </motion.h1>
              <motion.p 
                variants={staggerItem}
                className="text-lg text-neutral-600 dark:text-neutral-400"
              >
                Flexible pricing plans for smarter trade and risk intelligence. Find the perfect plan for your business needs.
              </motion.p>
            <motion.div variants={staggerItem}>
              <Badge variant="success" size="lg">
                14-Day Free Trial • No Credit Card Required
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <motion.section 
        className="py-20 lg:py-32 bg-white dark:bg-neutral-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card
                  padding="lg"
                  className={`relative h-full ${
                    plan.popular
                      ? 'border-2 border-primary-600 dark:border-primary-500 shadow-xl'
                      : ''
                  }`}
                >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant={plan.badgeVariant} size="md">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <Card.Header className="mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {plan.description}
                  </p>
                </Card.Header>

                <div className="mb-6">
                  {plan.price.monthly === 0 ? (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                        Custom
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline mb-2">
                        <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                          ${plan.price.monthly}
                        </span>
                        <span className="text-neutral-600 dark:text-neutral-400 ml-2">
                          /month
                        </span>
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        or ${plan.price.annual}/month billed annually
                      </div>
                    </>
                  )}
                </div>

                <Button
                  variant={plan.ctaVariant}
                  size="lg"
                  className="w-full mb-8"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  {plan.cta}
                </Button>

                <Card.Content>
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-400 dark:text-neutral-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <span
                            className={`text-sm ${
                              feature.included
                                ? 'text-neutral-900 dark:text-neutral-100'
                                : 'text-neutral-500 dark:text-neutral-500'
                            }`}
                          >
                            {feature.name}
                          </span>
                          {feature.limit && (
                            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                              {feature.limit}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Content>
              </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              All plans include SOC 2 Type II certified security, 99.9% uptime SLA, and GDPR compliance.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Detailed breakdown of features across all plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="text-left p-6 font-semibold text-neutral-900 dark:text-white">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="text-center p-6 font-semibold text-neutral-900 dark:text-white"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <tr
                    key={featureIndex}
                    className="border-b border-neutral-200 dark:border-neutral-800 last:border-0"
                  >
                    <td className="p-6 text-neutral-700 dark:text-neutral-300">
                      {plans[0].features[featureIndex].name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="p-6 text-center">
                        {plan.features[featureIndex].included ? (
                          <div className="flex flex-col items-center space-y-1">
                            <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400" />
                            {plan.features[featureIndex].limit && (
                              <span className="text-xs text-neutral-600 dark:text-neutral-400">
                                {plan.features[featureIndex].limit}
                              </span>
                            )}
                          </div>
                        ) : (
                          <X className="w-5 h-5 text-neutral-400 dark:text-neutral-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-neutral-50 dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-800"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {faq.question}
                  </span>
                  <HelpCircle className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our team is here to help you find the perfect plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-600"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

