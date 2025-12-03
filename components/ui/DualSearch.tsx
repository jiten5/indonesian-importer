"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Select from './Select';
import Button from './Button';
import { cn } from '@/lib/utils';

interface DualSearchProps {
  className?: string;
  onSearch?: (searchType: string, searchBy: string, query: string) => void;
}

export function DualSearch({ className, onSearch }: DualSearchProps) {
  const [searchType, setSearchType] = useState('imports');
  const [searchBy, setSearchBy] = useState('product');
  const [query, setQuery] = useState('');

  // Dynamic placeholder based on searchBy
  let inputPlaceholder = 'Enter your search term...';
  if (searchBy === 'product') inputPlaceholder = 'Enter product description...';
  else if (searchBy === 'hsCode') inputPlaceholder = 'Enter HS Code...';
  else if (searchBy === 'company') inputPlaceholder = 'Enter company name...';

  const handleSearch = () => {
    onSearch?.(searchType, searchBy, query);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <form
        className="flex flex-col lg:flex-row gap-3 p-2"
        onSubmit={e => { e.preventDefault(); handleSearch(); }}
        autoComplete="off"
      >
        {/* Search Type Dropdown */}
        <div className="w-full lg:w-48 flex items-center">
          <Select
            options={[
              { label: 'Imports', value: 'imports' },
              { label: 'Exports', value: 'exports' },
            ]}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="h-12 w-full"
          />
        </div>

        {/* Search By Dropdown */}
        <div className="w-full lg:w-56 flex items-center">
          <Select
            options={[
              { label: 'Product Description', value: 'product' },
              { label: 'HS Code', value: 'hsCode' },
              { label: 'Company Name', value: 'company' },
            ]}
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className="h-12 w-full"
          />
        </div>

        {/* Search Input */}
        <div className="flex-1 flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={inputPlaceholder}
            className={cn(
              'w-full h-12 px-4 rounded-md',
              'bg-neutral-50 dark:bg-neutral-700',
              'border border-neutral-300 dark:border-neutral-600',
              'text-neutral-900 dark:text-neutral-50',
              'placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'transition-colors'
            )}
          />
        </div>

        {/* Search Button */}
        <div className="flex items-center">
          <Button
            variant="primary"
            size="lg"
            type="submit"
            className="h-12 px-6 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Search className="w-5 h-5" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

