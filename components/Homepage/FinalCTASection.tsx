import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CheckCircle2, Zap, Shield, Clock } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle2,
    text: 'Free 14-day trial - no credit card required'
  },
  {
    icon: Zap,
    text: 'Access 195+ countries of trade data instantly'
  },
  {
    icon: Shield,
    text: 'Enterprise-grade security and compliance'
  },
  {
    icon: Clock,
    text: 'Dedicated customer success manager'
  }
];

const FinalCTASection: React.FC = () => (
  <section className="relative py-24 lg:py-32 overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-900" />
    
    {/* Animated Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
      <div className="text-center mb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Limited Time Offer
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Transform Your
          <br />
          Global Business Strategy?
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join thousands of businesses worldwide who trust Market Inside to power their international trade decisions with reliable, real-time intelligence.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-medium text-sm">
                  {benefit.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/contact">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-white text-primary-600 hover:bg-white/90 shadow-2xl hover:shadow-white/20 font-bold px-8"
            >
              Book a Demo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <Link href="/pricing">
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-2 border-white/30 hover:border-white/50 font-bold px-8"
            >
              Try for Free
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>30-minute demo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Free trial included</span>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-neutral-900 font-bold text-sm shadow-lg">
          <Zap className="w-4 h-4" />
          <span>Limited Time: Get 50% off your first 3 months when you book a demo this week</span>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;

