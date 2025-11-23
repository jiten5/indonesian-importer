import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Textarea from '@/components/ui/Textarea'

describe('Textarea Component', () => {
  it('renders with label', () => {
    render(<Textarea label="Description" />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('shows required asterisk when required', () => {
    render(<Textarea label="Required Field" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('displays error message when error prop is provided', () => {
    const errorMessage = 'This field is required'
    render(<Textarea label="Textarea" error={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('displays helper text when provided', () => {
    const helperText = 'Maximum 500 characters'
    render(<Textarea label="Textarea" helperText={helperText} />)
    expect(screen.getByText(helperText)).toBeInTheDocument()
  })

  it('handles user input correctly', async () => {
    const user = userEvent.setup()
    render(<Textarea label="Description" />)
    
    const textarea = screen.getByLabelText('Description')
    await user.type(textarea, 'Test text content')
    
    expect(textarea).toHaveValue('Test text content')
  })

  it('calls onChange handler when value changes', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    render(<Textarea label="Textarea" onChange={handleChange} />)
    
    const textarea = screen.getByLabelText('Textarea')
    await user.type(textarea, 'New text')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('can be disabled', () => {
    render(<Textarea label="Textarea" disabled />)
    const textarea = screen.getByLabelText('Textarea')
    expect(textarea).toBeDisabled()
  })

  it('displays placeholder text', () => {
    render(<Textarea label="Textarea" placeholder="Enter your description" />)
    expect(screen.getByPlaceholderText('Enter your description')).toBeInTheDocument()
  })

  it('applies error styles when error is present', () => {
    render(<Textarea label="Textarea" error="Error message" />)
    const textarea = screen.getByLabelText('Textarea')
    expect(textarea).toHaveClass('border-error-500')
  })

  it('sets aria-invalid when error exists', () => {
    render(<Textarea label="Textarea" error="Error message" />)
    const textarea = screen.getByLabelText('Textarea')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
  })

  it('respects rows prop', () => {
    render(<Textarea label="Textarea" rows={5} />)
    const textarea = screen.getByLabelText('Textarea')
    expect(textarea).toHaveAttribute('rows', '5')
  })
})
