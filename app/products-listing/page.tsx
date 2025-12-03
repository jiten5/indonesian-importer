'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';
// import Breadcrumb from '@/components/ui/Breadcrumb';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { Pagination } from '@/components/ui/Pagination';
import { Package, Search, Filter, TrendingUp, BarChart3 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  hsCode: string;
  category: string;
  description: string;
  importVolume: number;
  exportVolume: number;
  topImporter: string;
  topExporter: string;
}

const categories = [
  'All Categories',
  'Electronics',
  'Textiles',
  'Machinery',
  'Chemicals',
  'Food & Agriculture',
  'Automotive',
  'Pharmaceuticals',
  'Plastics',
];

const generateMockProducts = (): Product[] => {
  const products = [
    { name: 'Electronic Components', hsCode: '8542.31', category: 'Electronics', desc: 'Integrated circuits and microprocessors' },
    { name: 'Cotton Fabric', hsCode: '5208.12', category: 'Textiles', desc: 'Plain weave cotton fabric, bleached' },
    { name: 'Industrial Machinery', hsCode: '8483.10', category: 'Machinery', desc: 'Transmission shafts and cranks' },
    { name: 'Organic Chemicals', hsCode: '2905.11', category: 'Chemicals', desc: 'Methanol (methyl alcohol)' },
    { name: 'Coffee Beans', hsCode: '0901.11', category: 'Food & Agriculture', desc: 'Coffee, not roasted, not decaffeinated' },
    { name: 'Auto Parts', hsCode: '8708.30', category: 'Automotive', desc: 'Brakes and parts for motor vehicles' },
    { name: 'Pharmaceutical Products', hsCode: '3004.20', category: 'Pharmaceuticals', desc: 'Antibiotics in dosage form' },
    { name: 'Plastic Materials', hsCode: '3901.10', category: 'Plastics', desc: 'Polyethylene with specific gravity < 0.94' },
    { name: 'Computer Hardware', hsCode: '8471.30', category: 'Electronics', desc: 'Portable automatic data processing machines' },
    { name: 'Garments', hsCode: '6203.42', category: 'Textiles', desc: 'Men\'s or boys\' trousers of cotton' },
    { name: 'Machine Tools', hsCode: '8456.11', category: 'Machinery', desc: 'Operated by laser or light beam' },
    { name: 'Fertilizers', hsCode: '3102.10', category: 'Chemicals', desc: 'Urea, whether or not in aqueous solution' },
  ];

  return products.map((p, i) => ({
    id: `PRD-${String(i + 1).padStart(4, '0')}`,
    name: p.name,
    hsCode: p.hsCode,
    category: p.category,
    description: p.desc,
    importVolume: Math.floor(Math.random() * 100000) + 10000,
    exportVolume: Math.floor(Math.random() * 80000) + 5000,
    topImporter: `Company ${String.fromCharCode(65 + (i % 26))}`,
    topExporter: `Supplier ${String.fromCharCode(65 + ((i + 5) % 26))}`,
  }));
};

export default function ProductListingPage() {
  const [products] = useState(generateMockProducts());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.hsCode.includes(searchQuery) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <MainLayout>
      <div className="pt-20 mb-12">
        {/* <Breadcrumb items={[{ label: 'Products Listing', href: '/products-listing' }]} /> */}
        <div className="text-center mb-10">
          <Badge variant="primary" className="mb-3">
            Product Database
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Product Listing
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Explore our comprehensive database of traded products organized by HS codes and categories
          </p>
        </div>

        <Card padding="lg" className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Search & Filter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Search Products
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  placeholder="Search by name, HS code, or description..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Category
              </label>
              <Select
                options={categories.map(cat => ({ label: cat, value: cat }))}
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Showing {paginatedProducts.length} of {filteredProducts.length} products
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {paginatedProducts.map((product) => (
            <Card key={product.id} padding="lg" className="hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <Package className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {product.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">HS Code:</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">{product.hsCode}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Import Volume:</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {product.importVolume.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600 dark:text-neutral-400">Export Volume:</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {product.exportVolume.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-success-600 dark:text-success-400" />
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">
                    Top Importer: {product.topImporter}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">
                    Top Exporter: {product.topExporter}
                  </span>
                </div>
              </div>
              
              <Link href={`/search?searchBy=hsCode&q=${product.hsCode}`}>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Trade Data
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card padding="lg">
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                No products found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </Card>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
}

