import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeToggle from '@/components/ui/ThemeToggle'

// Mock next-themes
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn()
  })
}))

describe('ThemeToggle Component', () => {
  it('renders theme toggle button', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label')
  })

  it('is clickable', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    // Just verify it doesn't throw
    expect(button).toBeInTheDocument()
  })
})

