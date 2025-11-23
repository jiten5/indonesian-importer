'use client';

import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Last updated: November 23, 2025
          </p>
        </div>

        <Card padding="lg" className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              We collect information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business information</li>
              <li>Account credentials and preferences</li>
              <li>Payment and billing information</li>
              <li>Communications with our support team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>With your consent or at your direction</li>
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations or protect rights and safety</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              4. Data Security
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              5. Your Rights (GDPR)
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              If you are in the European Economic Area, you have certain rights including:
            </p>
            <ul className="list-disc pl-6 text-neutral-700 dark:text-neutral-300 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure (right to be forgotten)</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. For more information, see our Cookie Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              7. Data Retention
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              10. Contact Us
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 mt-4">
              <strong>Email:</strong> privacy@tradeintelligence.com<br />
              <strong>Address:</strong> 123 Trade Street, San Francisco, CA 94105, United States
            </p>
          </section>
        </Card>
      </div>
    </PageLayout>
  );
}
