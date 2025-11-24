import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', children, className, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300'
    
    const variants = {
      default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100',
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105',
      secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-secondary-500/30 hover:shadow-secondary-500/50 hover:scale-105',
      success: 'bg-success-500 text-white shadow-success-500/30',
      warning: 'bg-warning-500 text-white shadow-warning-500/30',
      error: 'bg-error-500 text-white shadow-error-500/30',
      info: 'bg-info-500 text-white shadow-info-500/30',
      outline: 'border-2 border-neutral-400 text-neutral-800 dark:border-neutral-600 dark:text-neutral-200 hover:border-primary-500 hover:text-primary-600'
    }
    
    const sizes = {
      sm: 'px-3 py-1 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-5 py-2.5 text-base'
    }

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
