'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Select from './Select';
import Button from './Button';
import { cn } from '@/utils/cn';

interface DualSearchProps {
  className?: string;
  onSearch?: (searchType: string, searchBy: string, query: string) => void;
}

export function DualSearch({ className, onSearch }: DualSearchProps) {
  const [searchType, setSearchType] = useState('imports');
  const [searchBy, setSearchBy] = useState('product');
  const [query, setQuery] = useState('');

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
      <div className="flex flex-col lg:flex-row gap-3 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3">
        {/* Search Type Dropdown */}
        <div className="w-full lg:w-48">
          <Select
            options={[
              { label: 'Imports', value: 'imports' },
              { label: 'Exports', value: 'exports' },
            ]}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
        </div>

        {/* Search By Dropdown */}
        <div className="w-full lg:w-56">
          <Select
            options={[
              { label: 'Product Description', value: 'product' },
              { label: 'HS Code', value: 'hsCode' },
              { label: 'Company Name', value: 'company' },
            ]}
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          />
        </div>

        {/* Search Input */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your search term..."
            className={cn(
              'w-full h-full px-4 py-3 rounded-md',
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
        <Button
          variant="primary"
          size="lg"
          onClick={handleSearch}
          className="w-full lg:w-auto flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Search className="w-5 h-5" />
          Search
        </Button>
      </div>
    </div>
  );
}
