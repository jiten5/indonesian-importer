import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '@/components/ui/Input'

describe('Input Component', () => {
  it('renders with label', () => {
    render(<Input label="Email Address" />)
    expect(screen.getByText('Email Address')).toBeInTheDocument()
  })

  it('renders required asterisk when required', () => {
    render(<Input label="Name" required />)
    const asterisk = screen.getByLabelText('required')
    expect(asterisk).toBeInTheDocument()
  })

  it('shows error message when error prop is provided', () => {
    render(<Input label="Email" error="Invalid email format" />)
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
  })

  it('shows helper text when provided', () => {
    render(<Input label="Password" helperText="Must be at least 8 characters" />)
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument()
  })

  it('handles user input', async () => {
    const user = userEvent.setup()
    render(<Input label="Username" />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, 'testuser')
    
    expect(input).toHaveValue('testuser')
  })

  it('calls onChange handler', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    
    render(<Input label="Name" onChange={handleChange} />)
    
    const input = screen.getByRole('textbox')
    await user.type(input, 'a')
    
    expect(handleChange).toHaveBeenCalled()
  })

  it('applies disabled state', () => {
    render(<Input label="Disabled" disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('renders with placeholder', () => {
    render(<Input label="Search" placeholder="Enter search term..." />)
    expect(screen.getByPlaceholderText('Enter search term...')).toBeInTheDocument()
  })

  it('applies aria-invalid when error exists', () => {
    render(<Input label="Email" error="Invalid" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('has proper aria-describedby with error', () => {
    const { container } = render(<Input label="Email" error="Error message" />)
    const input = screen.getByRole('textbox')
    const ariaDescribedBy = input.getAttribute('aria-describedby')
    
    expect(ariaDescribedBy).toBeTruthy()
    expect(container.querySelector(`#${ariaDescribedBy}`)).toHaveTextContent('Error message')
  })

  it('supports different input types', () => {
    const { unmount: unmount1 } = render(<Input label="Email" type="email" />)
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')
    unmount1()

    const { container } = render(<Input label="Password" type="password" />)
    const passwordInput = container.querySelector('input[type="password"]')
    expect(passwordInput).toHaveAttribute('type', 'password')
  })
})

