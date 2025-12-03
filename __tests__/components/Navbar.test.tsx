import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '@/components/layout/Navbar'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

// Mock ThemeToggle
jest.mock('@/components/ui/ThemeToggle', () => {
  return {
    __esModule: true,
    default: () => <button>Toggle Theme</button>
  }
})

const mockNavigation = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' }
]

describe('Navbar Component', () => {
  it('renders the logo text', () => {
    render(<Navbar navigation={mockNavigation} logoText="IndonesianImporter" />)
    expect(screen.getByText('IndonesianImporter')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar navigation={mockNavigation} />)
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders theme toggle', () => {
    render(<Navbar navigation={mockNavigation} />)
    expect(screen.getByText('Toggle Theme')).toBeInTheDocument()
  })

  it('renders CTA button when provided', () => {
    render(<Navbar navigation={mockNavigation} ctaText="Get Started" ctaHref="/contact" />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('contains proper navigation structure', () => {
    const { container } = render(<Navbar navigation={mockNavigation} />)
    const nav = container.querySelector('nav')
    expect(nav).toBeInTheDocument()
  })
})

