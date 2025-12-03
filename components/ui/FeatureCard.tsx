'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        'group relative p-8 bg-white dark:bg-neutral-800 rounded-2xl',
        'border-2 border-neutral-200 dark:border-neutral-700',
        'hover:border-primary-500 dark:hover:border-primary-500',
        'hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2',
        'transition-all duration-500 cursor-pointer',
        'hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50',
        'dark:hover:from-primary-950/30 dark:hover:to-secondary-950/30',
        className
      )}
    >
      <div className="flex flex-col items-start gap-5">
        <div className="p-4 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
          <Icon className="w-7 h-7 text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

