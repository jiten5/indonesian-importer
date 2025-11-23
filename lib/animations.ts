import { Variants } from 'framer-motion'

// Easing curves
export const easing = {
  easeInOut: [0.4, 0, 0.2, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  easeIn: [0.4, 0, 1, 1] as const,
  sharp: [0.4, 0, 0.6, 1] as const,
  spring: { type: 'spring' as const, stiffness: 300, damping: 30 }
}

// Duration presets (in seconds)
export const duration = {
  instant: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7
}

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Fade in up animation (21st.dev style)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Fade in down animation
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Scale fade in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Stagger container animation (for lists/grids)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

// Stagger item animation (child of staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Hero animation (dramatic entrance)
export const heroAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.slow, 
      ease: easing.easeOut,
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

// Floating animation (subtle hover effect)
export const floating = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Pulse animation (for badges, notifications)
export const pulse = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: duration.normal, ease: easing.easeOut }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: duration.fast, ease: easing.easeIn }
  }
}

// Card hover animation
export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
  },
  hover: { 
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: { duration: duration.fast, ease: easing.easeOut }
  }
}

// Button press animation
export const buttonPress = {
  whileTap: { scale: 0.97 },
  transition: { duration: duration.instant }
}

// Reveal on scroll (use with IntersectionObserver)
export const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration.slow, 
      ease: easing.easeOut 
    }
  }
}

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.easeOut }
  }
}

// Shimmer effect for loading states
export const shimmer = {
  initial: { backgroundPosition: '-200% 0' },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

// Nav item animation
export const navItemAnimation: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.05,
      duration: duration.fast, 
      ease: easing.easeOut 
    }
  })
}

// Modal/Dialog animations
export const modalAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      duration: duration.normal, 
      ease: easing.easeOut 
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    y: 20,
    transition: { 
      duration: duration.fast, 
      ease: easing.easeIn 
    }
  }
}

// Backdrop animation for modals
export const backdropAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: duration.fast }
  },
  exit: { 
    opacity: 0,
    transition: { duration: duration.fast }
  }
}

// Progress bar animation
export const progressBar: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: duration.slow, ease: easing.easeOut }
  }
}

// Number counter animation utility
export const counterAnimation = (from: number, to: number, duration: number = 2) => ({
  from,
  to,
  duration
})

// Viewport config for scroll animations (optimized for performance)
export const scrollViewport = {
  once: true, // Only animate once
  margin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
  amount: 0.3 // Trigger when 30% of element is visible
}

// Reduced motion preference check
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Safe animation wrapper that respects reduced motion preference
export const safeAnimation = (animation: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }
    }
  }
  return animation
}

// Spring configuration presets
export const springPresets = {
  gentle: { type: 'spring' as const, stiffness: 100, damping: 15 },
  wobbly: { type: 'spring' as const, stiffness: 180, damping: 12 },
  stiff: { type: 'spring' as const, stiffness: 300, damping: 30 },
  slow: { type: 'spring' as const, stiffness: 80, damping: 20 }
}

// Hover lift effect (for cards, buttons)
export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -4,
    transition: { duration: duration.fast, ease: easing.easeOut }
  }
}

// Expand animation (for accordions, dropdowns)
export const expand: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: 'auto', 
    opacity: 1,
    transition: { 
      height: { duration: duration.normal, ease: easing.easeOut },
      opacity: { duration: duration.fast, delay: 0.05 }
    }
  }
}

// Collapse animation
export const collapse: Variants = {
  visible: { height: 'auto', opacity: 1 },
  hidden: { 
    height: 0, 
    opacity: 0,
    transition: { 
      height: { duration: duration.normal, ease: easing.easeIn },
      opacity: { duration: duration.fast }
    }
  }
}
