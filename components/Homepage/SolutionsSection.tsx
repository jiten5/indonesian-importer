import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Truck, Factory, FileText, DollarSign, Landmark, Briefcase, Heart, GraduationCap, Wheat, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Solution {
  id: string;
  name: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  benefits: string[];
  href: string;
  image?: string;
}

const solutions: Solution[] = [
  {
    id: 'logistics',
    name: 'Logistics',
    icon: Truck,
    tagline: 'Simplify communication and build trust with data',
    description: 'Streamline logistics operations with real-time shipment tracking, trade lane analytics, and partner intelligence for efficient supply chain management.',
    benefits: [
      'Reduce time spent on reporting - Spend more time reaching your monthly goals by automating reporting',
      'Build trust by transparency - Use our dashboard templates to showcase your progress and achievements',
      'Retain clients longer - Prevent client\'s churn by proactive data-sharing that exceeds their expectations'
    ],
    href: '/solutions/industry/logistics'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    tagline: 'Optimize production with trade intelligence',
    description: 'Gain insights into supplier performance, raw material trends, and global sourcing strategies to optimize your manufacturing operations.',
    benefits: [
      'Discover reliable suppliers - Access verified supplier networks with complete trade histories',
      'Monitor raw material trends - Track pricing and availability of critical materials globally',
      'Optimize procurement - Reduce costs through data-driven sourcing decisions'
    ],
    href: '/solutions/industry/manufacturing'
  },
  {
    id: 'research',
    name: 'Research',
    icon: FileText,
    tagline: 'Academic research intelligence',
    description: 'Access comprehensive trade data for research projects, economic analysis, and market studies with standardized datasets.',
    benefits: [
      'High-performance search - Find exactly what you need across millions of records',
      'Standardized data formats - Ready-to-use datasets for academic research',
      'Custom segmentation - Analyze data by country, product, time period, and more'
    ],
    href: '/solutions/industry/research'
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    icon: DollarSign,
    tagline: 'Financial trade intelligence & risk assessment',
    description: 'Evaluate trade flows, assess counterparty risks, and validate trade finance transactions with comprehensive shipment data.',
    benefits: [
      'Credit risk assessment - Analyze company trade activities for better lending decisions',
      'Trade finance validation - Verify shipment authenticity and transaction legitimacy',
      'Market analytics - Track sector trends and economic indicators'
    ],
    href: '/solutions/industry/banking-finance'
  },
  {
    id: 'government',
    name: 'Government',
    icon: Landmark,
    tagline: 'Trade policy & compliance monitoring',
    description: 'Monitor trade flows, enforce regulations, and develop informed policies with end-to-end trade visibility.',
    benefits: [
      'End-to-end visibility - Track all imports and exports in real-time',
      'Compliance monitoring - Identify violations and ensure regulatory adherence',
      'Economic analytics - Support policy development with comprehensive data'
    ],
    href: '/solutions/industry/government'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    icon: Briefcase,
    tagline: 'Client insights & market intelligence',
    description: 'Deliver superior consulting services with data-backed insights on market trends, competitive landscape, and growth opportunities.',
    benefits: [
      'Better client insights - Provide data-driven recommendations that drive results',
      'Stronger strategies - Develop solutions backed by comprehensive market intelligence',
      'Market opportunities - Identify untapped markets and growth potential'
    ],
    href: '/solutions/industry/consulting'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Heart,
    tagline: 'Healthcare supply chain intelligence',
    description: 'Strengthen healthcare supply networks with insights into medicine and equipment trade, supplier verification, and procurement optimization.',
    benefits: [
      'Prevent medicine shortages - Monitor global supply chains and identify risks early',
      'Verify suppliers - Access trade histories to ensure supplier reliability',
      'Reduce procurement costs - Optimize purchasing with pricing intelligence'
    ],
    href: '/solutions/industry/healthcare'
  },
  {
    id: 'universities',
    name: 'Universities',
    icon: GraduationCap,
    tagline: 'Academic trade data resources',
    description: 'Empower research and education with multi-year trade trends, econometric datasets, and API access for data science projects.',
    benefits: [
      'Multi-year trends - Access historical data for comprehensive analysis',
      'Econometric data - Ready-to-use datasets for statistical modeling',
      'API access - Integrate trade data into your research platforms'
    ],
    href: '/solutions/industry/universities'
  },
  {
    id: 'agrifood',
    name: 'Agri & Food',
    icon: Wheat,
    tagline: 'Agriculture trade intelligence',
    description: 'Track crop movements, commodity prices, and sourcing trends to optimize agricultural supply chains and market planning.',
    benefits: [
      'Monitor supply fluctuations - Track global agricultural supply and demand',
      'Verify supplier reliability - Access complete supplier trade histories',
      'Track commodity prices - Stay informed on pricing trends and market conditions'
    ],
    href: '/solutions/industry/agri-food'
  }
];

const SolutionsSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<string>(solutions[0].id);
  const currentSolution = solutions.find(s => s.id === activeSolution) || solutions[0];
  const Icon = currentSolution.icon;

  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
            Solutions by Industry
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Tailored trade intelligence solutions designed specifically for your industry's unique challenges and opportunities
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => {
            const SolutionIcon = solution.icon;
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolution(solution.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200
                  ${activeSolution === solution.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }
                `}
              >
                <SolutionIcon className="w-4 h-4" />
                <span className="text-sm">{solution.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-6">
              <Icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{currentSolution.name}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {currentSolution.tagline}
            </h3>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              {currentSolution.description}
            </p>

            <div className="space-y-4 mb-8">
              {currentSolution.benefits.map((benefit, index) => {
                const [title, ...descParts] = benefit.split(' - ');
                const description = descParts.join(' - ');
                
                return (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-neutral-900 dark:text-white font-semibold">
                        {title}
                        {description && (
                          <>
                            {' - '}
                            <span className="font-normal text-neutral-600 dark:text-neutral-300">
                              {description}
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link href={currentSolution.href}>
              <Button variant="primary" size="lg" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-12 aspect-square flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
                <Icon className="w-48 h-48 text-primary-600 dark:text-primary-400 relative z-10" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-4 w-32"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Live Data</span>
                </div>
                <div className="text-2xl font-bold text-primary-600">143K+</div>
                <div className="text-xs text-neutral-500">Records</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-4 w-32"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Growth</span>
                </div>
                <div className="text-2xl font-bold text-success-600">+5.2%</div>
                <div className="text-xs text-neutral-500">YoY</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;

