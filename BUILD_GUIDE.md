# 🏗️ BUILD GUIDE - Architecture & Tech Stack

## 📦 Tech Stack

### **Core Framework**
- **Next.js 14** with App Router (TypeScript)
- **React 18.2+**
- **Tailwind CSS 3.3+**

### **Animation**
- **GSAP 3.14.2** (GreenSock Animation Platform)
- **ScrollTrigger** plugin (scroll-based animations)
- **SplitText** plugin (text animations)

### **Forms & Validation**
- React Hook Form (optional)
- Native HTML5 validation (minimum viable)

### **Deployment**
- Vercel (recommended)
- Netlify (alternative)

---

## 📁 Project Structure

```
station33-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Homepage (main landing page)
│   ├── globals.css             # Global styles + CSS variables
│   ├── investors/
│   │   └── page.tsx            # [Future] Investors page
│   ├── community/
│   │   └── page.tsx            # [Future] Community page
│   ├── about/
│   │   └── page.tsx            # [Future] About page
│   ├── contact/
│   │   └── page.tsx            # [Future] Contact page
│   └── api/
│       ├── newsletter/
│       │   └── route.ts        # Newsletter signup endpoint
│       └── contact/
│           └── route.ts        # Contact form endpoint
│
├── components/
│   ├── Navigation.tsx          # Sticky header with nav links
│   ├── Hero.tsx                # Hero section with animated headline
│   ├── Stats.tsx               # 5-stat counter grid
│   ├── Features.tsx            # 6-feature cards grid
│   ├── Timeline.tsx            # "Perfect Day" alternating timeline
│   ├── Location.tsx            # Location highlights with map
│   ├── EventsCarousel.tsx      # Horizontal scroll carousel
│   ├── CTA.tsx                 # Dual CTA cards (investor + community)
│   ├── FAQ.tsx                 # Accordion FAQ section
│   └── Footer.tsx              # Footer with newsletter form
│
├── lib/
│   ├── animations.ts           # GSAP animation functions
│   └── utils.ts                # Utility functions
│
├── public/
│   ├── images/                 # Image assets
│   │   ├── hero/
│   │   ├── timeline/
│   │   ├── location/
│   │   └── events/
│   ├── icons/                  # SVG icons
│   │   ├── commercial.svg
│   │   ├── residential.svg
│   │   ├── hotel.svg
│   │   ├── dining.svg
│   │   ├── plaza.svg
│   │   └── riverwalk.svg
│   ├── logo-landscape.svg      # Station33 main logo
│   └── favicon.ico
│
├── tailwind.config.js          # Tailwind config with Station33 colors
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
├── package.json                # Dependencies
└── .env.local                  # Environment variables
```

---

## 🎨 Design System Architecture

### **Color System** (CSS Variables + Tailwind)

All colors defined in two places:
1. **CSS Variables** in `globals.css` (for consistency)
2. **Tailwind Config** (for utility classes)

```css
/* globals.css */
:root {
  --station-red: #C8102E;
  --station-orange: #F26522;
  --bg-dark: #1A1A1A;
  /* etc. */
}
```

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'station-red': '#C8102E',
        'station-orange': '#F26522',
        /* etc. */
      }
    }
  }
}
```

**Usage:**
```jsx
// CSS variable
<div style={{ color: 'var(--station-red)' }}>

// Tailwind class
<div className="bg-station-red text-white">
```

### **Typography System**

**Font Loading:**
```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})
```

**Type Scale:**
- Defined in Tailwind config
- Responsive scaling via Tailwind classes
- See STYLES.md for complete scale

### **Spacing System**

**Consistent spacing scale:**
```javascript
// Tailwind default + custom
spacing: {
  '0': '0',
  '1': '4px',
  '2': '8px',
  '4': '16px',
  '6': '24px',
  '8': '32px',
  '12': '48px',
  '16': '64px',
  '24': '96px',
  '32': '128px',
  '40': '160px',
  '48': '192px',
  '56': '224px',
  '64': '256px',
}
```

**Section padding:**
- Small: `py-16` (64px)
- Medium: `py-32 md:py-40` (128-160px)
- Large: `py-40 md:py-56` (160-224px)
- XL: `py-56 md:py-80` (224-320px)

---

## 🧩 Component Architecture

### **Component Pattern**

Every component follows this structure:

```tsx
'use client' // Only if using hooks or GSAP

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ComponentName() {
  const ref = useRef(null)
  
  useEffect(() => {
    // GSAP animations
    gsap.registerPlugin(ScrollTrigger)
    
    // Animation code here
  }, [])
  
  return (
    <section ref={ref} className="section-class">
      {/* Component content */}
    </section>
  )
}
```

### **State Management**

**No complex state needed for MVP:**
- Use React `useState` for simple interactions (FAQ open/close, mobile menu)
- Use `useRef` for GSAP animations
- No Redux/Zustand needed

### **Data Flow**

```
Homepage (page.tsx)
  ├─ Navigation (global state for mobile menu)
  ├─ Hero (static content)
  ├─ Stats (static data)
  ├─ Features (static cards)
  ├─ Timeline (static timeline items)
  ├─ Location (static highlights)
  ├─ EventsCarousel (static events)
  ├─ CTA (static CTAs)
  ├─ FAQ (local state for accordion)
  └─ Footer (form submission handler)
```

---

## 🎬 Animation Architecture

### **GSAP Setup**

**Global animation initialization:**
```tsx
// lib/animations.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const initAnimations = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.defaults({
    ease: 'power3.out',
    duration: 1
  })
  
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  })
}
```

**Component-level animations:**
```tsx
// components/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animations scoped to this component
      gsap.from('.hero-title', { y: 100, opacity: 0 })
    }, heroRef)
    
    return () => ctx.revert() // Cleanup
  }, [])
  
  return <section ref={heroRef}>...</section>
}
```

### **Animation Patterns**

1. **Immediate (on mount)**: Hero animations
2. **Scroll-triggered**: All other sections
3. **Interactive**: FAQ accordion, carousel drag

See ANIMATIONS.md for complete implementation.

---

## 📱 Responsive Strategy

### **Mobile-First Approach**

1. **Base styles** (320px+): Single column, stacked
2. **Tablet** (768px+): 2-column grids, larger text
3. **Desktop** (1024px+): 3-5 column grids, full nav
4. **Large** (1440px+): Max-width constraint

### **Responsive Component Example**

```tsx
export default function Features() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards */}
        </div>
      </div>
    </section>
  )
}
```

### **Mobile Menu Strategy**

```tsx
// components/Navigation.tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
  <>
    {/* Desktop nav: hidden on mobile */}
    <nav className="hidden md:flex">...</nav>
    
    {/* Mobile toggle: hidden on desktop */}
    <button 
      className="md:hidden"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      ☰
    </button>
    
    {/* Mobile menu */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-50 md:hidden">
        {/* Mobile menu content */}
      </div>
    )}
  </>
)
```

---

## 🔌 API Routes

### **Newsletter Signup**

```typescript
// app/api/newsletter/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Validate email
  if (!email || !email.includes('@')) {
    return NextResponse.json(
      { error: 'Invalid email' },
      { status: 400 }
    )
  }
  
  // TODO: Connect to Mailchimp/ConvertKit
  // For now, just log
  console.log('Newsletter signup:', email)
  
  return NextResponse.json({ success: true })
}
```

### **Contact Form**

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message, interest } = await request.json()
  
  // Validate
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    )
  }
  
  // TODO: Send email or save to database
  console.log('Contact form:', { name, email, message, interest })
  
  return NextResponse.json({ success: true })
}
```

---

## 🚀 Build & Deploy

### **Development**

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

### **Production Build**

```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

### **Environment Variables**

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://station33chattanooga.com
MAILCHIMP_API_KEY=your_key
MAILCHIMP_LIST_ID=your_list_id
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### **Vercel Deployment**

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

**Vercel Config:**
```json
// vercel.json (optional)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

---

## ⚡ Performance Optimization

### **Image Optimization**

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Station33"
  width={1200}
  height={800}
  priority // For hero image
  placeholder="blur"
/>
```

### **Code Splitting**

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const EventsCarousel = dynamic(() => import('@/components/EventsCarousel'), {
  loading: () => <p>Loading...</p>
})
```

### **GSAP Optimization**

```tsx
// Use gsap.context for cleanup
useEffect(() => {
  const ctx = gsap.context(() => {
    // All animations
  }, containerRef)
  
  return () => ctx.revert() // Cleanup on unmount
}, [])
```

---

## 🧪 Testing Checklist

**Before considering build complete:**

- [ ] All pages load without errors
- [ ] All animations work smoothly (60fps)
- [ ] Mobile responsive (test 320px, 768px, 1024px)
- [ ] Forms validate and submit
- [ ] Navigation sticky on scroll
- [ ] FAQ accordion expands/collapses
- [ ] Carousel scrolls horizontally
- [ ] Stats counters animate on scroll
- [ ] Links work correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Lighthouse score >90

---

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [ScrollTrigger Docs](https://greensock.com/scrolltrigger/)

---

**Next Steps:**
1. Review STYLES.md for complete design system
2. Review COMPONENTS.md for component specifications
3. Review ANIMATIONS.md for animation details
4. Begin Phase 1 from PROMPT.md
