import React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, required, ...props }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || `textarea-${generatedId}`
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {label}
            {required && <span className="text-error-600 dark:text-error-400 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'dark:bg-neutral-900 dark:text-neutral-100',
            'min-h-[100px] resize-y',
            error
              ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
              : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          aria-required={required}
          {...props}
        />
        {error && (
          <p id={`${textareaId}-error`} className="mt-1 text-sm text-error-500" role="alert">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${textareaId}-helper`} className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea

