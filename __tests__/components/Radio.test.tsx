import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Radio from '@/components/ui/Radio'

describe('Radio Component', () => {
  it('renders with label', () => {
    render(<Radio label="Choose option" />)
    expect(screen.getByText('Choose option')).toBeInTheDocument()
  })

  it('renders radio input', () => {
    render(<Radio label="Radio Option" />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
  })

  it('calls onChange when clicked', () => {
    const handleChange = jest.fn()
    render(<Radio label="Radio Option" onChange={handleChange} />)
    
    const radio = screen.getByRole('radio')
    fireEvent.click(radio)
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('can be checked', () => {
    render(<Radio label="Radio Option" checked={true} onChange={() => {}} />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeChecked()
  })

  it('can be disabled', () => {
    render(<Radio label="Radio Option" disabled />)
    const radio = screen.getByRole('radio')
    expect(radio).toBeDisabled()
  })

  it('displays error message when error prop is provided', () => {
    const errorMessage = 'Please select this option'
    render(<Radio label="Radio Option" error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('displays description text when provided', () => {
    const description = 'Additional information'
    render(<Radio label="Radio Option" description={description} />)
    expect(screen.getByText(description)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Radio label="Radio" className="custom-radio" />)
    const radio = container.querySelector('input[type="radio"]')
    expect(radio).toHaveClass('custom-radio')
  })
})
