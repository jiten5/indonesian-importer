import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Code, FileKey, ArrowRight, Search, Zap, Download, Globe, BarChart3, Shield } from 'lucide-react';
import Button from '@/components/ui/Button';

interface Product {
  id: string;
  number: string;
  name: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  href: string;
  color: string;
}

const products: Product[] = [
  {
    id: 'data-platform',
    number: '01',
    name: 'Data Platform',
    title: 'Interactive trade intelligence at your fingertips',
    description: 'Search, analyze, and visualize global trade data through our intuitive web platform. Access 83M+ shipment records with powerful filters, custom reports, and interactive dashboards—no technical expertise required.',
    features: [
      'Advanced search across 83M+ trade records',
      'Custom reports and analytics dashboards',
      'Company profiles and market intelligence',
      'Real-time data updates from 195+ countries'
    ],
    icon: Database,
    href: '/products/data-platform',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'trade-data-api',
    number: '02',
    name: 'Trade Data API',
    title: 'Integrate trade intelligence into your applications',
    description: 'Build powerful applications with our RESTful API. Access comprehensive trade data programmatically with clean endpoints, real-time webhooks, and SDKs for popular programming languages.',
    features: [
      'RESTful API with JSON/XML formats',
      'Real-time webhooks for instant updates',
      'Lightning fast (< 100ms response time)',
      'SDKs for Python, Node.js, PHP, and Ruby'
    ],
    icon: Code,
    href: '/products/trade-data-api',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'data-license',
    number: '03',
    name: 'Data License',
    title: 'Complete datasets for offline analysis',
    description: 'License comprehensive trade datasets for your own systems. Download complete historical data, integrate into your products, or build custom analytics solutions with white-label options.',
    features: [
      'Bulk downloads in CSV, Excel, or database formats',
      'Historical archives dating back to 2010',
      'White-label ready for product integration',
      'Dedicated support and account management'
    ],
    icon: FileKey,
    href: '/products/data-license',
    color: 'from-orange-500 to-red-500'
  }
];

const ProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string>(products[0].id);
  const currentProduct = products.find(p => p.id === activeProduct) || products[0];
  const Icon = currentProduct.icon;

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
              Our
            </span>
            {' '}Products
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Whether you prefer an intuitive web platform, powerful API integration, or complete offline datasets—we have the right solution for your business needs.
          </p>
        </div>

        {/* Products Navigation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Product List */}
          <div className="lg:w-2/5">
            <div className="space-y-3">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`
                    w-full text-left p-4 rounded-xl transition-all duration-300
                    ${activeProduct === product.id
                      ? 'bg-white dark:bg-neutral-900 shadow-2xl shadow-primary-500/10 dark:shadow-primary-500/20 scale-105 border border-primary-200 dark:border-primary-800'
                      : 'hover:bg-white/70 dark:hover:bg-neutral-900/70 hover:shadow-lg hover:scale-102 backdrop-blur-sm border border-transparent'
                    }
                  `}
                >
                  <div className="flex items-start gap-4">
                    <span className={`
                      text-2xl font-black transition-all duration-300
                      ${activeProduct === product.id
                        ? 'text-transparent bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 bg-clip-text'
                        : 'text-neutral-400 dark:text-neutral-600'
                      }
                    `}>
                      {product.number}
                    </span>
                    <div className="flex-1">
                      <h3 className={`
                        text-lg font-bold mb-1 transition-colors duration-300
                        ${activeProduct === product.id
                          ? 'text-neutral-900 dark:text-white'
                          : 'text-neutral-600 dark:text-neutral-400'
                        }
                      `}>
                        {product.name}
                      </h3>
                      {activeProduct !== product.id && (
                        <p className="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2">
                          {product.title}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="lg:w-3/5">
            <motion.div
              key={activeProduct}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            >
              {/* Background Pattern - Enhanced */}
              <div className="absolute inset-0 opacity-10">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"
                ></motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 mb-6 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-lg">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider opacity-90">
                    {currentProduct.name}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {currentProduct.title}
                </h3>

                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {currentProduct.features.map((feature, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                    >
                      <div className="w-5 h-5 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-base opacity-90">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={currentProduct.href}>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-neutral-100 hover:scale-105 hover:shadow-xl group transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Decorative Icon - Enhanced */}
              <motion.div 
                animate={{ rotate: [0, 5, 0], opacity: [0.05, 0.08, 0.05] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0"
              >
                <Icon className="w-64 h-64 transform translate-x-16 translate-y-16" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

