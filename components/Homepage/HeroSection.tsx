import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { DualSearch } from '@/components/ui/DualSearch';
import Logos3 from '@/components/ui/Logos3';

interface HeroSectionProps {
  onSearch: (searchType: string, searchBy: string, query: string) => void;
}

const popularSearches = [
  'Electronics',
  'Textiles',
  'Machinery',
  'Chemicals',
  'Medical Equipment',
  'Automotive Parts'
];

const trendingSearches = [
  'Palm Oil',
  'Electronic Components',
  'Coal',
  'Rubber',
  'Textiles',
  'Machinery Parts',
  'Coffee',
  'Smartphones'
];

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => (
  <section className="relative overflow-hidden section-spacing section-bg flex items-center justify-center min-h-[600px] lg:min-h-[700px] pt-20">
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
    <div className="relative z-10 w-full">
      <div className="container-custom text-center mx-auto flex flex-col items-center justify-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          How We Help Businesses Like Yours Win Globally
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Discover how businesses leverage Market Inside to expand globally, manage risks, and grow with actionable trade data.
        </p>
        
        {/* Search Bar */}
        <div className="w-full max-w-4xl mx-auto mb-6">
          <DualSearch onSearch={onSearch} />
        </div>

        {/* Popular Search */}
        {/*<div className="max-w-4xl w-full mb-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-neutral-600 dark:text-neutral-400 font-medium">Popular Search:</span>
            {popularSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => onSearch('imports', 'product', term)}
                className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>*/}

        {/* Trending */}
        {/*<div className="max-w-4xl w-full mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-neutral-600 dark:text-neutral-400 font-medium">Trending:</span>
            {trendingSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => onSearch('imports', 'product', term)}
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {term}
                {index < trendingSearches.length - 1 && ','}
              </button>
            ))}
          </div>
        </div> */}

        {/* Trusted By - Logos Carousel */}
        <Logos3 />
      </div>
    </div>
  </section>
);

export default HeroSection;

