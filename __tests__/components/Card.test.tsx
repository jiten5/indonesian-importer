import { render, screen } from '@testing-library/react'
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card'

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('applies hover effect when hover prop is true', () => {
    const { container } = render(<Card hover>Hover Card</Card>)
    expect(container.firstChild).toHaveClass('hover:shadow-xl')
  })

  it('applies correct padding classes', () => {
    const { container: noPadding } = render(<Card padding="none">No Padding</Card>)
    expect(noPadding.firstChild).not.toHaveClass('p-4', 'p-6', 'p-8')

    const { container: smallPadding } = render(<Card padding="sm">Small</Card>)
    expect(smallPadding.firstChild).toHaveClass('p-3', 'sm:p-4')

    const { container: mediumPadding } = render(<Card padding="md">Medium</Card>)
    expect(mediumPadding.firstChild).toHaveClass('p-4', 'sm:p-6')

    const { container: largePadding } = render(<Card padding="lg">Large</Card>)
    expect(largePadding.firstChild).toHaveClass('p-6', 'sm:p-8')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Custom</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders CardHeader component', () => {
    render(<CardHeader>Header Content</CardHeader>)
    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  it('renders CardTitle component', () => {
    render(<CardTitle>Title Content</CardTitle>)
    expect(screen.getByText('Title Content')).toBeInTheDocument()
  })

  it('renders CardDescription component', () => {
    render(<CardDescription>Description Content</CardDescription>)
    expect(screen.getByText('Description Content')).toBeInTheDocument()
  })

  it('renders CardContent component', () => {
    render(<CardContent>Content Area</CardContent>)
    expect(screen.getByText('Content Area')).toBeInTheDocument()
  })

  it('renders CardFooter component', () => {
    render(<CardFooter>Footer Content</CardFooter>)
    expect(screen.getByText('Footer Content')).toBeInTheDocument()
  })

  it('renders complete card structure', () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

