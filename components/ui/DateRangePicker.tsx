'use client';

import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';
import Input from './Input';

interface DateRange {
  from: Date | null;
  to: Date | null;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  placeholder?: string;
  className?: string;
  minDate?: Date;
  maxDate?: Date;
  presets?: Array<{ label: string; range: DateRange }>;
}

export default function DateRangePicker({
  value,
  onChange,
  placeholder = 'Select date range',
  className = '',
  minDate,
  maxDate,
  presets = [
    { label: 'Today', range: { from: new Date(), to: new Date() } },
    {
      label: 'Last 7 days',
      range: {
        from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
    },
    {
      label: 'Last 30 days',
      range: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
    },
    {
      label: 'This month',
      range: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        to: new Date(),
      },
    },
  ],
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingFrom, setSelectingFrom] = useState(true);
  const [tempRange, setTempRange] = useState<DateRange>(value || { from: null, to: null });

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getDisplayText = () => {
    if (!value?.from && !value?.to) return placeholder;
    if (value.from && !value.to) return formatDate(value.from);
    if (!value.from && value.to) return formatDate(value.to);
    return `${formatDate(value.from)} - ${formatDate(value.to)}`;
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    if (minDate && clickedDate < minDate) return;
    if (maxDate && clickedDate > maxDate) return;

    if (selectingFrom) {
      setTempRange({ from: clickedDate, to: null });
      setSelectingFrom(false);
    } else {
      if (tempRange.from && clickedDate < tempRange.from) {
        setTempRange({ from: clickedDate, to: tempRange.from });
      } else {
        setTempRange({ from: tempRange.from, to: clickedDate });
      }
      setSelectingFrom(true);
    }
  };

  const handleApply = () => {
    onChange?.(tempRange);
    setIsOpen(false);
  };

  const handleClear = () => {
    const cleared = { from: null, to: null };
    setTempRange(cleared);
    onChange?.(cleared);
  };

  const handlePresetClick = (preset: { label: string; range: DateRange }) => {
    setTempRange(preset.range);
    onChange?.(preset.range);
    setIsOpen(false);
  };

  const isDateInRange = (day: number) => {
    if (!tempRange.from || !tempRange.to) return false;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date >= tempRange.from && date <= tempRange.to;
  };

  const isDateSelected = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateStr = date.toDateString();
    return (
      dateStr === tempRange.from?.toDateString() ||
      dateStr === tempRange.to?.toDateString()
    );
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const renderCalendar = () => {
    const days = daysInMonth(currentMonth);
    const firstDay = firstDayOfMonth(currentMonth);
    const weeks = [];
    let week = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      week.push(<div key={`empty-${i}`} className="h-10" />);
    }

    // Days of the month
    for (let day = 1; day <= days; day++) {
      const inRange = isDateInRange(day);
      const selected = isDateSelected(day);
      const disabled = isDateDisabled(day);

      week.push(
        <button
          key={day}
          onClick={() => !disabled && handleDateClick(day)}
          disabled={disabled}
          className={cn(
            'h-10 flex items-center justify-center rounded-lg text-sm transition-all',
            disabled && 'opacity-30 cursor-not-allowed',
            !disabled && 'hover:bg-neutral-100 dark:hover:bg-neutral-800',
            selected && 'bg-primary-600 text-white hover:bg-primary-700',
            inRange && !selected && 'bg-primary-100 dark:bg-primary-900/20 text-primary-900 dark:text-primary-100'
          )}
        >
          {day}
        </button>
      );

      if (week.length === 7) {
        weeks.push(
          <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">
            {week}
          </div>
        );
        week = [];
      }
    }

    // Last partial week
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(<div key={`empty-end-${week.length}`} className="h-10" />);
      }
      weeks.push(
        <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-1">
          {week}
        </div>
      );
    }

    return weeks;
  };

  return (
    <div className={cn('relative', className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg cursor-pointer hover:border-primary-500 transition-colors"
      >
        <Calendar className="w-5 h-5 text-neutral-400" />
        <span className={cn(
          'flex-1 text-sm',
          value?.from || value?.to ? 'text-neutral-900 dark:text-neutral-100' : 'text-neutral-500'
        )}>
          {getDisplayText()}
        </span>
        {(value?.from || value?.to) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 mt-2 p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex gap-4">
              {/* Presets */}
              <div className="flex flex-col gap-1 pr-4 border-r border-neutral-200 dark:border-neutral-800">
                <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-wide">
                  Quick Select
                </div>
                {presets.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => handlePresetClick(preset)}
                    className="px-3 py-2 text-sm text-left text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg whitespace-nowrap transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Calendar */}
              <div className="min-w-[280px]">
                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
                      )
                    }
                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
                      )
                    }
                    className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Day Headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                    <div
                      key={day}
                      className="h-10 flex items-center justify-center text-xs font-medium text-neutral-500 dark:text-neutral-400"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="space-y-1">{renderCalendar()}</div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">
                    {selectingFrom ? 'Select start date' : 'Select end date'}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleClear();
                        setIsOpen(false);
                      }}
                    >
                      Clear
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleApply}
                      disabled={!tempRange.from && !tempRange.to}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
