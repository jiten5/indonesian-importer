'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layouts/MainLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, HeadphonesIcon, Calendar, Clock, Globe, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    industry: '',
    interestedIn: [] as string[],
    message: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        industry: '',
        interestedIn: [],
        message: '',
        agreeToTerms: false,
      });
      setErrors({});
    }, 1500);
  };

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const toggleInterest = (interest: string) => {
    const updated = formData.interestedIn.includes(interest)
      ? formData.interestedIn.filter(i => i !== interest)
      : [...formData.interestedIn, interest];
    handleChange('interestedIn', updated);
  };

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can get started within minutes! Sign up for a free trial, and you will have immediate access to our platform. Our onboarding process is simple and intuitive.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 7-day free trial with full access to our platform features. No credit card required to start.'
    },
    {
      question: 'Can I schedule a product demo?',
      answer: 'Absolutely! Click the "Book a Demo" button or use the scheduling widget on this page to book a personalized demo with our team.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and PayPal for your convenience.'
    },
    {
      question: 'Do you provide training and support?',
      answer: 'Yes! We provide comprehensive training materials, video tutorials, and 24/7 customer support to ensure you get the most out of our platform.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and are SOC 2 Type II certified to ensure your data is always protected.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.'
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" className="mb-4">Contact Us</Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions? We're here to help. Reach out to our team for support, sales inquiries, or to schedule a demo.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:info@exportgenius.in" className="hover:text-blue-600 transition-colors">
                  info@exportgenius.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+918003800357" className="hover:text-blue-600 transition-colors">
                  +91 8003 8003 57
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                  
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-300">Thank you for contacting us!</p>
                        <p className="text-sm text-green-600 dark:text-green-400">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="First Name"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          error={errors.firstName}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          label="Last Name"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          error={errors.lastName}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="Business Email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          error={errors.email}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          label="Phone Number"
                          type="tel"
                          placeholder="+91 8003 8003 57"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          error={errors.phone}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          label="Country"
                          placeholder="India"
                          value={formData.country}
                          onChange={(e) => handleChange('country', e.target.value)}
                          error={errors.country}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          label="Company Name"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          error={errors.company}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Select
                        label="Industry (Optional)"
                        options={[
                          { value: '', label: 'Select Industry' },
                          { value: 'agriculture', label: 'Agriculture' },
                          { value: 'automotive', label: 'Automotive' },
                          { value: 'chemicals', label: 'Chemicals' },
                          { value: 'construction', label: 'Construction' },
                          { value: 'consumer-goods', label: 'Consumer Goods' },
                          { value: 'electronics', label: 'Electronics' },
                          { value: 'energy', label: 'Energy' },
                          { value: 'fashion', label: 'Fashion & Apparel' },
                          { value: 'food-beverage', label: 'Food & Beverage' },
                          { value: 'healthcare', label: 'Healthcare' },
                          { value: 'logistics', label: 'Logistics & Transportation' },
                          { value: 'machinery', label: 'Machinery & Equipment' },
                          { value: 'manufacturing', label: 'Manufacturing' },
                          { value: 'metals', label: 'Metals & Mining' },
                          { value: 'pharmaceuticals', label: 'Pharmaceuticals' },
                          { value: 'plastics', label: 'Plastics & Rubber' },
                          { value: 'retail', label: 'Retail' },
                          { value: 'technology', label: 'Technology' },
                          { value: 'textiles', label: 'Textiles' },
                          { value: 'other', label: 'Other' }
                        ]}
                        value={formData.industry}
                        onChange={(e) => handleChange('industry', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Interested In
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {['Trade Intelligence Platform', 'Trade Data API', 'Data License', 'Custom Solutions', 'Pricing Information'].map((interest) => (
                          <label key={interest} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.interestedIn.includes(interest)}
                              onChange={() => toggleInterest(interest)}
                              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Textarea
                        label="Message"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        error={errors.message}
                        rows={5}
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          I agree to the{' '}
                          <a href="/privacy" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>{' '}
                          and consent to being contacted by Export Genius.
                        </span>
                      </label>
                      {errors.agreeToTerms && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.agreeToTerms}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Office Address</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          C-7/224-225, 2nd Floor<br />
                          Sector-7, Rohini<br />
                          New Delhi, India
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                        <a href="mailto:info@exportgenius.in" className="text-sm text-blue-600 hover:underline">
                          info@exportgenius.in
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Phone Numbers</h4>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <p><a href="tel:+918003800357" className="hover:text-blue-600">+91 8003 8003 57</a></p>
                          <p><a href="tel:+911147048012" className="hover:text-blue-600">+91-11-47048012</a></p>
                          <p><a href="tel:+911147048013" className="hover:text-blue-600">+91-11-47048013</a></p>
                          <p><a href="tel:+911147048014" className="hover:text-blue-600">+91-11-47048014</a></p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">WhatsApp</h4>
                        <a href="https://wa.me/918003800357" className="text-sm text-blue-600 hover:underline">
                          +91 8003 8003 57
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h4>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          <p>Monday-Friday: 24 Hours</p>
                          <p>Sat-Sun: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Immediate Assistance */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Need Immediate Assistance?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our team is ready to help you with any questions or support you need.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Sales Inquiries</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Get in touch with our sales team for pricing and product information.
                </p>
                <a href="mailto:info@exportgenius.in" className="text-blue-600 hover:underline font-semibold">
                  info@exportgenius.in
                </a>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Technical Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Need help with our platform? Our support team is here for you.
                </p>
                <a href="mailto:support@exportgenius.in" className="text-blue-600 hover:underline font-semibold">
                  support@exportgenius.in
                </a>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="p-8 text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Schedule Demo</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Book a personalized demo to see how our platform can help your business.
                </p>
                <a href="#schedule-demo" className="text-blue-600 hover:underline font-semibold">
                  Book Now
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Schedule A Demo Section */}
      <section id="schedule-demo" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="primary" className="mb-4">Book a Demo</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Schedule A Demo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose a convenient time to meet with our team and discover how Export Genius can transform your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="p-4 md:p-8">
              <iframe 
                width="100%" 
                height="750px" 
                src="https://exportgenius.zohobookings.in/portal-embed#/eg" 
                frameBorder="0" 
                allowFullScreen
                className="rounded-lg"
              />
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find quick answers to common questions about our platform and services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                          openFaq === index ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600 dark:text-gray-300"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Office */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
              We'd love to meet you in person. Drop by our office during business hours.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>C-7/224-225, 2nd Floor, Sector-7, Rohini, New Delhi, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="overflow-hidden">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Map integration placeholder</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                    Integrate with Google Maps or similar service
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

