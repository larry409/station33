# 🎬 ANIMATIONS - GSAP Implementation Guide

## Core GSAP Setup

```typescript
// lib/animations.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

export const initGSAP = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText)
  
  gsap.defaults({
    ease: 'power3.out',
    duration: 1
  })
  
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  })
}

// Call this in root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initGSAP()
  }, [])
  
  return children
}
```

---

## Animation Patterns

### 1. Word-by-Word Text Animation

```typescript
// Hero headline animation
useEffect(() => {
  const ctx = gsap.context(() => {
    const split = new SplitText('.hero-title', { type: 'words' })
    
    gsap.from(split.words, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3
    })
  }, containerRef)
  
  return () => ctx.revert()
}, [])
```

### 2. Scroll-Triggered Fade In

```typescript
// For cards, features, any element
gsap.from('.card', {
  scrollTrigger: {
    trigger: '.card-container',
    start: 'top 70%',
    once: true
  },
  y: 100,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: 'power3.out'
})
```

### 3. Counter Animation

```typescript
// Stats counter
const statNumbers = gsap.utils.toArray('.stat-number')

statNumbers.forEach((counter: any) => {
  const target = parseFloat(counter.dataset.count)
  
  gsap.to(counter, {
    scrollTrigger: {
      trigger: statsSection,
      start: 'top 70%',
      once: true
    },
    innerText: target,
    duration: 2,
    snap: { innerText: target < 100 ? 1 : 10 },
    ease: 'power1.out',
    onUpdate: function() {
      const val = Math.ceil(this.targets()[0].innerText)
      counter.innerText = val.toLocaleString()
    }
  })
})
```

### 4. Timeline Alternating Animation

```typescript
// Timeline items slide from left/right
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 60%'
  },
  x: (i) => i % 2 === 0 ? -100 : 100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: 'power2.out'
})
```

### 5. Accordion Expand/Collapse

```typescript
// FAQ accordion
const answer = faqItem.querySelector('.faq-answer')
const isActive = faqItem.classList.contains('active')

if (!isActive) {
  gsap.to(answer, {
    maxHeight: answer.scrollHeight,
    duration: 0.4,
    ease: 'power2.inOut'
  })
} else {
  gsap.to(answer, {
    maxHeight: 0,
    duration: 0.4,
    ease: 'power2.inOut'
  })
}
```

### 6. Parallax Effect

```typescript
// Hero image parallax
gsap.to('.parallax-element', {
  scrollTrigger: {
    trigger: '.hero-section',
    scrub: true
  },
  y: (i, target) => -100 * parseFloat(target.dataset.speed || '0.5'),
  ease: 'none'
})
```

### 7. Hover Scale Effect

```typescript
// Card hover with GSAP (smoother than CSS)
const card = document.querySelector('.feature-card')

card.addEventListener('mouseenter', () => {
  gsap.to(card, {
    y: -8,
    duration: 0.3,
    ease: 'power2.out'
  })
})

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    y: 0,
    duration: 0.3,
    ease: 'power2.out'
  })
})
```

---

## Complete Component Animations

### Hero Component

```typescript
const heroRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(SplitText)
  
  const ctx = gsap.context(() => {
    // Split and animate headline
    const titleSplit = new SplitText('.hero-title', { type: 'words' })
    gsap.from(titleSplit.words, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.3
    })

    // Animate subtitle, description, CTAs
    gsap.from(['.hero-subtitle', '.hero-description', '.hero-ctas'], {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1.2,
      ease: 'power2.out'
    })

    // Parallax building illustration
    gsap.to('.hero-building', {
      scrollTrigger: {
        trigger: heroRef.current,
        scrub: true
      },
      y: 150,
      ease: 'none'
    })
  }, heroRef)

  return () => ctx.revert()
}, [])
```

### Stats Component

```typescript
const statsRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    const statNumbers = gsap.utils.toArray('.stat-number')
    
    statNumbers.forEach((counter: any) => {
      const target = parseFloat(counter.dataset.count)
      
      gsap.to(counter, {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 70%',
          once: true
        },
        innerText: target,
        duration: 2,
        snap: { innerText: target < 100 ? 1 : 10 },
        ease: 'power1.out',
        onUpdate: function() {
          const val = Math.ceil(this.targets()[0].innerText)
          counter.innerText = val.toLocaleString()
        }
      })
    })
  }, statsRef)

  return () => ctx.revert()
}, [])
```

### Features Component

```typescript
const featuresRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top 70%'
      },
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, featuresRef)

  return () => ctx.revert()
}, [])
```

### Timeline Component

```typescript
const timelineRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 60%'
      },
      x: (i) => i % 2 === 0 ? -100 : 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power2.out'
    })
  }, timelineRef)

  return () => ctx.revert()
}, [])
```

### Carousel Component

```typescript
const carouselRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.from('.carousel-item', {
      scrollTrigger: {
        trigger: carouselRef.current,
        start: 'top 70%'
      },
      x: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, carouselRef)

  return () => ctx.revert()
}, [])
```

### CTA Component

```typescript
const ctaRef = useRef(null)

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)

  const ctx = gsap.context(() => {
    gsap.from('.cta-card', {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 70%'
      },
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out'
    })
  }, ctaRef)

  return () => ctx.revert()
}, [])
```

---

## Animation Timing Reference

```typescript
// Stagger delays
const STAGGER = {
  fast: 0.08,     // Word-by-word text
  medium: 0.15,   // Cards, features
  slow: 0.3       // Timeline items
}

// Durations
const DURATION = {
  fast: 0.4,      // Accordion, hovers
  medium: 0.8,    // Most animations
  slow: 1.2,      // Hero entrance
  counter: 2      // Stat counters
}

// Easing
const EASE = {
  default: 'power3.out',
  smooth: 'power2.out',
  counter: 'power1.out',
  accordion: 'power2.inOut'
}

// ScrollTrigger start positions
const TRIGGER_START = {
  early: 'top 80%',
  default: 'top 70%',
  late: 'top 60%'
}
```

---

## Performance Optimization

```typescript
// Use will-change for better performance
gsap.set('.animated-element', {
  willChange: 'transform, opacity'
})

// Clear will-change after animation
gsap.to('.animated-element', {
  y: 0,
  opacity: 1,
  duration: 1,
  onComplete: () => {
    gsap.set('.animated-element', { clearProps: 'willChange' })
  }
})

// Use force3D for smoother animations
gsap.config({
  force3D: true
})

// Batch similar animations
const cards = gsap.utils.toArray('.feature-card')
gsap.from(cards, {
  y: 100,
  opacity: 0,
  stagger: 0.15
})
```

---

## Cleanup Pattern

```typescript
// Always cleanup GSAP animations
useEffect(() => {
  // Create context
  const ctx = gsap.context(() => {
    // All animations here
  }, containerRef)
  
  // Cleanup on unmount
  return () => ctx.revert()
}, [])
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Forget to register plugins
- Animate without cleanup
- Use too many animations
- Animate layout properties (width, height) - use transforms
- Target elements before they exist in DOM

✅ **Do:**
- Always use gsap.context() for cleanup
- Use transforms (x, y, scale) instead of layout properties
- Batch similar animations
- Use once: true for ScrollTrigger when appropriate
- Test on mobile devices

---

## Testing Animations

```typescript
// Check animation performance
ScrollTrigger.getAll().forEach(st => {
  console.log(st.trigger, st.start, st.end)
})

// Slow down all animations for testing
gsap.globalTimeline.timeScale(0.5)

// Kill all animations
gsap.killTweensOf('*')
```
