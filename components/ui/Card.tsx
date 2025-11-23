import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'bordered' | 'elevated' | 'glass' | 'gradient'
  clickable?: boolean
  animated?: boolean
}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, padding = 'md', variant = 'default', clickable = false, animated = false, className, onClick, ...props }, ref) => {
    const paddingStyles = {
      none: '',
      sm: 'p-3 sm:p-4',
      md: 'p-4 sm:p-6',
      lg: 'p-6 sm:p-8',
      xl: 'p-8 sm:p-10'
    }

    const variantStyles = {
      default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md',
      bordered: 'bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700',
      elevated: 'bg-white dark:bg-neutral-900 shadow-xl border-0',
      glass: 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg',
      gradient: 'bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-800 shadow-lg'
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-300',
          variantStyles[variant],
          (hover || clickable) && 'hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-700',
          clickable && 'cursor-pointer active:scale-98',
          animated && 'animate-in fade-in slide-in-from-bottom-4 duration-500',
          paddingStyles[padding],
          className
        )}
        onClick={onClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardRoot.displayName = 'Card'

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mb-4', className)}
      {...props}
    />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2', className)}
      {...props}
    />
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex-1', className)}
      {...props}
    />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mt-auto pt-4 flex items-center justify-between', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

// Create compound component with proper typing
type CardType = typeof CardRoot & {
  Header: typeof CardHeader
  Title: typeof CardTitle
  Description: typeof CardDescription
  Content: typeof CardContent
  Footer: typeof CardFooter
}

const Card = CardRoot as CardType
Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
