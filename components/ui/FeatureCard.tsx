'use client';

import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

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
        'group relative p-6 bg-white dark:bg-neutral-800 rounded-lg',
        'border border-neutral-200 dark:border-neutral-700',
        'hover:border-primary-300 dark:hover:border-primary-600',
        'hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
