import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  variant?: 'default' | 'filled' | 'flushed'
  inputSize?: 'sm' | 'md' | 'lg'
  onClear?: () => void
  showClearButton?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    leftIcon, 
    rightIcon, 
    type = 'text', 
    id, 
    required, 
    name, 
    variant = 'default',
    inputSize = 'md',
    onClear,
    showClearButton = false,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [internalValue, setInternalValue] = useState(value || '')
    const inputId = id || (name ? `input-${name}` : undefined)
    const currentValue = value !== undefined ? value : internalValue
    const showClear = showClearButton && currentValue && !props.disabled && !props.readOnly

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value)
      }
      onChange?.(e)
    }

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('')
      }
      onClear?.()
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' }
        } as React.ChangeEvent<HTMLInputElement>
        onChange(syntheticEvent)
      }
    }

    const variantStyles = {
      default: 'border rounded-lg',
      filled: 'border-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg',
      flushed: 'border-0 border-b-2 rounded-none px-0'
    }

    const sizeStyles = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg'
    }
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {label}
            {required && <span className="text-error-600 dark:text-error-400 ml-1" aria-label="required">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              {leftIcon}
            </div>
          )}
          <input
            type={type}
            id={inputId}
            value={currentValue}
            onChange={handleChange}
            className={cn(
              'w-full transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-0',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'dark:bg-neutral-900 dark:text-neutral-100',
              variantStyles[variant],
              sizeStyles[inputSize],
              leftIcon && 'pl-10',
              (rightIcon || showClear) && 'pr-10',
              error
                ? 'border-error-500 focus:ring-error-500 focus:border-error-500'
                : 'border-neutral-300 dark:border-neutral-700 focus:ring-primary-500 focus:border-primary-500',
              className
            )}
            ref={ref}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            aria-required={required}
            {...props}
          />
          {showClear && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          {!showClear && rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-sm text-error-500" role="alert">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

