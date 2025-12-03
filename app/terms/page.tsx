'use client';

import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
// import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function TermsPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        {/* <Breadcrumb items={[{ label: 'Terms of Service', href: '/terms' }]} /> */}
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Terms of Service
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Last updated: November 23, 2025
          </p>
        </div>

        <Card padding="lg" className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              2. Use License
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Permission is granted to temporarily access the materials (data, information, documents) for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on our service</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              3. Data Usage and Restrictions
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Our trade data is provided for informational purposes. You agree to:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Not redistribute, resell, or sublicense the data</li>
              <li>Not use automated systems to scrape or download bulk data</li>
              <li>Use data in compliance with applicable laws and regulations</li>
              <li>Respect usage limits based on your subscription tier</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              4. Account Responsibilities
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              5. Disclaimer
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              The materials on our service are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              6. Limitations
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              7. Accuracy of Materials
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              The materials appearing on our service could include technical, typographical, or photographic errors. We do not warrant that any of the materials on our service are accurate, complete, or current. We may make changes to the materials contained on our service at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              8. Payment and Billing
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              For paid subscriptions:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Billing occurs on a recurring basis (monthly or annually)</li>
              <li>You authorize us to charge your payment method</li>
              <li>Prices are subject to change with 30 days notice</li>
              <li>Refunds are provided according to our refund policy</li>
              <li>You may cancel your subscription at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              9. Termination
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              10. Governing Law
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              These Terms shall be governed and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              11. Changes to Terms
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              12. Contact Us
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mt-4">
              <strong>Email:</strong> legal@tradeintelligence.com<br />
              <strong>Address:</strong> 123 Trade Street, San Francisco, CA 94105, United States
            </p>
          </section>
        </Card>
      </div>
    </PageLayout>
  );
}

