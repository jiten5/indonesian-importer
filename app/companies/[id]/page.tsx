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
  description: 'PT Glory Global Solutions Indonesia is a premier import-export company specializing in industrial equipment, machinery, and technological solutions. With over 14 years of experience in international trade, we serve as a vital bridge connecting Indonesian industries with global suppliers and markets. Our commitment to excellence and quality has made us a trusted partner for businesses across manufacturing, construction, and technology sectors.',
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
  const [activeTab, setActiveTab] = useState<'overview' | 'imports' | 'exports' | 'supply-chain' | 'analytics'>('overview')
  const [viewMode, setViewMode] = useState<'chart' | 'table'>('chart')

  return (
    <MainLayout>

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
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('imports')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'imports'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Import Data
            </button>
            <button
              onClick={() => setActiveTab('exports')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'exports'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Export Data
            </button>
            <button
              onClick={() => setActiveTab('supply-chain')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'supply-chain'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Supply Chain
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Analytics & Competitors
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="container-custom">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Certifications & Awards
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {companyData.certifications.map((cert, index) => {
                      const IconComponent = cert.icon
                      return (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                          <IconComponent className="w-6 h-6 text-success-600 dark:text-success-400" />
                          <span className="font-medium text-neutral-900 dark:text-white">
                            {cert.name}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                <Card padding="lg">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Product Categories
                  </h3>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-neutral-900 dark:text-white">
                              {product.name}
                            </span>
                            {product.trend === 'up' ? (
                              <TrendingUp className="w-4 h-4 text-success-600 dark:text-success-400" />
                            ) : product.trend === 'down' ? (
                              <TrendingDown className="w-4 h-4 text-error-600 dark:text-error-400" />
                            ) : null}
                          </div>
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {product.value}
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600 dark:bg-primary-400 rounded-full"
                            style={{ width: `${product.share}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Top Trading Partners
                  </h3>
                  <div className="space-y-4">
                    {topPartners.map((partner, index) => (
                      <div key={index} className="flex items-center justify-between pb-4 border-b dark:border-neutral-800 last:border-0 last:pb-0">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{partner.flag}</span>
                          <div>
                            <div className="font-medium text-neutral-900 dark:text-white">
                              {partner.country}
                            </div>
                            <div className="text-sm text-neutral-600 dark:text-neutral-400">
                              {partner.trades} shipments
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-neutral-900 dark:text-white">
                            {partner.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Import Data Tab */}
          {activeTab === 'imports' && (
            <div className="space-y-8">
              {/* Import Turnover Chart */}
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

              {/* Top Import Countries */}
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

              {/* Top Import Products */}
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

              {/* Major Import Ports */}
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Anchor className="w-6 h-6 inline mr-2" />
                  Major Ports of Entry
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

              {/* Recent Import Shipments */}
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
            </div>
          )}

          {/* Export Data Tab */}
          {activeTab === 'exports' && (
            <div className="space-y-8">
              {/* Export Turnover Chart */}
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

              {/* Top Export Countries */}
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

              {/* Top Export Products */}
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

              {/* Major Export Ports */}
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Anchor className="w-6 h-6 inline mr-2" />
                  Major Ports of Exit
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

              {/* Recent Export Shipments */}
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
            </div>
          )}

          {/* Supply Chain Tab */}
          {activeTab === 'supply-chain' && (
            <div className="space-y-8">
              {/* Top Suppliers */}
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

              {/* Top Buyers */}
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

              {/* Key Decision Makers */}
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

              {/* Customer Reviews */}
              <Card padding="lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    Customer Reviews & Ratings
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-5 h-5 ${star <= Math.round(companyData.rating) ? 'text-warning-500 fill-warning-500' : 'text-neutral-300 dark:text-neutral-600'}`} />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-neutral-900 dark:text-white">{companyData.rating}</span>
                    <span className="text-neutral-600 dark:text-neutral-400">({customerReviews.length} reviews)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  {customerReviews.map((review) => (
                    <div key={review.id} className="p-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200 dark:border-neutral-700">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-semibold text-neutral-900 dark:text-white">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="success" size="sm">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{review.company}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-warning-500 fill-warning-500' : 'text-neutral-300 dark:text-neutral-600'}`} />
                            ))}
                          </div>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Analytics & Competitors Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Import Competitors */}
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Shield className="w-6 h-6 inline mr-2" />
                  Import Competitors
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Company Name</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Total Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Market Share</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">YoY Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {importCompetitors.map((competitor) => (
                        <tr key={competitor.name} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{competitor.rank}</td>
                          <td className="p-4 font-semibold text-neutral-900 dark:text-white">{competitor.name}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{competitor.shipments.toLocaleString()}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{competitor.value}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{competitor.marketShare}%</td>
                          <td className="p-4">
                            <span className="text-success-600 dark:text-success-400">+{competitor.growth}%</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Export Competitors */}
              <Card padding="lg">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  <Shield className="w-6 h-6 inline mr-2" />
                  Export Competitors
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Rank</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Company Name</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Shipments</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Total Value</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">Market Share</th>
                        <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">YoY Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exportCompetitors.map((competitor) => (
                        <tr key={competitor.name} className="border-b border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/30">
                          <td className="p-4 text-neutral-900 dark:text-white font-medium">{competitor.rank}</td>
                          <td className="p-4 font-semibold text-neutral-900 dark:text-white">{competitor.name}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{competitor.shipments.toLocaleString()}</td>
                          <td className="p-4 font-semibold text-success-600 dark:text-success-400">{competitor.value}</td>
                          <td className="p-4 text-neutral-600 dark:text-neutral-400">{competitor.marketShare}%</td>
                          <td className="p-4">
                            <span className="text-success-600 dark:text-success-400">+{competitor.growth}%</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Trade Volume Trends */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Import Volume Trend
                  </h3>
                  <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Import trend chart visualization
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Export Volume Trend
                  </h3>
                  <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Export trend chart visualization
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Geographic Distribution Maps */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Import Geographic Distribution
                  </h3>
                  <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Import countries map visualization
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card padding="lg">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
                    Export Geographic Distribution
                  </h3>
                  <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
                      <p className="text-neutral-600 dark:text-neutral-400">
                        Export countries map visualization
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}
