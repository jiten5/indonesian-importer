'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/layouts/PageLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Download, Search, Filter, TrendingUp, Calendar, Ship } from 'lucide-react';
import { countries } from '@/constants/data';

interface ExportRecord {
  id: string;
  date: string;
  exporter: string;
  exporterCountry: string;
  buyer: string;
  buyerCountry: string;
  product: string;
  hsCode: string;
  quantity: number;
  unit: string;
  value: number;
  currency: string;
  port: string;
}

const generateMockData = (count: number): ExportRecord[] => {
  const products = [
    { name: 'Palm Oil', hsCode: '1511.10' },
    { name: 'Coffee Beans', hsCode: '0901.11' },
    { name: 'Rubber Products', hsCode: '4001.21' },
    { name: 'Garments', hsCode: '6203.42' },
    { name: 'Furniture', hsCode: '9403.60' },
  ];
  
  const ports = ['Jakarta', 'Surabaya', 'Medan', 'Semarang', 'Makassar'];
  const units = ['KG', 'PCS', 'M', 'L', 'SET'];
  
  return Array.from({ length: count }, (_, i) => {
    const product = products[i % products.length];
    const date = new Date(2024, Math.floor(i / 10), (i % 28) + 1);
    
    return {
      id: `EXP-${String(i + 1).padStart(6, '0')}`,
      date: date.toISOString().split('T')[0],
      exporter: `Indonesian Exporter ${String.fromCharCode(65 + (i % 26))}`,
      exporterCountry: 'Indonesia',
      buyer: `Buyer ${String.fromCharCode(65 + ((i + 5) % 26))}`,
      buyerCountry: countries[(i + 3) % 20],
      product: product.name,
      hsCode: product.hsCode,
      quantity: Math.floor(Math.random() * 10000) + 100,
      unit: units[i % units.length],
      value: Math.floor(Math.random() * 500000) + 10000,
      currency: 'USD',
      port: ports[i % ports.length],
    };
  });
};

export default function IndonesiaExportDataPage() {
  const [filters, setFilters] = useState({
    hsCode: '',
    buyer: '',
    exporter: '',
    port: '',
    dateFrom: '',
    dateTo: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mockData] = useState(() => generateMockData(100));
  const visibleData = mockData.slice(0, 10);

  const columns: ColumnDef<ExportRecord>[] = [
    {
      header: 'Date',
      accessorKey: 'date',
      cell: ({ getValue }) => (
        <span className="text-sm text-neutral-900 dark:text-neutral-50">{getValue() as string}</span>
      ),
    },
    {
      header: 'Exporter',
      accessorKey: 'exporter',
      cell: ({ getValue, row }) => (
        <div>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{getValue() as string}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.exporterCountry}</div>
        </div>
      ),
    },
    {
      header: 'Buyer',
      accessorKey: 'buyer',
      cell: ({ getValue, row }) => (
        <div>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{getValue() as string}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.buyerCountry}</div>
        </div>
      ),
    },
    {
      header: 'Product',
      accessorKey: 'product',
      cell: ({ getValue, row }) => (
        <div>
          <div className="text-sm text-neutral-900 dark:text-neutral-50">{getValue() as string}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">HS: {row.original.hsCode}</div>
        </div>
      ),
    },
    {
      header: 'Quantity',
      accessorKey: 'quantity',
      cell: ({ getValue, row }) => (
        <span className="text-sm text-neutral-900 dark:text-neutral-50">
          {(getValue() as number).toLocaleString()} {row.original.unit}
        </span>
      ),
    },
    {
      header: 'Value',
      accessorKey: 'value',
      cell: ({ getValue, row }) => (
        <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
          ${(getValue() as number).toLocaleString()} {row.original.currency}
        </span>
      ),
    },
    {
      header: 'Port',
      accessorKey: 'port',
      cell: ({ getValue }) => (
        <span className="text-sm text-neutral-900 dark:text-neutral-50">{getValue() as string}</span>
      ),
    },
  ];

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setFilters({
      hsCode: '',
      buyer: '',
      exporter: '',
      port: '',
      dateFrom: '',
      dateTo: '',
    });
  };

  const handleExport = () => {
    alert('Export functionality available with premium subscription');
  };

  return (
    <PageLayout>
      <div className="mb-12">
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              Export Data
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
              Indonesia Export Data
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Access comprehensive export records from Indonesia with detailed shipment information
            </p>
          </div>
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>

        <Card padding="lg" className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Search & Filter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                HS Code
              </label>
              <Input
                placeholder="e.g., 1511.10"
                value={filters.hsCode}
                onChange={(e) => setFilters({ ...filters, hsCode: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Buyer Name
              </label>
              <Input
                placeholder="Search buyer..."
                value={filters.buyer}
                onChange={(e) => setFilters({ ...filters, buyer: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Exporter Name
              </label>
              <Input
                placeholder="Search exporter..."
                value={filters.exporter}
                onChange={(e) => setFilters({ ...filters, exporter: e.target.value })}
              />
            </div>
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
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Date From
              </label>
              <Input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Date To
              </label>
              <Input
                type="date"
                value={filters.dateTo}
                onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="primary" onClick={handleSearch} disabled={isLoading}>
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              Reset Filters
            </Button>
          </div>
        </Card>

        <Card padding="lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
              Export Records
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Showing {visibleData.length} of {mockData.length} records
            </p>
          </div>
          <DataTable data={visibleData} columns={columns} />
          
          <div className="mt-6 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 text-center">
            <Ship className="w-12 h-12 text-neutral-400 dark:text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
              Unlock Full Access to {mockData.length}+ Export Records
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              You're viewing 10 of {mockData.length} results. Upgrade to access complete data, advanced
              filters, and export capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card padding="lg">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Export Trend Over Time
              </h3>
            </div>
            <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div className="text-center text-neutral-500 dark:text-neutral-400">
                <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Chart visualization available with premium subscription</p>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <div className="flex items-center gap-2 mb-4">
              <Ship className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Top Products by Value
              </h3>
            </div>
            <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div className="text-center text-neutral-500 dark:text-neutral-400">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Chart visualization available with premium subscription</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
