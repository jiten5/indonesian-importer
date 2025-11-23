'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { PackageOpen, Search, FileQuestion, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from './Button';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    href?: string;
  };
  type?: 'default' | 'search' | 'error' | 'success';
  className?: string;
}

const defaultIcons = {
  default: <PackageOpen className="w-16 h-16" />,
  search: <Search className="w-16 h-16" />,
  error: <AlertCircle className="w-16 h-16" />,
  success: <CheckCircle2 className="w-16 h-16" />,
};

const defaultColors = {
  default: 'text-neutral-400 dark:text-neutral-500',
  search: 'text-blue-400 dark:text-blue-500',
  error: 'text-error-400 dark:text-error-500',
  success: 'text-success-400 dark:text-success-500',
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  type = 'default',
  className = '',
}) => {
  const displayIcon = icon || defaultIcons[type];
  const iconColor = defaultColors[type];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
    >
      <div className={`mb-6 ${iconColor}`}>
        {displayIcon}
      </div>
      
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
        {title}
      </h3>
      
      {description && (
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
          {description}
        </p>
      )}
      
      {action && (
        <Button
          onClick={action.onClick}
          variant="primary"
          size="md"
        >
          {action.label}
        </Button>
      )}
    </motion.div>
  );
};

// Preset empty states
export const NoDataFound: React.FC<{ onReset?: () => void }> = ({ onReset }) => (
  <EmptyState
    type="search"
    title="No data found"
    description="We couldn't find any results matching your criteria. Try adjusting your filters."
    action={onReset ? {
      label: 'Reset Filters',
      onClick: onReset,
    } : undefined}
  />
);

export const NoSearchResults: React.FC<{ searchTerm?: string; onClear?: () => void }> = ({
  searchTerm,
  onClear,
}) => (
  <EmptyState
    type="search"
    title="No results found"
    description={
      searchTerm
        ? `No results for "${searchTerm}". Try different keywords or filters.`
        : 'Try adjusting your search criteria or filters.'
    }
    action={onClear ? {
      label: 'Clear Search',
      onClick: onClear,
    } : undefined}
  />
);

export const EmptyList: React.FC<{ title: string; description?: string }> = ({
  title,
  description,
}) => (
  <EmptyState
    type="default"
    title={title}
    description={description}
  />
);

export const ErrorState: React.FC<{ onRetry?: () => void }> = ({ onRetry }) => (
  <EmptyState
    type="error"
    title="Something went wrong"
    description="We encountered an error while loading the data. Please try again."
    action={onRetry ? {
      label: 'Try Again',
      onClick: onRetry,
    } : undefined}
  />
);
