'use client';

import React, { useState, useEffect } from 'react';
import { Save, Bookmark, Trash2, Star } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Badge from './Badge';

export interface SavedFilter {
  id: string;
  name: string;
  filters: Record<string, any>;
  createdAt: string;
  isFavorite?: boolean;
}

interface SavedFiltersProps {
  currentFilters: Record<string, any>;
  onApplyFilter: (filters: Record<string, any>) => void;
  storageKey?: string;
}

export default function SavedFilters({
  currentFilters,
  onApplyFilter,
  storageKey = 'trade-data-saved-filters',
}: SavedFiltersProps) {
  const [savedFilters, setSavedFilters] = useState<SavedFilter[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterName, setFilterName] = useState('');

  // Load saved filters from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setSavedFilters(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to load saved filters:', error);
      }
    }
  }, [storageKey]);

  // Save filters to localStorage
  const saveToStorage = (filters: SavedFilter[]) => {
    localStorage.setItem(storageKey, JSON.stringify(filters));
    setSavedFilters(filters);
  };

  const handleSaveFilter = () => {
    if (!filterName.trim()) return;

    const newFilter: SavedFilter = {
      id: `filter-${Date.now()}`,
      name: filterName.trim(),
      filters: currentFilters,
      createdAt: new Date().toISOString(),
      isFavorite: false,
    };

    saveToStorage([...savedFilters, newFilter]);
    setFilterName('');
    setIsModalOpen(false);
  };

  const handleDeleteFilter = (id: string) => {
    saveToStorage(savedFilters.filter(f => f.id !== id));
  };

  const handleToggleFavorite = (id: string) => {
    saveToStorage(
      savedFilters.map(f =>
        f.id === id ? { ...f, isFavorite: !f.isFavorite } : f
      )
    );
  };

  const getActiveFilterCount = (filters: Record<string, any>) => {
    let count = 0;
    Object.values(filters).forEach(value => {
      if (Array.isArray(value) && value.length > 0) count += value.length;
      else if (value && typeof value === 'string') count++;
    });
    return count;
  };

  const favoriteFilters = savedFilters.filter(f => f.isFavorite);
  const otherFilters = savedFilters.filter(f => !f.isFavorite);

  if (savedFilters.length === 0) {
    return (
      <div className="mb-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          disabled={getActiveFilterCount(currentFilters) === 0}
        >
          <Save className="w-4 h-4 mr-2" />
          Save Current Filters
        </Button>
        {isModalOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => {
                setIsModalOpen(false);
                setFilterName('');
              }}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
              <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-6 border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                  Save Filter Preset
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Filter Name
                    </label>
                    <Input
                      value={filterName}
                      onChange={(e) => setFilterName(e.target.value)}
                      placeholder="e.g., Electronics from China"
                      onKeyDown={(e) => e.key === 'Enter' && handleSaveFilter()}
                    />
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      Active filters: {getActiveFilterCount(currentFilters)}
                    </p>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsModalOpen(false);
                        setFilterName('');
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSaveFilter}
                      disabled={!filterName.trim()}
                    >
                      Save Filter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="mb-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Saved Filters
          </h3>
          <Badge variant="secondary" className="text-xs">
            {savedFilters.length}
          </Badge>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsModalOpen(true)}
          disabled={getActiveFilterCount(currentFilters) === 0}
        >
          <Save className="w-4 h-4 mr-2" />
          Save Current
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {favoriteFilters.length > 0 && (
          <>
            {favoriteFilters.map(filter => (
              <FilterChip
                key={filter.id}
                filter={filter}
                onApply={() => onApplyFilter(filter.filters)}
                onDelete={() => handleDeleteFilter(filter.id)}
                onToggleFavorite={() => handleToggleFavorite(filter.id)}
              />
            ))}
            {otherFilters.length > 0 && (
              <div className="w-full border-t border-neutral-200 dark:border-neutral-700 my-1" />
            )}
          </>
        )}
        {otherFilters.map(filter => (
          <FilterChip
            key={filter.id}
            filter={filter}
            onApply={() => onApplyFilter(filter.filters)}
            onDelete={() => handleDeleteFilter(filter.id)}
            onToggleFavorite={() => handleToggleFavorite(filter.id)}
          />
        ))}
      </div>

      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => {
              setIsModalOpen(false);
              setFilterName('');
            }}
          />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl p-6 border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Save Filter Preset
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Filter Name
                  </label>
                  <Input
                    value={filterName}
                    onChange={(e) => setFilterName(e.target.value)}
                    placeholder="e.g., Electronics from China"
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveFilter()}
                  />
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-3">
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    Active filters: {getActiveFilterCount(currentFilters)}
                  </p>
                </div>
                <div className="flex gap-3 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsModalOpen(false);
                      setFilterName('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleSaveFilter}
                    disabled={!filterName.trim()}
                  >
                    Save Filter
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FilterChip({
  filter,
  onApply,
  onDelete,
  onToggleFavorite,
}: {
  filter: SavedFilter;
  onApply: () => void;
  onDelete: () => void;
  onToggleFavorite: () => void;
}) {
  return (
    <div className="group flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:border-primary-500 dark:hover:border-primary-500 transition-all">
      <button
        onClick={onToggleFavorite}
        className="text-neutral-400 hover:text-yellow-500 transition-colors"
        title={filter.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Star
          className={`w-3.5 h-3.5 ${
            filter.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''
          }`}
        />
      </button>
      <button
        onClick={onApply}
        className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        {filter.name}
      </button>
      <button
        onClick={onDelete}
        className="ml-1 text-neutral-400 hover:text-error-600 dark:hover:text-error-400 opacity-0 group-hover:opacity-100 transition-all"
        title="Delete filter"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

