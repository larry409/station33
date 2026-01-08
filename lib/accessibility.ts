/**
 * Accessibility utilities for handling reduced motion preferences
 * Ensures WCAG 2.1 compliance for motion-sensitive users
 */

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const getAnimationConfig = <T extends Record<string, any>>(config: T): T => {
  if (prefersReducedMotion()) {
    return {
      ...config,
      duration: 0.01,
      stagger: 0,
      delay: 0,
      ease: 'none',
    } as T
  }
  return config
}

export const shouldAnimate = (): boolean => {
  return !prefersReducedMotion()
}
