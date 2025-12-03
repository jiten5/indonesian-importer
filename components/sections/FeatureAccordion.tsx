'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, LucideIcon } from 'lucide-react'

interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
  image?: string
  stats?: {
    label: string
    value: string
  }[]
}

interface FeatureAccordionProps {
  title: string
  subtitle?: string
  features: Feature[]
  defaultOpen?: string
  variant?: 'default' | 'cards' | 'minimal'
  className?: string
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({
  title,
  subtitle,
  features,
  defaultOpen,
  variant = 'default',
  className
}) => {
  const [activeFeature, setActiveFeature] = useState<string>(defaultOpen || features[0]?.id)

  const toggleFeature = (id: string) => {
    setActiveFeature(activeFeature === id ? '' : id)
  }

  return (
    <section className={cn('py-20 lg:py-32 bg-white dark:bg-neutral-900', className)}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Accordion Items */}
          <div className="space-y-4">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isActive = activeFeature === feature.id

              return (
                <div
                  key={feature.id}
                  className={cn(
                    'rounded-xl border transition-all duration-300',
                    variant === 'cards' && 'bg-neutral-50 dark:bg-neutral-800/50',
                    isActive
                      ? 'border-primary-600 dark:border-primary-500 shadow-lg'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                  )}
                >
                  <button
                    onClick={() => toggleFeature(feature.id)}
                    className="w-full px-6 py-5 flex items-start justify-between text-left group"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                          isActive
                            ? 'bg-primary-600 text-white'
                            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3
                          className={cn(
                            'text-lg font-semibold transition-colors',
                            isActive
                              ? 'text-primary-600 dark:text-primary-400'
                              : 'text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400'
                          )}
                        >
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ml-4',
                        isActive && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="px-6 pb-6 pl-[88px]">
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                        {feature.description}
                      </p>

                      {/* Stats */}
                      {feature.stats && feature.stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {feature.stats.map((stat, idx) => (
                            <div
                              key={idx}
                              className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-3"
                            >
                              <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                                {stat.value}
                              </div>
                              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Visual Preview */}
          <div className="hidden lg:block sticky top-24">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 aspect-square">
              {features.find((f) => f.id === activeFeature)?.image ? (
                <img
                  src={features.find((f) => f.id === activeFeature)!.image!}
                  alt={features.find((f) => f.id === activeFeature)!.title}
                  className="w-full h-full object-cover animate-fade-in"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    {React.createElement(
                      features.find((f) => f.id === activeFeature)?.icon || features[0].icon,
                      { className: 'w-32 h-32 mx-auto mb-6 animate-scale-in' }
                    )}
                    <h3 className="text-2xl font-bold mb-2">
                      {features.find((f) => f.id === activeFeature)?.title}
                    </h3>
                    <p className="text-white/80 max-w-md">
                      {features.find((f) => f.id === activeFeature)?.description}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureAccordion

