'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { heroAnimation, staggerItem, fadeInUp } from '@/lib/animations'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
    variant?: 'outline' | 'ghost'
  }
  features?: string[]
  image?: string
  videoUrl?: string
  variant?: 'default' | 'gradient' | 'minimal'
  className?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  features = [],
  image,
  videoUrl,
  variant = 'gradient',
  className
}) => {
  const backgrounds = {
    default: 'bg-white dark:bg-neutral-900',
    gradient: 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800',
    minimal: 'bg-neutral-50 dark:bg-neutral-950'
  }

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-28',
        backgrounds[variant],
        className
      )}
    >
      {/* Decorative Elements */}
      {variant === 'gradient' && (
        <>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-200/30 to-transparent dark:from-primary-900/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary-200/30 to-transparent dark:from-secondary-900/20 blur-3xl" />
        </>
      )}

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={heroAnimation}
            className="space-y-6 lg:space-y-8"
          >
            {subtitle && (
              <motion.div 
                variants={staggerItem}
                className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium shadow-sm"
              >
                <span>{subtitle}</span>
              </motion.div>
            )}

            <motion.h1 
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-900 dark:text-white leading-tight sm:leading-[1.1] tracking-tight"
            >
              {title}
            </motion.h1>

            <motion.p 
              variants={staggerItem}
              className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Features List */}
            {features.length > 0 && (
              <motion.div variants={staggerItem} className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CTA Buttons */}
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => window.location.href = primaryCTA.href}
                className="shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/30"
              >
                {primaryCTA.text}
              </Button>

              {secondaryCTA && (
                <Button
                  variant={secondaryCTA.variant || 'outline'}
                  size="lg"
                  leftIcon={videoUrl ? <Play className="w-5 h-5" /> : undefined}
                  onClick={() => window.location.href = secondaryCTA.href}
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={staggerItem}
              className="pt-8 mt-4 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 border-t border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">500+</div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">Companies</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">50M+</div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">Data Points</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">99.9%</div>
                <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            className="relative mt-12 lg:mt-0 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {image && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <img
                  src={image}
                  alt="Hero visual"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
              </div>
            )}

            {!image && (
              <div className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 rounded-2xl p-8 sm:p-12 shadow-2xl border border-primary-500/20">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 animate-pulse border border-white/20"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="h-3 sm:h-4 bg-white/20 rounded mb-2" />
                      <div className="h-6 sm:h-8 bg-white/30 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Floating Cards */}
            <motion.div 
              className="hidden lg:block absolute -top-8 -right-8 bg-white dark:bg-neutral-800 rounded-xl shadow-xl p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-neutral-900 dark:text-white">Real-time Updates</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">Live data sync</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
