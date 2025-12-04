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
import { Ship, Package, MapPin, Calendar, Search, Filter, X, Lock, Download, Settings, Eye, Mail, Phone, Video } from 'lucide-react';
import Link from 'next/link';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription } from '@/components/ui/Modal';

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
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [showColumnEditor, setShowColumnEditor] = useState(false);
  const [enquiryModalTab, setEnquiryModalTab] = useState<'enquiry' | 'demo'>('enquiry');
  const [currentPage, setCurrentPage] = useState(1);
  const [valueRange, setValueRange] = useState<[number, number]>([0, 1000000]);
  const [visibleColumns, setVisibleColumns] = useState({
    date: true,
    importer: true,
    exporter: true,
    product: true,
    hsCode: true,
    quantity: true,
    value: true,
    netWeight: true,
    method: true,
    view: true,
  });
  const [filters, setFilters] = useState({
    type: 'all',
    searchBy: 'product',
    hsCode: '',
    country: '',
    timePeriod: 'last-30-days',
    port: '',
    supplier: '',
    importer: '',
    supplierCountry: '',
    minValue: '',
    maxValue: '',
  });

  const mockData = generateMockData(100);
  
  // Filter mockData based on advanced filters
  const filteredData = mockData.filter((row) => {
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
    // Value range
    if (row.value < valueRange[0] || row.value > valueRange[1]) return false;
    return true;
  });
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = filteredData.slice(startIndex, endIndex);

  // Define columns for shipments table
  const shipmentColumns: ColumnDef<TradeRecord>[] = [
    {
      accessorKey: 'view',
      header: 'View',
      cell: ({ row }: any) => (
        <Button variant="outline" size="sm" onClick={() => setShowEnquiryModal(true)}>
          <Eye className="w-4 h-4" />
        </Button>
      ),
    },
    {
      accessorKey: 'date',
      header: 'Date',
      cell: ({ row }: any) => (
        <span className="text-sm whitespace-nowrap">{new Date(row.original.date).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: 'importerName',
      header: 'Importer',
      cell: ({ row }: any) => (
        <div className="min-w-[150px]">
          <button
            onClick={() => setShowEnquiryModal(true)}
            className="text-left hover:underline focus:outline-none"
          >
            <div className="font-medium text-sm text-primary-600 dark:text-primary-400 flex items-center gap-2">
              {row.original.importerName}
              <Lock className="w-3 h-3" />
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.importerCountry}</div>
          </button>
        </div>
      ),
    },
    {
      accessorKey: 'exporterName',
      header: 'Exporter',
      cell: ({ row }: any) => (
        <div className="min-w-[150px]">
          <button
            onClick={() => setShowEnquiryModal(true)}
            className="text-left hover:underline focus:outline-none"
          >
            <div className="font-medium text-sm text-primary-600 dark:text-primary-400 flex items-center gap-2">
              {row.original.exporterName}
              <Lock className="w-3 h-3" />
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">{row.original.exporterCountry}</div>
          </button>
        </div>
      ),
    },
    {
      accessorKey: 'productDescription',
      header: 'Product',
      cell: ({ row }: any) => (
        <div className="min-w-[200px]">
          <div className="text-sm">{row.original.productDescription}</div>
        </div>
      ),
    },
    {
      accessorKey: 'hsCode',
      header: 'HS Code',
      cell: ({ row }: any) => (
        <Badge variant="outline" className="text-xs">
          {row.original.hsCode}
        </Badge>
      ),
    },
    {
      accessorKey: 'quantity',
      header: 'Quantity',
      cell: ({ row }: any) => (
        <span className="text-sm whitespace-nowrap">
          {row.original.quantity.toLocaleString()} {row.original.unit}
        </span>
      ),
    },
    {
      accessorKey: 'netWeight',
      header: 'Net Weight',
      cell: ({ row }: any) => (
        <span className="text-sm whitespace-nowrap">
          {(row.original.quantity * 0.95).toFixed(0)} kg
        </span>
      ),
    },
    {
      accessorKey: 'value',
      header: 'Value',
      cell: ({ row }: any) => (
        <span className="text-sm font-medium whitespace-nowrap">
          ${row.original.value.toLocaleString()}
        </span>
      ),
    },
    {
      accessorKey: 'shippingMethod',
      header: 'Method',
      cell: ({ row }: any) => (
        <Badge variant="default" className="text-xs">
          {row.original.shippingMethod}
        </Badge>
      ),
    },
  ].filter(col => {
    const key = col.accessorKey as string;
    return visibleColumns[key as keyof typeof visibleColumns] !== false;
  });

  const handleSearch = () => {
    setIsLoading(true);
    setCurrentPage(1); // Reset to first page on new search
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
      timePeriod: 'last-30-days',
      port: '',
      supplier: '',
      importer: '',
      supplierCountry: '',
      minValue: '',
      maxValue: '',
    });
    setSearchQuery('');
    setValueRange([0, 1000000]);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const timePeriodOptions = [
    { label: 'Last 7 days', value: 'last-7-days' },
    { label: 'Last 30 days', value: 'last-30-days' },
    { label: 'Last 3 months', value: 'last-3-months' },
    { label: 'Last 6 months', value: 'last-6-months' },
    { label: 'Last year', value: 'last-year' },
    { label: 'Custom range', value: 'custom' },
  ];

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

  // Enquiry/Demo Modal Content
  const EnquiryDemoModal = () => (
    <Modal open={showEnquiryModal} onOpenChange={setShowEnquiryModal}>
      <ModalContent className="max-w-2xl">
        <ModalHeader>
          <ModalTitle>Get Access to Full Data</ModalTitle>
        </ModalHeader>
        <div className="space-y-6 p-6">
          {/* Sub-tabs */}
          <div className="flex space-x-2 border-b border-neutral-200 dark:border-neutral-800">
            <button
              onClick={() => setEnquiryModalTab('enquiry')}
              className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                enquiryModalTab === 'enquiry'
                  ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Enquiry Form
            </button>
            <button
              onClick={() => setEnquiryModalTab('demo')}
              className={`py-3 px-6 font-medium transition-colors border-b-2 ${
                enquiryModalTab === 'demo'
                  ? 'border-secondary-600 text-secondary-600 dark:border-secondary-400 dark:text-secondary-400'
                  : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              <Video className="w-4 h-4 inline mr-2" />
              Schedule A Demo
            </button>
          </div>

          {/* Enquiry Form Tab */}
          {enquiryModalTab === 'enquiry' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email</label>
                <Input type="email" placeholder="your.email@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone Number</label>
                <Input type="tel" placeholder="+62 812 3456 7890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-neutral-800 dark:text-white"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <Button variant="primary" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Submit Enquiry
              </Button>
            </div>
          )}

          {/* Schedule Demo Tab */}
          {enquiryModalTab === 'demo' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                <Input placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Business Email</label>
                <Input type="email" placeholder="your.email@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Phone Number</label>
                <Input type="tel" placeholder="+62 812 3456 7890" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Company Name</label>
                <Input placeholder="Your company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Preferred Date</label>
                <Input type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Preferred Time</label>
                <Select options={[
                  { label: '09:00 AM', value: '09:00' },
                  { label: '11:00 AM', value: '11:00' },
                  { label: '02:00 PM', value: '14:00' },
                  { label: '04:00 PM', value: '16:00' },
                ]} />
              </div>
              <Button variant="primary" className="w-full">
                <Video className="w-4 h-4 mr-2" />
                Schedule Demo
              </Button>
            </div>
          )}
        </div>
      </ModalContent>
    </Modal>
  );

  // Column Editor Modal
  const ColumnEditorModal = () => (
    <Modal open={showColumnEditor} onOpenChange={setShowColumnEditor}>
      <ModalContent className="max-w-md">
        <ModalHeader>
          <ModalTitle>Edit Columns</ModalTitle>
          <ModalDescription>
            Select which columns to display in the table
          </ModalDescription>
        </ModalHeader>
        <div className="space-y-3 p-6">
          {Object.keys(visibleColumns).map((column) => (
            <label key={column} className="flex items-center space-x-3 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-lg cursor-pointer">
              <input
                type="checkbox"
                checked={visibleColumns[column as keyof typeof visibleColumns]}
                onChange={(e) => setVisibleColumns({ ...visibleColumns, [column]: e.target.checked })}
                className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-neutral-900 dark:text-white capitalize">
                {column.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <Button variant="primary" className="w-full" onClick={() => setShowColumnEditor(false)}>
              Apply Changes
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );

  // Advanced sidebar filters (matches attached image)
  const filtersSidebar = (
    <div className="flex flex-col gap-6">
      {/* Duration - Masked */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Duration</label>
        <div 
          className="relative cursor-pointer"
          onClick={() => setShowEnquiryModal(true)}
        >
          <div className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-between opacity-60">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">Select duration...</span>
            <Lock className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
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
      
      {/* Value Range - Masked */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          Value Range (USD)
        </label>
        <div 
          className="relative cursor-pointer"
          onClick={() => setShowEnquiryModal(true)}
        >
          <div className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-between opacity-60">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">$0 - $1,000,000</span>
            <Lock className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
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
            <div className="flex items-center justify-between mb-6">
              <TabsList>
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
              
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={() => setShowEnquiryModal(true)}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm" onClick={() => setShowColumnEditor(true)}>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Columns
                </Button>
              </div>
            </div>

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
                    enableExport={false}
                    pageSize={10}
                  />

                  {/* Pagination */}
                  <div className="flex items-center justify-between mt-8">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      Showing {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} results
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        Previous
                      </Button>
                      {[...Array(Math.min(5, totalPages))].map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? 'primary' : 'outline'}
                            size="sm"
                            onClick={() => handlePageChange(pageNum)}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                      {totalPages > 5 && (
                        <>
                          <Button variant="outline" size="sm" disabled>...</Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handlePageChange(totalPages)}
                          >
                            {totalPages}
                          </Button>
                        </>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>

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
                          You're viewing limited results. Upgrade to access complete trade data,
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
              <div 
                className="text-center py-12 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-neutral-300 dark:border-neutral-700"
                onClick={() => setShowEnquiryModal(true)}
              >
                <div className="relative inline-block">
                  <Calendar className="w-16 h-16 mx-auto mb-4 text-neutral-400 dark:text-neutral-600" />
                  <Lock className="w-8 h-8 absolute -top-2 -right-2 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                  Data Visualization - Premium Feature
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Interactive charts, trend analysis, and trade flow visualizations
                </p>
                <Button variant="primary" onClick={() => setShowEnquiryModal(true)}>
                  <Lock className="w-4 h-4 mr-2" />
                  Unlock Access
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
        </div>
      </div>

      {/* Modals */}
      <EnquiryDemoModal />
      <ColumnEditorModal />
    </MainLayout>
  );
}

