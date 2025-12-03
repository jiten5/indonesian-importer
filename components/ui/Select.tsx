import React from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
  isMulti?: boolean
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, required, isMulti, value, onChange, ...props }, ref) => {
    const generatedId = React.useId()
    const selectId = id || `select-${generatedId}`
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {label}
            {required && <span className="text-error-600 dark:text-error-400 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <select
          id={selectId}
          multiple={isMulti}
          className={cn(
            'w-full px-4 py-3 border rounded-lg transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'bg-white dark:bg-neutral-800',
            'text-neutral-900 dark:text-neutral-100',
            'appearance-none bg-no-repeat bg-right pr-10',
            error
              ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
              : 'border-neutral-300 dark:border-neutral-600 focus:ring-primary-500 focus:border-primary-500',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          aria-required={required}
          value={isMulti ? (Array.isArray(value) ? value : []) : value}
          onChange={e => {
            if (isMulti) {
              const selected = Array.from(e.target.selectedOptions).map(opt => opt.value);
              onChange && onChange({ target: { value: selected } });
            } else {
              onChange && onChange(e);
            }
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${selectId}-error`} className="mt-1 text-sm text-error-500" role="alert">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${selectId}-helper`} className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select

