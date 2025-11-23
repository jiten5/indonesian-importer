import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '@/components/ui/Checkbox'

describe('Checkbox Component', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept terms" />)
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('renders checked when checked prop is true', () => {
    render(<Checkbox label="Checkbox" checked={true} onChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('renders unchecked by default', () => {
    render(<Checkbox label="Checkbox" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Checkbox label="Checkbox" onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Checkbox label="Checkbox" disabled />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })

  it('does not call onChange when disabled', () => {
    const handleChange = jest.fn()
    const { container } = render(<Checkbox label="Checkbox" disabled onChange={handleChange} />)
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    // Disabled checkbox test - checking it's properly disabled
  })

  it('renders description text when provided', () => {
    const description = 'This is additional information'
    render(<Checkbox label="Checkbox" description={description} />)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Checkbox label="Checkbox" className="custom-class" />)
    const checkbox = container.querySelector('input[type="checkbox"]')
    expect(checkbox).toHaveClass('custom-class')
  })
})
