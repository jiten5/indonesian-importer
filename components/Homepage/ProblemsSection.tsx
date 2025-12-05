import React from 'react';
import { TrendingUp, Database, Shield, Bell, Network } from 'lucide-react';

const problems = [
  {
    icon: TrendingUp,
    title: 'Market Uncertainty',
    problem: 'Companies struggle to quickly spot shifts in demand across countries',
    solution: 'Get instant snapshots of product trends and spot rising demand before competitors',
    example: 'One exporter spotted rising demand in Vietnam early and expanded there before competitors.',
    color: 'primary'
  },
  {
    icon: Database,
    title: 'Scattered Data',
    problem: 'Importers waste hours searching multiple sources to compare trade flows',
    solution: 'Access unified global search to instantly compare trade volumes across countries',
    example: 'A client typed "textiles" and instantly compared India, Turkey, and China\'s export volumes.',
    color: 'secondary'
  },
  {
    icon: Shield,
    title: 'Compliance Risks',
    problem: 'Businesses fear unknowingly working with blacklisted suppliers',
    solution: 'Automated sanctions screening flags restricted suppliers to ensure safer partnerships',
    example: 'Flagged a restricted supplier for a European client, saving them from legal trouble.',
    color: 'green'
  },
  {
    icon: Bell,
    title: 'Missed Updates',
    problem: 'Businesses lose opportunities when shipment details change unnoticed',
    solution: 'Real-time shipment alerts keep you informed of delays and changes instantly',
    example: 'A trader received instant notification of buyer\'s delays, arranged backup suppliers on time.',
    color: 'orange'
  },
  {
    icon: Network,
    title: 'Unseen Supply Risks',
    problem: 'Companies often don\'t know who supplies to their competitors',
    solution: 'Supply Chain Mapping reveals alternative suppliers and diversification opportunities',
    example: 'A US importer discovered alternative suppliers and diversified sourcing successfully.',
    color: 'purple'
  }
];

const colorMap = {
  primary: {
    bg: 'bg-primary-50 dark:bg-primary-950/30',
    icon: 'text-primary-600 dark:text-primary-400',
    iconBg: 'bg-primary-100 dark:bg-primary-900/50',
    border: 'border-primary-200 dark:border-primary-800',
    badge: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
  },
  secondary: {
    bg: 'bg-secondary-50 dark:bg-secondary-950/30',
    icon: 'text-secondary-600 dark:text-secondary-400',
    iconBg: 'bg-secondary-100 dark:bg-secondary-900/50',
    border: 'border-secondary-200 dark:border-secondary-800',
    badge: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/30',
    icon: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-100 dark:bg-green-900/50',
    border: 'border-green-200 dark:border-green-800',
    badge: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    icon: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-100 dark:bg-orange-900/50',
    border: 'border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    icon: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-100 dark:bg-purple-900/50',
    border: 'border-purple-200 dark:border-purple-800',
    badge: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
  }
};

const ProblemsSection: React.FC = () => (
  <section className="relative py-24 lg:py-32 bg-white dark:bg-neutral-900 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 bg-grid-neutral-200/50 dark:bg-grid-neutral-800/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Solutions That Work
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
            Solutions That
          </span>
          <br />
          Work
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Transform complex trade challenges into competitive advantages with our comprehensive intelligence platform
        </p>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((item, index) => {
          const Icon = item.icon;
          const colors = colorMap[item.color as keyof typeof colorMap];
          
          return (
            <div
              key={index}
              className={`group relative ${colors.bg} rounded-2xl p-8 border ${colors.border} hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl pointer-events-none"></div>
              
              {/* Icon */}
              <div className={`relative inline-flex p-3 ${colors.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-6 h-6 ${colors.icon}`} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Problem */}
              <div className="relative mb-4">
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Problem
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="relative mb-4">
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} mb-2`}>
                  Our Solution
                </div>
                <p className="text-sm font-medium text-neutral-900 dark:text-white leading-relaxed">
                  {item.solution}
                </p>
              </div>

              {/* Example */}
              <div className={`relative mt-6 pt-6 border-t ${colors.border}`}>
                <div className="flex items-start gap-2">
                  <span className="text-lg group-hover:animate-pulse">💡</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
                    {item.example}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
