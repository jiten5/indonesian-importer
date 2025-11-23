'use client';

import React from 'react';
import Card from './Card';
import Button from './Button';
import Badge from './Badge';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '@/types';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  plan: PricingPlan;
  billingPeriod: 'monthly' | 'yearly';
  onSelectPlan?: (planId: string) => void;
  className?: string;
}

export function PricingCard({
  plan,
  billingPeriod,
  onSelectPlan,
  className,
}: PricingCardProps) {
  const price = billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly;
  const isHighlighted = plan.highlighted;
  const monthlyPrice = billingPeriod === 'yearly' ? plan.price.yearly / 12 : price;

  return (
    <Card
      className={cn(
        'relative flex flex-col h-full transition-all duration-300',
        isHighlighted && [
          'border-2 border-primary-500 dark:border-primary-400',
          'shadow-xl shadow-primary-100 dark:shadow-primary-900/20',
          'scale-105',
          'z-10',
        ],
        !isHighlighted && 'hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800',
        className
      )}
    >
      {/* Highlighted Badge */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="primary" className="flex items-center gap-1 px-4 py-1.5 text-sm font-semibold shadow-lg">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            {plan.name}
          </h3>
          {plan.tagline && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {plan.tagline}
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-6">
          {plan.customizable ? (
            <div>
              <p className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                Custom
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                Tailored to your needs
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                  ${Math.round(monthlyPrice).toLocaleString()}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">/month</span>
              </div>
              {billingPeriod === 'yearly' && plan.savings && (
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="success" className="text-xs">
                    Save {plan.savings}%
                  </Badge>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    ${plan.price.yearly.toLocaleString()}/year
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Key Stats */}
        {!plan.customizable && (
          <div className="mb-6 pb-6 border-b border-neutral-200 dark:border-neutral-700">
            <div className="space-y-3 text-sm">
              {plan.countries && (
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Countries</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {plan.countries === 'All' ? 'All Countries' : `${plan.countries} Countries`}
                  </span>
                </div>
              )}
              {plan.searchesPerMonth && (
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Searches/Month</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {plan.searchesPerMonth === 'Unlimited' ? 'Unlimited' : plan.searchesPerMonth.toLocaleString()}
                  </span>
                </div>
              )}
              {plan.users && (
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Users</span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {plan.users === 'Unlimited' ? 'Unlimited' : plan.users}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Features List */}
        <div className="flex-1 mb-6">
          <ul className="space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check
                  className={cn(
                    'w-5 h-5 mt-0.5 flex-shrink-0',
                    isHighlighted
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-success-600 dark:text-success-400'
                  )}
                />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Button
          variant={isHighlighted ? 'primary' : 'outline'}
          size="lg"
          className="w-full"
          onClick={() => onSelectPlan?.(plan.id)}
        >
          {plan.customizable ? 'Contact Sales' : 'Get Started'}
        </Button>
      </div>
    </Card>
  );
}
