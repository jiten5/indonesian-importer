import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { DualSearch } from '@/components/ui/DualSearch';

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

const trustedCompanies = [
  { name: 'DHL', logo: 'DHL', color: 'text-red-600' },
  { name: 'Maersk', logo: 'Maersk', color: 'text-blue-600' },
  { name: 'FedEx', logo: 'FedEx', color: 'text-purple-600' },
  { name: 'UPS', logo: 'UPS', color: 'text-yellow-600' },
  { name: 'DB Schenker', logo: 'DB Schenker', color: 'text-red-500' },
  { name: 'COSCO', logo: 'COSCO', color: 'text-blue-700' },
  { name: 'MSC', logo: 'MSC', color: 'text-blue-800' },
  { name: 'Evergreen', logo: 'Evergreen', color: 'text-green-600' },
  { name: 'CMA CGM', logo: 'CMA CGM', color: 'text-blue-500' },
  { name: 'Hapag-Lloyd', logo: 'Hapag-Lloyd', color: 'text-orange-600' }
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
        <div className="flex justify-center w-full mb-6">
          <div className="max-w-4xl w-full bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6">
            <DualSearch onSearch={onSearch} />
          </div>
        </div>

        {/* Popular Search */}
        <div className="max-w-4xl w-full mb-4">
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
        </div>

        {/* Trending */}
        <div className="max-w-4xl w-full mb-12">
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
        </div>

        {/* Trusted By - Sliding Animation */}
        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="px-8 py-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <span className={`text-xl font-bold ${company.color} dark:opacity-90`}>
                      {company.logo}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {trustedCompanies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4"
                >
                  <div className="px-8 py-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    <span className={`text-xl font-bold ${company.color} dark:opacity-90`}>
                      {company.logo}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .animate-scroll {
        animation: scroll 30s linear infinite;
      }

      .animate-scroll:hover {
        animation-play-state: paused;
      }
    `}</style>
  </section>
);

export default HeroSection;

