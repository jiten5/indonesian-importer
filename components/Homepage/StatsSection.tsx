import React from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const StatsSection: React.FC = () => (
  <section className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      {/* Header - Enhanced */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          By The Numbers
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
          Powering Global Trade
          <br />
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Real-time access to the world's most comprehensive Indonesian trade database
        </p>
      </div>
      
      {/* Stats Grid - Enhanced with Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {/* Stat 1 */}
        <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent dark:from-primary-400/10 rounded-bl-full" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
            </div>
            <div className="text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-3 group-hover:scale-105 transition-transform">
              <AnimatedCounter end={615} suffix=" M" duration={2.5} />
            </div>
            <div className="text-base lg:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Shipment Records
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Complete import/export transaction history
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-secondary-300 dark:hover:border-secondary-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-500/10 to-transparent dark:from-secondary-400/10 rounded-bl-full" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl">
                <svg className="w-6 h-6 text-secondary-600 dark:text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-3 group-hover:scale-105 transition-transform">
              <AnimatedCounter end={600} suffix=" K+" duration={2} />
            </div>
            <div className="text-base lg:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Companies Tracked
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Importers, exporters, and suppliers
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-green-300 dark:hover:border-green-700">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent dark:from-green-400/10 rounded-bl-full" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-3 group-hover:scale-105 transition-transform">
              <AnimatedCounter end={8785} suffix=" B" duration={2} />
            </div>
            <div className="text-base lg:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
              Trade Value (USD)
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Total transaction value tracked
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Info Bar */}
      <div className="mt-16 p-6 bg-primary-50 dark:bg-primary-950/30 rounded-2xl border border-primary-200 dark:border-primary-800">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Updated Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Historical Data Back to 2010</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">99.9% Data Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;

