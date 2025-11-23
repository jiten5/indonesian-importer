'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X, Check, Search } from 'lucide-react';

export interface MultiSelectOption {
  value: string;
  label: string;
  count?: number;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  label?: string;
  searchable?: boolean;
  maxDisplay?: number;
  disabled?: boolean;
  className?: string;
}

export default function MultiSelect({
  options,
  value = [],
  onChange,
  placeholder = 'Select options...',
  label,
  searchable = true,
  maxDisplay = 2,
  disabled = false,
  className = '',
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const filteredOptions = searchable && searchQuery
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  const handleToggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const handleRemoveOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter(v => v !== optionValue));
  };

  const handleSelectAll = () => {
    if (value.length === options.length) {
      onChange([]);
    } else {
      onChange(options.map(opt => opt.value));
    }
  };

  const handleClearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange([]);
  };

  const getDisplayText = () => {
    if (value.length === 0) return placeholder;
    
    const selectedOptions = options.filter(opt => value.includes(opt.value));
    
    if (value.length <= maxDisplay) {
      return selectedOptions.map(opt => opt.label).join(', ');
    }
    
    return `${selectedOptions.slice(0, maxDisplay).map(opt => opt.label).join(', ')} +${value.length - maxDisplay} more`;
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          {label}
        </label>
      )}
      
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          relative flex items-center justify-between w-full px-4 py-2.5 
          bg-white dark:bg-neutral-800 
          border border-neutral-300 dark:border-neutral-700 
          rounded-lg cursor-pointer transition-all duration-200
          ${isOpen ? 'ring-2 ring-primary-500 border-primary-500' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-neutral-50 dark:bg-neutral-900' : 'hover:border-neutral-400 dark:hover:border-neutral-600'}
        `}
      >
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          {value.length > 0 && value.length <= maxDisplay ? (
            <div className="flex flex-wrap gap-1">
              {options
                .filter(opt => value.includes(opt.value))
                .map(option => (
                  <span
                    key={option.value}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-md"
                  >
                    {option.label}
                    <button
                      onClick={(e) => handleRemoveOption(option.value, e)}
                      className="hover:text-primary-900 dark:hover:text-primary-100"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
            </div>
          ) : (
            <span className={`text-sm truncate ${value.length > 0 ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-500 dark:text-neutral-400'}`}>
              {getDisplayText()}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 ml-2">
          {value.length > 0 && !disabled && (
            <button
              onClick={handleClearAll}
              className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <ChevronDown
            className={`w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden">
          {searchable && (
            <div className="p-2 border-b border-neutral-200 dark:border-neutral-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 text-sm bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-900 dark:text-neutral-50"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )}

          <div className="p-2 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between">
            <button
              onClick={handleSelectAll}
              className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              {value.length === options.length ? 'Deselect All' : 'Select All'}
            </button>
            {value.length > 0 && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {value.length} selected
              </span>
            )}
          </div>

          <div className="max-h-64 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
                No options found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = value.includes(option.value);
                return (
                  <div
                    key={option.value}
                    onClick={() => handleToggleOption(option.value)}
                    className={`
                      flex items-center justify-between px-3 py-2.5 cursor-pointer transition-colors
                      ${isSelected 
                        ? 'bg-primary-50 dark:bg-primary-900/20' 
                        : 'hover:bg-neutral-50 dark:hover:bg-neutral-700/50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className={`
                          w-4 h-4 border-2 rounded flex items-center justify-center transition-all
                          ${isSelected 
                            ? 'bg-primary-600 border-primary-600 dark:bg-primary-500 dark:border-primary-500' 
                            : 'border-neutral-300 dark:border-neutral-600'
                          }
                        `}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-sm text-neutral-900 dark:text-neutral-50">
                        {option.label}
                      </span>
                    </div>
                    {option.count !== undefined && (
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-2">
                        ({option.count})
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
