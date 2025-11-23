'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageLayout from '@/components/layouts/PageLayout';
import { fadeInUp } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import MultiSelect from '@/components/ui/MultiSelect';
import FilterSummary from '@/components/ui/FilterSummary';
import SavedFilters from '@/components/ui/SavedFilters';
import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { Download, Search, Filter, TrendingUp, Calendar, Ship, RefreshCw } from 'lucide-react';
import { countries } from '@/constants/data';

interface ImportRecord {
  id: string;
  date: string;
  importer: string;
  importerCountry: string;
  supplier: string;
  supplierCountry: string;
  product: string;
  hsCode: string;
  quantity: number;
  unit: string;
  value: number;
  currency: string;
  port: string;
}

const generateMockData = (count: number): ImportRecord[] => {
  const products = [
    { name: 'Electronic Components', hsCode: '8542.31' },
    { name: 'Cotton Textiles', hsCode: '5208.12' },
    { name: 'Machinery Parts', hsCode: '8483.10' },
    { name: 'Pharmaceutical Products', hsCode: '3004.20' },
    { name: 'Plastic Materials', hsCode: '3901.10' },
    { name: 'Steel Products', hsCode: '7210.49' },
    { name: 'Automotive Parts', hsCode: '8708.99' },
    { name: 'Chemical Compounds', hsCode: '2903.15' },
  ];
  
  const ports = ['Jakarta', 'Surabaya', 'Medan', 'Semarang', 'Makassar', 'Belawan', 'Tanjung Priok'];
  const units = ['KG', 'PCS', 'M', 'L', 'SET', 'MT', 'CBM'];
  const suppliers = [
    'Global Trading Co.', 'Asia Pacific Exports', 'Euro Supplies Ltd', 
    'China Manufacturing Inc', 'Singapore Traders', 'Malaysia Export Group',
    'Vietnam Industrial', 'Thailand Commerce', 'India Exports Ltd',
    'Korea Trading Corp', 'Japan Industries', 'Taiwan Suppliers'
  ];
  const importers = [
    'PT Indofood', 'PT Astra International', 'PT Unilever Indonesia',
    'PT Gudang Garam', 'PT Telkom Indonesia', 'PT Bank Mandiri',
    'PT Semen Indonesia', 'PT Pertamina', 'PT Garuda Indonesia',
    'PT Adaro Energy', 'PT Aneka Tambang', 'PT Wijaya Karya'
  ];
  
  return Array.from({ length: count }, (_, i) => {
    const product = products[i % products.length];
    const date = new Date(2024, Math.floor(i / 10) % 12, (i % 28) + 1);
    
    return {
      id: `IMP-${String(i + 1).padStart(6, '0')}`,
      date: date.toISOString().split('T')[0],
      importer: importers[i % importers.length],
      importerCountry: 'Indonesia',
      supplier: suppliers[i % suppliers.length],
      supplierCountry: countries[(i + 3) % 20],
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

export default function IndonesiaImportDataPage() {
  const [filters, setFilters] = useState({
    hsCode: '',
    searchQuery: '',
    suppliers: [] as string[],
    importers: [] as string[],
    ports: [] as string[],
    countries: [] as string[],
    products: [] as string[],
    dateFrom: '',
    dateTo: '',
    minValue: '',
    maxValue: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mockData] = useState(() => generateMockData(200));

  // Extract unique values for multi-select options
  const filterOptions = useMemo(() => {
    const uniqueSuppliers = [...new Set(mockData.map(d => d.supplier))].sort();
    const uniqueImporters = [...new Set(mockData.map(d => d.importer))].sort();
    const uniquePorts = [...new Set(mockData.map(d => d.port))].sort();
    const uniqueCountries = [...new Set(mockData.map(d => d.supplierCountry))].sort();
    const uniqueProducts = [...new Set(mockData.map(d => d.product))].sort();

    // Count occurrences for each option
    const countOccurrences = (arr: string[], key: keyof ImportRecord) => {
      const counts: Record<string, number> = {};
      mockData.forEach(item => {
        const value = item[key] as string;
        counts[value] = (counts[value] || 0) + 1;
      });
      return arr.map(value => ({
        value,
        label: value,
        count: counts[value] || 0
      }));
    };

    return {
      suppliers: countOccurrences(uniqueSuppliers, 'supplier'),
      importers: countOccurrences(uniqueImporters, 'importer'),
      ports: countOccurrences(uniquePorts, 'port'),
      countries: countOccurrences(uniqueCountries, 'supplierCountry'),
      products: countOccurrences(uniqueProducts, 'product'),
    };
  }, [mockData]);

  // Apply filters to data
  const filteredData = useMemo(() => {
    return mockData.filter(item => {
      // Text search across multiple fields
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = `${item.importer} ${item.supplier} ${item.product} ${item.hsCode}`.toLowerCase();
        if (!searchableText.includes(query)) return false;
      }

      // HS Code filter
      if (filters.hsCode && !item.hsCode.includes(filters.hsCode)) return false;

      // Multi-select filters
      if (filters.suppliers.length > 0 && !filters.suppliers.includes(item.supplier)) return false;
      if (filters.importers.length > 0 && !filters.importers.includes(item.importer)) return false;
      if (filters.ports.length > 0 && !filters.ports.includes(item.port)) return false;
      if (filters.countries.length > 0 && !filters.countries.includes(item.supplierCountry)) return false;
      if (filters.products.length > 0 && !filters.products.includes(item.product)) return false;

      // Date range filter
      if (filters.dateFrom && item.date < filters.dateFrom) return false;
      if (filters.dateTo && item.date > filters.dateTo) return false;

      // Value range filter
      if (filters.minValue && item.value < parseFloat(filters.minValue)) return false;
      if (filters.maxValue && item.value > parseFloat(filters.maxValue)) return false;

      return true;
    });
  }, [mockData, filters]);

  const visibleData = filteredData.slice(0, 10);

  const columns: ColumnDef<ImportRecord>[] = [
    {
      header: 'Date',
      accessorKey: 'date',
      cell: ({ getValue }) => (
        <span className="text-sm text-neutral-900 dark:text-neutral-50">{getValue() as string}</span>
      ),
    },
    {
      header: 'Importer',
      accessorKey: 'importer',
      cell: ({ getValue, row }) => (
        <div>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{getValue() as string}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.importerCountry}</div>
        </div>
      ),
    },
    {
      header: 'Supplier',
      accessorKey: 'supplier',
      cell: ({ getValue, row }) => (
        <div>
          <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{getValue() as string}</div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.supplierCountry}</div>
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
      searchQuery: '',
      suppliers: [],
      importers: [],
      ports: [],
      countries: [],
      products: [],
      dateFrom: '',
      dateTo: '',
      minValue: '',
      maxValue: '',
    });
  };

  const handleRemoveFilter = (key: string, value?: string) => {
    if (value && Array.isArray(filters[key as keyof typeof filters])) {
      const arrayValue = filters[key as keyof typeof filters] as string[];
      setFilters({
        ...filters,
        [key]: arrayValue.filter((v: string) => v !== value),
      });
    } else {
      setFilters({
        ...filters,
        [key]: Array.isArray(filters[key as keyof typeof filters]) ? [] : '',
      });
    }
  };

  const handleExport = () => {
    alert('Export functionality available with premium subscription');
  };

  return (
    <PageLayout>
      <motion.div
        className="mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <Badge variant="primary" className="mb-3">
              Import Data
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
              Indonesia Import Data
            </h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Access comprehensive import records from Indonesia with detailed shipment information
            </p>
          </div>
          <Button variant="outline" onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Card padding="lg" className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Advanced Search & Filters
            </h2>
            {Object.values(filters).some(v => Array.isArray(v) ? v.length > 0 : v !== '') && (
              <Badge variant="primary" className="ml-2">
                {filteredData.length} results
              </Badge>
            )}
          </div>

          {/* Saved Filters */}
          <SavedFilters
            currentFilters={filters}
            onApplyFilter={(savedFilters) => setFilters(savedFilters as typeof filters)}
          />

          {/* Global Search */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              <Search className="w-4 h-4 inline mr-1" />
              Quick Search
            </label>
            <Input
              placeholder="Search across importer, supplier, product, or HS code..."
              value={filters.searchQuery}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
              className="text-base"
            />
          </div>

          {/* Filter Summary */}
          <FilterSummary
            filters={filters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleReset}
            className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Multi-Select Filters */}
            <MultiSelect
              label="Products"
              options={filterOptions.products}
              value={filters.products}
              onChange={(products) => setFilters({ ...filters, products })}
              placeholder="Select products..."
              searchable
            />

            <MultiSelect
              label="Suppliers"
              options={filterOptions.suppliers}
              value={filters.suppliers}
              onChange={(suppliers) => setFilters({ ...filters, suppliers })}
              placeholder="Select suppliers..."
              searchable
            />

            <MultiSelect
              label="Importers"
              options={filterOptions.importers}
              value={filters.importers}
              onChange={(importers) => setFilters({ ...filters, importers })}
              placeholder="Select importers..."
              searchable
            />

            <MultiSelect
              label="Ports"
              options={filterOptions.ports}
              value={filters.ports}
              onChange={(ports) => setFilters({ ...filters, ports })}
              placeholder="Select ports..."
              searchable
            />

            <MultiSelect
              label="Supplier Countries"
              options={filterOptions.countries}
              value={filters.countries}
              onChange={(countries) => setFilters({ ...filters, countries })}
              placeholder="Select countries..."
              searchable
            />

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

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Min Value (USD)
              </label>
              <Input
                type="number"
                placeholder="0"
                value={filters.minValue}
                onChange={(e) => setFilters({ ...filters, minValue: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Max Value (USD)
              </label>
              <Input
                type="number"
                placeholder="1000000"
                value={filters.maxValue}
                onChange={(e) => setFilters({ ...filters, maxValue: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button 
              variant="primary" 
              onClick={handleSearch} 
              disabled={isLoading}
            >
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? 'Searching...' : `Search ${filteredData.length} Records`}
            </Button>
            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset All Filters
            </Button>
          </div>
        </Card>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card padding="lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
              Import Records
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Showing {visibleData.length} of {filteredData.length} filtered records 
                {filteredData.length !== mockData.length && (
                  <span className="text-primary-600 dark:text-primary-400 ml-1">
                    (from {mockData.length} total)
                  </span>
                )}
              </p>
              {filteredData.length > 0 && (
                <div className="flex gap-2">
                  <Badge variant="success">
                    Total Value: ${filteredData.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                  </Badge>
                  <Badge variant="secondary">
                    {filteredData.length} shipments
                  </Badge>
                </div>
              )}
            </div>
          </div>
          <DataTable data={visibleData} columns={columns} />
          
          <div className="mt-6 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border-2 border-dashed border-neutral-300 dark:border-neutral-700 text-center">
            <Ship className="w-12 h-12 text-neutral-400 dark:text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
              Unlock Full Access to {filteredData.length}+ Import Records
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              You're viewing 10 of {filteredData.length} filtered results. Upgrade to access complete data, 
              unlimited filtering, and export capabilities.
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
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card padding="lg">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Import Trend Over Time
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
              <Ship className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Top Products by Volume
              </h3>
            </div>
            <div className="h-64 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div className="text-center text-neutral-500 dark:text-neutral-400">
                <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Chart visualization available with premium subscription</p>
              </div>
            </div>
          </Card>
      </motion.div>
    </PageLayout>
  );
}
