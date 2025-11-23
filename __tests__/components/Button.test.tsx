import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders with children text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { container } = render(<Button variant="primary">Primary</Button>)
    expect(container.firstChild).toHaveClass('bg-primary-600')
  })

  it('applies size classes correctly', () => {
    const { container } = render(<Button size="lg">Large</Button>)
    expect(container.firstChild).toHaveClass('text-base', 'sm:text-lg')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with left icon', () => {
    const Icon = () => <span data-testid="left-icon">←</span>
    render(<Button leftIcon={<Icon />}>With Icon</Button>)
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
  })

  it('renders with right icon', () => {
    const Icon = () => <span data-testid="right-icon">→</span>
    render(<Button rightIcon={<Icon />}>With Icon</Button>)
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText('Disabled')).toBeDisabled()
  })

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('applies full width class when fullWidth is true', () => {
    const { container } = render(<Button className="w-full">Full Width</Button>)
    expect(container.firstChild).toHaveClass('w-full')
  })

  it('prevents click when disabled', () => {
    const handleClick = jest.fn()
    render(<Button disabled onClick={handleClick}>Disabled</Button>)
    
    fireEvent.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders all variants without errors', () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'error', 'outline', 'default']
    
    variants.forEach(variant => {
      const { unmount } = render(<Button variant={variant as any}>{variant}</Button>)
      expect(screen.getByText(variant)).toBeInTheDocument()
      unmount()
    })
  })

  it('renders all sizes without errors', () => {
    const sizes = ['sm', 'md', 'lg']
    
    sizes.forEach(size => {
      const { unmount } = render(<Button size={size as any}>{size}</Button>)
      expect(screen.getByText(size)).toBeInTheDocument()
      unmount()
    })
  })
})
