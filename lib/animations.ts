import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Initialize GSAP with default settings
export const initAnimations = () => {
  gsap.defaults({
    ease: 'power3.out',
    duration: 1,
  })

  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  })
}

// Fade in animation for elements
export const fadeIn = (element: string | Element, delay: number = 0) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay,
    ease: 'power3.out',
  })
}

// Stagger fade in for multiple elements
export const staggerFadeIn = (elements: string, stagger: number = 0.1) => {
  gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%',
    },
  })
}

// Counter animation
export const animateCounter = (
  element: Element,
  endValue: number,
  duration: number = 2
) => {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: endValue,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      if (element) {
        element.textContent = Math.round(obj.val).toString()
      }
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      once: true,
    },
  })
}

// Slide in from left
export const slideInLeft = (element: string | Element, delay: number = 0) => {
  gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
  })
}

// Slide in from right
export const slideInRight = (element: string | Element, delay: number = 0) => {
  gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
    },
  })
}

export default {
  initAnimations,
  fadeIn,
  staggerFadeIn,
  animateCounter,
  slideInLeft,
  slideInRight,
}
