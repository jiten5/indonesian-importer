'use client';

import React, { useState } from 'react';
import DataLayout from '@/components/layouts/DataLayout';
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
  });

  const mockData = generateMockData(100);
  const visibleData = mockData.slice(0, 10);

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
    });
    setSearchQuery('');
  };

  // Sidebar filters
  const filtersSidebar = (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
          Filters
        </h3>
      </div>

      {/* Search Type */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Search Type
        </label>
        <Select
          options={[
            { label: 'All Records', value: 'all' },
            { label: 'Imports Only', value: 'import' },
            { label: 'Exports Only', value: 'export' },
          ]}
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
      </div>

      {/* Search By */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Search By
        </label>
        <Select
          options={[
            { label: 'Product Description', value: 'product' },
            { label: 'HS Code', value: 'hsCode' },
            { label: 'Company Name', value: 'company' },
          ]}
          value={filters.searchBy}
          onChange={(e) => setFilters({ ...filters, searchBy: e.target.value })}
        />
      </div>

      {/* Search Query */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Search Query
        </label>
        <Input
          placeholder="Enter search term..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftIcon={<Search className="w-4 h-4" />}
        />
      </div>

      {/* HS Code */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          HS Code
        </label>
        <Input
          placeholder="e.g., 8542.31"
          value={filters.hsCode}
          onChange={(e) => setFilters({ ...filters, hsCode: e.target.value })}
        />
      </div>

      {/* Origin Country */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Origin Country
        </label>
        <Select
          options={countries.slice(0, 20).map((c) => ({ label: c, value: c }))}
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        />
      </div>

      {/* Date Range */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Date Range
        </label>
        <div className="space-y-2">
          <Input
            type="date"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
            placeholder="From"
          />
          <Input
            type="date"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
            placeholder="To"
          />
        </div>
      </div>

      {/* Port */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Port
        </label>
        <Input
          placeholder="e.g., Jakarta"
          value={filters.port}
          onChange={(e) => setFilters({ ...filters, port: e.target.value })}
        />
      </div>

      {/* Action Buttons */}
      <div className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
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
    <DataLayout sidebar={filtersSidebar} title="Trade Data Search">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Indonesia Trade Intelligence
        </h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          Search and analyze trade data from 195+ countries
        </p>
      </div>

      {/* Tabs */}
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
    </DataLayout>
  );
}
