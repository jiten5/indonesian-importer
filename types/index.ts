// ====================================
// PRICING TYPES
// ====================================

export interface PricingPlan {
  id: string
  name: 'Starter' | 'Essential' | 'Expert' | 'Customized'
  tagline: string
  price: {
    monthly: number
    yearly: number
  }
  savings?: string
  countries: number | 'All'
  searchesPerMonth: number | 'Unlimited'
  downloadPoints: number | 'Unlimited'
  contactInfoPoints: number | 'Unlimited'
  users: number | 'Unlimited'
  support: 'Basic' | 'Standard' | 'Priority' | '24/7 Dedicated'
  dataAccessFrom: number // years of historical data
  features: string[]
  highlighted?: boolean
  customizable?: boolean
}

// ====================================
// SOLUTIONS TYPES
// ====================================

export interface UseCase {
  title: string
  description: string
  industry?: string
  result?: string
}

export interface Solution {
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

// ====================================
// COMPANY TYPES
// ====================================

export interface MonthlyShipment {
  month: string
  value: number
  shipments: number
}

export interface ShipmentSummary {
  totalShipments: number
  totalValue: number
  currency: string
  period: string
  trend: 'up' | 'down' | 'stable'
  percentageChange: number
  monthlyData: MonthlyShipment[]
}

export interface ProductBreakdown {
  hsCode: string
  hsDescription: string
  shipments: number
  percentage: number
  value: number
  trend: 'up' | 'down' | 'stable'
}

export interface Partner {
  id: string
  name: string
  country: string
  type: 'supplier' | 'buyer'
  shipments: number
  value: number
  since: Date
}

export interface TradeRoute {
  origin: string
  destination: string
  shipments: number
  value: number
}

export interface ContactInfo {
  email?: string
  phone?: string
  address?: string
  linkedin?: string
  pointsCost: number
  unlocked: boolean
}

export interface Company {
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

// ====================================
// TRADE DATA TYPES
// ====================================

export interface TradeRecord {
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
  masked: boolean
}

// ====================================
// SEARCH FILTER TYPES
// ====================================

export interface SearchFilters {
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

export interface SearchAggregation {
  topProducts: { hsCode: string; count: number }[]
  topCountries: { country: string; count: number }[]
  topCompanies: { name: string; count: number }[]
  valueByMonth: { month: string; value: number }[]
}

export interface SearchResult {
  records: TradeRecord[]
  total: number
  page: number
  pageSize: number
  totalPages: number
  aggregations?: SearchAggregation
}

// ====================================
// NAVIGATION TYPES
// ====================================

export interface NavLink {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
  items?: NavLink[]
  featured?: boolean
}

export interface FooterSection {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
}

// ====================================
// FORM TYPES
// ====================================

export interface FormFieldError {
  message: string
  type: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  agreeToTerms: boolean
}

export interface DemoFormData {
  name: string
  email: string
  company: string
  jobTitle: string
  phone: string
  industry: string
  dataRequirements: string
  preferredDate?: Date
}

// ====================================
// UI COMPONENT TYPES
// ====================================

export interface CTAButton {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
}

export interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
}

export interface TrustIndicator {
  label: string
  value: string | number
  suffix?: string
  description?: string
}
