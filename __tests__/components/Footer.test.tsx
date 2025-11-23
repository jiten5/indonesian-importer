import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@/components/layout/Footer'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

const mockSections = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', href: '/platform' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ]
  }
]

describe('Footer Component', () => {
  it('renders footer element', () => {
    const { container } = render(<Footer companyName="IndonesianImporter" sections={mockSections} />)
    const footer = container.querySelector('footer')
    expect(footer).toBeInTheDocument()
  })

  it('renders product links', () => {
    render(<Footer sections={mockSections} />)
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('renders company links', () => {
    render(<Footer sections={mockSections} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    const currentYear = new Date().getFullYear()
    render(<Footer sections={mockSections} />)
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('renders section titles', () => {
    render(<Footer sections={mockSections} />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
  })
})
