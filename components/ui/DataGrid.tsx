'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  ChevronDown, 
  ChevronUp, 
  ChevronsUpDown,
  Edit2,
  Check,
  X,
  Trash2,
  Copy
} from 'lucide-react';
import Button from './Button';

export interface Column<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  editable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T, index: number) => React.ReactNode;
  renderEdit?: (value: any, onChange: (value: any) => void) => React.ReactNode;
}

interface DataGridProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (index: number, updatedRow: T) => void;
  onDelete?: (index: number) => void;
  onDuplicate?: (index: number) => void;
  rowKey?: keyof T;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  className?: string;
}

export default function DataGrid<T extends Record<string, any>>({
  data,
  columns,
  onEdit,
  onDelete,
  onDuplicate,
  rowKey,
  striped = false,
  hoverable = true,
  compact = false,
  className = '',
}: DataGridProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<Partial<T>>({});

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig?.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const handleEditStart = (index: number) => {
    setEditingRow(index);
    setEditedData(sortedData[index]);
  };

  const handleEditSave = (index: number) => {
    if (onEdit && editedData) {
      onEdit(index, { ...sortedData[index], ...editedData });
    }
    setEditingRow(null);
    setEditedData({});
  };

  const handleEditCancel = () => {
    setEditingRow(null);
    setEditedData({});
  };

  const handleFieldChange = (key: string, value: any) => {
    setEditedData(prev => ({ ...prev, [key]: value }));
  };

  const getCellValue = (row: T, column: Column<T>, index: number) => {
    const value = row[column.key as keyof T];
    if (column.render) {
      return column.render(value, row, index);
    }
    return value?.toString() || '-';
  };

  const renderEditCell = (column: Column<T>, value: any) => {
    if (column.renderEdit) {
      return column.renderEdit(value, (newValue) =>
        handleFieldChange(column.key as string, newValue)
      );
    }

    return (
      <input
        type="text"
        value={value?.toString() || ''}
        onChange={(e) => handleFieldChange(column.key as string, e.target.value)}
        className="w-full px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
        autoFocus
      />
    );
  };

  return (
    <div className={cn('overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800', className)}>
      <table className="w-full">
        <thead className="bg-neutral-50 dark:bg-neutral-900">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                style={{ width: column.width }}
                className={cn(
                  'text-neutral-700 dark:text-neutral-300 font-semibold',
                  compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm',
                  column.align === 'center' && 'text-center',
                  column.align === 'right' && 'text-right',
                  column.sortable && 'cursor-pointer select-none hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
                onClick={() => column.sortable && handleSort(column.key as string)}
              >
                <div className="flex items-center gap-2">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <span className="text-neutral-400">
                      {sortConfig?.key === column.key ? (
                        sortConfig.direction === 'asc' ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )
                      ) : (
                        <ChevronsUpDown className="w-4 h-4" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
            {(onEdit || onDelete || onDuplicate) && (
              <th className={cn(
                'text-neutral-700 dark:text-neutral-300 font-semibold text-right',
                compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'
              )}>
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {sortedData.map((row, index) => {
            const isEditing = editingRow === index;
            const key = rowKey ? row[rowKey] : index;

            return (
              <tr
                key={key as string | number}
                className={cn(
                  'transition-colors',
                  striped && index % 2 === 0 && 'bg-neutral-50/50 dark:bg-neutral-900/50',
                  hoverable && !isEditing && 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  isEditing && 'bg-primary-50 dark:bg-primary-900/10'
                )}
              >
                {columns.map((column) => {
                  const value = isEditing 
                    ? editedData[column.key as keyof T] ?? row[column.key as keyof T]
                    : row[column.key as keyof T];

                  return (
                    <td
                      key={column.key as string}
                      className={cn(
                        'text-neutral-900 dark:text-neutral-100',
                        compact ? 'px-3 py-2 text-sm' : 'px-4 py-3',
                        column.align === 'center' && 'text-center',
                        column.align === 'right' && 'text-right'
                      )}
                    >
                      {isEditing && column.editable ? (
                        renderEditCell(column, value)
                      ) : (
                        getCellValue(row, column, index)
                      )}
                    </td>
                  );
                })}
                {(onEdit || onDelete || onDuplicate) && (
                  <td className={cn(
                    'text-right',
                    compact ? 'px-3 py-2' : 'px-4 py-3'
                  )}>
                    <div className="flex items-center justify-end gap-2">
                      {isEditing ? (
                        <>
                          <Button
                            size="xs"
                            variant="success"
                            onClick={() => handleEditSave(index)}
                          >
                            <Check className="w-3 h-3" />
                          </Button>
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={handleEditCancel}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </>
                      ) : (
                        <>
                          {onEdit && (
                            <Button
                              size="xs"
                              variant="ghost"
                              onClick={() => handleEditStart(index)}
                              title="Edit"
                            >
                              <Edit2 className="w-3 h-3" />
                            </Button>
                          )}
                          {onDuplicate && (
                            <Button
                              size="xs"
                              variant="ghost"
                              onClick={() => onDuplicate(index)}
                              title="Duplicate"
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                          )}
                          {onDelete && (
                            <Button
                              size="xs"
                              variant="ghost"
                              onClick={() => onDelete(index)}
                              title="Delete"
                              className="text-error-600 hover:text-error-700 hover:bg-error-50 dark:hover:bg-error-900/20"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
          No data available
        </div>
      )}
    </div>
  );
}

