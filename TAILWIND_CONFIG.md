# Tailwind CSS Configuration Guide
## Trade Data Intelligence Platform

This guide shows how to implement the design system tokens in your Tailwind CSS configuration.

---

## Installation

```bash
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/forms @tailwindcss/typography
npm install clsx tailwind-merge
```

---

## tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#F0F4FF',
          100: '#E0E9FF',
          200: '#C7D7FE',
          300: '#A5BCFD',
          400: '#8199FA',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        // Secondary Accent Colors
        secondary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Neutral Colors
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        // Semantic Colors
        success: {
          50: '#F0FDF4',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          700: '#B91C1C',
        },
        info: {
          50: '#EFF6FF',
          500: '#3B82F6',
          700: '#1D4ED8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
        '80': '20rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'ease-in-out-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-custom': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-custom': 'cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

---

## Global CSS (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Typography */
  html {
    @apply antialiased;
    @apply scroll-smooth;
  }

  body {
    @apply bg-neutral-50 text-neutral-900;
    @apply font-sans;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display font-semibold;
  }

  h1 {
    @apply text-5xl md:text-6xl lg:text-7xl;
    @apply leading-tight;
    @apply tracking-tight;
  }

  h2 {
    @apply text-4xl md:text-5xl lg:text-6xl;
    @apply leading-tight;
  }

  h3 {
    @apply text-3xl md:text-4xl;
    @apply leading-snug;
  }

  h4 {
    @apply text-2xl md:text-3xl;
    @apply leading-snug;
  }

  /* Focus Styles */
  *:focus-visible {
    @apply outline-none ring-2 ring-primary-500 ring-offset-2;
  }

  /* Selection */
  ::selection {
    @apply bg-primary-200 text-primary-900;
  }
}

@layer components {
  /* Container */
  .container-custom {
    @apply mx-auto px-4 sm:px-6 lg:px-8;
    @apply max-w-7xl;
  }

  /* Buttons */
  .btn {
    @apply inline-flex items-center justify-center;
    @apply px-6 py-3;
    @apply rounded-lg;
    @apply font-medium;
    @apply transition-all duration-200;
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  .btn-primary {
    @apply btn;
    @apply bg-primary-600 text-white;
    @apply hover:bg-primary-700;
    @apply focus:ring-primary-500;
  }

  .btn-secondary {
    @apply btn;
    @apply bg-secondary-600 text-white;
    @apply hover:bg-secondary-700;
    @apply focus:ring-secondary-500;
  }

  .btn-outline {
    @apply btn;
    @apply border-2 border-neutral-300;
    @apply text-neutral-700;
    @apply hover:bg-neutral-50;
    @apply focus:ring-neutral-500;
  }

  .btn-ghost {
    @apply btn;
    @apply text-neutral-700;
    @apply hover:bg-neutral-100;
    @apply focus:ring-neutral-500;
  }

  /* Cards */
  .card {
    @apply bg-white;
    @apply rounded-xl;
    @apply shadow-md;
    @apply p-6;
    @apply transition-all duration-300;
  }

  .card-hover {
    @apply card;
    @apply hover:shadow-xl hover:-translate-y-1;
  }

  /* Form Elements */
  .input {
    @apply w-full;
    @apply px-4 py-3;
    @apply border border-neutral-300;
    @apply rounded-lg;
    @apply focus:ring-2 focus:ring-primary-500 focus:border-primary-500;
    @apply transition-all duration-200;
  }

  .input-error {
    @apply input;
    @apply border-error-500;
    @apply focus:ring-error-500 focus:border-error-500;
  }

  /* Text Gradients */
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-secondary-600;
    @apply bg-clip-text text-transparent;
  }

  /* Animations */
  .animate-on-scroll {
    @apply opacity-0 translate-y-8;
    @apply transition-all duration-700 ease-out;
  }

  .animate-on-scroll.visible {
    @apply opacity-100 translate-y-0;
  }

  /* Background Patterns */
  .bg-dot-pattern {
    background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }

  .bg-grid-pattern {
    background-image: linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
}

@layer utilities {
  /* Scrollbar Styles */
  .scrollbar-thin {
    scrollbar-width: thin;
  }

  .scrollbar-hide {
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Backdrop Blur */
  .backdrop-blur-custom {
    backdrop-filter: blur(12px);
  }

  /* Text Balance */
  .text-balance {
    text-wrap: balance;
  }

  /* Reduce Motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

/* Custom Fonts */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
}

@font-face {
  font-family: 'Cal Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
}
```

---

## Utility Function (lib/utils.ts)

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Usage example:
 * 
 * const buttonClass = cn(
 *   'btn',
 *   isPrimary && 'btn-primary',
 *   isDisabled && 'opacity-50 cursor-not-allowed'
 * )
 */
```

---

## Usage Examples

### Button Component

```typescript
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'btn-outline': variant === 'outline',
          'btn-ghost': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

### Card Component

```typescript
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  hover?: boolean
  className?: string
}

export function Card({ children, hover = false, className }: CardProps) {
  return (
    <div className={cn(hover ? 'card-hover' : 'card', className)}>
      {children}
    </div>
  )
}
```

### Animated Section

```typescript
'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        isVisible && 'visible'
      )}
    >
      {children}
    </div>
  )
}
```

---

## Color Usage Guidelines

### Primary Colors (Indigo)
```tsx
// Use for:
- Main CTAs
- Links
- Active states
- Brand moments

// Examples:
<button className="bg-primary-600 hover:bg-primary-700 text-white">
<a className="text-primary-600 hover:text-primary-700">
<div className="border-primary-500">
```

### Secondary Colors (Teal)
```tsx
// Use for:
- Secondary CTAs
- Highlights
- Data points
- Badges

// Examples:
<span className="bg-secondary-100 text-secondary-700">
<div className="border-l-4 border-secondary-500">
```

### Neutral Colors
```tsx
// Use for:
- Text
- Backgrounds
- Borders
- Dividers

// Examples:
<p className="text-neutral-700">
<div className="bg-neutral-50 border border-neutral-200">
```

### Semantic Colors
```tsx
// Success
<div className="bg-success-50 text-success-700 border-success-500">

// Warning
<div className="bg-warning-50 text-warning-700 border-warning-500">

// Error
<div className="bg-error-50 text-error-700 border-error-500">

// Info
<div className="bg-info-50 text-info-700 border-info-500">
```

---

## Responsive Design Utilities

```tsx
// Mobile First Approach
<div className="
  text-base          // Default (mobile)
  sm:text-lg         // 640px+
  md:text-xl         // 768px+
  lg:text-2xl        // 1024px+
  xl:text-3xl        // 1280px+
">

// Grid Examples
<div className="
  grid
  grid-cols-1        // Mobile: 1 column
  sm:grid-cols-2     // 640px+: 2 columns
  lg:grid-cols-3     // 1024px+: 3 columns
  gap-4              // Consistent gap
">

// Spacing
<div className="
  px-4 sm:px-6 lg:px-8    // Horizontal padding
  py-8 sm:py-12 lg:py-16  // Vertical padding
">
```

---

## Animation Utilities

```tsx
// Fade In
<div className="animate-fade-in">

// Slide Up
<div className="animate-slide-up">

// Scale In
<div className="animate-scale-in">

// Custom Duration
<div className="transition-all duration-300">

// Custom Timing
<div className="transition-transform ease-out-custom">

// Hover Animations
<div className="
  transform
  hover:scale-105
  hover:-translate-y-1
  transition-all
  duration-200
">
```

---

## Typography Utilities

```tsx
// Headings
<h1 className="text-5xl md:text-6xl lg:text-7xl font-display">

// Body Text
<p className="text-base md:text-lg text-neutral-700 leading-relaxed">

// Small Text
<span className="text-sm text-neutral-500">

// Gradient Text
<h1 className="text-gradient font-bold text-6xl">

// Text Balance (for headlines)
<h1 className="text-balance">
```

---

## Shadow Utilities

```tsx
// Cards
<div className="shadow-md hover:shadow-xl">

// Elevated Elements
<div className="shadow-lg">

// Subtle Shadows
<div className="shadow-sm">

// No Shadow
<div className="shadow-none">
```

---

## Complete Component Example

```typescript
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={cn(
        // Base styles
        'card-hover',
        // Layout
        'flex flex-col items-start',
        // Spacing
        'p-6 sm:p-8',
        // Background
        'bg-white',
        // Border
        'border border-neutral-200',
        // Custom className
        className
      )}
    >
      {/* Icon */}
      <div className={cn(
        'flex items-center justify-center',
        'w-12 h-12',
        'rounded-lg',
        'bg-primary-100',
        'text-primary-600',
        'mb-4'
      )}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={cn(
        'text-xl font-semibold',
        'text-neutral-900',
        'mb-2'
      )}>
        {title}
      </h3>

      {/* Description */}
      <p className={cn(
        'text-base',
        'text-neutral-600',
        'leading-relaxed'
      )}>
        {description}
      </p>
    </motion.div>
  )
}
```

---

## Next Steps

1. Copy `tailwind.config.ts` to your project root
2. Copy `globals.css` to `src/app/globals.css`
3. Create `lib/utils.ts` with the `cn` function
4. Install required dependencies
5. Start using the design tokens!

---

**End of Tailwind Configuration Guide**
