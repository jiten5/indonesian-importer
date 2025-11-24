import React from 'react'
import { cn } from '@/lib/utils'

interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
  error?: string
  containerClassName?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, description, error, containerClassName, className, id, ...props }, ref) => {
    const generatedId = React.useId()
    const radioId = id || `radio-${generatedId}`

    return (
      <div className={cn('flex items-start', containerClassName)}>
        <div className="flex items-center h-5">
          <input
            type="radio"
            id={radioId}
            ref={ref}
            className={cn(
              'w-4 h-4 border-neutral-300 dark:border-neutral-600',
              'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600',
              'focus:ring-2 focus:ring-offset-0',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'cursor-pointer transition-colors',
              error && 'border-error-600 focus:ring-error-500',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${radioId}-error` : description ? `${radioId}-description` : undefined}
            {...props}
          />
        </div>
        <div className="ml-3 flex-1">
          <label
            htmlFor={radioId}
            className={cn(
              'font-medium text-neutral-900 dark:text-neutral-100 cursor-pointer',
              props.disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {label}
          </label>
          {description && (
            <p
              id={`${radioId}-description`}
              className="text-sm text-neutral-600 dark:text-neutral-400 mt-1"
            >
              {description}
            </p>
          )}
          {error && (
            <p
              id={`${radioId}-error`}
              className="text-sm text-error-600 dark:text-error-400 mt-1"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Radio.displayName = 'Radio'

export default Radio
