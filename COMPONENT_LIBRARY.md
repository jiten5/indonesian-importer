# Component Library Inventory
## Trade Data Intelligence Platform

**Version:** 1.0  
**Date:** November 22, 2025  
**Framework:** Next.js 15+ with React 18+

---

## Table of Contents
1. [Component Categories](#component-categories)
2. [Component Specifications](#component-specifications)
3. [Props & States](#props--states)
4. [Implementation Priority](#implementation-priority)
5. [Dependencies](#dependencies)

---

## Component Categories

### Layout Components
- [x] Header/Navbar
- [x] Footer
- [x] Sidebar
- [x] Container
- [x] Grid System
- [x] Section
- [x] Divider

### Navigation Components
- [x] Primary Navigation
- [x] Mobile Menu
- [x] Dropdown Menu
- [x] Breadcrumbs
- [x] Tabs
- [x] Pagination
- [x] Sidebar Nav

### Hero Components
- [x] Animated Hero
- [x] Video Hero
- [x] Split Hero
- [x] Data-Focused Hero
- [x] Minimal Hero

### Content Components
- [x] Feature Grid
- [x] Bento Grid
- [x] Feature Card
- [x] Stat Card
- [x] Icon Box
- [x] Timeline
- [x] Accordion/FAQ
- [x] Testimonial

### Data Visualization
- [x] Line Chart
- [x] Bar Chart
- [x] Area Chart
- [x] Pie/Donut Chart
- [x] Scatter Plot
- [x] Heatmap
- [x] Choropleth Map
- [x] Data Table
- [x] Sparkline

### Form Components
- [x] Input Field
- [x] Textarea
- [x] Select Dropdown
- [x] Checkbox
- [x] Radio Button
- [x] Toggle/Switch
- [x] Date Picker
- [x] File Upload
- [x] Form Group
- [x] Search Input

### Button Components
- [x] Primary Button
- [x] Secondary Button
- [x] Ghost Button
- [x] Icon Button
- [x] Button Group
- [x] Floating Action Button
- [x] Rainbow Button

### Card Components
- [x] Basic Card
- [x] Blog Card
- [x] Case Study Card
- [x] Pricing Card
- [x] Team Member Card
- [x] Integration Card
- [x] Product Card

### Modal & Overlay
- [x] Modal Dialog
- [x] Drawer/Sheet
- [x] Alert Dialog
- [x] Popover
- [x] Tooltip
- [x] Notification/Toast
- [x] Loading Overlay

### Feedback Components
- [x] Alert/Banner
- [x] Badge
- [x] Progress Bar
- [x] Skeleton Loader
- [x] Spinner
- [x] Empty State
- [x] Error State

### Background Effects
- [x] Aurora Background
- [x] Gradient Mesh
- [x] Dot Pattern
- [x] Grid Pattern
- [x] Animated Particles
- [x] Background Beams

---

## Component Specifications

### 1. Header/Navbar Component

**File:** `components/layout/Header.tsx`

```typescript
interface HeaderProps {
  variant?: 'transparent' | 'solid' | 'blur';
  sticky?: boolean;
  showSearch?: boolean;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  logo?: string;
  navigation?: NavigationItem[];
}

interface NavigationItem {
  label: string;
  href?: string;
  items?: NavigationItem[]; // For dropdown
  icon?: React.ReactNode;
  badge?: string;
}

// States
- Default
- Scrolled (background blur/solid)
- Mobile menu open
- Dropdown active
- Search active

// Behavior
- Sticky on scroll
- Backdrop blur on scroll
- Smooth transitions
- Mobile hamburger menu
- Keyboard accessible
```

**Features:**
- Responsive design
- Dropdown menus with hover/click
- Mobile slide-in drawer
- Search integration
- CTA buttons
- Logo customization
- Transparent → Solid on scroll

---

### 2. Animated Hero Component

**File:** `components/hero/AnimatedHero.tsx`

```typescript
interface AnimatedHeroProps {
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCTA?: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundType?: 'gradient' | 'aurora' | 'particles' | 'video' | 'image';
  backgroundMedia?: string;
  stats?: HeroStat[];
  socialProof?: string[];
  alignment?: 'left' | 'center';
}

interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

interface HeroStat {
  value: string;
  label: string;
  suffix?: string;
}

// States
- Initial load (fade in)
- Hover on CTAs
- Interactive background elements

// Animations
- Text fade-in + slide-up (stagger)
- Gradient animation (subtle movement)
- Button hover effects
- Particle movement (if particles)
```

**Features:**
- Gradient text for headline
- Animated background options
- Multiple CTA support
- Social proof badges
- Responsive typography
- Optimized animations

---

### 3. Feature Grid Component

**File:** `components/features/FeatureGrid.tsx`

```typescript
interface FeatureGridProps {
  title?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: 'card' | 'icon-box' | 'bento';
  animated?: boolean;
}

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  image?: string;
  badge?: string;
  size?: 'small' | 'medium' | 'large'; // For bento grid
}

// States
- Default
- Hover (elevation, scale)
- Focus (keyboard navigation)
- Active/Selected

// Variants
- Card: Equal-sized cards with icon, title, desc
- Icon Box: Centered icon, minimal card
- Bento: Mixed sizes, visual hierarchy
```

**Features:**
- Responsive grid (CSS Grid)
- Hover animations
- Icon support (SVG, Icon library)
- Link/navigation support
- Stagger animations on scroll
- Accessible

---

### 4. Pricing Card Component

**File:** `components/pricing/PricingCard.tsx`

```typescript
interface PricingCardProps {
  plan: PricingPlan;
  highlighted?: boolean;
  billing?: 'monthly' | 'annual';
  onSelect?: () => void;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    annual: number;
  };
  currency?: string;
  features: PricingFeature[];
  cta: {
    text: string;
    href?: string;
  };
  badge?: string;
  popular?: boolean;
}

interface PricingFeature {
  text: string;
  included: boolean;
  tooltip?: string;
}

// States
- Default
- Highlighted (popular plan)
- Hover (scale up)
- Selected

// Features
- Feature list with checkmarks
- Popular badge
- Toggle monthly/annual
- Price animation on toggle
- Tooltip for feature details
```

**Features:**
- Clear visual hierarchy
- Feature comparison
- Price toggle animation
- CTA prominence
- Responsive design
- Accessibility (ARIA labels)

---

### 5. Data Table Component

**File:** `components/data/DataTable.tsx`

```typescript
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  sortable?: boolean;
  filterable?: boolean;
  searchable?: boolean;
  pagination?: boolean;
  pageSize?: number;
  selectable?: boolean;
  onRowClick?: (row: T) => void;
  onSelectionChange?: (selected: T[]) => void;
  loading?: boolean;
  emptyState?: React.ReactNode;
}

interface Column<T> {
  key: keyof T;
  header: string;
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

// States
- Loading (skeleton)
- Empty (no data)
- Error
- Sorting (asc/desc)
- Filtering active
- Row selected
- Row hover

// Features
- Column sorting
- Search/filter
- Pagination
- Row selection (checkbox)
- Custom cell rendering
- Export functionality
- Sticky header
- Responsive (horizontal scroll)
```

**Features:**
- Virtualization for large datasets
- Server-side pagination support
- Custom column renderers
- Export to CSV/Excel
- Keyboard navigation
- Screen reader support

---

### 6. Interactive Chart Component

**File:** `components/charts/InteractiveChart.tsx`

**Dependencies:** Recharts / Chart.js / D3.js

```typescript
interface InteractiveChartProps {
  type: 'line' | 'bar' | 'area' | 'pie' | 'scatter';
  data: ChartData[];
  config: ChartConfig;
  responsive?: boolean;
  animated?: boolean;
  interactive?: boolean;
  tooltip?: boolean;
  legend?: boolean;
  grid?: boolean;
  exportable?: boolean;
}

interface ChartData {
  [key: string]: any;
}

interface ChartConfig {
  xAxis?: AxisConfig;
  yAxis?: AxisConfig;
  series?: SeriesConfig[];
  colors?: string[];
  theme?: 'light' | 'dark';
}

// States
- Loading
- Hover on data point (tooltip)
- Legend item toggle
- Zoom/pan (if enabled)
- Data point selected

// Interactions
- Tooltip on hover
- Click data point (callback)
- Legend toggle series
- Zoom in/out
- Export as image/SVG
```

**Features:**
- Multiple chart types
- Responsive design
- Smooth animations
- Interactive tooltips
- Data export
- Accessibility (data table fallback)
- Theme support

---

### 7. Modal Dialog Component

**File:** `components/ui/Modal.tsx`

```typescript
interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlay?: boolean;
  closeOnEsc?: boolean;
  showClose?: boolean;
  footer?: React.ReactNode;
}

// States
- Closed (display: none)
- Opening (fade + scale in)
- Open
- Closing (fade + scale out)

// Behavior
- Focus trap (tab navigation contained)
- ESC to close
- Click overlay to close
- Scroll lock on body
- Return focus to trigger element
- ARIA attributes (dialog, label)
```

**Features:**
- Multiple sizes
- Customizable content
- Footer for actions
- Backdrop blur
- Smooth animations
- Keyboard accessible
- Focus management

---

### 8. Search Input Component

**File:** `components/forms/SearchInput.tsx`

```typescript
interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  autocomplete?: boolean;
  suggestions?: SearchSuggestion[];
  loading?: boolean;
  icon?: React.ReactNode;
  clearable?: boolean;
  debounce?: number;
  shortcut?: string; // e.g., "Cmd+K"
}

interface SearchSuggestion {
  id: string;
  text: string;
  category?: string;
  icon?: React.ReactNode;
}

// States
- Default (empty)
- Focused
- Active (has value)
- Loading (searching)
- Suggestions visible
- Error

// Features
- Keyboard shortcut to focus
- Autocomplete dropdown
- Recent searches
- Search suggestions
- Clear button
- Debounced input
- Keyboard navigation (arrows)
```

**Features:**
- Fast search experience
- Autocomplete with categories
- Keyboard shortcuts
- Recent searches history
- Responsive design
- Accessible (ARIA combobox)

---

### 9. Testimonial Carousel Component

**File:** `components/testimonials/TestimonialCarousel.tsx`

```typescript
interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showNavigation?: boolean;
  variant?: 'card' | 'minimal' | 'featured';
}

interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  logo?: string;
}

// States
- Current slide
- Transitioning (slide animation)
- Hover (pause autoplay)
- Navigation hover

// Features
- Auto-rotation
- Manual navigation (arrows, dots)
- Pause on hover
- Swipe on mobile
- Fade or slide transitions
- Responsive design
```

**Features:**
- Multiple testimonials
- Auto-rotation with pause
- Touch/swipe support
- Avatar images
- Company logos
- Star ratings
- Smooth transitions

---

### 10. Logo Marquee Component

**File:** `components/social-proof/LogoMarquee.tsx`

```typescript
interface LogoMarqueeProps {
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  rows?: 1 | 2;
  grayscale?: boolean;
}

interface Logo {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

// States
- Animating (infinite scroll)
- Paused (on hover)
- Logo hover (color if grayscale)

// Animation
- Infinite horizontal scroll
- Seamless loop
- CSS animation (performant)
- Duplicate logos for smooth loop
```

**Features:**
- Infinite scroll effect
- Configurable speed
- Grayscale with color on hover
- Multiple rows
- Pause on hover
- Responsive sizing

---

### 11. CTA Section Component

**File:** `components/sections/CTASection.tsx`

```typescript
interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  backgroundType?: 'gradient' | 'solid' | 'image' | 'animated';
  backgroundImage?: string;
  alignment?: 'left' | 'center' | 'right';
}

// States
- Default
- Button hover
- Background animation (if animated)

// Variants
- Centered with gradient background
- Split (text left, image/visual right)
- Full-width with overlay
- Minimal (text + button only)
```

**Features:**
- Eye-catching backgrounds
- Clear call-to-action
- Multiple CTA support
- Responsive design
- Animated backgrounds
- High contrast for readability

---

### 12. Accordion/FAQ Component

**File:** `components/ui/Accordion.tsx`

```typescript
interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  variant?: 'default' | 'separated' | 'bordered';
}

interface AccordionItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  icon?: React.ReactNode;
}

// States (per item)
- Collapsed
- Expanding (smooth height animation)
- Expanded
- Collapsing

// Behavior
- Single or multiple open
- Smooth expand/collapse
- Icon rotation
- Keyboard navigation
- ARIA attributes
```

**Features:**
- Single/multiple expansion
- Smooth animations
- Icon indicators
- Rich content support
- Keyboard accessible
- Search through FAQs

---

### 13. Badge Component

**File:** `components/ui/Badge.tsx`

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

// Variants
- Default (neutral)
- Success (green)
- Warning (amber)
- Error (red)
- Info (blue)
- Outline (transparent bg)

// States
- Default
- Hover (if interactive)
- Focus (if interactive)
```

**Features:**
- Color variants
- Size options
- Pill/rounded style
- Icon support
- Removable (close X)
- Accessible

---

### 14. Skeleton Loader Component

**File:** `components/ui/Skeleton.tsx`

```typescript
interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  width?: string | number;
  height?: string | number;
  count?: number;
  animation?: 'pulse' | 'wave' | 'none';
}

// Animation Types
- Pulse: Opacity change
- Wave: Shimmer effect (gradient sweep)
- None: Static placeholder

// Use Cases
- Text lines
- Avatar circles
- Image rectangles
- Card placeholders
- Table rows
```

**Features:**
- Multiple shapes
- Customizable sizes
- Animation options
- Easy to compose
- Respects theme

---

### 15. Toast Notification Component

**File:** `components/ui/Toast.tsx`

```typescript
interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  action?: {
    label: string;
    onClick: () => void;
  };
  dismissible?: boolean;
}

// States
- Entering (slide + fade in)
- Visible
- Exiting (slide + fade out)
- Removed

// Features
- Auto-dismiss timer
- Manual dismiss
- Action button
- Multiple toasts (stack)
- Position variants
- Type indicators (icon + color)
```

**Features:**
- Multiple notification types
- Auto-dismiss
- Action buttons
- Position control
- Queue management
- Accessible (ARIA live regions)

---

## Implementation Priority

### Phase 1: Foundation (Week 1)
**Priority: Critical**
- [ ] Layout Components (Header, Footer, Container)
- [ ] Button Components (Primary, Secondary)
- [ ] Typography System
- [ ] Color System
- [ ] Spacing Utilities

### Phase 2: Core UI (Week 2)
**Priority: High**
- [ ] Form Components (Input, Select, Textarea)
- [ ] Card Components
- [ ] Modal/Dialog
- [ ] Toast Notifications
- [ ] Loading States (Skeleton, Spinner)

### Phase 3: Marketing Pages (Week 3)
**Priority: High**
- [ ] Hero Components
- [ ] Feature Grid/Bento
- [ ] Testimonial Components
- [ ] Pricing Components
- [ ] CTA Sections
- [ ] Logo Marquee

### Phase 4: Data Components (Week 4)
**Priority: High**
- [ ] Data Table
- [ ] Chart Components
- [ ] Stats Cards
- [ ] Search Components
- [ ] Filter Components

### Phase 5: Advanced (Week 5)
**Priority: Medium**
- [ ] Background Effects
- [ ] Advanced Animations
- [ ] Dashboard Components
- [ ] Analytics Widgets
- [ ] Export Functionality

### Phase 6: Polish (Week 6)
**Priority: Medium**
- [ ] Accessibility Enhancements
- [ ] Performance Optimization
- [ ] Animation Refinements
- [ ] Responsive Fixes
- [ ] Browser Testing

---

## Dependencies

### Core Libraries
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.3.0"
  }
}
```

### UI Libraries
```json
{
  "dependencies": {
    "tailwindcss": "^3.4.0",
    "@tailwindcss/forms": "^0.5.7",
    "@tailwindcss/typography": "^0.5.10",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  }
}
```

### Animation Libraries
```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "@react-spring/web": "^9.7.0"
  }
}
```

### Chart Libraries
```json
{
  "dependencies": {
    "recharts": "^2.10.0",
    "chart.js": "^4.4.0",
    "react-chartjs-2": "^5.2.0",
    "d3": "^7.8.0",
    "@nivo/core": "^0.84.0",
    "@nivo/line": "^0.84.0",
    "@nivo/bar": "^0.84.0"
  }
}
```

### Form Libraries
```json
{
  "dependencies": {
    "react-hook-form": "^7.49.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0"
  }
}
```

### Table Libraries
```json
{
  "dependencies": {
    "@tanstack/react-table": "^8.11.0"
  }
}
```

### Icon Libraries
```json
{
  "dependencies": {
    "lucide-react": "^0.303.0",
    "@heroicons/react": "^2.1.0"
  }
}
```

### Utility Libraries
```json
{
  "dependencies": {
    "date-fns": "^3.0.0",
    "lodash": "^4.17.21",
    "nanoid": "^5.0.0"
  }
}
```

### State Management (Optional)
```json
{
  "dependencies": {
    "zustand": "^4.4.0",
    "@tanstack/react-query": "^5.17.0"
  }
}
```

---

## Component File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Badge.tsx
│   │   ├── Toast.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Spinner.tsx
│   │   ├── Accordion.tsx
│   │   ├── Tabs.tsx
│   │   └── Tooltip.tsx
│   │
│   ├── forms/
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Radio.tsx
│   │   ├── Toggle.tsx
│   │   ├── SearchInput.tsx
│   │   └── FormGroup.tsx
│   │
│   ├── hero/
│   │   ├── AnimatedHero.tsx
│   │   ├── VideoHero.tsx
│   │   ├── SplitHero.tsx
│   │   └── MinimalHero.tsx
│   │
│   ├── features/
│   │   ├── FeatureGrid.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── FeatureCard.tsx
│   │   └── IconBox.tsx
│   │
│   ├── pricing/
│   │   ├── PricingCard.tsx
│   │   ├── PricingTable.tsx
│   │   └── PricingToggle.tsx
│   │
│   ├── testimonials/
│   │   ├── TestimonialCarousel.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── TestimonialGrid.tsx
│   │
│   ├── social-proof/
│   │   ├── LogoMarquee.tsx
│   │   ├── StatsSection.tsx
│   │   └── TrustBadges.tsx
│   │
│   ├── charts/
│   │   ├── LineChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── AreaChart.tsx
│   │   ├── PieChart.tsx
│   │   └── InteractiveChart.tsx
│   │
│   ├── data/
│   │   ├── DataTable.tsx
│   │   ├── DataCard.tsx
│   │   ├── StatsCard.tsx
│   │   └── Sparkline.tsx
│   │
│   ├── navigation/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Breadcrumbs.tsx
│   │   └── Pagination.tsx
│   │
│   ├── sections/
│   │   ├── CTASection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── FAQSection.tsx
│   │
│   └── backgrounds/
│       ├── AuroraBackground.tsx
│       ├── GradientMesh.tsx
│       ├── DotPattern.tsx
│       ├── GridPattern.tsx
│       └── AnimatedParticles.tsx
│
├── lib/
│   ├── utils.ts
│   ├── cn.ts (classname merger)
│   ├── animations.ts
│   └── constants.ts
│
└── hooks/
    ├── useMediaQuery.ts
    ├── useIntersectionObserver.ts
    ├── useDebounce.ts
    └── useLocalStorage.ts
```

---

## Testing Strategy

### Unit Tests
- Component rendering
- Props validation
- State changes
- Event handlers
- Utility functions

### Integration Tests
- Component interactions
- Form submissions
- Navigation flows
- Data fetching

### Accessibility Tests
- Keyboard navigation
- Screen reader support
- ARIA attributes
- Color contrast
- Focus management

### Visual Regression Tests
- Component snapshots
- Responsive layouts
- Theme variations

---

## Performance Optimization

### Code Splitting
```typescript
// Dynamic imports for large components
const Chart = dynamic(() => import('@/components/charts/InteractiveChart'), {
  ssr: false,
  loading: () => <Skeleton />
});
```

### Lazy Loading
```typescript
// Intersection Observer for lazy load
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1
});
```

### Memoization
```typescript
// Memoize expensive calculations
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// Memoize callback functions
const handleClick = useCallback(() => {
  // Handle click
}, [dependencies]);
```

---

**End of Component Library Inventory**
