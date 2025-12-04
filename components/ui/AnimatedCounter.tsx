'use client'

import { useCounter } from '@/lib/hooks/useAnimations'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = ''
}: AnimatedCounterProps) {
  const { ref, value } = useCounter({ end, duration, decimals, prefix, suffix })

  return (
    <span
      ref={ref}
      className={className}
    >
      {value}
    </span>
  )
}

