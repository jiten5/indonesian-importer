import type { PricingPlan, Solution, FeatureItem } from '@/types'
import { Database, BarChart3, Zap, FileText, Package, Target, Users, Shield, BookOpen, Landmark, TrendingUp } from 'lucide-react'

// ====================================
// PRICING PLANS
// ====================================

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses starting with trade data',
    price: {
      monthly: 150,
      yearly: 1400,
    },
    savings: 'Save 20%',
    countries: 5,
    searchesPerMonth: 100,
    downloadPoints: 500,
    contactInfoPoints: 100,
    users: 1,
    support: 'Basic',
    dataAccessFrom: 1,
    features: [
      '5 countries access',
      '100 searches per month',
      '500 download points',
      '100 contact info points',
      'Single user access',
      'Email support (48hr response)',
      '1 year historical data',
      'Basic data visualizations',
      'CSV export only',
    ],
  },
  {
    id: 'essential',
    name: 'Essential',
    tagline: 'For growing teams needing comprehensive data',
    price: {
      monthly: 400,
      yearly: 4000,
    },
    savings: 'Save 17%',
    countries: 20,
    searchesPerMonth: 500,
    downloadPoints: 3000,
    contactInfoPoints: 500,
    users: 3,
    support: 'Standard',
    dataAccessFrom: 3,
    features: [
      '20 countries access',
      '500 searches per month',
      '3,000 download points',
      '500 contact info points',
      'Up to 3 users',
      'Email + Chat support (24hr response)',
      '3 years historical data',
      'Advanced charts & analytics',
      'CSV + Excel export',
      'API access (limited)',
      'Custom alerts',
    ],
    highlighted: true,
  },
  {
    id: 'expert',
    name: 'Expert',
    tagline: 'For data-driven enterprises and consultancies',
    price: {
      monthly: 900,
      yearly: 9000,
    },
    savings: 'Save 17%',
    countries: 'All',
    searchesPerMonth: 'Unlimited',
    downloadPoints: 10000,
    contactInfoPoints: 2000,
    users: 10,
    support: 'Priority',
    dataAccessFrom: 5,
    features: [
      'All 200+ countries access',
      'Unlimited searches',
      '10,000 download points',
      '2,000 contact info points',
      'Up to 10 users',
      'Priority support (4hr response)',
      '5 years historical data',
      'AI-powered insights',
      'All export formats',
      'Full API access',
      'Custom dashboards',
      'Dedicated account manager',
      'White-label reports',
    ],
  },
  {
    id: 'customized',
    name: 'Customized',
    tagline: 'Tailored solutions for unique requirements',
    price: {
      monthly: 0,
      yearly: 0,
    },
    countries: 'All',
    searchesPerMonth: 'Unlimited',
    downloadPoints: 'Unlimited',
    contactInfoPoints: 'Unlimited',
    users: 'Unlimited',
    support: '24/7 Dedicated',
    dataAccessFrom: 10,
    features: [
      'Everything in Expert',
      'Custom data integration',
      'On-premise deployment option',
      'Dedicated infrastructure',
      'Custom SLA agreements',
      'Unlimited users',
      'Historical data (10+ years)',
      '24/7 dedicated support',
      'Custom development',
      'Training & onboarding',
    ],
    customizable: true,
  },
]

// ====================================
// SOLUTIONS
// ====================================

export const solutions: Omit<Solution, 'icon'>[] = [
  {
    id: 'trade-intelligence',
    title: 'Trade Intelligence',
    subtitle: 'Data-Driven Market Insights',
    description: 'Access real-time import/export data to identify market trends, opportunities, and competitive dynamics across 200+ countries.',
    benefits: [
      'Real-time data updates',
      '200+ countries coverage',
      'AI-powered insights',
      'Historical trend analysis',
    ],
    useCases: [
      {
        title: 'Market Entry Strategy',
        description: 'Identify high-potential markets for product expansion',
        industry: 'Manufacturing',
        result: '40% faster market entry decisions',
      },
      {
        title: 'Demand Forecasting',
        description: 'Predict product demand based on import patterns',
        industry: 'Retail',
        result: '25% improvement in inventory planning',
      },
    ],
    features: ['Advanced filtering', 'Custom alerts', 'Trend visualization'],
    cta: { text: 'Explore Intelligence', href: '/products/data-platform' },
  },
  {
    id: 'market-discovery',
    title: 'Market Discovery',
    subtitle: 'Find New Business Opportunities',
    description: 'Discover emerging markets, untapped segments, and high-growth product categories using comprehensive trade data analysis.',
    benefits: [
      'Emerging market detection',
      'Product category insights',
      'Regional demand analysis',
      'Competitor market share',
    ],
    useCases: [
      {
        title: 'Geographic Expansion',
        description: 'Identify countries with growing demand for your products',
        result: '3x increase in international sales',
      },
    ],
    features: ['Market heat maps', 'Growth indicators', 'Opportunity scoring'],
    cta: { text: 'Discover Markets', href: '/solutions' },
  },
  {
    id: 'supplier-network',
    title: 'Buyers & Suppliers Network',
    subtitle: 'Connect with Global Trade Partners',
    description: 'Build a verified network of importers, exporters, and manufacturers with detailed company profiles and trade histories.',
    benefits: [
      'Verified company profiles',
      'Direct contact information',
      'Trade history visibility',
      'Partner credibility scoring',
    ],
    useCases: [
      {
        title: 'Supplier Sourcing',
        description: 'Find reliable suppliers with proven track records',
        industry: 'Procurement',
        result: '50% reduction in sourcing time',
      },
    ],
    features: ['Company search', 'Contact unlock', 'Watchlist alerts'],
    cta: { text: 'Build Network', href: '/companies-listing' },
  },
  {
    id: 'shipment-insights',
    title: 'Shipment Insights',
    subtitle: 'Deep Dive into Trade Flows',
    description: 'Analyze shipment patterns, volumes, values, and routes to understand supply chain dynamics and market movements.',
    benefits: [
      'Detailed shipment records',
      'Volume & value trends',
      'Port-level analysis',
      'Shipping method breakdown',
    ],
    useCases: [
      {
        title: 'Supply Chain Optimization',
        description: 'Optimize logistics based on competitor shipping patterns',
        result: '15% cost reduction in shipping',
      },
    ],
    features: ['Shipment timeline', 'Route mapping', 'Frequency analysis'],
    cta: { text: 'Analyze Shipments', href: '/search' },
  },
  {
    id: 'compliance-tools',
    title: 'Compliance & Risk Management',
    subtitle: 'Ensure Regulatory Adherence',
    description: 'Stay compliant with international trade regulations, tariffs, and restrictions using up-to-date regulatory data.',
    benefits: [
      'HS code classification',
      'Tariff rate lookup',
      'Restriction alerts',
      'Regulatory updates',
    ],
    useCases: [
      {
        title: 'Import Compliance',
        description: 'Avoid penalties with automated compliance checks',
        result: '100% regulatory compliance',
      },
    ],
    features: ['Compliance checker', 'Tariff calculator', 'Alert system'],
    cta: { text: 'Ensure Compliance', href: '/solutions' },
  },
  {
    id: 'supply-chain-viz',
    title: 'Supply Chain Visualization',
    subtitle: 'Map Your Trade Network',
    description: 'Visualize complex supply chains with interactive maps, flowcharts, and network diagrams for better decision-making.',
    benefits: [
      'Interactive trade maps',
      'Network diagrams',
      'Flow visualization',
      'Dependency analysis',
    ],
    useCases: [
      {
        title: 'Risk Mapping',
        description: 'Identify single points of failure in supply chains',
        result: 'Reduced supply disruption by 35%',
      },
    ],
    features: ['Geographic maps', 'Network graphs', 'Export to presentations'],
    cta: { text: 'Visualize Chains', href: '/solutions' },
  },
  {
    id: 'competitor-benchmarking',
    title: 'Competitor Benchmarking',
    subtitle: 'Stay Ahead of Competition',
    description: 'Monitor competitor trade activities, market positioning, and strategic moves to gain competitive advantage.',
    benefits: [
      'Competitor tracking',
      'Market share analysis',
      'Strategic intelligence',
      'Automated alerts',
    ],
    useCases: [
      {
        title: 'Competitive Analysis',
        description: 'Track competitor import/export volumes and partners',
        industry: 'Manufacturing',
        result: 'Identified 12 new market opportunities',
      },
    ],
    features: ['Competitor watchlist', 'Comparison dashboards', 'Alert system'],
    cta: { text: 'Benchmark Now', href: '/solutions' },
  },
  {
    id: 'forecasting',
    title: 'Forecasting & Predictions',
    subtitle: 'AI-Powered Trade Forecasts',
    description: 'Leverage machine learning models to predict future trade patterns, demand shifts, and market opportunities.',
    benefits: [
      'ML-powered forecasts',
      'Demand prediction',
      'Trend extrapolation',
      'Scenario modeling',
    ],
    useCases: [
      {
        title: 'Demand Forecasting',
        description: 'Predict product demand 6 months ahead',
        result: '30% inventory cost reduction',
      },
    ],
    features: ['Predictive models', 'Confidence scores', 'What-if scenarios'],
    cta: { text: 'Forecast Trends', href: '/solutions' },
  },
]

// ====================================
// FEATURES
// ====================================

export const features: Omit<FeatureItem, 'icon'>[] = [
  {
    title: 'Real-Time Data Updates',
    description: 'Access the latest import/export data updated daily from customs authorities worldwide.',
  },
  {
    title: 'Advanced Search Filters',
    description: 'Find exactly what you need with filters for HS codes, companies, products, dates, and locations.',
  },
  {
    title: 'Company Profiles',
    description: 'Detailed profiles with trade history, contact information, and verification status.',
  },
  {
    title: 'Interactive Dashboards',
    description: 'Visualize trade data with customizable charts, graphs, and maps.',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrate trade data into your existing systems with our robust API.',
  },
  {
    title: 'Custom Alerts',
    description: 'Get notified about new shipments, competitor activities, or market changes.',
  },
]

// ====================================
// COUNTRIES (Top 50)
// ====================================

export const countries = [
  'Indonesia',
  'United States',
  'China',
  'India',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Philippines',
  'Japan',
  'South Korea',
  'Australia',
  'United Kingdom',
  'Germany',
  'France',
  'Netherlands',
  'Italy',
  'Spain',
  'Belgium',
  'United Arab Emirates',
  'Saudi Arabia',
  'Brazil',
  'Mexico',
  'Canada',
  'Russia',
  'Turkey',
  'Poland',
  'South Africa',
  'Egypt',
  'Nigeria',
  'Kenya',
  'Argentina',
  'Chile',
  'Colombia',
  'Peru',
  'New Zealand',
  'Pakistan',
  'Bangladesh',
  'Myanmar',
  'Cambodia',
  'Laos',
  'Brunei',
  'Taiwan',
  'Hong Kong',
  'Israel',
  'Qatar',
  'Kuwait',
  'Oman',
  'Jordan',
  'Morocco',
]

// ====================================
// INDUSTRIES
// ====================================

export const industries = [
  'Agriculture & Food',
  'Automotive',
  'Chemicals',
  'Construction & Building Materials',
  'Consumer Electronics',
  'Fashion & Apparel',
  'Furniture & Home Decor',
  'Healthcare & Pharmaceuticals',
  'Industrial Machinery',
  'Oil & Gas',
  'Plastics & Rubber',
  'Renewable Energy',
  'Telecommunications',
  'Textiles',
  'Transportation & Logistics',
]

// ====================================
// TRUST INDICATORS
// ====================================

export const trustIndicators = [
  { label: 'Countries', value: '200+', description: 'Global coverage' },
  { label: 'Trade Records', value: '50M+', description: 'Data points' },
  { label: 'Active Users', value: '10K+', description: 'Businesses trust us' },
]
