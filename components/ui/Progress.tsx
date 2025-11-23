'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showValue?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
  className?: string;
}

export default function Progress({
  value,
  max = 100,
  variant = 'default',
  size = 'md',
  showLabel = false,
  showValue = false,
  label,
  animated = false,
  striped = false,
  className = '',
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const isComplete = percentage === 100;

  const sizeStyles = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  const variantStyles = {
    default: 'bg-primary-600',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600',
  };

  return (
    <div className={cn('w-full', className)}>
      {(showLabel || label) && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label || 'Progress'}
          </span>
          {showValue && (
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div
        className={cn(
          'relative w-full bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden',
          sizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out relative',
            variantStyles[variant],
            striped && 'bg-stripes',
            animated && 'animate-pulse'
          )}
          style={{ width: `${percentage}%` }}
        >
          {striped && (
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          )}
          {isComplete && size !== 'sm' && (
            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <Check className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Multi-step Progress
interface StepProgressProps {
  steps: Array<{ label: string; description?: string }>;
  currentStep: number;
  variant?: 'default' | 'compact';
  className?: string;
}

export function StepProgress({
  steps,
  currentStep,
  variant = 'default',
  className = '',
}: StepProgressProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center relative">
                <div
                  className={cn(
                    'flex items-center justify-center rounded-full border-2 transition-all duration-300',
                    variant === 'compact' ? 'w-8 h-8 text-sm' : 'w-10 h-10',
                    isCompleted && 'bg-primary-600 border-primary-600 text-white',
                    isCurrent && 'bg-primary-100 dark:bg-primary-900/20 border-primary-600 text-primary-700 dark:text-primary-300',
                    isUpcoming && 'bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-500'
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="font-semibold">{stepNumber}</span>
                  )}
                </div>
                
                {variant === 'default' && (
                  <div className="mt-2 text-center">
                    <div className={cn(
                      'text-sm font-medium',
                      isCurrent && 'text-primary-700 dark:text-primary-300',
                      !isCurrent && 'text-neutral-600 dark:text-neutral-400'
                    )}>
                      {step.label}
                    </div>
                    {step.description && (
                      <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 max-w-[100px]">
                        {step.description}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 mt-[-20px]">
                  <div
                    className={cn(
                      'h-full transition-all duration-500',
                      isCompleted ? 'bg-primary-600' : 'bg-neutral-300 dark:bg-neutral-700'
                    )}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
