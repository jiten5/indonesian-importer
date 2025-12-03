import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  rounded?: 'sm' | 'md' | 'lg' | 'full'
  gradient?: boolean
  pulse?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md',
    children,
    className,
    isLoading = false,
    leftIcon,
    rightIcon,
    disabled,
    fullWidth = false,
    rounded = 'lg',
    gradient = false,
    pulse = false,
    ...props 
  }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'
    
    const variants = {
      primary: gradient 
        ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg shadow-primary-500/50'
        : 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 hover:shadow-lg',
      secondary: gradient
        ? 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 focus:ring-secondary-500 shadow-lg shadow-secondary-500/50'
        : 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 hover:shadow-lg',
      outline: 'border-2 border-neutral-300 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 focus:ring-neutral-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800',
      ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500 dark:text-neutral-300 dark:hover:bg-neutral-800',
      danger: gradient
        ? 'bg-gradient-to-r from-error-500 to-error-600 text-white hover:from-error-600 hover:to-error-700 focus:ring-error-500 shadow-lg shadow-error-500/50'
        : 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500 hover:shadow-lg',
      success: gradient
        ? 'bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-600 hover:to-success-700 focus:ring-success-500 shadow-lg shadow-success-500/50'
        : 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500 hover:shadow-lg'
    }
    
    const sizes = {
      xs: 'px-2 py-1 text-xs gap-1',
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base gap-2',
      lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg gap-2.5',
      xl: 'px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl gap-3'
    }

    const roundedStyles = {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
      full: 'rounded-full'
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          roundedStyles[rounded],
          fullWidth && 'w-full',
          pulse && 'animate-pulse',
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading...
          </>
        ) : (
          <>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

