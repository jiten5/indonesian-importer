import React from 'react'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export default function Skeleton({
  className = '',
  variant = 'text',
  width,
  height,
  animation = 'pulse'
}: SkeletonProps) {
  const baseStyles = 'bg-neutral-200 dark:bg-neutral-800'
  
  const variantStyles = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  }

  const animationStyles = {
    pulse: 'animate-pulse',
    wave: 'skeleton-wave',
    none: ''
  }

  const style: React.CSSProperties = {
    width: width || (variant === 'text' ? '100%' : undefined),
    height: height || (variant === 'text' ? '1em' : undefined)
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${animationStyles[animation]} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

// Card Skeleton Component
export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
      <div className="flex items-start space-x-4">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-3">
          <Skeleton width="60%" height={20} />
          <Skeleton width="40%" height={16} />
          <Skeleton width="100%" height={16} />
          <Skeleton width="80%" height={16} />
        </div>
      </div>
    </div>
  )
}

// Table Skeleton Component
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton width="15%" height={40} />
          <Skeleton width="30%" height={40} />
          <Skeleton width="20%" height={40} />
          <Skeleton width="15%" height={40} />
          <Skeleton width="20%" height={40} />
        </div>
      ))}
    </div>
  )
}

// List Skeleton Component
export function ListSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: items }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  )
}

// Stats Skeleton Component
export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="text-center space-y-2">
          <Skeleton width={80} height={36} className="mx-auto" />
          <Skeleton width={100} height={16} className="mx-auto" />
        </div>
      ))}
    </div>
  )
}

// Page Skeleton Component
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="container-custom py-20">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Skeleton width={200} height={32} />
            <Skeleton width="100%" height={24} />
            <Skeleton width="80%" height={24} />
          </div>

          {/* Stats */}
          <StatsSkeleton />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  )
}

