'use client';

import React, { useState } from 'react';
import { DualSearch } from '@/components/ui/DualSearch';
import MainLayout from '@/components/layouts/MainLayout';
import { DataTable } from '@/components/ui/DataTable';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Skeleton from '@/components/ui/Skeleton';
import { countries, industries } from '@/constants/data';
import { TradeRecord } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { Ship, Package, MapPin, Calendar, Search, Filter, X, Lock } from 'lucide-react';
import Link from 'next/link';
import { title } from 'process';

// Mock trade data - first 10 rows visible, rest masked
const generateMockData = (count: number): TradeRecord[] => {
  const products = ['Electronic Components', 'Textiles', 'Machinery Parts', 'Chemicals', 'Medical Equipment'];
  const methods: Array<'sea' | 'air' | 'land'> = ['sea', 'air', 'land'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `${i + 1}`,
    date: new Date(2024, 0, 1 + i),
    type: (i % 2 === 0 ? 'import' : 'export') as 'import' | 'export',
    importerName: `Company ${String.fromCharCode(65 + (i % 26))} Trading Co.`,
    importerCountry: 'Indonesia',
    exporterName: `${String.fromCharCode(65 + ((i + 5) % 26))} Exports Ltd.`,
    exporterCountry: countries[i % countries.length],
    productDescription: products[i % products.length],
    hsCode: `85${42 + (i % 10)}.${31 + (i % 5)}`,
    hsChapter: `85${42 + (i % 10)}`,
    quantity: 1000 + i * 500,
    unit: 'kg',
    value: 10000 + i * 5000,
    currency: 'USD',
    portOfLoading: `Port ${String.fromCharCode(65 + (i % 10))}`,
    portOfDischarge: 'Jakarta',
    shippingMethod: methods[i % methods.length],
    originCountry: countries[i % countries.length],
    destinationCountry: 'Indonesia',
    masked: i >= 10,
  }));
};

export default function SearchPage() {
  const [activeTab, setActiveTab] = useState('shipments');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'all',
    searchBy: 'product',
    hsCode: '',
    country: '',
    dateFrom: '',
    dateTo: '',
    port: '',
    product: '',
    supplier: '',
    importer: '',
    supplierCountry: '',
    minValue: '',
    maxValue: '',
  });

  const mockData = generateMockData(100);
  // Filter mockData based on advanced filters
  const filteredData = mockData.filter((row) => {
    // Products
    if (filters.product && !row.productDescription.toLowerCase().includes(filters.product.toLowerCase())) return false;
    // Suppliers
    if (filters.supplier && !row.exporterName.toLowerCase().includes(filters.supplier.toLowerCase())) return false;
    // Importers
    if (filters.importer && !row.importerName.toLowerCase().includes(filters.importer.toLowerCase())) return false;
    // Ports
    if (filters.port && !row.portOfLoading.toLowerCase().includes(filters.port.toLowerCase())) return false;
    // Supplier Countries
    if (filters.supplierCountry && !row.exporterCountry.toLowerCase().includes(filters.supplierCountry.toLowerCase())) return false;
    // HS Code
    if (filters.hsCode && !row.hsCode.toLowerCase().includes(filters.hsCode.toLowerCase())) return false;
    // Date From
    if (filters.dateFrom && new Date(row.date) < new Date(filters.dateFrom)) return false;
    // Date To
    if (filters.dateTo && new Date(row.date) > new Date(filters.dateTo)) return false;
    // Min Value
    if (filters.minValue && row.value < Number(filters.minValue)) return false;
    // Max Value
    if (filters.maxValue && row.value > Number(filters.maxValue)) return false;
    return true;
  });
  const visibleData = filteredData.slice(0, 10);

  // Define columns for shipments table
  const shipmentColumns: ColumnDef<TradeRecord>[] = [
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }) => (
        <span className="text-sm whitespace-nowrap">{new Date(row.original.date).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: 'importerName',
      header: 'Importer',
      cell: ({ row }) => (
        <div className="min-w-[150px]">
          <div className="font-medium text-sm">{row.original.importerName}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.importerCountry}</div>
        </div>
      ),
    },
    {
      accessorKey: 'exporterName',
      header: 'Exporter',
      cell: ({ row }) => (
        <div className="min-w-[150px]">
          <div className="font-medium text-sm">{row.original.exporterName}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.exporterCountry}</div>
        </div>
      ),
    },
    {
      accessorKey: 'productDescription',
      header: 'Product',
      cell: ({ row }) => (
        <div className="min-w-[200px]">
          <div className="text-sm">{row.original.productDescription}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">HS: {row.original.hsCode}</div>
        </div>
      ),
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      cell: ({ row }) => (
        <span className="text-sm whitespace-nowrap">
          {row.original.quantity.toLocaleString()} {row.original.unit}
        </span>
      ),
    },
    {
      accessorKey: 'value',
      header: 'Value',
      cell: ({ row }) => (
        <span className="text-sm font-medium whitespace-nowrap">
          ${row.original.value.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: 'shippingMethod',
      header: 'Method',
      cell: ({ row }) => (
        <Badge variant="default" className="text-xs">
          {row.original.shippingMethod}
        </Badge>
      ),
    },
  ];

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleResetFilters = () => {
    setFilters({
      type: 'all',
      searchBy: 'product',
      hsCode: '',
      country: '',
      dateFrom: '',
      dateTo: '',
      port: '',
      product: '',
      supplier: '',
      importer: '',
      supplierCountry: '',
      minValue: '',
      maxValue: '',
    });
    setSearchQuery('');
  };

  // Sample import data for filters (from indonesia-import/page.tsx)
  const importData = [
    { id: 1, date: '2025-11-20', hsCode: '8471.30', product: 'Portable Digital Automatic Data Processing Machines', importer: 'PT Tech Solutions Indonesia', exporter: 'Samsung Electronics Co., Ltd', origin: 'South Korea', quantity: 2500, unit: 'Units', value: 2850000, port: 'Jakarta', trend: 'up' },
    { id: 2, date: '2025-11-19', hsCode: '8517.12', product: 'Telephones for Cellular Networks', importer: 'PT Mobile Distribusi', exporter: 'Apple Inc.', origin: 'China', quantity: 5000, unit: 'Units', value: 4500000, port: 'Surabaya', trend: 'up' },
    { id: 3, date: '2025-11-18', hsCode: '8708.29', product: 'Other Parts and Accessories of Motor Vehicles', importer: 'PT Automotive Parts Indonesia', exporter: 'Toyota Motor Corporation', origin: 'Japan', quantity: 1200, unit: 'Kg', value: 850000, port: 'Jakarta', trend: 'down' },
    { id: 4, date: '2025-11-17', hsCode: '8544.42', product: 'Electric Conductors for Voltage Not Exceeding 1000V', importer: 'PT Electrical Supplies', exporter: 'Prysmian Group', origin: 'Italy', quantity: 5000, unit: 'Meters', value: 125000, port: 'Semarang', trend: 'up' },
    { id: 5, date: '2025-11-16', hsCode: '3004.90', product: 'Medicaments Containing Other Ingredients', importer: 'PT Pharma Indonesia', exporter: 'Pfizer Inc.', origin: 'USA', quantity: 800, unit: 'Kg', value: 950000, port: 'Jakarta', trend: 'up' }
  ];

  // Extract unique values for dropdowns
  const productOptions = Array.from(new Set(importData.map(d => d.product))).map(p => ({ label: p, value: p }));
  const supplierOptions = Array.from(new Set(importData.map(d => d.exporter))).map(s => ({ label: s, value: s }));
  const importerOptions = Array.from(new Set(importData.map(d => d.importer))).map(i => ({ label: i, value: i }));
  const portOptions = Array.from(new Set(importData.map(d => d.port))).map(p => ({ label: p, value: p }));
  const countryOptions = Array.from(new Set(importData.map(d => d.origin))).map(c => ({ label: c, value: c }));
  const hsCodeOptions = Array.from(new Set(importData.map(d => d.hsCode))).map(h => ({ label: h, value: h }));

  // Advanced sidebar filters (matches attached image)
  const filtersSidebar = (
    <div className="flex flex-col gap-6">
      {/* Date From */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Date From</label>
        <Input type="date" value={filters.dateFrom || ''} onChange={e => setFilters({ ...filters, dateFrom: e.target.value })} placeholder="dd-mm-yyyy" />
      </div>
      {/* Date To */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Date To</label>
        <Input type="date" value={filters.dateTo || ''} onChange={e => setFilters({ ...filters, dateTo: e.target.value })} placeholder="dd-mm-yyyy" />
      </div>
      {/* Products */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Products</label>
        <Select options={productOptions} value={filters.product || ''} onChange={e => setFilters({ ...filters, product: e.target.value })} />
      </div>
      {/* HS Code */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">HS Code</label>
        <Select options={hsCodeOptions} value={filters.hsCode || ''} onChange={e => setFilters({ ...filters, hsCode: e.target.value })} />
      </div>
      {/* Ports */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Ports</label>
        <Select options={portOptions} value={filters.port || ''} onChange={e => setFilters({ ...filters, port: e.target.value })} />
      </div>
      {/* Supplier Countries */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Supplier Countries</label>
        <Select options={countryOptions} value={filters.supplierCountry || ''} onChange={e => setFilters({ ...filters, supplierCountry: e.target.value })} />
      </div>
      {/* Importers */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Importers</label>
        <Select options={importerOptions} value={filters.importer || ''} onChange={e => setFilters({ ...filters, importer: e.target.value })} />
      </div>
      {/* Suppliers */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Suppliers</label>
        <Select options={supplierOptions} value={filters.supplier || ''} onChange={e => setFilters({ ...filters, supplier: e.target.value })} />
      </div>
      {/* Min Value (USD) */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Min Value (USD)</label>
        <Input type="number" value={filters.minValue || ''} onChange={e => setFilters({ ...filters, minValue: e.target.value })} placeholder="0" />
      </div>
      {/* Max Value (USD) */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Max Value (USD)</label>
        <Input type="number" value={filters.maxValue || ''} onChange={e => setFilters({ ...filters, maxValue: e.target.value })} placeholder="1000000" />
      </div>
      {/* Action Buttons */}
      <div className="col-span-full space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <Button variant="primary" className="w-full" onClick={handleSearch}>
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
        <Button variant="outline" className="w-full" onClick={handleResetFilters}>
          <X className="w-4 h-4 mr-2" />
          Reset Filters
        </Button>
      </div>
    </div>
  );

  return (
    <MainLayout>
       
      {/* Hero Section */}
      <section className="relative overflow-hidden section-spacing section-bg flex items-center justify-center pt-12 pb-8">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
        <div className="relative z-10 w-full">
          <div className="container-custom text-center mx-auto flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
              How We Help Businesses Like Yours Win Globally
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Discover how businesses leverage Market Inside to expand globally, manage risks, and grow with actionable trade data.
            </p>
            
            {/* Search Bar */}
            <div className="w-full max-w-4xl mx-auto">
              <DualSearch />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Sidebar */}
      <div className="container-custom py-8">
        {/* Sidebar and Results Table Parallel Layout */}
        <div className="flex flex-row gap-8 items-start w-full">
          {/* Sidebar */}
          <aside className="w-80 flex-shrink-0 sticky top-24">
            {filtersSidebar}
          </aside>

          <main className="flex-1 min-w-0">
          <Tabs value={activeTab} onValueChange={setActiveTab} variant="line" defaultValue="shipments">
            <TabsList className="mb-6">
              <TabsTrigger value="shipments">
                <Ship className="w-4 h-4 mr-2" />
                Shipments
              </TabsTrigger>
              <TabsTrigger value="importers">
                <Package className="w-4 h-4 mr-2" />
                Importers
              </TabsTrigger>
              <TabsTrigger value="suppliers">
                <MapPin className="w-4 h-4 mr-2" />
                Suppliers
              </TabsTrigger>
              <TabsTrigger value="visualize">
                <Calendar className="w-4 h-4 mr-2" />
                Visualize
              </TabsTrigger>
            </TabsList>

            {/* Shipments Tab */}
            <TabsContent value="shipments">
              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(10)].map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                  ))}
                </div>
              ) : (
                <>
                  <DataTable
                    columns={shipmentColumns}
                    data={visibleData}
                    enableSorting
                    enableFiltering
                    enablePagination={false}
                    enableExport
                    pageSize={10}
                  />

                  {/* Upgrade Prompt */}
                  <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                          Unlock Full Access to 50M+ Records
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                          You're viewing 10 of 100 results. Upgrade to access complete trade data,
                          advanced analytics, and export capabilities.
                        </p>
                        <div className="flex gap-3">
                          <Link href="/pricing">
                            <Button variant="primary">
                              View Pricing Plans
                            </Button>
                          </Link>
                          <Link href="/contact">
                            <Button variant="outline">
                              Contact Sales
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </TabsContent>

            {/* Importers Tab */}
            <TabsContent value="importers">
              <div className="text-center py-12 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                <Package className="w-16 h-16 mx-auto mb-4 text-neutral-400 dark:text-neutral-600" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Importers Database
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Access detailed importer profiles, contact information, and trade history
                </p>
                <Link href="/pricing">
                  <Button variant="primary">Upgrade to Access</Button>
                </Link>
              </div>
            </TabsContent>

            {/* Suppliers Tab */}
            <TabsContent value="suppliers">
              <div className="text-center py-12 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-neutral-400 dark:text-neutral-600" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Suppliers Network
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Discover verified suppliers, exporters, and manufacturers worldwide
                </p>
                <Link href="/pricing">
                  <Button variant="primary">Upgrade to Access</Button>
                </Link>
              </div>
            </TabsContent>

            {/* Visualize Tab */}
            <TabsContent value="visualize">
              <div className="text-center py-12 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-neutral-400 dark:text-neutral-600" />
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Data Visualization
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Interactive charts, trend analysis, and trade flow visualizations
                </p>
                <Link href="/pricing">
                  <Button variant="primary">Upgrade to Access</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </main>
        </div>
      </div>
    </MainLayout>
  );
}

