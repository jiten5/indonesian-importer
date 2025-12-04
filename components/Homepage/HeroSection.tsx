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
  <section className="relative overflow-hidden flex items-center justify-center min-h-[85vh] lg:min-h-[90vh] pt-24 pb-16">
    {/* Enhanced Gradient Background with Mesh Pattern */}
    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-blue-950/20" />
    <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-900/10" />
    
    {/* Animated gradient orbs */}
    <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary-400/30 dark:bg-secondary-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    
    <div className="relative z-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center flex flex-col items-center justify-center">
        {/* Badge/Label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Indonesia's #1 Trade Data Platform
        </div>
        
        {/* Headline - Enhanced Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white mb-6 leading-tight tracking-tight">
          Unlock Global Trade
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h1>
        
        {/* Subheadline - Improved Clarity */}
        <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Access 615M+ shipment records, discover suppliers, track competitors, and make data-driven decisions with real-time Indonesian trade intelligence.
        </p>
        
        {/* Search Bar - Enhanced */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <DualSearch onSearch={onSearch} />
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-12">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free Trial Available</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Real-time Updates</span>
          </div>
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

