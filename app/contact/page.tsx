'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setErrors({});
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <PageLayout>
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 pt-24"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Badge variant="primary" className="mb-4">
            Heading: Contact Us
        </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
            Subheading: Reach out to discover how Market Inside can help your business expand globally, manage risks, and grow with actionable trade data.
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Have a question or want to learn more? We're here to help. Our team typically responds
          within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          className="lg:col-span-2"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Card padding="lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-100 dark:bg-success-900/30 mb-4">
                  <CheckCircle className="w-8 h-8 text-success-600 dark:text-success-400" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
                  Thank You!
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
                  Send us a Message
                </h2>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Full Name <span className="text-error-600">*</span>
                  </label>
                  <Input
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Email Address <span className="text-error-600">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Company Name
                  </label>
                  <Input
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message <span className="text-error-600">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-600 dark:text-error-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem}>
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Contact Information
              </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    Email
                  </div>
                  <a
                    href="mailto:support@tradeintelligence.com"
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    support@tradeintelligence.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    Phone
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    Address
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    123 Trade Street
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border-primary-200 dark:border-primary-800">
              <div className="text-center">
              <Badge variant="success" className="mb-3">
                Fast Response
              </Badge>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                We Respond Within 24 Hours
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Our team is dedicated to providing quick and helpful responses to all inquiries.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card padding="lg">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
              Office Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Monday - Friday</span>
                <span className="font-medium text-neutral-900 dark:text-neutral-50">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Saturday</span>
                <span className="font-medium text-neutral-900 dark:text-neutral-50">
                  10:00 AM - 2:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600 dark:text-neutral-400">Sunday</span>
                <span className="font-medium text-neutral-900 dark:text-neutral-50">Closed</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                Pacific Standard Time (PST)
              </p>
            </div>
          </Card>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}

