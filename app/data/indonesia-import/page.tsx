'use client'

import { useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import Link from 'next/link'
import { motion } from 'framer-motion'
import MainLayout from '@/components/layouts/MainLayout'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  Search, 
  Download, 
  Filter, 
  TrendingUp,
  TrendingDown,
  Calendar,
  Package,
  DollarSign,
  Ship,
  ArrowUpDown
} from 'lucide-react'

const navigation = [
  {
    label: 'Platform',
    href: '/platform',
    items: [
      { label: 'Data Intelligence', href: '/platform/data-intelligence' },
      { label: 'Analytics', href: '/platform/analytics' },
      { label: 'Integrations', href: '/platform/integrations' },
      { label: 'API', href: '/platform/api' }
    ]
  },
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'Import/Export', href: '/solutions/import-export' },
      { label: 'Market Research', href: '/solutions/market-research' },
      { label: 'Compliance', href: '/solutions/compliance' }
    ]
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' }
]

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Data Intelligence', href: '/platform/data-intelligence' },
      { label: 'Analytics', href: '/platform/analytics' },
      { label: 'API Documentation', href: '/platform/api' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Import/Export', href: '/solutions/import-export' },
      { label: 'Market Research', href: '/solutions/market-research' },
      { label: 'Enterprise', href: '/solutions/enterprise' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Blog', href: '/blog' },
      { label: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partners', href: '/partners' },
      { label: 'Indonesia Export', href: '/data/indonesia-export' },
      { label: 'Indonesia Import', href: '/data/indonesia-import' }
    ]
  }
]

// Sample import data
const importData = [
  {
    id: 1,
    date: '2025-11-20',
    hsCode: '8471.30',
    product: 'Portable Digital Automatic Data Processing Machines',
    importer: 'PT Tech Solutions Indonesia',
    exporter: 'Samsung Electronics Co., Ltd',
    origin: 'South Korea',
    quantity: 2500,
    unit: 'Units',
    value: 2850000,
    port: 'Jakarta',
    trend: 'up'
  },
  {
    id: 2,
    date: '2025-11-19',
    hsCode: '8517.12',
    product: 'Telephones for Cellular Networks',
    importer: 'PT Mobile Distribusi',
    exporter: 'Apple Inc.',
    origin: 'China',
    quantity: 5000,
    unit: 'Units',
    value: 4500000,
    port: 'Surabaya',
    trend: 'up'
  },
  {
    id: 3,
    date: '2025-11-18',
    hsCode: '8708.29',
    product: 'Other Parts and Accessories of Motor Vehicles',
    importer: 'PT Automotive Parts Indonesia',
    exporter: 'Toyota Motor Corporation',
    origin: 'Japan',
    quantity: 1200,
    unit: 'Kg',
    value: 850000,
    port: 'Jakarta',
    trend: 'down'
  },
  {
    id: 4,
    date: '2025-11-17',
    hsCode: '8544.42',
    product: 'Electric Conductors for Voltage Not Exceeding 1000V',
    importer: 'PT Electrical Supplies',
    exporter: 'Prysmian Group',
    origin: 'Italy',
    quantity: 5000,
    unit: 'Meters',
    value: 125000,
    port: 'Semarang',
    trend: 'up'
  },
  {
    id: 5,
    date: '2025-11-16',
    hsCode: '3004.90',
    product: 'Medicaments Containing Other Ingredients',
    importer: 'PT Pharma Indonesia',
    exporter: 'Pfizer Inc.',
    origin: 'USA',
    quantity: 800,
    unit: 'Kg',
    value: 950000,
    port: 'Jakarta',
    trend: 'up'
  }
]

// Comprehensive commodity data with detailed statistics
const topCategories = [
  { 
    rank: 1,
    hsCode: '27',
    name: 'Mineral Fuels, Oils & Distillation Products',
    value2024: 37372.32,
    value2023: 41250.18,
    share: 15.74,
    growth: -9.40,
    trend: 'down',
    unit: 'Million USD'
  },
  { 
    rank: 2,
    hsCode: '84',
    name: 'Nuclear Reactors, Boilers, Machinery',
    value2024: 35577.04,
    value2023: 33891.22,
    share: 14.98,
    growth: 4.97,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 3,
    hsCode: '85',
    name: 'Electrical Machinery & Equipment',
    value2024: 28913.50,
    value2023: 27105.88,
    share: 12.18,
    growth: 6.67,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 4,
    hsCode: '39',
    name: 'Plastics & Articles Thereof',
    value2024: 10469.94,
    value2023: 10128.45,
    share: 4.41,
    growth: 3.37,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 5,
    hsCode: '72',
    name: 'Iron & Steel',
    value2024: 9930.99,
    value2023: 10542.67,
    share: 4.18,
    growth: -5.80,
    trend: 'down',
    unit: 'Million USD'
  },
  { 
    rank: 6,
    hsCode: '29',
    name: 'Organic Chemicals',
    value2024: 8754.23,
    value2023: 8321.90,
    share: 3.69,
    growth: 5.19,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 7,
    hsCode: '87',
    name: 'Vehicles Other Than Railway/Tramway',
    value2024: 7834.56,
    value2023: 7245.33,
    share: 3.30,
    growth: 8.13,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 8,
    hsCode: '90',
    name: 'Optical, Measuring, Medical Instruments',
    value2024: 6521.78,
    value2023: 6012.45,
    share: 2.75,
    growth: 8.47,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 9,
    hsCode: '73',
    name: 'Articles of Iron or Steel',
    value2024: 5987.34,
    value2023: 5834.21,
    share: 2.52,
    growth: 2.63,
    trend: 'up',
    unit: 'Million USD'
  },
  { 
    rank: 10,
    hsCode: '30',
    name: 'Pharmaceutical Products',
    value2024: 5432.89,
    value2023: 4789.12,
    share: 2.29,
    growth: 13.44,
    trend: 'up',
    unit: 'Million USD'
  }
]

// Comprehensive country data with year-over-year comparisons
const topOrigins = [
  { 
    rank: 1,
    country: 'China',
    flag: '🇨🇳',
    value2024: 52347.89,
    value2023: 49821.34,
    share: 22.04,
    growth: 5.07,
    trend: 'up',
    mainProducts: 'Machinery, Electronics, Textiles'
  },
  { 
    rank: 2,
    country: 'Japan',
    flag: '🇯🇵',
    value2024: 18234.56,
    value2023: 17892.23,
    share: 7.68,
    growth: 1.91,
    trend: 'up',
    mainProducts: 'Vehicles, Machinery, Iron & Steel'
  },
  { 
    rank: 3,
    country: 'Singapore',
    flag: '🇸🇬',
    value2024: 17856.23,
    value2023: 18234.78,
    share: 7.52,
    growth: -2.08,
    trend: 'down',
    mainProducts: 'Mineral Fuels, Machinery, Electronics'
  },
  { 
    rank: 4,
    country: 'Thailand',
    flag: '🇹🇭',
    value2024: 14532.67,
    value2023: 13987.45,
    share: 6.12,
    growth: 3.90,
    trend: 'up',
    mainProducts: 'Machinery, Plastics, Vehicles'
  },
  { 
    rank: 5,
    country: 'United States',
    flag: '🇺🇸',
    value2024: 12876.34,
    value2023: 11932.89,
    share: 5.42,
    growth: 7.91,
    trend: 'up',
    mainProducts: 'Machinery, Aircraft, Pharmaceuticals'
  },
  { 
    rank: 6,
    country: 'South Korea',
    flag: '🇰🇷',
    value2024: 11234.78,
    value2023: 10876.23,
    share: 4.73,
    growth: 3.30,
    trend: 'up',
    mainProducts: 'Electronics, Vehicles, Iron & Steel'
  },
  { 
    rank: 7,
    country: 'Malaysia',
    flag: '🇲🇾',
    value2024: 10987.45,
    value2023: 11234.56,
    share: 4.63,
    growth: -2.20,
    trend: 'down',
    mainProducts: 'Mineral Fuels, Electronics, Palm Oil'
  },
  { 
    rank: 8,
    country: 'India',
    flag: '🇮🇳',
    value2024: 9876.54,
    value2023: 9234.21,
    share: 4.16,
    growth: 6.96,
    trend: 'up',
    mainProducts: 'Mineral Fuels, Organic Chemicals, Iron & Steel'
  },
  { 
    rank: 9,
    country: 'Germany',
    flag: '🇩🇪',
    value2024: 8765.32,
    value2023: 8432.18,
    share: 3.69,
    growth: 3.95,
    trend: 'up',
    mainProducts: 'Machinery, Vehicles, Pharmaceuticals'
  },
  { 
    rank: 10,
    country: 'Vietnam',
    flag: '🇻🇳',
    value2024: 7654.89,
    value2023: 6987.34,
    share: 3.22,
    growth: 9.55,
    trend: 'up',
    mainProducts: 'Electronics, Textiles, Footwear'
  }
]

// Comprehensive port data with detailed statistics
const topPorts = [
  { 
    rank: 1,
    port: 'Tanjung Priok (Jakarta)',
    value2024: 83421.56,
    value2023: 79234.78,
    share: 35.14,
    growth: 5.29,
    trend: 'up',
    containerVolume: '7.8M TEU',
    mainCommodities: 'Machinery, Electronics, Consumer Goods'
  },
  { 
    rank: 2,
    port: 'Tanjung Perak (Surabaya)',
    value2024: 59234.89,
    value2023: 56789.23,
    share: 24.95,
    growth: 4.31,
    trend: 'up',
    containerVolume: '4.2M TEU',
    mainCommodities: 'Industrial Equipment, Raw Materials'
  },
  { 
    rank: 3,
    port: 'Belawan (Medan)',
    value2024: 35678.12,
    value2023: 34123.45,
    share: 15.03,
    growth: 4.56,
    trend: 'up',
    containerVolume: '2.1M TEU',
    mainCommodities: 'Palm Oil, Rubber, Petroleum Products'
  },
  { 
    rank: 4,
    port: 'Tanjung Emas (Semarang)',
    value2024: 23456.78,
    value2023: 22134.56,
    share: 9.88,
    growth: 5.97,
    trend: 'up',
    containerVolume: '1.5M TEU',
    mainCommodities: 'Textiles, Fertilizers, Steel Products'
  },
  { 
    rank: 5,
    port: 'Makassar',
    value2024: 17834.23,
    value2023: 16987.34,
    share: 7.51,
    growth: 4.99,
    trend: 'up',
    containerVolume: '980K TEU',
    mainCommodities: 'Food Products, Construction Materials'
  },
  { 
    rank: 6,
    port: 'Banten (Merak)',
    value2024: 8765.43,
    value2023: 8234.56,
    share: 3.69,
    growth: 6.45,
    trend: 'up',
    containerVolume: '650K TEU',
    mainCommodities: 'Vehicles, Electronics, Chemicals'
  },
  { 
    rank: 7,
    port: 'Balikpapan',
    value2024: 5432.18,
    value2023: 5876.92,
    share: 2.29,
    growth: -7.57,
    trend: 'down',
    containerVolume: '420K TEU',
    mainCommodities: 'Coal, Petroleum, Mining Equipment'
  },
  { 
    rank: 8,
    port: 'Dumai',
    value2024: 3214.56,
    value2023: 3456.78,
    share: 1.35,
    growth: -7.01,
    trend: 'down',
    containerVolume: '250K TEU',
    mainCommodities: 'Petroleum Products, Palm Oil'
  }
]

// Comprehensive importer data with industry sectors
const topImporters = [
  { 
    rank: 1,
    name: 'PT Pertamina (Persero)',
    industry: 'Oil & Gas',
    value2024: 12347.89,
    value2023: 13456.78,
    share: 5.20,
    growth: -8.24,
    trend: 'down',
    mainProducts: 'Crude Oil, Petroleum Products, LNG',
    shipments: 2847
  },
  { 
    rank: 2,
    name: 'PT Astra International Tbk',
    industry: 'Automotive & Heavy Equipment',
    value2024: 8765.43,
    value2023: 8234.56,
    share: 3.69,
    growth: 6.45,
    trend: 'up',
    mainProducts: 'Vehicles, Auto Parts, Machinery',
    shipments: 3521
  },
  { 
    rank: 3,
    name: 'PT Freeport Indonesia',
    industry: 'Mining',
    value2024: 6543.21,
    value2023: 6234.89,
    share: 2.75,
    growth: 4.95,
    trend: 'up',
    mainProducts: 'Mining Equipment, Chemicals, Industrial Supplies',
    shipments: 1876
  },
  { 
    rank: 4,
    name: 'Samsung Electronics Indonesia',
    industry: 'Electronics & Technology',
    value2024: 5876.54,
    value2023: 5432.18,
    share: 2.47,
    growth: 8.18,
    trend: 'up',
    mainProducts: 'Electronic Components, Semiconductors, Displays',
    shipments: 4231
  },
  { 
    rank: 5,
    name: 'PT Unilever Indonesia Tbk',
    industry: 'Consumer Goods',
    value2024: 4987.32,
    value2023: 4765.89,
    share: 2.10,
    growth: 4.65,
    trend: 'up',
    mainProducts: 'Raw Materials, Packaging, Chemicals',
    shipments: 2654
  },
  { 
    rank: 6,
    name: 'PT Toyota Motor Manufacturing Indonesia',
    industry: 'Automotive',
    value2024: 4321.78,
    value2023: 3987.65,
    share: 1.82,
    growth: 8.38,
    trend: 'up',
    mainProducts: 'Auto Parts, Engines, Vehicle Components',
    shipments: 1987
  },
  { 
    rank: 7,
    name: 'Wilmar Nabati Indonesia',
    industry: 'Agriculture & Food',
    value2024: 3876.45,
    value2023: 3654.32,
    share: 1.63,
    growth: 6.08,
    trend: 'up',
    mainProducts: 'Edible Oils, Food Ingredients, Chemicals',
    shipments: 1543
  },
  { 
    rank: 8,
    name: 'PT Indofood CBP Sukses Makmur',
    industry: 'Food & Beverage',
    value2024: 3234.56,
    value2023: 3098.76,
    share: 1.36,
    growth: 4.38,
    trend: 'up',
    mainProducts: 'Food Ingredients, Packaging Materials, Wheat',
    shipments: 2187
  },
  { 
    rank: 9,
    name: 'PT Semen Indonesia (Persero)',
    industry: 'Construction Materials',
    value2024: 2987.34,
    value2023: 3123.45,
    share: 1.26,
    growth: -4.36,
    trend: 'down',
    mainProducts: 'Coal, Gypsum, Industrial Equipment',
    shipments: 987
  },
  { 
    rank: 10,
    name: 'PT Chandra Asri Petrochemical',
    industry: 'Petrochemicals',
    value2024: 2765.89,
    value2023: 2543.21,
    share: 1.16,
    growth: 8.76,
    trend: 'up',
    mainProducts: 'Petrochemicals, Plastics, Polymers',
    shipments: 1234
  }
]

// Comprehensive supplier data with product categories
const topSuppliers = [
  { 
    rank: 1,
    name: 'China National Petroleum Corporation (CNPC)',
    country: 'China',
    flag: '🇨🇳',
    value2024: 9876.54,
    value2023: 10234.78,
    share: 4.16,
    growth: -3.50,
    trend: 'down',
    mainProducts: 'Crude Oil, Petroleum Products, Natural Gas',
    shipments: 1234
  },
  { 
    rank: 2,
    name: 'Samsung Electronics Co., Ltd.',
    country: 'South Korea',
    flag: '🇰🇷',
    value2024: 8234.67,
    value2023: 7654.32,
    share: 3.47,
    growth: 7.58,
    trend: 'up',
    mainProducts: 'Semiconductors, Displays, Consumer Electronics',
    shipments: 3567
  },
  { 
    rank: 3,
    name: 'Toyota Motor Corporation',
    country: 'Japan',
    flag: '🇯🇵',
    value2024: 7123.45,
    value2023: 6876.89,
    share: 3.00,
    growth: 3.58,
    trend: 'up',
    mainProducts: 'Vehicles, Auto Parts, Engines',
    shipments: 2345
  },
  { 
    rank: 4,
    name: 'Siemens AG',
    country: 'Germany',
    flag: '🇩🇪',
    value2024: 6543.21,
    value2023: 6234.56,
    share: 2.75,
    growth: 4.95,
    trend: 'up',
    mainProducts: 'Industrial Machinery, Medical Equipment, Automation',
    shipments: 1987
  },
  { 
    rank: 5,
    name: 'Apple Inc.',
    country: 'United States',
    flag: '🇺🇸',
    value2024: 5876.89,
    value2023: 5234.67,
    share: 2.47,
    growth: 12.27,
    trend: 'up',
    mainProducts: 'Consumer Electronics, Semiconductors, Accessories',
    shipments: 4123
  },
  { 
    rank: 6,
    name: 'Huawei Technologies Co., Ltd.',
    country: 'China',
    flag: '🇨🇳',
    value2024: 5234.56,
    value2023: 5678.90,
    share: 2.20,
    growth: -7.82,
    trend: 'down',
    mainProducts: 'Telecommunications Equipment, Network Infrastructure',
    shipments: 2876
  },
  { 
    rank: 7,
    name: 'Mitsubishi Corporation',
    country: 'Japan',
    flag: '🇯🇵',
    value2024: 4987.34,
    value2023: 4765.21,
    share: 2.10,
    growth: 4.66,
    trend: 'up',
    mainProducts: 'Machinery, Chemicals, Industrial Equipment',
    shipments: 1654
  },
  { 
    rank: 8,
    name: 'LG Electronics Inc.',
    country: 'South Korea',
    flag: '🇰🇷',
    value2024: 4321.87,
    value2023: 3987.65,
    share: 1.82,
    growth: 8.39,
    trend: 'up',
    mainProducts: 'Home Appliances, Electronics, Displays',
    shipments: 2987
  },
  { 
    rank: 9,
    name: 'Caterpillar Inc.',
    country: 'United States',
    flag: '🇺🇸',
    value2024: 3876.54,
    value2023: 3654.32,
    share: 1.63,
    growth: 6.08,
    trend: 'up',
    mainProducts: 'Construction Equipment, Mining Machinery, Engines',
    shipments: 876
  },
  { 
    rank: 10,
    name: 'Pfizer Inc.',
    country: 'United States',
    flag: '🇺🇸',
    value2024: 3234.78,
    value2023: 2876.45,
    share: 1.36,
    growth: 12.46,
    trend: 'up',
    mainProducts: 'Pharmaceuticals, Vaccines, Medical Products',
    shipments: 1543
  }
]

// Monthly import trend data (Sep 2024 - Aug 2025)
const monthlyTrends = [
  { month: 'Sep 2024', value2024: 19234.56, value2023: 18765.43, growth: 2.50 },
  { month: 'Oct 2024', value2024: 20123.78, value2023: 19234.21, growth: 4.62 },
  { month: 'Nov 2024', value2024: 21456.89, value2023: 20543.67, growth: 4.45 },
  { month: 'Dec 2024', value2024: 22789.45, value2023: 21876.32, growth: 4.17 },
  { month: 'Jan 2025', value2024: 18765.32, value2023: 17654.89, growth: 6.29 },
  { month: 'Feb 2025', value2024: 19876.54, value2023: 18932.45, growth: 4.99 },
  { month: 'Mar 2025', value2024: 23456.78, value2023: 22134.56, growth: 5.97 },
  { month: 'Apr 2025', value2024: 24123.67, value2023: 23456.78, growth: 2.84 },
  { month: 'May 2025', value2024: 25234.89, value2023: 24123.45, growth: 4.61 },
  { month: 'Jun 2025', value2024: 26543.21, value2023: 25432.18, growth: 4.37 },
  { month: 'Jul 2025', value2024: 28765.43, value2023: 27654.32, growth: 4.02 },
  { month: 'Aug 2025', value2024: 30748.96, value2023: 29543.21, growth: 4.08 }
]


export default function IndonesiaImportPage() {
    // Chart options for Top Import Commodities with year-over-year comparison
    const commoditiesChartOptions = {
      chart: { type: 'column', backgroundColor: 'transparent' },
      title: { text: 'Top 10 Import Commodities (USD Million)' },
      xAxis: {
        categories: topCategories.map(cat => cat.hsCode),
        title: { text: 'HS Code' },
        labels: {
          rotation: -45,
          style: { fontSize: '11px' }
        }
      },
      yAxis: {
        min: 0,
        title: { text: 'Value (USD Million)' }
      },
      tooltip: {
        shared: true,
        formatter: function(this: any): string {
          // @ts-ignore - Highcharts formatter context
          const category = topCategories[this.points[0].point.index];
          return `<b>${category.name}</b><br/>` +
                 `HS Code: ${category.hsCode}<br/>` +
                 `2024: $${category.value2024.toLocaleString()}M<br/>` +
                 `2023: $${category.value2023.toLocaleString()}M<br/>` +
                 `Growth: ${category.growth > 0 ? '+' : ''}${category.growth.toFixed(2)}%`;
        }
      },
      series: [{
        name: '2024',
        data: topCategories.map(cat => cat.value2024),
        color: '#3b82f6'
      }, {
        name: '2023',
        data: topCategories.map(cat => cat.value2023),
        color: '#94a3b8'
      }],
      credits: { enabled: false },
      legend: { enabled: true }
    };

  // Chart options for Top Import Countries
  const countriesChartOptions = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'Top 10 Import Countries by Share (%)' },
    tooltip: {
      pointFormat: '<b>{point.name}</b><br/>' +
                   'Value: ${point.value}M<br/>' +
                   'Share: {point.percentage:.2f}%<br/>' +
                   'Growth: {point.growth}%'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      name: 'Share',
      data: topOrigins.map(origin => ({
        name: origin.country,
        y: origin.share,
        value: origin.value2024,
        growth: origin.growth > 0 ? `+${origin.growth.toFixed(2)}` : origin.growth.toFixed(2)
      })),
      colorByPoint: true
    }],
    credits: { enabled: false }
  };

  // Chart options for Top Import Ports
  const portsChartOptions = {
    chart: { type: 'bar', backgroundColor: 'transparent' },
    title: { text: 'Top Import Ports (USD Million) - Year-over-Year' },
    xAxis: {
      categories: topPorts.map(port => port.port.split('(')[0].trim()),
      title: { text: 'Port' }
    },
    yAxis: {
      min: 0,
      title: { text: 'Value (USD Million)' }
    },
    tooltip: {
      shared: true,
      formatter: function(this: any): string {
        const port = topPorts[this.points[0].point.index];
        return `<b>${port.port}</b><br/>` +
               `2024: $${port.value2024.toLocaleString()}M<br/>` +
               `2023: $${port.value2023.toLocaleString()}M<br/>` +
               `Growth: ${port.growth > 0 ? '+' : ''}${port.growth.toFixed(2)}%<br/>` +
               `Share: ${port.share}%`;
      }
    },
    series: [{
      name: '2024',
      data: topPorts.map(port => port.value2024),
      color: '#3b82f6'
    }, {
      name: '2023',
      data: topPorts.map(port => port.value2023),
      color: '#94a3b8'
    }],
    credits: { enabled: false },
    legend: { enabled: true }
  };

  // Chart options for Top Importers
  const importersChartOptions = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: 'Top 10 Importers (USD Million) - Year-over-Year' },
    xAxis: {
      categories: topImporters.map(imp => imp.name.length > 20 ? imp.name.substring(0, 20) + '...' : imp.name),
      title: { text: 'Importer' },
      labels: {
        rotation: -45,
        style: { fontSize: '10px' }
      }
    },
    yAxis: {
      min: 0,
      title: { text: 'Value (USD Million)' }
    },
    tooltip: {
      shared: true,
      formatter: function(this: any): string {
        const importer = topImporters[this.points[0].point.index];
        return `<b>${importer.name}</b><br/>` +
               `Industry: ${importer.industry}<br/>` +
               `2024: $${importer.value2024.toLocaleString()}M<br/>` +
               `2023: $${importer.value2023.toLocaleString()}M<br/>` +
               `Growth: ${importer.growth > 0 ? '+' : ''}${importer.growth.toFixed(2)}%<br/>` +
               `Shipments: ${importer.shipments.toLocaleString()}`;
      }
    },
    series: [{
      name: '2024',
      data: topImporters.map(imp => imp.value2024),
      color: '#3b82f6'
    }, {
      name: '2023',
      data: topImporters.map(imp => imp.value2023),
      color: '#94a3b8'
    }],
    credits: { enabled: false },
    legend: { enabled: true }
  };

  // Chart options for Top Suppliers
  const suppliersChartOptions = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: 'Top 10 Suppliers (USD Million) - Year-over-Year' },
    xAxis: {
      categories: topSuppliers.map(sup => sup.name.length > 20 ? sup.name.substring(0, 20) + '...' : sup.name),
      title: { text: 'Supplier' },
      labels: {
        rotation: -45,
        style: { fontSize: '10px' }
      }
    },
    yAxis: {
      min: 0,
      title: { text: 'Value (USD Million)' }
    },
    tooltip: {
      shared: true,
      formatter: function(this: any): string {
        const supplier = topSuppliers[this.points[0].point.index];
        return `<b>${supplier.name}</b><br/>` +
               `Country: ${supplier.flag} ${supplier.country}<br/>` +
               `2024: $${supplier.value2024.toLocaleString()}M<br/>` +
               `2023: $${supplier.value2023.toLocaleString()}M<br/>` +
               `Growth: ${supplier.growth > 0 ? '+' : ''}${supplier.growth.toFixed(2)}%<br/>` +
               `Shipments: ${supplier.shipments.toLocaleString()}`;
      }
    },
    series: [{
      name: '2024',
      data: topSuppliers.map(sup => sup.value2024),
      color: '#3b82f6'
    }, {
      name: '2023',
      data: topSuppliers.map(sup => sup.value2023),
      color: '#94a3b8'
    }],
    credits: { enabled: false },
    legend: { enabled: true }
  };

  // Chart options for Monthly Import Trends
  const monthlyTrendsChartOptions = {
    chart: { type: 'line', backgroundColor: 'transparent' },
    title: { text: 'Monthly Import Trends (Sep 2024 - Aug 2025)' },
    xAxis: {
      categories: monthlyTrends.map(m => m.month),
      title: { text: 'Month' },
      labels: {
        rotation: -45,
        style: { fontSize: '10px' }
      }
    },
    yAxis: {
      min: 0,
      title: { text: 'Value (USD Million)' }
    },
    tooltip: {
      shared: true,
      formatter: function(this: any): string {
        const trend = monthlyTrends[this.points[0].point.index];
        return `<b>${trend.month}</b><br/>` +
               `2024/2025: $${trend.value2024.toLocaleString()}M<br/>` +
               `2023/2024: $${trend.value2023.toLocaleString()}M<br/>` +
               `Growth: ${trend.growth > 0 ? '+' : ''}${trend.growth.toFixed(2)}%`;
      }
    },
    series: [{
      name: '2024/2025',
      data: monthlyTrends.map(m => m.value2024),
      color: '#3b82f6',
      marker: { enabled: true, radius: 4 }
    }, {
      name: '2023/2024',
      data: monthlyTrends.map(m => m.value2023),
      color: '#94a3b8',
      marker: { enabled: true, radius: 4 }
    }],
    credits: { enabled: false },
    legend: { enabled: true }
  };

  const [tab, setTab] = useState('commodities');

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-950 dark:to-neutral-900 py-12 mb-8">
        <div className="container-custom text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Indonesia Import Data & Insights
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Explore Indonesia's major import commodities, top countries, ports, importers, and suppliers with interactive charts and tables. Get actionable trade intelligence for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 min-w-[220px]">
              <div className="text-2xl font-bold text-primary-600">USD 281.12 B</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Total Imports (Sep 2024 - Aug 2025)</div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 min-w-[220px]">
              <div className="text-2xl font-bold text-primary-600">USD 30.75 B</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Highest Monthly (Aug 2025)</div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 min-w-[220px]">
              <div className="text-2xl font-bold text-success-600">+4.57%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Avg YoY Growth (12 Months)</div>
            </div>
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6 min-w-[220px]">
              <div className="text-2xl font-bold text-primary-600">127,543+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Import Shipment Records</div>
            </div>
          </div>
        </div>
      </section>

      {/* All sections displayed sequentially */}
      <div className="container-custom">
        {/* Commodities Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Indonesia's Major Import Commodities</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Indonesia imported goods worth USD 281.12 Billion from Sep 2024 - Aug 2025, with monthly average of USD 23.43 Billion, 
              reaching peak imports in August 2025 at USD 30.75 Billion. Top categories include Mineral Fuels (15.74%), 
              Nuclear Reactors & Machinery (14.98%), Electrical Machinery (12.18%), Plastics (4.41%), and Iron & Steel (4.18%).
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> Electrical Machinery & Equipment showed the highest growth at +6.67%, while Mineral Fuels declined -9.40% YoY, 
                reflecting Indonesia's shift toward technology imports and reduced dependency on fossil fuel imports.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={commoditiesChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Rank</th>
                        <th className="text-left p-3">HS Code</th>
                        <th className="text-left p-3">Commodity</th>
                        <th className="text-right p-3">2024 Value (USD M)</th>
                        <th className="text-right p-3">2023 Value (USD M)</th>
                        <th className="text-right p-3">Share (%)</th>
                        <th className="text-right p-3">YoY Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topCategories.map((commodity, index) => (
                        <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                          <td className="p-3 font-semibold">{commodity.rank}</td>
                          <td className="p-3">
                            <Badge variant="outline" size="sm">{commodity.hsCode}</Badge>
                          </td>
                          <td className="p-3 max-w-xs">{commodity.name}</td>
                          <td className="text-right p-3 font-semibold">${commodity.value2024.toLocaleString()}</td>
                          <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${commodity.value2023.toLocaleString()}</td>
                          <td className="text-right p-3">{commodity.share.toFixed(2)}%</td>
                          <td className="text-right p-3">
                            <span className={commodity.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                              {commodity.growth > 0 ? '+' : ''}{commodity.growth.toFixed(2)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Countries Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Top Import Countries (Origin)</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              China remains Indonesia's largest import partner at 22.04% market share, followed by Japan, Singapore, Thailand, and the United States.
              Key imports include Machinery, Electronics, Vehicles, Mineral Fuels, and Pharmaceuticals from diverse global sources.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> Vietnam showed the highest growth rate at +9.55% YoY, driven by electronics and textiles, 
                while the United States increased by +7.91%, primarily in machinery and pharmaceuticals. Singapore and Malaysia experienced slight declines.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={countriesChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Rank</th>
                        <th className="text-left p-3">Country</th>
                        <th className="text-right p-3">2024 Value (USD M)</th>
                        <th className="text-right p-3">2023 Value (USD M)</th>
                        <th className="text-right p-3">Share (%)</th>
                        <th className="text-right p-3">YoY Growth</th>
                        <th className="text-left p-3">Main Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topOrigins.map((origin, index) => (
                        <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                          <td className="p-3 font-semibold">{origin.rank}</td>
                          <td className="p-3">
                            <span className="mr-2 text-2xl">{origin.flag}</span>
                            <span className="font-medium">{origin.country}</span>
                          </td>
                          <td className="text-right p-3 font-semibold">${origin.value2024.toLocaleString()}</td>
                          <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${origin.value2023.toLocaleString()}</td>
                          <td className="text-right p-3">{origin.share.toFixed(2)}%</td>
                          <td className="text-right p-3">
                            <span className={origin.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                              {origin.growth > 0 ? '+' : ''}{origin.growth.toFixed(2)}%
                            </span>
                          </td>
                          <td className="p-3 text-sm text-neutral-600 dark:text-neutral-400">{origin.mainProducts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Ports Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Top Import Ports</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Tanjung Priok (Jakarta) handles 35.14% of Indonesia's import volume with 7.8M TEU container capacity, 
              followed by Tanjung Perak (Surabaya) at 24.95% and Belawan (Medan) at 15.03%. These three ports account for over 75% of total imports.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> All major ports showed positive growth ranging from +4.31% to +6.45% YoY, except Balikpapan (-7.57%) 
                and Dumai (-7.01%), which correlate with declining mineral fuel imports. Tanjung Emas (Semarang) led growth at +5.97%.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={portsChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Rank</th>
                        <th className="text-left p-3">Port</th>
                        <th className="text-right p-3">2024 Value (USD M)</th>
                        <th className="text-right p-3">2023 Value (USD M)</th>
                        <th className="text-right p-3">Share (%)</th>
                        <th className="text-right p-3">YoY Growth</th>
                        <th className="text-left p-3">Container Volume</th>
                        <th className="text-left p-3">Main Commodities</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPorts.map((port, index) => (
                        <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                          <td className="p-3 font-semibold">{port.rank}</td>
                          <td className="p-3 font-medium">{port.port}</td>
                          <td className="text-right p-3 font-semibold">${port.value2024.toLocaleString()}</td>
                          <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${port.value2023.toLocaleString()}</td>
                          <td className="text-right p-3">{port.share.toFixed(2)}%</td>
                          <td className="text-right p-3">
                            <span className={port.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                              {port.growth > 0 ? '+' : ''}{port.growth.toFixed(2)}%
                            </span>
                          </td>
                          <td className="p-3 text-sm">{port.containerVolume}</td>
                          <td className="p-3 text-sm text-neutral-600 dark:text-neutral-400">{port.mainCommodities}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Importers Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Top Importers in Indonesia</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              PT Pertamina leads Indonesia's importers at 5.20% market share focusing on Oil & Gas, 
              followed by PT Astra International (Automotive), PT Freeport (Mining), and Samsung Electronics Indonesia (Technology). 
              These companies represent diverse industrial sectors driving Indonesia's import economy.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> Technology and manufacturing sectors showed strongest growth: PT Chandra Asri (+8.76%), 
                Samsung Electronics (+8.18%), and Toyota Motor (+8.38%). PT Pertamina declined -8.24% reflecting reduced oil imports, 
                while PT Semen Indonesia dropped -4.36% due to construction sector slowdown.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={importersChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Rank</th>
                        <th className="text-left p-3">Importer</th>
                        <th className="text-left p-3">Industry</th>
                        <th className="text-right p-3">2024 Value (USD M)</th>
                        <th className="text-right p-3">2023 Value (USD M)</th>
                        <th className="text-right p-3">Share (%)</th>
                        <th className="text-right p-3">YoY Growth</th>
                        <th className="text-right p-3">Shipments</th>
                        <th className="text-left p-3">Main Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topImporters.map((importer, index) => (
                        <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                          <td className="p-3 font-semibold">{importer.rank}</td>
                          <td className="p-3 font-medium">{importer.name}</td>
                          <td className="p-3 text-sm">
                            <Badge variant="outline" size="sm">{importer.industry}</Badge>
                          </td>
                          <td className="text-right p-3 font-semibold">${importer.value2024.toLocaleString()}</td>
                          <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${importer.value2023.toLocaleString()}</td>
                          <td className="text-right p-3">{importer.share.toFixed(2)}%</td>
                          <td className="text-right p-3">
                            <span className={importer.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                              {importer.growth > 0 ? '+' : ''}{importer.growth.toFixed(2)}%
                            </span>
                          </td>
                          <td className="text-right p-3 text-sm">{importer.shipments.toLocaleString()}</td>
                          <td className="p-3 text-sm text-neutral-600 dark:text-neutral-400">{importer.mainProducts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Suppliers Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Top Foreign Suppliers to Indonesia</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              China National Petroleum Corporation leads at 4.16% market share, followed by Samsung Electronics (South Korea), 
              Toyota Motor (Japan), Siemens (Germany), and Apple (USA). These suppliers represent key technology, automotive, 
              energy, and industrial equipment sectors.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> Technology suppliers showed exceptional growth: Apple Inc. (+12.27%), Pfizer Inc. (+12.46%), 
                LG Electronics (+8.39%), and Samsung Electronics (+7.58%). Petroleum suppliers declined: CNPC (-3.50%) and Huawei (-7.82%), 
                reflecting Indonesia's energy transition and geopolitical shifts in telecommunications.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={suppliersChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Rank</th>
                        <th className="text-left p-3">Supplier</th>
                        <th className="text-left p-3">Country</th>
                        <th className="text-right p-3">2024 Value (USD M)</th>
                        <th className="text-right p-3">2023 Value (USD M)</th>
                        <th className="text-right p-3">Share (%)</th>
                        <th className="text-right p-3">YoY Growth</th>
                        <th className="text-right p-3">Shipments</th>
                        <th className="text-left p-3">Main Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topSuppliers.map((supplier, index) => (
                        <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                          <td className="p-3 font-semibold">{supplier.rank}</td>
                          <td className="p-3 font-medium">{supplier.name}</td>
                          <td className="p-3">
                            <span className="mr-2 text-xl">{supplier.flag}</span>
                            <span className="text-sm">{supplier.country}</span>
                          </td>
                          <td className="text-right p-3 font-semibold">${supplier.value2024.toLocaleString()}</td>
                          <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${supplier.value2023.toLocaleString()}</td>
                          <td className="text-right p-3">{supplier.share.toFixed(2)}%</td>
                          <td className="text-right p-3">
                            <span className={supplier.growth > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                              {supplier.growth > 0 ? '+' : ''}{supplier.growth.toFixed(2)}%
                            </span>
                          </td>
                          <td className="text-right p-3 text-sm">{supplier.shipments.toLocaleString()}</td>
                          <td className="p-3 text-sm text-neutral-600 dark:text-neutral-400">{supplier.mainProducts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Monthly Import Trends Section */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Monthly Import Trends (Year-over-Year)</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Indonesia's monthly import values from September 2024 to August 2025 show consistent growth compared to the previous year. 
              Peak import activity occurred in August 2025 at USD 30.75 Billion, while the lowest was in January 2025 at USD 18.77 Billion, 
              reflecting typical seasonal patterns in global trade.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                <strong>Key Insight:</strong> January 2025 showed the highest YoY growth at +6.29%, followed by March 2025 (+5.97%) and May 2025 (+4.61%). 
                All months demonstrated positive growth, with an average increase of +4.57% YoY, indicating robust import demand and economic recovery. 
                The upward trend from January to August 2025 suggests strengthening industrial activity and consumer demand.
              </p>
            </div>
          </div>

          <Tabs defaultValue="chart" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Chart View</TabsTrigger>
              <TabsTrigger value="table">Table View</TabsTrigger>
            </TabsList>

            <TabsContent value="chart">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <HighchartsReact highcharts={Highcharts} options={monthlyTrendsChartOptions} />
              </div>
            </TabsContent>

            <TabsContent value="table">
              <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-neutral-200 dark:border-neutral-700">
                        <th className="text-left p-3">Month</th>
                        <th className="text-right p-3">2024/2025 Value (USD M)</th>
                        <th className="text-right p-3">2023/2024 Value (USD M)</th>
                        <th className="text-right p-3">Difference (USD M)</th>
                        <th className="text-right p-3">YoY Growth (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyTrends.map((trend, index) => {
                        const difference = trend.value2024 - trend.value2023;
                        return (
                          <tr key={index} className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
                            <td className="p-3 font-semibold">{trend.month}</td>
                            <td className="text-right p-3 font-semibold text-primary-600">${trend.value2024.toLocaleString()}</td>
                            <td className="text-right p-3 text-neutral-600 dark:text-neutral-400">${trend.value2023.toLocaleString()}</td>
                            <td className="text-right p-3">
                              <span className={difference > 0 ? 'text-success-600 dark:text-success-400' : 'text-error-600 dark:text-error-400'}>
                                {difference > 0 ? '+' : ''}${difference.toLocaleString()}
                              </span>
                            </td>
                            <td className="text-right p-3">
                              <span className={trend.growth > 0 ? 'text-success-600 dark:text-success-400 font-semibold' : 'text-error-600 dark:text-error-400'}>
                                {trend.growth > 0 ? '+' : ''}{trend.growth.toFixed(2)}%
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                        <td className="p-3 font-bold">Total (12 Months)</td>
                        <td className="text-right p-3 font-bold text-primary-600">
                          ${monthlyTrends.reduce((sum, t) => sum + t.value2024, 0).toLocaleString()}
                        </td>
                        <td className="text-right p-3 font-semibold text-neutral-600 dark:text-neutral-400">
                          ${monthlyTrends.reduce((sum, t) => sum + t.value2023, 0).toLocaleString()}
                        </td>
                        <td className="text-right p-3 font-semibold text-success-600">
                          +${(monthlyTrends.reduce((sum, t) => sum + t.value2024, 0) - monthlyTrends.reduce((sum, t) => sum + t.value2023, 0)).toLocaleString()}
                        </td>
                        <td className="text-right p-3 font-bold text-success-600">
                          +{((monthlyTrends.reduce((sum, t) => sum + t.value2024, 0) / monthlyTrends.reduce((sum, t) => sum + t.value2023, 0) - 1) * 100).toFixed(2)}%
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>

      {/* Recent Import Shipments Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
              Recent Import Shipments
            </h2>
            <Badge variant="success" size="md">
              Live Data
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    <div className="flex items-center space-x-2 cursor-pointer hover:text-primary-600">
                      <Calendar className="w-4 h-4" />
                      <span>Date</span>
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    HS Code
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Product Description
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Importer
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Origin
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>Value (USD)</span>
                    </div>
                  </th>
                  <th className="text-left p-4 font-semibold text-neutral-900 dark:text-white">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody>
                {importData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/30 cursor-pointer"
                  >
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.date}
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" size="sm">
                        {item.hsCode}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-neutral-900 dark:text-white max-w-xs">
                      {item.product}
                    </td>
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.importer}
                    </td>
                    <td className="p-4 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.origin}
                    </td>
                    <td className="p-4 font-semibold text-neutral-900 dark:text-white">
                      ${item.value.toLocaleString()}
                    </td>
                    <td className="p-4">
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-5 h-5 text-success-600 dark:text-success-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-error-600 dark:text-error-400" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing 1-5 of 127,543 records
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">1</Button>
              <Button variant="primary" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">...</Button>
              <Button variant="outline" size="sm">50</Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clay.com Enhanced Design */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container-custom relative z-10">
          {/* Main Heading - Clay style */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <Badge variant="outline" className="text-sm font-medium px-4 py-2 border-neutral-300 dark:border-neutral-600">
                Start Your Journey
              </Badge>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent leading-tight">
              Turn your trade ideas into<br />reality today
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Join 300,000+ professionals using our platform to unlock global trade intelligence
            </p>
          </div>

          {/* Three Column CTA Cards - Enhanced */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            
            {/* Card 1 - Schedule a Demo */}
            <div className="group relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-transparent dark:from-neutral-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Calendar className="w-7 h-7 text-neutral-700 dark:text-neutral-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">
                  Schedule a Demo
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  See how Market Inside Data transforms trade intelligence. Book a personalized walkthrough with our team.
                </p>

                {/* Visual Preview - Minimalist */}
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-2xl p-6 mb-6 min-h-[200px] flex items-center justify-center border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="w-full space-y-3">
                    {/* Simplified calendar grid */}
                    <div className="grid grid-cols-7 gap-1.5">
                      {[...Array(21)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`aspect-square rounded-lg transition-all duration-300 ${
                            i === 10 
                              ? 'bg-primary-500 shadow-lg shadow-primary-500/30 scale-110' 
                              : i > 6 
                              ? 'bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-400 dark:group-hover:bg-neutral-600' 
                              : 'bg-neutral-200 dark:bg-neutral-800'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Select a time</span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="block group/btn">
                  <div className="relative overflow-hidden rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold py-4 text-center transition-all duration-300 group-hover/btn:shadow-lg">
                    <span className="relative z-10">Book Your Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Card 2 - Try for Free (Featured) */}
            <div className="group relative bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 transform hover:scale-[1.02]">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 z-20">
                <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              </div>
              
              <div className="relative p-8 text-white">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/30">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">
                  Try for Free
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  Start your 14-day trial with full access. No credit card required. Experience the complete platform.
                </p>

                {/* Visual Preview - Dashboard Charts */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 min-h-[200px] border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Chart elements */}
                    <div className="space-y-2">
                      <div className="h-3 bg-white/30 rounded-full"></div>
                      <div className="space-y-1.5">
                        {[85, 70, 55, 40].map((width, i) => (
                          <div 
                            key={i} 
                            className="h-7 bg-gradient-to-r from-white/40 to-white/20 rounded-lg transition-all duration-500 group-hover:from-white/50 group-hover:to-white/30" 
                            style={{width: `${width}%`}}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-white/30 rounded-full w-3/4"></div>
                      <div className="h-24 relative overflow-hidden rounded-lg bg-gradient-to-t from-white/40 via-white/20 to-white/10">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M0,80 L25,60 L50,40 L75,50 L100,20 L100,100 L0,100 Z" fill="url(#gradient)" opacity="0.5"/>
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor: 'white', stopOpacity: 0.4}} />
                              <stop offset="100%" style={{stopColor: 'white', stopOpacity: 0.1}} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-center gap-2 mt-2">
                      {[60, 80, 70].map((size, i) => (
                        <div key={i} className="relative" style={{width: `${size}px`, height: `${size}px`}}>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/20 group-hover:from-white/50 group-hover:to-white/30 transition-all duration-500"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link href="/pricing" className="block group/btn">
                  <div className="relative overflow-hidden rounded-xl bg-white text-primary-600 font-bold py-4 text-center transition-all duration-300 group-hover/btn:shadow-xl group-hover/btn:bg-neutral-50">
                    <span className="relative z-10">Start Free Trial</span>
                  </div>
                </Link>
                
                <div className="mt-4 flex items-center justify-center gap-6 text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Full access
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    No credit card
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 - Sign In */}
            <div className="group relative bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-50/50 to-transparent dark:from-neutral-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-7 h-7 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white">
                  Sign In
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  Access your personalized dashboard with detailed trade data, analytics, and insights instantly.
                </p>

                {/* Visual Preview - Login */}
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-2xl p-6 mb-6 min-h-[200px] flex flex-col justify-center border border-neutral-200/50 dark:border-neutral-700/50">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Email address</div>
                      <div className="h-11 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center px-4 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-colors duration-300">
                        <svg className="w-4 h-4 text-neutral-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span className="text-sm text-neutral-400">your@email.com</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Password</div>
                      <div className="h-11 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center px-4 group-hover:border-neutral-300 dark:group-hover:border-neutral-600 transition-colors duration-300">
                        <span className="text-sm text-neutral-400">••••••••••</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center text-xs text-neutral-600 dark:text-neutral-400 cursor-pointer">
                        <div className="w-4 h-4 border-2 border-neutral-300 dark:border-neutral-600 rounded mr-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        Remember me
                      </label>
                      <a href="#" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">Forgot?</a>
                    </div>
                  </div>
                </div>

                <Link href="/login" className="block group/btn">
                  <div className="relative overflow-hidden rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold py-4 text-center transition-all duration-300 group-hover/btn:shadow-lg">
                    <span className="relative z-10">Sign In Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Stats - Clay style */}
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-4 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success-500 animate-pulse"></div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">127,543+ records</span>
              </div>
              <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">14-day free trial</span>
              </div>
              <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">No credit card required</span>
              </div>
              <div className="w-px h-4 bg-neutral-300 dark:bg-neutral-700"></div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Cancel anytime</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section - Professional Accordion Style */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Everything you need to know about Indonesia Import Data
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>How often is the Indonesia import data updated?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed">
                    Our Indonesia import data is updated in real-time as new shipment records become available. 
                    Monthly aggregated statistics and trend reports are published within 5-7 business days after month-end. 
                    You'll always have access to the most current trade intelligence to support your business decisions.
                  </p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>Which commodities and HS codes are covered in the data?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Our database covers all major commodity categories imported into Indonesia, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mineral Fuels & Oils (HS 27) - Petroleum, LNG, Coal</li>
                    <li>Nuclear Reactors & Machinery (HS 84) - Industrial equipment, engines</li>
                    <li>Electrical Machinery (HS 85) - Electronics, semiconductors, telecom equipment</li>
                    <li>Vehicles & Auto Parts (HS 87) - Cars, trucks, components</li>
                    <li>Plastics & Polymers (HS 39)</li>
                    <li>Iron & Steel Products (HS 72, 73)</li>
                    <li>Pharmaceuticals (HS 30)</li>
                    <li>Organic Chemicals (HS 29)</li>
                  </ul>
                  <p className="mt-3">
                    Full 6-digit and 8-digit HS code classification is available for detailed product analysis.
                  </p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>What geographic coverage is included in Indonesia import data?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Our data covers imports from over 150 countries into Indonesia's major ports, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li><strong>Top Origin Countries:</strong> China (22%), Japan (8%), Singapore (8%), Thailand (6%), USA (5%), South Korea, Malaysia, India, Germany, Vietnam</li>
                    <li><strong>Major Ports:</strong> Tanjung Priok (Jakarta), Tanjung Perak (Surabaya), Belawan (Medan), Tanjung Emas (Semarang), Makassar, Balikpapan, Dumai, Banten</li>
                  </ul>
                  <p>
                    Each shipment record includes origin country, destination port, and transit route information where applicable.
                  </p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>How can I download and export the import data?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Our platform offers multiple export options for seamless data integration:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>CSV Export:</strong> Download filtered datasets in CSV format compatible with Excel, Google Sheets, and data analysis tools</li>
                    <li><strong>Excel (.xlsx):</strong> Pre-formatted Excel files with multiple sheets for different data categories</li>
                    <li><strong>JSON/API:</strong> REST API access for automated data feeds and system integrations</li>
                    <li><strong>PDF Reports:</strong> Generate professional reports with charts, tables, and insights</li>
                    <li><strong>Bulk Downloads:</strong> Schedule automated exports for large datasets</li>
                  </ul>
                  <p className="mt-3">
                    Premium subscribers get unlimited downloads and API calls. Free trial includes 100 exports per month.
                  </p>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>What information is included in each shipment record?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Each Indonesia import shipment record contains comprehensive details:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Shipment Date:</strong> Exact date of import clearance</li>
                    <li><strong>HS Code:</strong> 6-digit or 8-digit Harmonized System code</li>
                    <li><strong>Product Description:</strong> Detailed commodity description</li>
                    <li><strong>Importer Details:</strong> Company name, address, contact information</li>
                    <li><strong>Supplier/Exporter:</strong> Foreign supplier name and country of origin</li>
                    <li><strong>Quantity & Unit:</strong> Volume/weight with measurement units</li>
                    <li><strong>Value (USD):</strong> Shipment value in US dollars</li>
                    <li><strong>Port of Entry:</strong> Indonesian destination port</li>
                    <li><strong>Trend Indicators:</strong> YoY growth, market share, seasonal patterns</li>
                  </ul>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>Can I try the platform before purchasing a subscription?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Yes! We offer a <strong>14-day free trial</strong> with full platform access:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-3">
                    <li>Browse 127,543+ shipment records</li>
                    <li>Access all interactive charts and analytics</li>
                    <li>Download up to 100 records in CSV/Excel format</li>
                    <li>Test API integration (100 calls/day)</li>
                    <li>View sample reports and dashboards</li>
                  </ul>
                  <p>
                    No credit card required for trial signup. You can also schedule a personalized demo with our team to explore 
                    specific use cases for your business needs.
                  </p>
                </div>
              </details>

              {/* FAQ Item 7 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>What pricing plans are available?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    We offer flexible pricing plans to suit different business needs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Starter Plan:</strong> $299/month - 1,000 exports, basic analytics, email support</li>
                    <li><strong>Professional Plan:</strong> $599/month - 10,000 exports, advanced analytics, API access, priority support</li>
                    <li><strong>Enterprise Plan:</strong> Custom pricing - Unlimited exports, dedicated account manager, custom integrations, SLA guarantees</li>
                  </ul>
                  <p className="mt-3">
                    All plans include real-time data updates, interactive dashboards, and multi-user access. 
                    Annual subscriptions receive 20% discount. <Link href="/pricing" className="text-primary-600 hover:underline">View detailed pricing →</Link>
                  </p>
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <span>How can I get support or request custom data requirements?</span>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-neutral-700 dark:text-neutral-300">
                  <p className="leading-relaxed mb-3">
                    Our support team is available to assist you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-3">
                    <li><strong>Email Support:</strong> support@marketinsidedata.com (24-hour response time)</li>
                    <li><strong>Live Chat:</strong> Available Mon-Fri, 9 AM - 6 PM GMT+7</li>
                    <li><strong>Phone Support:</strong> Premium and Enterprise subscribers get dedicated hotline</li>
                    <li><strong>Knowledge Base:</strong> Comprehensive guides, tutorials, and FAQs</li>
                    <li><strong>Custom Requests:</strong> Fill out our <Link href="/contact" className="text-primary-600 hover:underline">custom data request form</Link></li>
                  </ul>
                  <p>
                    For enterprise clients, we offer custom data extraction, historical archives (10+ years), 
                    specialized analytics, and white-label solutions. Schedule a consultation to discuss your requirements.
                  </p>
                </div>
              </details>
            </div>

            {/* FAQ Footer CTA */}
            <div className="mt-12 text-center p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Our team is here to help you get the most out of Indonesia import data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="md">Contact Support</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="md">Schedule A Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  )
}





