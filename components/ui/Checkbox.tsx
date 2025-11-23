import React from 'react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  description?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, ...props }, ref) => {
    return (
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              'h-5 w-5 rounded border-neutral-300 text-primary-600',
              'focus:ring-2 focus:ring-primary-500 focus:ring-offset-0',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'dark:border-neutral-700 dark:bg-neutral-900',
              'cursor-pointer',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className="ml-3">
            {label && (
              <label className="text-sm font-medium text-neutral-900 dark:text-neutral-100 cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
