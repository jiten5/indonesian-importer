import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Select from '@/components/ui/Select'

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]

  it('renders with label', () => {
    render(<Select label="Test Select" options={options} />)
    expect(screen.getByText('Test Select')).toBeInTheDocument()
  })

  it('renders required asterisk when required', () => {
    render(<Select label="Required Field" options={options} required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('displays all options', () => {
    render(<Select label="Select" options={options} />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    
    // Check options exist
    options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument()
    })
  })

  it('shows error message when error prop is provided', () => {
    const errorMessage = 'This field is required'
    render(<Select label="Select" options={options} error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('shows helper text when provided', () => {
    const helperText = 'Please select an option'
    render(<Select label="Select" options={options} helperText={helperText} />)
    expect(screen.getByText(helperText)).toBeInTheDocument()
  })

  it('calls onChange when value changes', () => {
    const handleChange = jest.fn()
    render(<Select label="Select" options={options} onChange={handleChange} />)
    
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'option2' } })
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Select label="Select" options={options} disabled />)
    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('applies error styles when error is present', () => {
    render(<Select label="Select" options={options} error="Error message" />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('border-error-500')
  })

  it('applies custom className', () => {
    render(<Select label="Select" options={options} className="custom-select" />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('custom-select')
  })
})

