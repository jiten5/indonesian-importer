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
import { Building2, Search, Filter, MapPin, Phone, Mail } from 'lucide-react';
import { countries } from '@/constants/data';

interface Company {
  id: string;
  name: string;
  country: string;
  city: string;
  industry: string;
  type: 'Importer' | 'Exporter' | 'Both';
  shipmentCount: number;
  verified: boolean;
}

const industries = [
  'All Industries',
  'Electronics',
  'Textiles',
  'Machinery',
  'Food & Beverage',
  'Chemicals',
  'Automotive',
  'Construction',
  'Healthcare',
];

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const generateMockCompanies = (): Company[] => {
  const types: Array<'Importer' | 'Exporter' | 'Both'> = ['Importer', 'Exporter', 'Both'];
  const cities = ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar'];
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: `COMP-${String(i + 1).padStart(4, '0')}`,
    name: `${alphabet[i % 26]}${alphabet[(i + 1) % 26]} Trading Company ${i + 1}`,
    country: countries[i % countries.length],
    city: cities[i % cities.length],
    industry: industries[(i % (industries.length - 1)) + 1],
    type: types[i % types.length],
    shipmentCount: Math.floor(Math.random() * 1000) + 50,
    verified: Math.random() > 0.3,
  }));
};

export default function CompanyListingPage() {
  const [companies] = useState(generateMockCompanies());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All Countries');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'All Countries' || company.country === selectedCountry;
    const matchesIndustry = selectedIndustry === 'All Industries' || company.industry === selectedIndustry;
    const matchesLetter = !selectedLetter || company.name.toUpperCase().startsWith(selectedLetter);
    return matchesSearch && matchesCountry && matchesIndustry && matchesLetter;
  });

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + itemsPerPage);

  return (
    <MainLayout>
      <div className="pt-20 mb-12">
        {/* <Breadcrumb items={[{ label: 'Companies Listing', href: '/companies-listing' }]} /> */}
        <div className="text-center mb-10">
          <Badge variant="primary" className="mb-3">
            Company Database
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Company Listing
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Browse our directory of verified importers, exporters, and trading companies worldwide
          </p>
        </div>

        <Card padding="lg" className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
              Search & Filter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Search Companies
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  placeholder="Search by name or city..."
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
                Country
              </label>
              <Select
                options={[
                  { label: 'All Countries', value: 'All Countries' },
                  ...countries.slice(0, 20).map(country => ({ label: country, value: country }))
                ]}
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Industry
              </label>
              <Select
                options={industries.map(ind => ({ label: ind, value: ind }))}
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </Card>

        <Card padding="lg" className="mb-6">
          <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
            Browse by Letter
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedLetter(null);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                selectedLetter === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              All
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => {
                  setSelectedLetter(letter);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </Card>

        <Card padding="lg" className="mb-8">
          <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            Showing {paginatedCompanies.length} of {filteredCompanies.length} companies
          </div>
          <div className="space-y-4">
            {paginatedCompanies.map((company) => (
              <div
                key={company.id}
                className="p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                          {company.name}
                        </h3>
                        {company.verified && (
                          <Badge variant="success" size="sm">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {company.city}, {company.country}
                        </div>
                        <Badge variant="outline" size="sm">
                          {company.type}
                        </Badge>
                        <Badge variant="outline" size="sm">
                          {company.industry}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Shipments:</span>
                    <span className="ml-2 font-medium text-neutral-900 dark:text-neutral-50">
                      {company.shipmentCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Type:</span>
                    <span className="ml-2 font-medium text-neutral-900 dark:text-neutral-50">
                      {company.type}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-neutral-600 dark:text-neutral-400">Industry:</span>
                    <span className="ml-2 font-medium text-neutral-900 dark:text-neutral-50">
                      {company.industry}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Link href={`/companies/${company.id}`}>
                    <Button variant="primary" size="sm">
                      View Profile
                    </Button>
                  </Link>
                  <Link href={`/search?searchBy=company&q=${encodeURIComponent(company.name)}`}>
                    <Button variant="outline" size="sm">
                      View Shipments
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {filteredCompanies.length === 0 && (
          <Card padding="lg">
            <div className="text-center py-12">
              <Building2 className="w-16 h-16 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                No companies found
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

