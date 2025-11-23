'use client';

import React from 'react';
import { X } from 'lucide-react';
import Badge from './Badge';

interface FilterSummaryProps {
  filters: Record<string, string | string[] | number>;
  onRemoveFilter: (key: string, value?: string) => void;
  onClearAll: () => void;
  className?: string;
}

export default function FilterSummary({
  filters,
  onRemoveFilter,
  onClearAll,
  className = '',
}: FilterSummaryProps) {
  const activeFilters: Array<{ key: string; value: string; label: string }> = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      value.forEach(v => {
        activeFilters.push({
          key,
          value: v,
          label: `${formatKey(key)}: ${v}`,
        });
      });
    } else if (value && typeof value === 'string') {
      activeFilters.push({
        key,
        value: value as string,
        label: `${formatKey(key)}: ${value}`,
      });
    }
  });

  if (activeFilters.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        Active Filters:
      </span>
      {activeFilters.map((filter, index) => (
        <Badge
          key={`${filter.key}-${filter.value}-${index}`}
          variant="secondary"
          className="flex items-center gap-1.5 pr-1"
        >
          <span className="text-xs">{filter.label}</span>
          <button
            onClick={() => onRemoveFilter(filter.key, filter.value)}
            className="hover:bg-secondary-700 dark:hover:bg-secondary-600 rounded p-0.5 transition-colors"
            aria-label={`Remove ${filter.label} filter`}
          >
            <X className="w-3 h-3" />
          </button>
        </Badge>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium underline"
      >
        Clear all
      </button>
    </div>
  );
}

function formatKey(key: string): string {
  const keyMap: Record<string, string> = {
    hsCode: 'HS Code',
    searchQuery: 'Search',
    suppliers: 'Supplier',
    importers: 'Importer',
    ports: 'Port',
    countries: 'Country',
    products: 'Product',
    dateFrom: 'From',
    dateTo: 'To',
    minValue: 'Min Value',
    maxValue: 'Max Value',
  };
  return keyMap[key] || key;
}
