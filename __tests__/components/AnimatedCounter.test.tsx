import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// Mock framer-motion completely
jest.mock('framer-motion', () => ({
  motion: {
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>
  },
  useSpring: () => ({ get: () => 0 }),
  useTransform: () => 0,
  useInView: () => true,
  useMotionValue: () => ({ get: () => 0, set: () => {} })
}))

// Mock useAnimations hook
jest.mock('@/lib/hooks/useAnimations', () => ({
  useCounter: () => 100,
  useScrollAnimations: () => ({ ref: null, controls: null }),
  useParallax: () => ({ ref: null, y: 0 })
}))

describe('AnimatedCounter Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<AnimatedCounter from={0} to={100} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts duration prop', () => {
    const { container } = render(<AnimatedCounter from={0} to={100} duration={2} />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts prefix prop', () => {
    const { container } = render(<AnimatedCounter from={0} to={100} prefix="$" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('accepts suffix prop', () => {
    const { container } = render(<AnimatedCounter from={0} to={100} suffix="+" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<AnimatedCounter from={0} to={100} className="custom-counter" />)
    const span = container.querySelector('span')
    expect(span).toHaveClass('custom-counter')
  })
})
