'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react';
import Button from './Button';
import { cn } from '@/utils/cn';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
  showFirstLast?: boolean;
  showPageJump?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  showFirstLast = true,
  showPageJump = false,
}: PaginationProps) {
  const [jumpValue, setJumpValue] = React.useState('');

  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5; // siblingCount on each side + first + last + current + 2 ellipsis

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftEllipsis = leftSiblingIndex > 2;
    const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, 'ellipsis', totalPages];
    }

    if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [1, 'ellipsis', ...rightRange];
    }

    if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
      const middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages];
    }

    return [];
  }, [currentPage, totalPages, siblingCount]);

  const handlePageJump = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(jumpValue, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
      onPageChange(pageNum);
      setJumpValue('');
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className={cn('flex items-center gap-4', className)}>
      {/* Navigation Buttons */}
      <nav className="flex items-center gap-1" aria-label="Pagination">
        {/* First Page */}
        {showFirstLast && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={isFirstPage}
            aria-label="Go to first page"
            className="h-9 w-9 p-0"
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        )}

        {/* Previous Page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          aria-label="Go to previous page"
          className="h-9 w-9 p-0"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page Numbers */}
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === 'ellipsis') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-9 w-9 items-center justify-center text-neutral-500 dark:text-neutral-400"
              >
                <MoreHorizontal className="h-4 w-4" />
              </span>
            );
          }

          const isActive = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              variant={isActive ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPageChange(pageNumber as number)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'h-9 w-9 p-0',
                isActive && 'pointer-events-none'
              )}
            >
              {pageNumber}
            </Button>
          );
        })}

        {/* Next Page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          aria-label="Go to next page"
          className="h-9 w-9 p-0"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Last Page */}
        {showFirstLast && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(totalPages)}
            disabled={isLastPage}
            aria-label="Go to last page"
            className="h-9 w-9 p-0"
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        )}
      </nav>

      {/* Page Info */}
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        Page <span className="font-medium text-neutral-900 dark:text-neutral-50">{currentPage}</span> of{' '}
        <span className="font-medium text-neutral-900 dark:text-neutral-50">{totalPages}</span>
      </div>

      {/* Page Jump */}
      {showPageJump && (
        <form onSubmit={handlePageJump} className="flex items-center gap-2">
          <label htmlFor="page-jump" className="sr-only">
            Jump to page
          </label>
          <input
            id="page-jump"
            type="number"
            min={1}
            max={totalPages}
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            placeholder="Jump to..."
            className={cn(
              'h-9 w-20 rounded-md border border-neutral-300 dark:border-neutral-600',
              'bg-white dark:bg-neutral-800 px-3 text-sm',
              'text-neutral-900 dark:text-neutral-50',
              'placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'transition-colors'
            )}
          />
          <Button type="submit" variant="outline" size="sm">
            Go
          </Button>
        </form>
      )}
    </div>
  );
}
