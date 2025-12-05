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
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, HeadphonesIcon, Calendar, Clock, Globe, ChevronDown } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
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
        fullName: '',
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
    <PageLayout>
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 pt-24"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <Badge variant="primary" size="lg" className="mb-4">
          We are Here to Help
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Have questions about our platform? Want to schedule a demo? Our team is ready to help you unlock the power of global trade intelligence.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a href="mailto:info@exportgenius.in" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
            <Mail className="w-5 h-5" />
            info@exportgenius.in
          </a>
          <a href="tel:+918003800357" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
            <Phone className="w-5 h-5" />
            +91 8003 8003 57
          </a>
        </div>
      </motion.div>
