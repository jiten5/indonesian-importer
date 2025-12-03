import React from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const StatsSection: React.FC = () => (
  <section className="py-20 lg:py-28 bg-white dark:bg-neutral-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-4">
          STATISTICS
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
          Data Matters Everywhere
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Comprehensive global trade intelligence powering smarter business decisions worldwide.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="text-center p-8 border-r-0 md:border-r border-neutral-200 dark:border-neutral-700">
          <div className="text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white mb-3">
            <AnimatedCounter end={615} suffix=" M" duration={2.5} />
          </div>
          <div className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
            Shipments Counts
          </div>
        </div>
        <div className="text-center p-8 border-r-0 md:border-r border-neutral-200 dark:border-neutral-700">
          <div className="text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white mb-3">
            <AnimatedCounter end={600} suffix=" K" duration={2} />
          </div>
          <div className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
            Importers Exporters
          </div>
        </div>
        <div className="text-center p-8">
          <div className="text-5xl lg:text-7xl font-black text-neutral-900 dark:text-white mb-3">
            <AnimatedCounter end={8785} suffix=" B" duration={2} />
          </div>
          <div className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400">
            Total Value USD
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;

