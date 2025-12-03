import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const FinalCTASection: React.FC = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
    <div className="container mx-auto px-4 max-w-7xl text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Discover Next-Gen Trade & Risk Intelligence Solutions
      </h2>
      <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
        Smarter trade and risk intelligence products, packed with new features to help you navigate markets and manage risks with ease.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/pricing">
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 border-white">
            Start Free Trial
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 border-white/20">
            Contact Sales
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTASection;

