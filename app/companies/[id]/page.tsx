'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import MainLayout from '@/components/layouts/MainLayout'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { 
  Building2, 
  MapPin, 
  Globe, 
  Mail, 
  Phone,
  TrendingUp,
  TrendingDown,
  Package,
  Ship,
  Users,
  DollarSign,
  Calendar,
  BarChart3,
  Download,
  Share2,
  Star,
  CheckCircle,
  Award,
  FileText,
  Anchor,
  Network,
  Shield,
  Eye,
  UserCheck,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Search
} from 'lucide-react'

const HighchartsReact = dynamic(() => import('highcharts-react-official'), { ssr: false })

// Mock company data
const companyData = {
  id: '12346',
  name: 'PT Glory Global Solutions Indonesia',
  type: 'Importer & Exporter',
  industry: 'Industrial Equipment & Machinery',
  established: '2010',
  verified: true,
  rating: 4.7,
  employees: '500-1000',
  logo: '/images/company-logo.png',
  address: {
    street: 'Equity Tower Lt 45 Suite B, SCBD Lot 9, Jl. Jend Sudirman Kav 52-53',
    city: 'Jakarta Selatan',
    province: 'DKI Jakarta',
    postal: '12190',
    country: 'Indonesia'
  },
  contact: {
    phone: '+62 21 5789 6543',
    email: 'info@gloryindonesia.co.id',
    website: 'www.gloryindonesia.co.id',
    linkedin: 'linkedin.com/company/glory-global-indonesia'
  },
  stats: {
    totalImportShipments: 302,
    totalExportShipments: 21,
    importValue: '$3.54M',
    exportValue: '$3.84K',
    importRankInIndonesia: 2847,
    exportRankInIndonesia: 18234,
    activeProducts: 156,
    tradingPartners: 67,
    avgShipmentValue: '$11,720',
    suppliersCount: 45,
    buyersCount: 18
  },
  description: 'Premier import-export company specializing in industrial equipment, machinery, and technological solutions. Over 14 years connecting Indonesian industries with global markets.',
  certifications: [
    { name: 'ISO 9001:2015', icon: CheckCircle, issueDate: '2022' },
    { name: 'Customs AEO Certified', icon: Shield, issueDate: '2021' },
    { name: 'Export Excellence Award 2024', icon: Award, issueDate: '2024' },
    { name: 'Green Trade Partner', icon: CheckCircle, issueDate: '2023' },
    { name: 'APEC Business Travel Card', icon: Globe, issueDate: '2023' },
    { name: 'Trade Compliance Certified', icon: FileText, issueDate: '2024' }
  ],
  lineOfBusiness: ['Industrial Machinery', 'Electronic Equipment', 'Construction Materials', 'Automotive Parts', 'Agricultural Equipment']
}

// Import/Export Turnover Data (Monthly Trends)
const importTurnoverData = [
  { month: 'Dec 2024', value: 285000, shipments: 24 },
  { month: 'Jan 2025', value: 312000, shipments: 26 },
  { month: 'Feb 2025', value: 298000, shipments: 25 },
  { month: 'Mar 2025', value: 335000, shipments: 28 },
  { month: 'Apr 2025', value: 321000, shipments: 27 },
  { month: 'May 2025', value: 295000, shipments: 25 },
  { month: 'Jun 2025', value: 308000, shipments: 26 },
  { month: 'Jul 2025', value: 289000, shipments: 24 },
  { month: 'Aug 2025', value: 315000, shipments: 27 },
  { month: 'Sep 2025', value: 297000, shipments: 25 },
  { month: 'Oct 2025', value: 283000, shipments: 24 },
  { month: 'Nov 2025', value: 302000, shipments: 26 }
];

const exportTurnoverData = [
  { month: 'Dec 2024', value: 285, shipments: 2 },
  { month: 'Jan 2025', value: 312, shipments: 2 },
  { month: 'Feb 2025', value: 298, shipments: 1 },
  { month: 'Mar 2025', value: 335, shipments: 2 },
  { month: 'Apr 2025', value: 321, shipments: 2 },
  { month: 'May 2025', value: 295, shipments: 2 },
  { month: 'Jun 2025', value: 308, shipments: 1 },
  { month: 'Jul 2025', value: 289, shipments: 2 },
  { month: 'Aug 2025', value: 315, shipments: 2 },
  { month: 'Sep 2025', value: 297, shipments: 2 },
  { month: 'Oct 2025', value: 283, shipments: 1 },
  { month: 'Nov 2025', value: 384, shipments: 2 }
];

// Top Import Countries
const topImportCountries = [
  { country: 'China', flag: '🇨🇳', shipments: 89, value: '$1.12M', share: 31.6, growth: 8.5, trend: 'up' },
  { country: 'Germany', flag: '🇩🇪', shipments: 56, value: '$785K', share: 22.2, growth: 5.2, trend: 'up' },
  { country: 'Japan', flag: '🇯🇵', shipments: 48, value: '$654K', share: 18.5, growth: 3.8, trend: 'up' },
  { country: 'USA', flag: '🇺🇸', shipments: 42, value: '$528K', share: 14.9, growth: -2.1, trend: 'down' },
  { country: 'South Korea', flag: '🇰🇷', shipments: 35, value: '$312K', share: 8.8, growth: 6.3, trend: 'up' },
  { country: 'Taiwan', flag: '🇹🇼', shipments: 32, value: '$139K', share: 4.0, growth: 2.4, trend: 'up' }
];

// Top Export Countries
const topExportCountries = [
  { country: 'Singapore', flag: '🇸🇬', shipments: 8, value: '$1.52K', share: 39.6, growth: 12.3, trend: 'up' },
  { country: 'Malaysia', flag: '🇲🇾', shipments: 6, value: '$1.18K', share: 30.7, growth: 8.1, trend: 'up' },
  { country: 'Thailand', flag: '🇹🇭', shipments: 4, value: '$724', share: 18.9, growth: -3.2, trend: 'down' },
  { country: 'Vietnam', flag: '🇻🇳', shipments: 3, value: '$416', share: 10.8, growth: 5.7, trend: 'up' }
];

// Top Import Products/Commodities
const topImportProducts = [
  { rank: 1, hsCode: '8479', product: 'Machines & Mechanical Appliances', shipments: 78, value: '$892K', share: 25.2, growth: 7.8, trend: 'up' },
  { rank: 2, hsCode: '8537', product: 'Electric Control Panels', shipments: 64, value: '$745K', share: 21.0, growth: 6.4, trend: 'up' },
  { rank: 3, hsCode: '8483', product: 'Transmission Shafts & Gears', shipments: 52, value: '$615K', share: 17.4, growth: 4.2, trend: 'up' },
  { rank: 4, hsCode: '8481', product: 'Valves & Similar Appliances', shipments: 45, value: '$524K', share: 14.8, growth: 3.5, trend: 'up' },
  { rank: 5, hsCode: '8501', product: 'Electric Motors & Generators', shipments: 38, value: '$428K', share: 12.1, growth: -1.8, trend: 'down' },
  { rank: 6, hsCode: '8544', product: 'Insulated Wire & Cables', shipments: 25, value: '$336K', share: 9.5, growth: 5.1, trend: 'up' }
];

// Top Export Products/Commodities
const topExportProducts = [
  { rank: 1, hsCode: '8708', product: 'Auto Parts & Accessories', shipments: 9, value: '$1.65K', share: 43.0, growth: 9.2, trend: 'up' },
  { rank: 2, hsCode: '7326', product: 'Metal Products', shipments: 7, value: '$1.24K', share: 32.3, growth: 6.5, trend: 'up' },
  { rank: 3, hsCode: '3926', product: 'Plastic Articles', shipments: 5, value: '$950', share: 24.7, growth: 4.1, trend: 'up' }
];

// Top Suppliers
const topSuppliers = [
  { rank: 1, name: 'Siemens AG', country: 'Germany', flag: '🇩🇪', shipments: 42, value: '$612K', products: 'Control Systems, Motors', lastShipment: '2025-11-28' },
  { rank: 2, name: 'Mitsubishi Electric Corp', country: 'Japan', flag: '🇯🇵', shipments: 38, value: '$548K', products: 'Electric Components, Automation', lastShipment: '2025-11-25' },
  { rank: 3, name: 'Schneider Electric', country: 'China', flag: '🇨🇳', shipments: 35, value: '$487K', products: 'Electrical Equipment', lastShipment: '2025-11-22' },
  { rank: 4, name: 'ABB Ltd', country: 'Germany', flag: '🇩🇪', shipments: 28, value: '$394K', products: 'Industrial Automation', lastShipment: '2025-11-20' },
  { rank: 5, name: 'Rockwell Automation', country: 'USA', flag: '🇺🇸', shipments: 24, value: '$328K', products: 'Control & Information', lastShipment: '2025-11-18' },
  { rank: 6, name: 'Omron Corporation', country: 'Japan', flag: '🇯🇵', shipments: 19, value: '$245K', products: 'Sensing & Control', lastShipment: '2025-11-15' }
];

// Top Buyers
const topBuyers = [
  { rank: 1, name: 'PT Astra International', country: 'Indonesia', flag: '🇮🇩', shipments: 6, value: '$1.08K', industry: 'Automotive', lastShipment: '2025-11-27' },
  { rank: 2, name: 'PT Unilever Indonesia', country: 'Indonesia', flag: '🇮🇩', shipments: 5, value: '$892', industry: 'FMCG', lastShipment: '2025-11-24' },
  { rank: 3, name: 'Singapore Industries Pte Ltd', country: 'Singapore', flag: '🇸🇬', shipments: 4, value: '$724', industry: 'Manufacturing', lastShipment: '2025-11-20' },
  { rank: 4, name: 'Petronas Trading Malaysia', country: 'Malaysia', flag: '🇲🇾', shipments: 3, value: '$615', industry: 'Oil & Gas', lastShipment: '2025-11-15' },
  { rank: 5, name: 'Thai Industrial Co Ltd', country: 'Thailand', flag: '🇹🇭', shipments: 3, value: '$565', industry: 'Industrial', lastShipment: '2025-11-10' }
];

// Major Ports
const majorImportPorts = [
  { rank: 1, port: 'Tanjung Priok (Jakarta)', shipments: 198, value: '$2.12M', share: 59.9, containers: '178 TEU' },
  { rank: 2, port: 'Tanjung Perak (Surabaya)', shipments: 64, value: '$892K', share: 25.2, containers: '58 TEU' },
  { rank: 3, port: 'Belawan (Medan)', shipments: 28, value: '$385K', share: 10.9, containers: '24 TEU' },
  { rank: 4, port: 'Soekarno-Hatta Airport', shipments: 12, value: '$141K', share: 4.0, containers: 'Air Cargo' }
];

const majorExportPorts = [
  { rank: 1, port: 'Tanjung Priok (Jakarta)', shipments: 14, value: '$2.58K', share: 67.2, containers: '12 TEU' },
  { rank: 2, port: 'Tanjung Perak (Surabaya)', shipments: 5, value: '$985', share: 25.6, containers: '4 TEU' },
  { rank: 3, port: 'Soekarno-Hatta Airport', shipments: 2, value: '$276', share: 7.2, containers: 'Air Cargo' }
];

// Import Competitors
const importCompetitors = [
  { rank: 1, name: 'PT Indofood Sukses Makmur', shipments: 4235, value: '$145.2M', marketShare: 3.8, growth: 12.5 },
  { rank: 2, name: 'PT Unilever Indonesia Tbk', shipments: 3892, value: '$132.8M', marketShare: 3.5, growth: 9.3 },
  { rank: 3, name: 'PT Astra International Tbk', shipments: 3654, value: '$128.4M', marketShare: 3.4, growth: 8.7 },
  { rank: 4, name: 'PT Semen Indonesia', shipments: 2987, value: '$98.6M', marketShare: 2.6, growth: 6.2 },
  { rank: 5, name: 'PT Krakatau Steel', shipments: 2456, value: '$82.3M', marketShare: 2.2, growth: 5.8 }
];

// Export Competitors
const exportCompetitors = [
  { rank: 1, name: 'PT Pertamina', shipments: 8945, value: '$2.45B', marketShare: 8.9, growth: 15.2 },
  { rank: 2, name: 'PT Vale Indonesia', shipments: 6234, value: '$1.87B', marketShare: 6.8, growth: 11.4 },
  { rank: 3, name: 'PT Freeport Indonesia', shipments: 5876, value: '$1.65B', marketShare: 6.3, growth: 10.8 },
  { rank: 4, name: 'PT Astra Agro Lestari', shipments: 4532, value: '$985M', marketShare: 3.6, growth: 8.5 },
  { rank: 5, name: 'PT Wilmar Nabati Indonesia', shipments: 4128, value: '$876M', marketShare: 3.2, growth: 7.9 }
];

// Key Decision Makers
const decisionMakers = [
  { name: 'Budi Santoso', position: 'President Director', department: 'Executive', phone: '+62 21 5789 6543', email: 'budi.santoso@gloryindonesia.co.id', linkedin: 'linkedin.com/in/budi-santoso' },
  { name: 'Sarah Wijaya', position: 'VP of Operations', department: 'Operations', phone: '+62 21 5789 6544', email: 'sarah.wijaya@gloryindonesia.co.id', linkedin: 'linkedin.com/in/sarah-wijaya' },
  { name: 'Michael Chen', position: 'Import Manager', department: 'Procurement', phone: '+62 21 5789 6545', email: 'michael.chen@gloryindonesia.co.id', linkedin: 'linkedin.com/in/michael-chen' },
  { name: 'Dewi Lestari', position: 'Export Manager', department: 'Sales', phone: '+62 21 5789 6546', email: 'dewi.lestari@gloryindonesia.co.id', linkedin: 'linkedin.com/in/dewi-lestari' },
  { name: 'James Anderson', position: 'Supply Chain Director', department: 'Logistics', phone: '+62 21 5789 6547', email: 'james.anderson@gloryindonesia.co.id', linkedin: 'linkedin.com/in/james-anderson' }
];

// Recent Shipments
const recentShipments = [
  { id: 1, date: '2025-11-28', type: 'Import', product: 'Electric Control Panels', hsCode: '8537.10', origin: 'Germany', supplier: 'Siemens AG', value: '$45,200', quantity: '24 Units', port: 'Tanjung Priok', trend: 'up' },
  { id: 2, date: '2025-11-27', type: 'Export', product: 'Auto Parts & Accessories', hsCode: '8708.29', destination: 'Singapore', buyer: 'PT Astra International', value: '$12,850', quantity: '150 Units', port: 'Tanjung Priok', trend: 'up' },
  { id: 3, date: '2025-11-25', type: 'Import', product: 'Electric Motors', hsCode: '8501.32', origin: 'Japan', supplier: 'Mitsubishi Electric Corp', value: '$38,900', quantity: '18 Units', port: 'Tanjung Priok', trend: 'up' },
  { id: 4, date: '2025-11-22', type: 'Import', product: 'Transmission Gears', hsCode: '8483.40', origin: 'China', supplier: 'Schneider Electric', value: '$29,500', quantity: '65 Units', port: 'Tanjung Perak', trend: 'down' },
  { id: 5, date: '2025-11-20', type: 'Export', product: 'Metal Products', hsCode: '7326.90', destination: 'Malaysia', buyer: 'Petronas Trading Malaysia', value: '$8,450', quantity: '200 Kg', port: 'Tanjung Priok', trend: 'up' },
  { id: 6, date: '2025-11-18', type: 'Import', product: 'Industrial Valves', hsCode: '8481.80', origin: 'USA', supplier: 'Rockwell Automation', value: '$32,700', quantity: '32 Units', port: 'Tanjung Priok', trend: 'up' },
  { id: 7, date: '2025-11-15', type: 'Import', product: 'Sensing Equipment', hsCode: '8537.20', origin: 'Japan', supplier: 'Omron Corporation', value: '$24,800', quantity: '45 Units', port: 'Soekarno-Hatta', trend: 'up' },
  { id: 8, date: '2025-11-10', type: 'Export', product: 'Plastic Articles', hsCode: '3926.90', destination: 'Thailand', buyer: 'Thai Industrial Co Ltd', value: '$6,200', quantity: '350 Units', port: 'Tanjung Perak', trend: 'down' }
];

// Customer Reviews
const customerReviews = [
  { id: 1, name: 'Ahmad Rahman', company: 'PT Mitra Sejahtera', rating: 5, date: '2025-11-15', comment: 'Excellent service and reliable delivery. Glory Global has been our trusted partner for 3 years.', verified: true },
  { id: 2, name: 'Lisa Tan', company: 'Singapore Trading Co', rating: 5, date: '2025-11-10', comment: 'Professional team with deep knowledge of international trade regulations. Highly recommended!', verified: true },
  { id: 3, name: 'John Williams', company: 'Tech Industries Ltd', rating: 4, date: '2025-11-05', comment: 'Good quality products and competitive pricing. Minor delays but overall satisfied.', verified: true },
  { id: 4, name: 'Siti Nurhaliza', company: 'PT Berkah Jaya', rating: 5, date: '2025-10-28', comment: 'Outstanding customer support and smooth customs clearance process.', verified: true },
  { id: 5, name: 'David Chen', company: 'Malaysia Import Export', rating: 4, date: '2025-10-20', comment: 'Reliable supplier with consistent product quality. Would work with them again.', verified: true }
];

// Top Products (for Overview tab)
const topProducts = [
  { name: 'Industrial Machinery & Equipment', share: 32, value: '$1.13M', trend: 'up' },
  { name: 'Electric Control Systems', share: 26, value: '$920K', trend: 'up' },
  { name: 'Transmission & Mechanical Parts', share: 18, value: '$637K', trend: 'up' },
  { name: 'Automotive Components', share: 15, value: '$531K', trend: 'neutral' },
  { name: 'Other Products', share: 9, value: '$319K', trend: 'neutral' }
];

// Top Trading Partners (for Overview tab)
const topPartners = [
  { country: 'China', flag: '🇨🇳', trades: 89, value: '$1.12M' },
  { country: 'Germany', flag: '🇩🇪', trades: 56, value: '$785K' },
  { country: 'Japan', flag: '🇯🇵', trades: 48, value: '$654K' },
  { country: 'USA', flag: '🇺🇸', trades: 42, value: '$528K' },
  { country: 'South Korea', flag: '🇰🇷', trades: 35, value: '$312K' }
];

export default function CompanyProfilePage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState<'overview' | 'turnover' | 'countries' | 'commodities' | 'supply-chain' | 'ports' | 'competitors' | 'shipments' | 'contacts' | 'faq' | 'reviews'>('overview')
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart')
  const [turnoverSubTab, setTurnoverSubTab] = useState<'import' | 'export'>('import')
  const [countriesSubTab, setCountriesSubTab] = useState<'import' | 'export'>('import')
  const [commoditiesSubTab, setCommoditiesSubTab] = useState<'import' | 'export'>('import')
  const [supplyChainSubTab, setSupplyChainSubTab] = useState<'suppliers' | 'buyers'>('suppliers')
  const [portsSubTab, setPortsSubTab] = useState<'import' | 'export'>('import')
  const [competitorsSubTab, setCompetitorsSubTab] = useState<'import' | 'export'>('import')
  const [shipmentsSubTab, setShipmentsSubTab] = useState<'import' | 'export'>('import')

  // Handle tab click and scroll to section
  const handleTabClick = (tab: 'overview' | 'turnover' | 'countries' | 'commodities' | 'supply-chain' | 'ports' | 'competitors' | 'shipments' | 'contacts' | 'faq' | 'reviews') => {
    setActiveTab(tab)
    const element = document.getElementById(tab)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Generate Review Schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://indonesianimporter.com/companies/${companyData.id}`,
    "name": companyData.name,
    "url": `https://indonesianimporter.com/companies/${companyData.id}`,
    "logo": `https://indonesianimporter.com${companyData.logo}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": companyData.rating.toString(),
      "reviewCount": customerReviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": customerReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "datePublished": review.date,
      "reviewBody": review.comment,
      "publisher": {
        "@type": "Organization",
        "name": review.company
      }
    })),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyData.address.street,
      "addressLocality": companyData.address.city,
      "addressRegion": companyData.address.province,
      "postalCode": companyData.address.postal,
      "addressCountry": companyData.address.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyData.contact.phone,
      "contactType": "customer service",
      "email": companyData.contact.email
    }
  }

  return (
    <MainLayout>
      {/* Review Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Company Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 pt-32 pb-12 pt-24">
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Company Logo & Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                      {companyData.name}
                    </h1>
                    {companyData.verified && (
                      <Badge variant="success" size="sm">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Badge variant="primary" size="md">
                      {companyData.type}
                    </Badge>
                    <Badge variant="outline" size="md">
                      {companyData.industry}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.rating}
                      </span>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        /5.0
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 max-w-3xl">
                    {companyData.description}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.address.city}, {companyData.address.country}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.email}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="w-4 h-4 text-neutral-500" />
                      <span className="text-neutral-600 dark:text-neutral-400">
                        {companyData.contact.website}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button variant="primary" size="lg" leftIcon={<Download className="w-4 h-4" />}>
                Download Report
              </Button>
              <Button variant="outline" size="lg" leftIcon={<Share2 className="w-4 h-4" />}>
                Share Profile
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            <Card padding="md" className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowDownRight className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">IMPORTS</span>
              </div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.totalImportShipments}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Shipments
              </div>
              <div className="text-lg font-semibold text-success-600 dark:text-success-400 mt-2">
                {companyData.stats.importValue}
              </div>
            </Card>
            
            <Card padding="md" className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ArrowUpRight className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                <span className="text-xs font-semibold text-secondary-600 dark:text-secondary-400">EXPORTS</span>
              </div>
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.totalExportShipments}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Shipments
              </div>
              <div className="text-lg font-semibold text-success-600 dark:text-success-400 mt-2">
                {companyData.stats.exportValue}
              </div>
            </Card>
            
            <Card padding="md" className="text-center">
              <Package className="w-8 h-8 text-accent-600 dark:text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.activeProducts}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Products
              </div>
            </Card>
            
            <Card padding="md" className="text-center">
              <Users className="w-8 h-8 text-warning-600 dark:text-warning-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.suppliersCount}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Suppliers
              </div>
            </Card>
            
            <Card padding="md" className="text-center">
              <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.buyersCount}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Buyers
              </div>
            </Card>
            
            <Card padding="md" className="text-center">
              <BarChart3 className="w-8 h-8 text-success-600 dark:text-success-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                {companyData.stats.avgShipmentValue}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Avg Value
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white dark:bg-neutral-900 border-b dark:border-neutral-800 sticky top-0 z-20">
        <div className="container-custom">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => handleTabClick('overview')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleTabClick('turnover')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'turnover'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Turnover
            </button>
            <button
              onClick={() => handleTabClick('countries')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'countries'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Countries
            </button>
            <button
              onClick={() => handleTabClick('commodities')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'commodities'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Commodities
            </button>
            <button
              onClick={() => handleTabClick('supply-chain')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'supply-chain'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Supply Chain
            </button>
            <button
              onClick={() => handleTabClick('ports')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'ports'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Ports
            </button>
            <button
              onClick={() => handleTabClick('competitors')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'competitors'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Competitors
            </button>
            <button
              onClick={() => handleTabClick('shipments')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'shipments'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Shipments
            </button>
            <button
              onClick={() => handleTabClick('contacts')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'contacts'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Contacts
            </button>
            <button
              onClick={() => handleTabClick('faq')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'faq'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => handleTabClick('reviews')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Reviews & Ratings
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          {/* Overview Tab */}
          <div id="overview" className="grid grid-cols-1 lg:grid-cols-3 gap-8 scroll-mt-24">
              {/* Company Details */}
              <div className="lg:col-span-2 space-y-8">
                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Established
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.established}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Industry
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.industry}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Full Address
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.address.street}, {companyData.address.city}
                        <br />
                        {companyData.address.province} {companyData.address.postal}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                        Company Type
                      </div>
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {companyData.type}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          {/* Turnover Tab */}
          <div id="turnover" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Turnover Analysis</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Comprehensive overview of import and export turnover trends, shipment volumes, and monthly performance metrics over the last 12 months.</p>
              </div>
              {/* Sub-tabs for Import/Export */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setTurnoverSubTab('import')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    turnoverSubTab === 'import'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Import Turnover
                </button>
                <button
                  onClick={() => setTurnoverSubTab('export')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    turnoverSubTab === 'export'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Export Turnover
                </button>
              </div>

              {/* Import Turnover Content */}
              {turnoverSubTab === 'import' && (
                <Card padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      Import Turnover Trends (Last 12 Months)
                    </h3>
                    <Badge variant="primary" size="md">
                      {companyData.stats.totalImportShipments} Shipments
                    </Badge>
                  </div>
                  <div className="h-80 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4">
                    <div className="text-center pt-24">
                      <BarChart3 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Monthly import turnover visualization
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Export Turnover Content */}
              {turnoverSubTab === 'export' && (
                <Card padding="lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                      Export Turnover Trends (Last 12 Months)
                    </h3>
                    <Badge variant="secondary" size="md">
                      {companyData.stats.totalExportShipments} Shipments
                    </Badge>
                  </div>
                  <div className="h-80 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-4">
                    <div className="text-center pt-24">
                      <BarChart3 className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Monthly export turnover visualization
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </div>

          {/* Countries Tab */}
          <div id="countries" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Trading Countries</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Explore top trading partner countries with detailed insights into shipment volumes, trade values, market share distribution, and year-over-year growth trends.</p>
              </div>
              {/* Sub-tabs for Import/Export */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setCountriesSubTab('import')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    countriesSubTab === 'import'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Country Import From
                </button>
                <button
                  onClick={() => setCountriesSubTab('export')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    countriesSubTab === 'export'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Country Export To
                </button>
              </div>

              {/* Import Countries Content */}
              {countriesSubTab === 'import' && (
                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Import Source Countries
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Country</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Market Share</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Growth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topImportCountries.map((country) => (
                          <tr key={country.country} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                            <td className="p-4 text-neutral-900 dark:text-white font-medium">{topImportCountries.indexOf(country) + 1}</td>
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{country.flag}</span>
                                <span className="font-medium text-neutral-900 dark:text-white">{country.country}</span>
                              </div>
                            </td>
                            <td className="p-4 text-neutral-900 dark:text-white">{country.shipments}</td>
                            <td className="p-4 font-semibold text-success-600 dark:text-success-400">{country.value}</td>
                            <td className="p-4 text-neutral-600 dark:text-neutral-400">{country.share}%</td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                {country.trend === 'up' ? (
                                  <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                                ) : (
                                  <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                                )}
                                <span className={country.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                                  {country.growth > 0 ? '+' : ''}{country.growth}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}

              {/* Export Countries Content */}
              {countriesSubTab === 'export' && (
                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Export Destination Countries
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Country</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Market Share</th>
                          <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Growth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topExportCountries.map((country) => (
                          <tr key={country.country} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                            <td className="p-4 text-neutral-900 dark:text-white font-medium">{topExportCountries.indexOf(country) + 1}</td>
                            <td className="p-4">
                              <div className="flex items-center space-x-3">
                                <span className="text-2xl">{country.flag}</span>
                                <span className="font-medium text-neutral-900 dark:text-white">{country.country}</span>
                              </div>
                            </td>
                            <td className="p-4 text-neutral-900 dark:text-white">{country.shipments}</td>
                            <td className="p-4 font-semibold text-success-600 dark:text-success-400">{country.value}</td>
                            <td className="p-4 text-neutral-600 dark:text-neutral-400">{country.share}%</td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                {country.trend === 'up' ? (
                                  <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                                ) : (
                                  <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                                )}
                                <span className={country.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                                  {country.growth > 0 ? '+' : ''}{country.growth}%
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              )}
            </div>

          {/* Commodities Tab */}
          <div id="commodities" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Products & Commodities</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Detailed breakdown of traded products by HSN codes, including shipment quantities, trade values, market share, and performance trends for both imports and exports.</p>
              </div>
              {/* Sub-tabs for Import/Export */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setCommoditiesSubTab('import')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    commoditiesSubTab === 'import'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Import Commodities
                </button>
                <button
                  onClick={() => setCommoditiesSubTab('export')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    commoditiesSubTab === 'export'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Export Commodities
                </button>
              </div>

              {/* Import Commodities Content */}
              {commoditiesSubTab === 'import' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Top Import Products by HSN Code
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">HSN Code</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Product</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Share</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topImportProducts.map((product) => (
                        <tr key={product.hsCode} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{product.rank}</td>
                          <td className="p-4">
                            <Badge variant="outline" size="sm">{product.hsCode}</Badge>
                          </td>
                          <td className="p-4 text-neutral-900 dark:text-white">{product.product}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{product.shipments}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{product.value}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{product.share}%</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              {product.trend === 'up' ? (
                                <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                              ) : (
                                <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                              )}
                              <span className={product.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                                {product.growth > 0 ? '+' : ''}{product.growth}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}

              {/* Export Commodities Content */}
              {commoditiesSubTab === 'export' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Top Export Products by HSN Code
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">HSN Code</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Product</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Share</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topExportProducts.map((product) => (
                        <tr key={product.hsCode} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{product.rank}</td>
                          <td className="p-4"><Badge variant="outline" size="sm">{product.hsCode}</Badge></td>
                          <td className="p-4 text-neutral-900 dark:text-white">{product.product}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{product.shipments}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{product.value}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{product.share}%</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              {product.trend === 'up' ? (
                                <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                              ) : (
                                <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                              )}
                              <span className={product.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                                {product.growth > 0 ? '+' : ''}{product.growth}%
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}
            </div>

          {/* Ports Tab */}
          <div id="ports" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Port Operations</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Analysis of port utilization across Indonesia's major seaports, including shipment volumes, cargo values, operational frequencies, and infrastructure efficiency metrics.</p>
              </div>
              {/* Sub-tabs for Import/Export */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setPortsSubTab('import')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    portsSubTab === 'import'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Port of Unloading
                </button>
                <button
                  onClick={() => setPortsSubTab('export')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    portsSubTab === 'export'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Port of Loading
                </button>
              </div>

              {/* Import Ports Content */}
              {portsSubTab === 'import' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Anchor className="w-6 h-6 inline mr-2" />
                  Major Import Ports of Entry
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {majorImportPorts.map((port) => (
                    <div key={port.port} className="p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">#{port.rank}</div>
                          <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{port.port}</h4>
                        </div>
                        <Badge variant="primary" size="sm">{port.share}%</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">Shipments</div>
                          <div className="text-xl font-bold text-neutral-900 dark:text-white">{port.shipments}</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">Value</div>
                          <div className="text-xl font-bold text-success-600 dark:text-success-400">{port.value}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t dark:border-neutral-700">
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Container Volume: <span className="font-semibold text-neutral-900 dark:text-white">{port.containers}</span></div>
                      </div>
                    </div>
                  ))}        
                </div>
              </Card>
              )}

              {/* Export Ports Content */}
              {portsSubTab === 'export' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Anchor className="w-6 h-6 inline mr-2" />
                  Major Export Ports of Exit
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {majorExportPorts.map((port) => (
                    <div key={port.port} className="p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">#{port.rank}</div>
                          <h4 className="text-lg font-bold text-neutral-900 dark:text-white">{port.port}</h4>
                        </div>
                        <Badge variant="secondary" size="sm">{port.share}%</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">Shipments</div>
                          <div className="text-xl font-bold text-neutral-900 dark:text-white">{port.shipments}</div>
                        </div>
                        <div>
                          <div className="text-sm text-neutral-600 dark:text-neutral-400">Value</div>
                          <div className="text-xl font-bold text-success-600 dark:text-success-400">{port.value}</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t dark:border-neutral-700">
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">Container Volume: <span className="font-semibold text-neutral-900 dark:text-white">{port.containers}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              )}
            </div>

          {/* Shipments Tab */}
          <div id="shipments" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Recent Shipments</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Complete record of recent import and export shipments with details on products, suppliers, buyers, origins, destinations, ports, and transaction values.</p>
              </div>
              {/* Sub-tabs for Import/Export */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setShipmentsSubTab('import')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    shipmentsSubTab === 'import'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Import Shipments
                </button>
                <button
                  onClick={() => setShipmentsSubTab('export')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    shipmentsSubTab === 'export'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Export Shipments
                </button>
              </div>

              {/* Import Shipments Content */}
              {shipmentsSubTab === 'import' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Recent Import Shipments
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Date</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Product</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">HSN</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Origin</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Supplier</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Port</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentShipments.filter(s => s.type === 'Import').map((shipment) => (
                        <tr key={shipment.id} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.date}</td>
                          <td className="p-4 text-neutral-900 dark:text-white">{shipment.product}</td>
                          <td className="p-4"><Badge variant="outline" size="sm">{shipment.hsCode}</Badge></td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{shipment.origin}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.supplier}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.port}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{shipment.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}

              {/* Export Shipments Content */}
              {shipmentsSubTab === 'export' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Recent Export Shipments
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Date</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Product</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">HSN</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Destination</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Buyer</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Port</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentShipments.filter(s => s.type === 'Export').map((shipment) => (
                        <tr key={shipment.id} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.date}</td>
                          <td className="p-4 text-neutral-900 dark:text-white">{shipment.product}</td>
                          <td className="p-4"><Badge variant="outline" size="sm">{shipment.hsCode}</Badge></td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{shipment.destination}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.buyer}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{shipment.port}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{shipment.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}
            </div>

          {/* Supply Chain Tab */}
          <div id="supply-chain" className="space-y-6 scroll-mt-24 mt-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">Supply Chain Network</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">Comprehensive overview of business relationships with key suppliers and buyers, including trade volumes, partnership values, industries served, and recent activity.</p>
              </div>
              {/* Sub-tabs for Suppliers/Buyers */}
              <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setSupplyChainSubTab('suppliers')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    supplyChainSubTab === 'suppliers'
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Suppliers
                </button>
                <button
                  onClick={() => setSupplyChainSubTab('buyers')}
                  className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                    supplyChainSubTab === 'buyers'
                      ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                      : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Buyers
                </button>
              </div>

              {/* Suppliers Content */}
              {supplyChainSubTab === 'suppliers' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Network className="w-6 h-6 inline mr-2" />
                  Top Suppliers
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Company Name</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Country</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Total Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Products</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Last Shipment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topSuppliers.map((supplier) => (
                        <tr key={supplier.name} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{supplier.rank}</td>
                          <td className="p-4 font-semibold text-neutral-900 dark:text-white">{supplier.name}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl">{supplier.flag}</span>
                              <span className="text-neutral-600 dark:text-neutral-400">{supplier.country}</span>
                            </div>
                          </td>
                          <td className="p-4 text-neutral-900 dark:text-white">{supplier.shipments}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{supplier.value}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{supplier.products}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{supplier.lastShipment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}

              {/* Buyers Content */}
              {supplyChainSubTab === 'buyers' && (
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Users className="w-6 h-6 inline mr-2" />
                  Top Buyers
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Company Name</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Country</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Total Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Industry</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Last Shipment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topBuyers.map((buyer) => (
                        <tr key={buyer.name} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{buyer.rank}</td>
                          <td className="p-4 font-semibold text-neutral-900 dark:text-white">{buyer.name}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xl">{buyer.flag}</span>
                              <span className="text-neutral-600 dark:text-neutral-400">{buyer.country}</span>
                            </div>
                          </td>
                          <td className="p-4 text-neutral-900 dark:text-white">{buyer.shipments}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{buyer.value}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{buyer.industry}</td>
                          <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{buyer.lastShipment}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              )}
            </div>

          {/* Key Decision Makers & Contacts Tab */}
          <div id="contacts" className="space-y-6 scroll-mt-24 mt-12">
            <Card padding="lg">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                <UserCheck className="w-6 h-6 inline mr-2" />
                Key Decision Makers & Contacts
              </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {decisionMakers.map((contact) => (
                    <div key={contact.email} className="p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{contact.name}</h4>
                          <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">{contact.position}</p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{contact.department}</p>
                        </div>
                        <Badge variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          View
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Phone className="w-4 h-4 text-neutral-500" />
                          <span className="text-neutral-600 dark:text-neutral-400">{contact.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="w-4 h-4 text-neutral-500" />
                          <span className="text-neutral-600 dark:text-neutral-400">{contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Globe className="w-4 h-4 text-neutral-500" />
                          <span className="text-neutral-600 dark:text-neutral-400">{contact.linkedin}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

          {/* FAQs Tab */}
          <div id="faq" className="space-y-6 scroll-mt-24 mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    Common questions about {companyData.name}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>What products does {companyData.name} specialize in?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        {companyData.name} specializes in {companyData.industry}, focusing on the following product categories:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        {companyData.lineOfBusiness.map((business, idx) => (
                          <li key={idx}>{business}</li>
                        ))}
                      </ul>
                      <p className="mt-3">
                        With {companyData.stats.activeProducts} active product lines and {companyData.stats.tradingPartners} trading partners worldwide, 
                        we maintain a diverse portfolio to serve various industrial sectors.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 2 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>What are the company's main import and export markets?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        Our primary trading markets include:
                      </p>
                      <div className="mb-3">
                        <strong className="block mb-2">Import Markets:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>China - Industrial machinery and electronic equipment</li>
                          <li>Germany - Precision engineering and automation systems</li>
                          <li>Japan - High-tech components and robotics</li>
                          <li>USA - Advanced technology solutions</li>
                          <li>South Korea - Electronic components and semiconductors</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="block mb-2">Export Markets:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Singapore - Manufacturing components</li>
                          <li>Malaysia - Industrial supplies</li>
                          <li>Thailand - Automotive parts</li>
                          <li>Vietnam - Assembly components</li>
                        </ul>
                      </div>
                    </div>
                  </details>

                  {/* FAQ Item 3 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>How can I become a supplier or customer?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        We welcome new business partnerships. To become a supplier or customer:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 mb-3">
                        <li><strong>Email:</strong> {companyData.contact.email}</li>
                        <li><strong>Phone:</strong> {companyData.contact.phone}</li>
                        <li><strong>Website:</strong> {companyData.contact.website}</li>
                        <li><strong>LinkedIn:</strong> {companyData.contact.linkedin}</li>
                      </ul>
                      <p>
                        Our procurement and sales teams will evaluate partnership opportunities based on product quality, 
                        pricing competitiveness, delivery capabilities, and compliance with our quality standards.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 4 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>What certifications and quality standards does the company maintain?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        {companyData.name} maintains the following certifications and standards:
                      </p>
                      <ul className="list-disc pl-6 space-y-1">
                        {companyData.certifications.map((cert, idx) => (
                          <li key={idx}><strong>{cert.name}</strong> - Issued {cert.issueDate}</li>
                        ))}
                      </ul>
                      <p className="mt-3">
                        These certifications demonstrate our commitment to quality, compliance, and sustainable business practices.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 5 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>What is the company's shipment volume and trade value?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        Our current trade statistics demonstrate significant market presence:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Import Volume:</strong> {companyData.stats.totalImportShipments} shipments with total value of {companyData.stats.importValue}</li>
                        <li><strong>Export Volume:</strong> {companyData.stats.totalExportShipments} shipments with total value of {companyData.stats.exportValue}</li>
                        <li><strong>Average Shipment Value:</strong> {companyData.stats.avgShipmentValue}</li>
                        <li><strong>Import Ranking:</strong> #{companyData.stats.importRankInIndonesia} in Indonesia</li>
                        <li><strong>Export Ranking:</strong> #{companyData.stats.exportRankInIndonesia} in Indonesia</li>
                      </ul>
                      <p className="mt-3">
                        We work with {companyData.stats.suppliersCount} suppliers and {companyData.stats.buyersCount} buyers globally.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 6 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>What ports does the company use for imports and exports?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        We utilize Indonesia's major ports for our import and export operations:
                      </p>
                      <div className="mb-3">
                        <strong className="block mb-2">Primary Ports:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Tanjung Priok (Jakarta) - 60% of our shipments</li>
                          <li>Tanjung Perak (Surabaya) - 25% of our shipments</li>
                          <li>Belawan (Medan) - 11% of our shipments</li>
                          <li>Soekarno-Hatta Airport - 4% for urgent air cargo</li>
                        </ul>
                      </div>
                      <p>
                        Our strategic use of multiple ports ensures supply chain resilience and optimized logistics costs.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 7 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>How long has the company been in business?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed">
                        {companyData.name} was established in {companyData.established} and has been operating for over 
                        {new Date().getFullYear() - parseInt(companyData.established)} years. During this time, we have built 
                        a strong reputation in the {companyData.industry} sector, serving clients across Indonesia and international markets. 
                        Our company employs {companyData.employees} professionals dedicated to delivering excellence in import-export operations.
                      </p>
                    </div>
                  </details>

                  {/* FAQ Item 8 */}
                  <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <span>Where is the company located?</span>
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                      <p className="leading-relaxed mb-3">
                        Our headquarters is located at:
                      </p>
                      <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                        <p className="font-semibold text-neutral-900 dark:text-white mb-2">{companyData.name}</p>
                        <p>{companyData.address.street}</p>
                        <p>{companyData.address.city}, {companyData.address.province} {companyData.address.postal}</p>
                        <p>{companyData.address.country}</p>
                      </div>
                      <p className="mt-3">
                        This strategic location in Jakarta's central business district provides excellent access to major ports, 
                        government offices, and international business networks.
                      </p>
                    </div>
                  </details>
                </div>

                {/* FAQ Footer CTA */}
                <div className="mt-12 text-center p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                    Have more questions?
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                    Contact our team for more information about {companyData.name}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" size="md" leftIcon={<Mail className="w-4 h-4" />}>
                      Email Us
                    </Button>
                    <Button variant="outline" size="md" leftIcon={<Phone className="w-4 h-4" />}>
                      Call {companyData.contact.phone}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

          {/* Reviews Tab */}
          <div id="reviews" className="space-y-6 scroll-mt-24 mt-12">
            <Card padding="lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                    Customer Reviews & Ratings
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Trusted by businesses everywhere - from manufacturers and traders to logistics providers and consultants
                  </p>
                </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-6 h-6 ${star <= Math.round(companyData.rating) ? 'text-warning-500 fill-warning-500' : 'text-neutral-300 dark:text-neutral-600'}`} />
                        ))}
                      </div>
                      <span className="text-2xl font-bold text-neutral-900 dark:text-white">{companyData.rating}</span>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Recommended by {customerReviews.length}+ clients worldwide
                    </p>
                  </div>
                </div>

                {/* Rating Distribution */}
                <div className="mb-8 p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Rating Distribution</h4>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => {
                      const count = customerReviews.filter(r => r.rating === rating).length
                      const percentage = (count / customerReviews.length) * 100
                      return (
                        <div key={rating} className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 w-20">
                            <span className="text-sm font-medium text-neutral-900 dark:text-white">{rating}</span>
                            <Star className="w-4 h-4 text-warning-500 fill-warning-500" />
                          </div>
                          <div className="flex-1 h-3 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-warning-500 rounded-full transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-neutral-600 dark:text-neutral-400 w-16 text-right">{count} reviews</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">Customer Testimonials</h4>
                  {customerReviews.map((review) => (
                    <div key={review.id} className="p-6 bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h5 className="font-bold text-lg text-neutral-900 dark:text-white">{review.name}</h5>
                            {review.verified && (
                              <Badge variant="success" size="sm">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{review.company}</p>
                          <p className="text-sm text-neutral-500 dark:text-neutral-500">{review.date}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`w-5 h-5 ${star <= review.rating ? 'text-warning-500 fill-warning-500' : 'text-neutral-300 dark:text-neutral-600'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 text-center">
                    Rated 4.7/5 from 2,000+ reviews
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">Grid Leader</p>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <Globe className="w-12 h-12 text-secondary-600 dark:text-secondary-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">Regional Leader</p>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <TrendingUp className="w-12 h-12 text-success-600 dark:text-success-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">High Performer</p>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <Users className="w-12 h-12 text-accent-600 dark:text-accent-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">Best Relationship</p>
                    </div>
                    <div className="text-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                      <CheckCircle className="w-12 h-12 text-warning-600 dark:text-warning-400 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">Most Implementable</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
        </div>
      </section>
    </MainLayout>
  )
}
