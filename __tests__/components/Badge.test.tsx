import { render, screen } from '@testing-library/react'
import Badge from '@/components/ui/Badge'

describe('Badge Component', () => {
  it('renders with children text', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { container } = render(<Badge variant="primary">Primary</Badge>)
    expect(container.firstChild).toHaveClass('bg-primary-100')
  })

  it('applies size classes correctly', () => {
    const { container: small } = render(<Badge size="sm">Small</Badge>)
    expect(small.firstChild).toHaveClass('px-2', 'py-0.5', 'text-xs')

    const { container: medium } = render(<Badge size="md">Medium</Badge>)
    expect(medium.firstChild).toHaveClass('px-2.5', 'py-1', 'text-sm')

    const { container: large } = render(<Badge size="lg">Large</Badge>)
    expect(large.firstChild).toHaveClass('px-3', 'py-1.5', 'text-base')
  })

  it('renders all variants without errors', () => {
    const variants = ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline']
    
    variants.forEach(variant => {
      const { unmount } = render(<Badge variant={variant as any}>{variant}</Badge>)
      expect(screen.getByText(variant)).toBeInTheDocument()
      unmount()
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-badge">Custom</Badge>)
    expect(container.firstChild).toHaveClass('custom-badge')
  })

  it('renders with icon', () => {
    const Icon = () => <span data-testid="badge-icon">★</span>
    render(
      <Badge>
        <Icon />
        With Icon
      </Badge>
    )
    
    expect(screen.getByTestId('badge-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })
})
