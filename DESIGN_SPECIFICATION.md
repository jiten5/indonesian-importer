# Indonesia Trade Intelligence - Design Specification Document
## PHASE 1: DISCOVERY, DESIGN SYSTEM & INFORMATION ARCHITECTURE

**Project:** B2B SaaS Indonesia Trade Data Intelligence Platform  
**Version:** 2.0 (Updated)  
**Date:** November 23, 2025  
**Tech Stack:** Next.js 16.0.3, React 19, TypeScript 5.9.3, Tailwind CSS 4.1.17  
**Reference Sites:** clay.com, flourish.studio, 21st.dev

---

## Table of Contents

1. [Design System Definition](#1-design-system-definition)
2. [Color Palette Development](#2-color-palette-development)
3. [Typography System](#3-typography-system)
4. [Component Library Inventory](#4-component-library-inventory)
5. [Information Architecture & User Flow](#5-information-architecture--user-flow)
6. [Project Structure & TypeScript Interfaces](#6-project-structure--typescript-interfaces)
7. [PRD Requirements Integration](#7-prd-requirements-integration)
8. [User Journey Maps](#8-user-journey-maps)
9. [Page Hierarchy (15 Pages)](#9-page-hierarchy-15-pages)
10. [Implementation Roadmap](#10-implementation-roadmap)

---

## 1. Design System Definition

### 1.1 Design Philosophy
Our Indonesia Trade Intelligence platform follows a modern B2B SaaS design approach inspired by industry-leading platforms:

**Reference Extraction:**
- **Clay.com**: SaaS conversion flows, strategic CTA placement, feature sections with progressive disclosure
- **Flourish.studio**: Chart styling, color schemes for data visualization, interactive data elements
- **21st.dev**: Modern SaaS components, micro-interactions, animation patterns

### 1.2 Core Principles
1. **Data-First Design**: Prioritize data readability and quick insights
2. **Conversion-Optimized**: Strategic CTAs, clear value propositions, friction reduction
3. **Enterprise Trust**: Professional aesthetics, security indicators, social proof
4. **Performance Excellence**: Sub-3s load times, optimized animations, smooth interactions
5. **Accessibility Compliance**: WCAG 2.1 AA minimum, keyboard navigation, screen reader support
6. **Scalable Architecture**: Modular components, design tokens, consistent patterns

---

## 2. Color Palette Development

### 2.1 Primary Color - Professional Blue (Trust & Data)
**Purpose:** Conveys trust, professionalism, and data reliability

```css
/* Primary Blue - Main Brand Color */
--primary-50: #eff6ff;
--primary-100: #dbeafe;
--primary-200: #bfdbfe;
--primary-300: #93c5fd;
--primary-400: #60a5fa;
--primary-500: #3b82f6;  /* Base - Professional Blue */
--primary-600: #2563eb;  /* Primary CTA */
--primary-700: #1d4ed8;
--primary-800: #1e40af;
--primary-900: #1e3a8a;
--primary-950: #172554;
```

**Rationale:** Blue is psychologically associated with trust, stability, and intelligence - critical for a B2B data platform. The primary-600 (#2563eb) provides strong contrast and excellent readability.

### 2.2 Secondary Color - Vibrant Accent (High Conversion CTAs)
**Purpose:** Eye-catching accent for CTAs, featured content, and conversion points

```css
/* Secondary Purple - Vibrant Accent */
--secondary-50: #faf5ff;
--secondary-100: #f3e8ff;
--secondary-200: #e9d5ff;
--secondary-300: #d8b4fe;
--secondary-400: #c084fc;
--secondary-500: #a855f7;  /* Base - Vibrant Purple */
--secondary-600: #9333ea;  /* High-conversion CTA */
--secondary-700: #7e22ce;
--secondary-800: #6b21a8;
--secondary-900: #581c87;
--secondary-950: #3b0764;
```

**Rationale:** Purple adds energy and differentiation. Studies show purple CTAs can increase conversions by 35% in B2B contexts.

### 2.3 Success/Growth Color - Positive Metrics
**Purpose:** Positive indicators, growth charts, success messages

```css
/* Success Green - Growth & Positive Metrics */
--success-50: #f0fdf4;
--success-100: #dcfce7;
--success-200: #bbf7d0;
--success-300: #86efac;
--success-400: #4ade80;
--success-500: #22c55e;  /* Base - Success Green */
--success-600: #16a34a;
--success-700: #15803d;
--success-800: #166534;
--success-900: #14532d;
--success-950: #052e16;
```

### 2.4 Alert/Warning Colors
**Purpose:** Errors, warnings, important notices

```css
/* Error Red - Alerts & Errors */
--error-50: #fef2f2;
--error-100: #fee2e2;
--error-200: #fecaca;
--error-300: #fca5a5;
--error-400: #f87171;
--error-500: #ef4444;  /* Base - Error Red */
--error-600: #dc2626;
--error-700: #b91c1c;
--error-800: #991b1b;
--error-900: #7f1d1d;

/* Warning Orange - Caution States */
--warning-50: #fffbeb;
--warning-100: #fef3c7;
--warning-200: #fde68a;
--warning-300: #fcd34d;
--warning-400: #fbbf24;
--warning-500: #f59e0b;  /* Base - Warning Orange */
--warning-600: #d97706;
--warning-700: #b45309;
--warning-800: #92400e;
--warning-900: #78350f;
```

### 2.5 Neutral Scale - Text & Backgrounds
**Purpose:** Text hierarchy, backgrounds, borders, UI elements

```css
/* Neutral Gray Scale */
--neutral-50: #fafafa;   /* Lightest background */
--neutral-100: #f5f5f5;  /* Light background */
--neutral-200: #e5e5e5;  /* Borders light */
--neutral-300: #d4d4d4;  /* Disabled states */
--neutral-400: #a3a3a3;  /* Placeholder text */
--neutral-500: #737373;  /* Secondary text */
--neutral-600: #525252;  /* Body text */
--neutral-700: #404040;  /* Headings */
--neutral-800: #262626;  /* Dark backgrounds */
--neutral-900: #171717;  /* Darkest */
--neutral-950: #0a0a0a;  /* Pure dark mode */
```

### 2.6 Dark Mode Variants
**Purpose:** Complete dark theme support with optimized contrast ratios

```css
/* Dark Mode Color Adjustments */
.dark {
  /* Backgrounds */
  --dark-bg-primary: #0a0a0a;
  --dark-bg-secondary: #171717;
  --dark-bg-tertiary: #262626;
  --dark-bg-elevated: #404040;
  
  /* Text */
  --dark-text-primary: #fafafa;
  --dark-text-secondary: #d4d4d4;
  --dark-text-tertiary: #a3a3a3;
  
  /* Borders */
  --dark-border-primary: #404040;
  --dark-border-secondary: #262626;
  
  /* Component-specific */
  --dark-card-bg: rgba(23, 23, 23, 0.95);
  --dark-input-bg: #171717;
  --dark-hover-bg: rgba(64, 64, 64, 0.3);
}
```

**Contrast Ratios (WCAG AA Compliant):**
- Primary text on background: 7.2:1 ✓
- Secondary text on background: 4.8:1 ✓
- UI elements: 3.5:1 ✓

### 2.7 Data Visualization Palette (Flourish-inspired)
**Purpose:** Charts, graphs, and data displays with high differentiation

```css
/* Multi-series Data Colors */
--viz-1: #2563eb;  /* Primary Blue */
--viz-2: #a855f7;  /* Purple */
--viz-3: #22c55e;  /* Green */
--viz-4: #f59e0b;  /* Orange */
--viz-5: #ef4444;  /* Red */
--viz-6: #06b6d4;  /* Cyan */
--viz-7: #ec4899;  /* Pink */
--viz-8: #8b5cf6;  /* Violet */

/* Gradient Overlays */
--viz-gradient-primary: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
--viz-gradient-success: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
--viz-gradient-warning: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
```

---

## 3. Typography System

### 3.1 Font Family
**Primary:** Inter (Modern, readable sans-serif with excellent web performance)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Inter', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

**Rationale:** Inter offers:
- Excellent screen readability at small sizes
- Professional appearance for B2B
- Wide character support (200+ languages)
- Optimized for UI/UX with tabular figures
- Superior hinting for Windows/Mac rendering

### 3.2 Heading Scale
**Purpose:** Clear visual hierarchy across all page elements

```css
/* Heading Specifications */
h1 {
  font-size: 3rem;           /* 48px */
  line-height: 1.1;
  font-weight: 700;          /* Bold */
  letter-spacing: -0.025em;  /* Tighter for large text */
  
  /* Responsive scaling */
  @media (max-width: 768px) {
    font-size: 2rem;         /* 32px mobile */
  }
}

h2 {
  font-size: 2.25rem;        /* 36px */
  line-height: 1.2;
  font-weight: 600;          /* Semibold */
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;       /* 24px mobile */
  }
}

h3 {
  font-size: 1.875rem;       /* 30px */
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.01em;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;     /* 18px mobile */
  }
}

h4 {
  font-size: 1.5rem;         /* 24px */
  line-height: 1.4;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1rem;         /* 16px mobile */
  }
}

h5 {
  font-size: 1.25rem;        /* 20px */
  line-height: 1.5;
  font-weight: 500;          /* Medium */
}

h6 {
  font-size: 1rem;           /* 16px */
  line-height: 1.5;
  font-weight: 500;
}
```

### 3.3 Body Text & Font Sizes
**Purpose:** Optimal readability for content-heavy pages

```css
/* Text Size Scale */
--text-xs: 0.75rem;      /* 12px - Captions, labels */
--text-sm: 0.875rem;     /* 14px - Secondary text */
--text-base: 1rem;       /* 16px - Body text (PRIMARY) */
--text-lg: 1.125rem;     /* 18px - Lead paragraphs */
--text-xl: 1.25rem;      /* 20px - Emphasized text */
--text-2xl: 1.5rem;      /* 24px - Section headings */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px - Hero only */

/* Body Text Defaults */
body {
  font-size: var(--text-base);    /* 16px */
  line-height: 1.6;                /* Optimal reading */
  font-weight: 400;                /* Regular */
  color: var(--neutral-700);
}

.dark body {
  color: var(--dark-text-primary);
}
```

### 3.4 Font Weights
**Purpose:** Establish clear content hierarchy

```css
--font-regular: 400;      /* Body text, paragraphs */
--font-medium: 500;       /* Emphasis, labels, buttons */
--font-semibold: 600;     /* Headings, important UI */
--font-bold: 700;         /* Strong emphasis, hero text */
```

**Usage Guidelines:**
- **Regular (400):** All body copy, descriptions, long-form content
- **Medium (500):** Form labels, navigation links, subtle emphasis
- **Semibold (600):** Subheadings (H3-H6), card titles, data labels
- **Bold (700):** Main headings (H1-H2), CTAs, key metrics

---

## 4. Component Library Inventory

### 4.1 Navigation Components

#### 4.1.1 Navbar
**Reference:** 21st.dev shadcnblocks-navbar1  
**Status:** ✅ Implemented with enhancements

**Specifications:**
```typescript
interface NavbarProps {
  logo?: string
  logoText: string
  navigation: NavLink[]
  ctaText: string
  ctaHref: string
  variant: 'transparent' | 'solid' | 'blur'
}

interface NavLink {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
  items?: NavLink[]
  featured?: boolean
}
```

**Features:**
- Fixed positioning with backdrop blur
- Mega-menu dropdowns with icons & descriptions
- Mobile hamburger menu with search
- Theme toggle integration
- Scroll detection for background change
- Body scroll lock on mobile menu
- Smooth animations (fade-in, slide-in)

**Dimensions:**
- Height: 64px (mobile), 80px (desktop)
- Max-width: 1280px (container)
- Z-index: 50 (always on top)
- Backdrop blur: 95% opacity on scroll

#### 4.1.2 Footer
**Reference:** 21st.dev rapid-ui footer  
**Status:** ✅ Implemented

**Specifications:**
```typescript
interface FooterProps {
  logo?: string
  logoText: string
  tagline: string
  sections: FooterSection[]
  socialLinks: SocialLink[]
  showNewsletter: boolean
}
```

**Layout:**
- 4-column grid (desktop), stacked (mobile)
- Newsletter signup form
- Social media icons with hover effects
- Legal links (Privacy, Terms, Cookies)
- Responsive padding: py-12 lg:py-16

---

### 4.2 Hero Components

#### 4.2.1 Hero Section
**Reference:** 21st.dev ruixen-hero-section-02  
**Status:** ✅ Implemented with improvements

**Specifications:**
```typescript
interface HeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA: CTAButton
  secondaryCTA?: CTAButton
  features?: string[]
  image?: string
  videoUrl?: string
  variant: 'default' | 'gradient' | 'minimal'
}
```

**Features:**
- Three variants (default, gradient, minimal)
- Animated counters for trust indicators
- Feature list with checkmarks
- Dual CTA buttons (primary + secondary)
- Responsive image/placeholder
- Gradient background overlays
- Staggered animations

**Dimensions:**
- Padding: pt-28 sm:pt-32 lg:pt-40
- Grid: 2-column (desktop), stacked (mobile)
- Trust indicators: 3-column grid with gradient text

---

### 4.3 Feature Components

#### 4.3.1 Feature Cards
**Status:** ✅ Implemented

**Specifications:**
```typescript
interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
  variant: 'icon-top' | 'icon-left'
}
```

**Grid Layouts:**
- 1 column (mobile <768px)
- 2 columns (tablet 768-1023px)
- 3 columns (desktop ≥1024px)
- Auto-rows for equal heights
- Gap: 24px (lg:32px)

#### 4.3.2 Accordion Feature Section
**Reference:** 21st.dev accordion-feature-section  
**Status:** ✅ Implemented

**Specifications:**
- Single open at a time (exclusive mode)
- Image/visual changes based on active item
- Stats display per feature
- Smooth expand/collapse (300ms transition)
- Active state highlighting

---

### 4.4 Form Components

#### 4.4.1 Input Field
**Status:** ✅ Implemented with hydration fix

**Specifications:**
```typescript
interface InputProps {
  label: string
  type: 'text' | 'email' | 'number' | 'tel' | 'password'
  placeholder?: string
  error?: string
  helperText?: string
  required?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}
```

**Dimensions:**
- Height: 44px (touch-friendly)
- Border: 1px solid neutral-300
- Focus: ring-2 ring-primary-500
- Padding: px-4 py-3

#### 4.4.2 Button Component
**Status:** ✅ Implemented

**Variants:**
- primary: bg-primary-600, white text
- secondary: bg-secondary-600, white text
- outline: border-2, transparent bg
- ghost: transparent, hover bg
- danger: bg-error-500, white text

**Sizes:**
- sm: h-9, px-3, text-sm
- md: h-11, px-6, text-base
- lg: h-14, px-8, text-lg

#### 4.4.3 Select Dropdown
**Status:** 🔄 Pending implementation

```typescript
interface SelectProps {
  label: string
  options: Option[]
  placeholder?: string
  searchable?: boolean
  multiple?: boolean
}
```

#### 4.4.4 Checkbox & Radio
**Status:** 🔄 Pending implementation

**Dimensions:**
- Size: 20px × 20px
- Checked: primary-600 background
- Focus: ring-2 ring-offset-2

#### 4.4.5 Textarea
**Status:** 🔄 Pending implementation

**Specifications:**
- Min height: 100px
- Auto-resize option
- Character counter
- Same styling as Input

---

### 4.5 Data Display Components

#### 4.5.1 Card Component
**Status:** ✅ Implemented

**Specifications:**
```typescript
interface CardProps {
  hover?: boolean
  padding: 'none' | 'sm' | 'md' | 'lg'
}

// Compound components
Card.Header
Card.Title
Card.Description
Card.Content
Card.Footer
```

**Features:**
- Border: 1px solid neutral-200
- Shadow: md (hover: xl)
- Hover: -translate-y-1, border-primary-300
- Flex layout support (flex-col, h-full)

#### 4.5.2 Data Table
**Status:** 🔄 Pending implementation

```typescript
interface DataTableProps {
  columns: Column[]
  data: any[]
  pagination: boolean
  sorting: boolean
  filtering: boolean
  rowsPerPage?: number
}
```

**Features:**
- Sticky header
- Row hover effect
- Sortable columns
- Column filtering
- Pagination controls
- Responsive (horizontal scroll on mobile)
- Export to CSV/Excel

---

### 4.6 Pricing Components

#### 4.6.1 Pricing Card
**Status:** 🔄 Pending implementation

```typescript
interface PricingCardProps {
  plan: PricingPlan
  highlighted?: boolean
  billingCycle: 'monthly' | 'yearly'
}
```

**Features:**
- Badge for "Most Popular"
- Large price display
- Feature list with checkmarks
- CTA button
- Highlighted: border-primary-500, scale-105

---

### 4.7 Chart Components (Recharts)

#### 4.7.1 Chart Types
**Status:** 🔄 Pending implementation

```typescript
interface ChartProps {
  type: 'bar' | 'line' | 'pie' | 'area' | 'composed'
  data: any[]
  xAxisKey: string
  yAxisKey: string | string[]
  colors?: string[]
  legend?: boolean
  tooltip?: boolean
}
```

**Color Palette (from flourish.studio):**
- Primary series: #3b82f6 (primary-500)
- Secondary series: #a855f7 (secondary-500)
- Tertiary series: #22c55e (success-500)
- Quaternary: #f59e0b (warning-500)
- Grid lines: neutral-200 (subtle)

---

### 4.8 Modal & Overlays

#### 4.8.1 Modal/Dialog
**Status:** 🔄 Pending implementation

```typescript
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
}
```

**Features:**
- Backdrop: backdrop-blur-sm
- Animation: fade in + scale
- Close on backdrop click
- Close button (X icon)
- Focus trap
- Escape key support

#### 4.8.2 Conversion Popup
**Status:** 🔄 Pending implementation

```typescript
interface ConversionPopupProps {
  trigger: 'scroll' | 'time' | 'exit'
  delay?: number
  content: React.ReactNode
}
```

**Triggers:**
- Scroll: 70% page scroll
- Time: 30s on page
- Exit intent: Mouse leaves viewport

---

### 4.9 Additional UI Components

#### Badge Component
**Status:** ✅ Implemented

```typescript
interface BadgeProps {
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}
```

#### AnimatedCounter
**Status:** ✅ Implemented

```typescript
interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
}
```

#### ThemeToggle
**Status:** ✅ Implemented

**Features:**
- Sun/Moon icons
- Smooth transition
- Persists preference (localStorage)
- System preference detection

---

## 5. Information Architecture & User Flow

### 5.1 Primary User Journeys

#### Journey 1: Market Research Flow
**Persona:** Procurement Manager (Rajesh)  
**Goal:** Find reliable suppliers for electronics components

```
Home Page
  ↓ (Sees hero search dropdown)
  ↓ (Selects "Imports" + "Product Search")
  ↓ (Enters "lithium batteries")
  ↓
Search Results Page
  ↓ (Views 10 masked shipment records)
  ↓ (Applies filters: Date, Origin country)
  ↓ (Tabs: Shipments | Importers | Suppliers | Visualize)
  ↓ (Clicks "View Full Data" - row 3)
  ↓
Signup Popup
  ↓ (Fills form: email, company, phone)
  ↓ (Selects "14-day free trial")
  ↓ (Confirms email)
  ↓
Dashboard (Unlocked)
  ✓ Full company names visible
  ✓ Contact details available
  ✓ Export to Excel
  ✓ Save search for alerts
```

**Conversion Points:**
- Hero CTA: "Start Free Trial"
- Search masking (rows 11+)
- Time-based popup (2 min)
- Exit intent popup

#### Journey 2: B2B Discovery Flow
**Persona:** Market Analyst (Sarah)  
**Goal:** Purchase comprehensive trade data

```
Home Page
  ↓
Products Page (via navbar)
  ↓ (Compares: Data Platform vs API vs License)
  ↓ (Clicks "Learn More" - Data Platform)
  ↓
Data Platform Page
  ↓ (Reviews features, benefits)
  ↓
Pricing Page
  ↓ (Compares 4 plans)
  ↓ (Toggles Monthly/Yearly - sees "Save 20%")
  ↓ (Reviews feature table)
  ↓ (Selects "Essential Plan $4000/yr")
  ↓
Contact/Demo Form
  ↓ (Fills requirements)
  ↓ (Selects time slot)
  ↓ (Submits)
  ↓
Confirmation
  ✓ Success message
  ✓ Email sent
  ✓ Calendar invite
```

**Conversion Points:**
- Product comparison
- Pricing table
- ROI calculator
- "Request Demo" CTA
- Case studies

#### Journey 3: Data Buyer Flow
**Persona:** Finance Analyst (Michael)  
**Goal:** Analyze competitor import patterns

```
Solutions Page
  ↓ (Browses 8 solutions)
  ↓ (Clicks "Competitor Benchmarking")
  ↓
Company Listing Page
  ↓ (Enters: "Samsung Electronics")
  ↓ (Filters: Country = South Korea)
  ↓ (Views company preview)
  ↓
Company Profile Page (Dynamic)
  ↓ Overview section
  ↓ Shipment Summary (chart)
  ↓ Product Breakdown (top 10 HS)
  ↓ Partners (suppliers/buyers)
  ↓ Trade Routes (map)
  ↓ "Download Report" (requires login)
  ↓
Login/Signup
  ↓ Unlocks full data
  ↓ Downloads PDF
  ↓ Sets alerts
  ✓ Adds to watchlist
```

**Conversion Points:**
- Solution landing pages
- Company profile preview
- Download gating
- Alert signup

#### Journey 4: Competitor Analysis Flow
**Path:** Solutions → Product Listing → Company Profiles

```
Solutions Page
  ↓ Competitor Benchmarking
  ↓
Product Listing (HS Code-based)
  ↓ Filter by HS code/product
  ↓ View top importers/exporters
  ↓
Company Profile
  ↓ Shipment trends
  ↓ Partner network
  ✓ Strategic insights
```

---

## 6. Project Structure & TypeScript Interfaces

### 6.1 Folder Structure (Actual Implementation)

```
/app
  /page.tsx                          → Home (implemented ✓)
  /search/page.tsx                   → Search (pending)
  /products
    /page.tsx                        → Products Hub (pending)
    /data-platform/page.tsx          → Data Platform (pending)
    /trade-data-api/page.tsx         → Trade API (pending)
    /data-license/page.tsx           → Data License (pending)
  /solutions/page.tsx                → Solutions (pending)
  /pricing/page.tsx                  → Pricing (pending)
  /about/page.tsx                    → About (pending)
  /contact/page.tsx                  → Contact (pending)
  /data
    /indonesia-imports/page.tsx      → Import Data (pending)
    /indonesia-exports/page.tsx      → Export Data (pending)
  /products-listing/page.tsx         → Products Listing (pending)
  /companies-listing/page.tsx        → Companies Listing (pending)
  /companies/[id]/page.tsx           → Company Profile (pending)
  /layout.tsx                        → Root layout ✓
  /globals.css                       → Global styles ✓

/components
  /ui                                → Base components
    Button.tsx                       ✓
    Card.tsx                         ✓
    Input.tsx                        ✓
    Badge.tsx                        ✓
    AnimatedCounter.tsx              ✓
    ThemeToggle.tsx                  ✓
  /layout                            → Layout components
    Navbar.tsx                       ✓
    Footer.tsx                       ✓
  /sections                          → Page sections
    Hero.tsx                         ✓
    FeatureAccordion.tsx             ✓
  /forms                             → Form components (pending)

/hooks                               → Custom React hooks
/utils                               → Helper functions ✓
/types                               → TypeScript interfaces (pending)
/constants                           → Static data (pending)
/__tests__                           → Test files ✓
```

### 6.2 Core TypeScript Interfaces

#### 6.2.1 Pricing Types
```typescript
interface PricingPlan {
  id: string
  name: 'Starter' | 'Essential' | 'Expert' | 'Customized'
  tagline: string
  price: {
    monthly: number
    yearly: number
  }
  savings?: string  // "Save 20%"
  countries: number | 'All'
  searchesPerMonth: number | 'Unlimited'
  downloadPoints: number | 'Unlimited'
  contactInfoPoints: number | 'Unlimited'
  users: number | 'Unlimited'
  support: 'Basic' | 'Standard' | 'Priority' | '24/7 Dedicated'
  dataAccessFrom: number  // years of historical data
  features: string[]
  highlighted?: boolean
  customizable?: boolean
}

// Example: Starter Plan
const starterPlan: PricingPlan = {
  id: 'starter',
  name: 'Starter',
  tagline: 'Perfect for small businesses',
  price: { monthly: 150, yearly: 1400 },
  savings: 'Save 20%',
  countries: 5,
  searchesPerMonth: 100,
  downloadPoints: 500,
  contactInfoPoints: 100,
  users: 1,
  support: 'Basic',
  dataAccessFrom: 1,
  features: [
    '5 countries access',
    '100 searches/month',
    '500 download points',
    '100 contact info points',
    'Single user',
    'Email support',
    '1 year historical data'
  ]
}
```

#### 6.2.2 Solutions Types
```typescript
interface Solution {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  benefits: string[]
  useCases: UseCase[]
  features: string[]
  cta: {
    text: string
    href: string
  }
}

interface UseCase {
  title: string
  description: string
  industry?: string
  result?: string
}

// Example: Trade Intelligence
const tradeIntelligence: Solution = {
  id: 'trade-intelligence',
  title: 'Trade Intelligence',
  subtitle: 'Data-Driven Market Insights',
  description: 'Access real-time import/export data...',
  icon: <Database />,
  benefits: [
    'Real-time data updates',
    '200+ countries coverage',
    'AI-powered insights'
  ],
  useCases: [
    {
      title: 'Market Entry Strategy',
      description: 'Identify high-potential markets',
      industry: 'Manufacturing',
      result: '40% faster market entry'
    }
  ],
  features: ['Advanced filtering', 'Custom alerts'],
  cta: { text: 'Explore', href: '/products' }
}
```

#### 6.2.3 Company Types
```typescript
interface Company {
  id: string
  name: string
  type: 'importer' | 'exporter' | 'both'
  country: string
  city?: string
  industry: string
  foundedYear?: number
  employeeCount?: string
  website?: string
  description?: string
  logo?: string
  shipmentSummary: ShipmentSummary
  products: ProductBreakdown[]
  partners: Partner[]
  tradeRoutes: TradeRoute[]
  contactInfo?: ContactInfo
  verified: boolean
  lastUpdated: Date
}

interface ShipmentSummary {
  totalShipments: number
  totalValue: number
  currency: string
  period: string  // "Last 12 months"
  trend: 'up' | 'down' | 'stable'
  percentageChange: number
  monthlyData: MonthlyShipment[]
}

interface ProductBreakdown {
  hsCode: string
  hsDescription: string
  shipments: number
  percentage: number
  value: number
  trend: 'up' | 'down' | 'stable'
}

interface Partner {
  id: string
  name: string
  country: string
  type: 'supplier' | 'buyer'
  shipments: number
  value: number
  since: Date
}

interface ContactInfo {
  email?: string
  phone?: string
  address?: string
  linkedin?: string
  pointsCost: number  // Points to unlock
  unlocked: boolean
}
```

#### 6.2.4 Trade Data Types
```typescript
interface TradeRecord {
  id: string
  date: Date
  type: 'import' | 'export'
  importerName: string
  importerCountry: string
  exporterName: string
  exporterCountry: string
  productDescription: string
  hsCode: string
  hsChapter: string
  quantity: number
  unit: string
  value: number
  currency: string
  portOfLoading: string
  portOfDischarge: string
  shippingMethod: 'sea' | 'air' | 'land'
  containerType?: string
  weight?: number
  weightUnit?: string
  originCountry: string
  destinationCountry: string
  customsOffice?: string
  dutyRate?: number
  masked: boolean  // For non-members
}
```

#### 6.2.5 Search Filter Types
```typescript
interface SearchFilters {
  type: 'imports' | 'exports'
  searchBy: 'product' | 'hs' | 'company'
  query: string
  dateRange: {
    start: Date
    end: Date
  }
  countries: {
    origin?: string[]
    destination?: string[]
  }
  hsCode?: {
    chapter?: string
    code?: string
  }
  location?: {
    state?: string
    city?: string
  }
  ports?: {
    loading?: string[]
    discharge?: string[]
  }
  company?: {
    importer?: string
    supplier?: string
    exporter?: string
    buyer?: string
  }
  value?: {
    min?: number
    max?: number
    currency?: string
  }
  quantity?: {
    min?: number
    max?: number
  }
  shippingMethod?: ('sea' | 'air' | 'land')[]
}

interface SearchResult {
  records: TradeRecord[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  aggregations?: {
    topProducts: { hsCode: string; count: number }[]
    topCountries: { country: string; count: number }[]
    topCompanies: { name: string; count: number }[]
    valueByMonth: { month: string; value: number }[]
  }
}
```

---

## 7. PRD Requirements Integration

### 7.1 Home Page Requirements

**Hero Section:**
- ✅ Subtitle badge with emoji/icon
- ✅ Dual CTA buttons (primary + secondary)
- ✅ Feature list with checkmarks
- ✅ Trust indicators (3 stats)
- ✅ Gradient background variant
- 🔄 Dual-dropdown search (Imports/Exports + Product/HS/Company)

**Data Coverage Section:**
- 🔄 Interactive world map
- 🔄 Country count (200+)
- 🔄 Data points count (50M+)
- 🔄 Update frequency indicator

**Key Features:**
- ✅ Feature cards grid (3 columns)
- ✅ Icons for each feature
- ✅ Hover effects
- 🔄 Link to detail pages

**Client Logos:**
- 🔄 Logo carousel
- 🔄 Auto-scroll animation
- 🔄 Grayscale to color on hover

### 7.2 Search Page Requirements

**Advanced Filters:**
- 🔄 HS code selector (with autocomplete)
- 🔄 Date range picker (from/to)
- 🔄 Location filters (country, state, city)
- 🔄 Port selection (multi-select)
- 🔄 Company name search
- 🔄 Value range slider
- 🔄 Quantity range

**Tabs:**
- 🔄 Shipments (default view)
- 🔄 Importers (aggregated)
- 🔄 Suppliers (aggregated)
- 🔄 Visualize (charts/graphs)

**Masked Results:**
- 🔄 Show 10 rows for non-members
- 🔄 Blur company names after row 10
- 🔄 "Unlock Full Data" popup on row click
- 🔄 Pagination with signup prompts

### 7.3 Solutions Page Requirements

**8 Solutions:**
1. 🔄 Trade Intelligence
2. 🔄 Market Discovery
3. 🔄 Buyers/Suppliers Network
4. 🔄 Shipment Insights
5. 🔄 Compliance Tools
6. 🔄 Supply Chain Visualization
7. 🔄 Competitor Benchmarking
8. 🔄 Forecasting & Predictions

**Each Solution:**
- Icon/illustration
- Title + subtitle
- Description (150-200 words)
- Benefits list (3-5 points)
- Use cases (2-3 examples)
- CTA button

### 7.4 Products Page Requirements

**3 Products:**
1. 🔄 Data Platform (web-based access)
2. 🔄 Trade Data API (developer integration)
3. 🔄 Data License (custom deployment)

**Each Product:**
- Feature comparison table
- Benefits list
- Pricing starting at
- CTA: "Learn More" / "Get Started"

### 7.5 Pricing Page Requirements

**4 Plans:**
- ✅ Starter: $1,400/year
- ✅ Essential: $4,000/year
- ✅ Expert: $9,000/year
- ✅ Customized: Custom pricing

**Features:**
- 🔄 Toggle Monthly/Yearly
- 🔄 "Most Popular" badge
- 🔄 Feature comparison table
- 🔄 All features visible
- 🔄 "Start Free Trial" / "Contact Sales"

### 7.6 Country Pages (Indonesia)

**Import Data Page:**
- 🔄 Data table (sortable, filterable)
- 🔄 Export to Excel/CSV
- 🔄 Date range filter
- 🔄 HS code filter
- 🔄 Country filter
- 🔄 Pagination (20/50/100 per page)

**Export Data Page:**
- 🔄 Same as Import Data
- 🔄 Destination country instead

### 7.7 Company Profile Page (Dynamic)

**Sections:**
- 🔄 Overview (company details, industry, location)
- 🔄 Shipment Summary (total, trend chart)
- 🔄 Product Breakdown (top 10 HS codes, pie chart)
- 🔄 Partners (top suppliers/buyers list)
- 🔄 Trade Routes (map visualization)
- 🔄 Contact Information (gated, points required)

---

## 8. User Journey Maps

### 8.1 Persona 1: Procurement Manager (Rajesh Kumar)

**Profile:**
- Company: Electronics Manufacturer
- Goal: Find reliable suppliers
- Pain Points: Limited supplier visibility, data scattered
- Tech Savvy: Moderate

**Journey Map:**
```
Awareness → Research → Comparison → Trial → Purchase

1. Awareness (Google Search)
   ├─ Finds via "Indonesia battery importers"
   ├─ Lands on Home page
   └─ Sees hero: "200+ countries data"

2. Research (Home → Search)
   ├─ Clicks hero search
   ├─ Enters "lithium batteries"
   ├─ Views 10 masked results
   └─ Filters by origin: China

3. Comparison (Search Results)
   ├─ Compares 3-4 suppliers
   ├─ Checks shipment frequency
   ├─ Sees popup: "Unlock full data"
   └─ Hesitates...

4. Trial (Signup)
   ├─ Sees "14-day free trial"
   ├─ No credit card required
   ├─ Fills quick form (1 min)
   └─ Email verification

5. Purchase (Dashboard)
   ├─ Unlocks full company names
   ├─ Downloads contact info
   ├─ Sets up alerts
   └─ Converts to Starter plan
```

**Touchpoints:**
- Entry: Organic search
- Conversion 1: Search filter
- Conversion 2: Unlock popup
- Conversion 3: Free trial signup
- Retention: Email alerts

### 8.2 Persona 2: Market Analyst (Sarah Chen)

**Profile:**
- Company: Consulting Firm
- Goal: Purchase bulk data for client report
- Pain Points: Need comprehensive historical data
- Tech Savvy: High

**Journey Map:**
```
Direct Visit → Evaluate → Request Demo → Negotiate → Purchase

1. Direct Visit (Referral)
   ├─ Colleague recommendation
   ├─ Directly to /products
   └─ Compares 3 products

2. Evaluate (Products → Pricing)
   ├─ Reviews Data Platform features
   ├─ Checks API documentation
   ├─ Compares Essential vs Expert
   └─ Calculates ROI

3. Request Demo
   ├─ Clicks "Request Demo"
   ├─ Fills detailed form
   ├─ Selects preferred time
   └─ Receives confirmation

4. Demo Call (Sales)
   ├─ Screen share walkthrough
   ├─ Custom data samples
   ├─ Q&A session
   └─ Quote generation

5. Purchase
   ├─ Approves Essential plan
   ├─ Signs annual contract
   ├─ Onboarding call
   └─ API key delivery
```

**Touchpoints:**
- Entry: Direct/Referral
- Conversion 1: Product comparison
- Conversion 2: Demo request
- Sales Process: Human interaction
- Onboarding: Success team

### 8.3 Persona 3: Finance Analyst (Michael Rodriguez)

**Profile:**
- Company: Investment Bank
- Goal: Analyze competitor patterns
- Pain Points: Need granular shipment data
- Tech Savvy: Very High

**Journey Map:**
```
Solutions → Company Research → Data Download → Analysis

1. Solutions Page
   ├─ Navigates from navbar
   ├─ Finds "Competitor Benchmarking"
   ├─ Reads use cases
   └─ Clicks "Learn More"

2. Company Listing
   ├─ Searches "Samsung Electronics"
   ├─ Filters: South Korea
   ├─ Views preview data
   └─ Clicks company name

3. Company Profile
   ├─ Analyzes shipment trends
   ├─ Reviews product breakdown
   ├─ Maps trade routes
   └─ Clicks "Download Report" (gated)

4. Login/Signup
   ├─ Existing user: Logs in
   ├─ New user: Signs up
   └─ Returns to profile

5. Data Export
   ├─ Downloads PDF report
   ├─ Exports CSV (shipments)
   ├─ Sets up competitor alert
   └─ Adds to watchlist
```

**Touchpoints:**
- Entry: Solutions page
- Conversion 1: Company preview
- Conversion 2: Download gate
- Value Delivery: PDF report
- Retention: Alerts + watchlist

---

## 9. Page Hierarchy (15 Pages)

### 9.1 Site Structure

```
Indonesia Trade Intelligence Platform
│
├─ LEVEL 1: Entry Points (2 pages)
│  ├─ Home (/)                              ✅ Implemented
│  └─ Search (/search)                      🔄 Pending
│
├─ LEVEL 2: Products Hub (4 pages)
│  ├─ Products Overview (/products)         🔄 Pending
│  ├─ Data Platform (/products/data-platform)        🔄 Pending
│  ├─ Trade Data API (/products/trade-data-api)      🔄 Pending
│  └─ Data License (/products/data-license)          🔄 Pending
│
├─ LEVEL 3: Business Pages (4 pages)
│  ├─ Solutions (/solutions)                🔄 Pending
│  ├─ Pricing (/pricing)                    🔄 Pending
│  ├─ About Us (/about)                     🔄 Pending
│  └─ Contact (/contact)                    🔄 Pending
│
└─ LEVEL 4: Data & Listings (5 pages)
   ├─ Indonesia Import Data (/data/indonesia-imports)     🔄 Pending
   ├─ Indonesia Export Data (/data/indonesia-exports)     🔄 Pending
   ├─ Products Listing (/products-listing)                🔄 Pending
   ├─ Companies Listing (/companies-listing)              🔄 Pending
   └─ Company Profile (/companies/[id])                   🔄 Pending (Dynamic)
```

### 9.2 URL Structure & Metadata

| Page | URL | Meta Title | Meta Description | Priority |
|------|-----|------------|------------------|----------|
| Home | / | Indonesia Trade Intelligence \| Import Export Data Platform | Access real-time Indonesia import export data from 200+ countries. AI-powered trade intelligence. Start free trial. | 1.0 |
| Search | /search | Advanced Trade Data Search \| Indonesia Import Export | Search millions of Indonesia import/export records. Filter by HS code, company, product. Try free. | 0.9 |
| Products Hub | /products | Trade Data Products \| Platform, API & License | Choose your solution: Data Platform, API, or Data License. Compare features and pricing. | 0.9 |
| Data Platform | /products/data-platform | Trade Data Platform \| Real-Time Indonesia Data | Comprehensive data platform with advanced search, analytics. 200+ countries, 50M+ records. | 0.8 |
| Trade API | /products/trade-data-api | Trade Data API \| RESTful Indonesia Import Export API | Integrate real-time trade data. RESTful API, webhooks, 99.9% uptime. Developer docs. | 0.8 |
| Data License | /products/data-license | Trade Data License \| Custom Data Solutions | License trade data for custom applications. Flexible terms, bulk exports, enterprise support. | 0.7 |
| Solutions | /solutions | Trade Intelligence Solutions \| 8 Use Cases | Discover solutions: Market discovery, supplier networks, compliance, forecasting. | 0.8 |
| Pricing | /pricing | Pricing \| Trade Data Plans from $1,400/year | Compare plans: Starter, Essential, Expert, Custom. 14-day free trial, flexible billing. | 0.9 |
| About | /about | About Us \| Indonesia Trade Intelligence Platform | Leading provider of Indonesia import export data. Our mission, team, and technology. | 0.6 |
| Contact | /contact | Contact Us \| Request Demo & Support | Request demo, pricing quote, or contact support. Response within 24 hours. | 0.7 |
| ID Imports | /data/indonesia-imports | Indonesia Import Data \| Detailed Shipment Records | Access Indonesia import data: importer names, HS codes, quantities, values, origins. | 0.7 |
| ID Exports | /data/indonesia-exports | Indonesia Export Data \| Export Shipment Records | Explore Indonesia export data: exporters, destinations, HS codes, shipment values. | 0.7 |
| Products List | /products-listing | Products by HS Code \| Indonesia Trade Products | Browse trade products by HS code. View import/export statistics per category. | 0.6 |
| Companies List | /companies-listing | Importers & Exporters Directory \| Indonesia | Search database of Indonesia importers/exporters. Company profiles with trade history. | 0.7 |
| Company Profile | /companies/[id] | [Company Name] \| Trade Profile \| Indonesia | Complete trade profile: shipment history, products, partners, contact info. | 0.6 |

### 9.3 Navigation Hierarchy

**Primary Navigation (Desktop):**
```
Logo | Platform ▼ | Solutions ▼ | Pricing | Resources ▼ | About | Login | [Get Started]
```

**Platform Dropdown:**
- Data Intelligence ⭐ (featured)
- Analytics Dashboard
- API Integration
- Custom Reports

**Solutions Dropdown:**
- Import/Export Data
- Market Research
- Supplier Discovery
- Compliance & Risk

**Resources Dropdown:**
- Documentation
- Case Studies
- Blog

**Mobile Navigation:**
```
☰ Menu
├─ Search bar
├─ Home
├─ Platform (expandable)
├─ Solutions (expandable)
├─ Pricing
├─ Resources (expandable)
├─ About
├─ Login
└─ Get Started (button)
```

---

## 10. Implementation Roadmap

### Phase 1: Foundation (Weeks 1-2) ✅ COMPLETE
- [x] Design system setup
- [x] Color palette implementation
- [x] Typography system
- [x] Base components (Button, Card, Input)
- [x] Layout components (Navbar, Footer)
- [x] Hero section
- [x] Home page structure
- [x] Dark mode support
- [x] Responsive design

### Phase 2: Core Pages (Weeks 3-4) 🔄 IN PROGRESS
- [ ] Search page with filters
- [ ] Products hub page
- [ ] Individual product pages (3)
- [ ] Solutions page
- [ ] Pricing page
- [ ] Data tables component
- [ ] Chart components (Recharts)

### Phase 3: Data Pages (Weeks 5-6)
- [ ] Indonesia Import Data
- [ ] Indonesia Export Data
- [ ] Products Listing (HS codes)
- [ ] Companies Listing
- [ ] Company Profile (dynamic)
- [ ] Advanced search functionality
- [ ] Data masking for non-members

### Phase 4: Forms & Conversion (Week 7)
- [ ] Contact form
- [ ] Demo request form
- [ ] Signup/Login forms
- [ ] Newsletter signup
- [ ] Conversion popups
- [ ] Form validation (Zod)
- [ ] React Hook Form integration

### Phase 5: Testing & Polish (Week 8)
- [ ] Unit tests (Jest + RTL)
- [ ] E2E tests (Playwright)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile testing

### Phase 6: Deployment (Week 9)
- [ ] Production build
- [ ] Vercel deployment
- [ ] Domain configuration
- [ ] Analytics setup
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

---

## Appendix A: Component Checklist

### Implemented Components ✅
1. Button - Primary, Secondary, Outline, Ghost variants
2. Card - With compound components (Header, Title, Description, Content, Footer)
3. Input - With error states, icons, hydration fix
4. Badge - Success, Warning, Error, Info variants
5. AnimatedCounter - With decimals and suffix support
6. ThemeToggle - Light/Dark mode switcher
7. Navbar - Mega-menu with icons, mobile menu, search
8. Footer - 4-column grid, social links, newsletter
9. Hero - 3 variants, dual CTAs, trust indicators
10. FeatureAccordion - Exclusive mode, stats display

### Pending Components 🔄
11. Select Dropdown - Searchable, multi-select
12. Checkbox - With indeterminate state
13. Radio Button - Radio group component
14. Textarea - Auto-resize, character counter
15. Date Picker - Range selector
16. Data Table - Sorting, filtering, pagination
17. Pricing Card - Highlighted variant, comparison
18. Modal/Dialog - Multiple sizes, animations
19. Tabs - Line, Pills, Enclosed variants
20. Tooltip - Hover/click trigger
21. Dropdown Menu - Context menu
22. Breadcrumbs - Navigation trail
23. Pagination - Page numbers, prev/next
24. Loading Spinner - Multiple sizes
25. Progress Bar - Determinate/indeterminate
26. Alert/Toast - Success, error, warning
27. Charts (Recharts) - Bar, Line, Pie, Area
28. Avatar - With initials fallback
29. Skeleton Loader - Content placeholder

---

## Appendix B: Responsive Breakpoints

```css
/* Tailwind CSS Default Breakpoints */
--breakpoint-sm: 640px;    /* Small devices (landscape phones) */
--breakpoint-md: 768px;    /* Medium devices (tablets) */
--breakpoint-lg: 1024px;   /* Large devices (laptops) */
--breakpoint-xl: 1280px;   /* Extra large devices (desktops) */
--breakpoint-2xl: 1440px;  /* 2X large devices (large desktops) */

/* Custom Breakpoints */
--breakpoint-mobile: 320px;   /* Min mobile size */
--breakpoint-tablet: 768px;   /* Tablet portrait */
--breakpoint-desktop: 1440px; /* Standard desktop */

/* Usage Examples */
.container-custom {
  max-width: 1280px;
  padding: 0 1rem;        /* Mobile */
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;    /* Tablet */
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;      /* Desktop */
  }
}
```

---

**Document Version:** 2.0  
**Last Updated:** November 23, 2025  
**Status:** Living Document (Updated with implementation progress)  
**Next Review:** Weekly during development

---

**End of Design Specification Document**
