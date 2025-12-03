import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Skeleton from '@/components/ui/Skeleton'

describe('Skeleton Component', () => {
  it('renders with default props', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.firstChild
    expect(skeleton).toBeInTheDocument()
    expect(skeleton).toHaveClass('animate-pulse')
  })

  it('applies circular variant correctly', () => {
    const { container } = render(<Skeleton variant="circular" />)
    const skeleton = container.firstChild
    expect(skeleton).toHaveClass('rounded-full')
  })

  it('applies rectangular variant correctly', () => {
    const { container } = render(<Skeleton variant="rectangular" />)
    const skeleton = container.firstChild
    expect(skeleton).toHaveClass('rounded-lg')
  })

  it('applies text variant correctly', () => {
    const { container } = render(<Skeleton variant="text" />)
    const skeleton = container.firstChild
    expect(skeleton).toHaveClass('rounded')
  })

  it('accepts custom width', () => {
    const { container } = render(<Skeleton width="200px" />)
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toHaveStyle({ width: '200px' })
  })

  it('accepts custom height', () => {
    const { container } = render(<Skeleton height="100px" />)
    const skeleton = container.firstChild as HTMLElement
    expect(skeleton).toHaveStyle({ height: '100px' })
  })

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="custom-skeleton" />)
    const skeleton = container.firstChild
    expect(skeleton).toHaveClass('custom-skeleton')
  })
})

