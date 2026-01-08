# 🏗️ STATION33 WEBSITE BUILD - CLAUDE CODE INSTRUCTIONS

## 🎯 PRIMARY OBJECTIVE

Build a stunning, high-performance Next.js 14 website for Station33 - a $100M+ mixed-use development in Chattanooga, TN. The site must **EXACTLY replicate** the structure, spacing, and animations of the Sienna Real Estate Template (https://sienna-real-estate-template.webflow.io/) while using Station33's brand identity.

---

## 📋 WHAT YOU'RE BUILDING

**Homepage (MVP)**: Single-page landing site with:
- Sticky navigation
- Hero with animated headline
- Stats counter section
- Features grid (6 cards)
- Timeline/"Perfect Day" section
- Location highlights
- Events carousel
- Dual CTA section
- FAQ accordion
- Footer with newsletter

**Goal**: Generate investor leads + build community interest

---

## 🗂️ REFERENCE DOCUMENTS IN THIS DIRECTORY

**Read these as needed** (don't try to load everything at once):

1. **BUILD_GUIDE.md** - High-level architecture, tech stack, folder structure
2. **COMPONENTS.md** - Detailed specs for each section/component
3. **ANIMATIONS.md** - GSAP animation patterns and implementation
4. **STYLES.md** - Complete design system (colors, typography, spacing)
5. **CONTENT.md** - Brand voice, messaging, copy guidelines

---

## 🏗️ BUILD APPROACH - PHASED STRATEGY

### **PHASE 1: Foundation Setup** ⚙️
```bash
# Initialize Next.js 14 project
npx create-next-app@latest station33-website --typescript --tailwind --app

# Install dependencies
npm install gsap @gsap/react

# Project structure
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navigation.tsx
  Hero.tsx
  Stats.tsx
  Features.tsx
  Timeline.tsx
  Location.tsx
  EventsCarousel.tsx
  CTA.tsx
  FAQ.tsx
  Footer.tsx
lib/
  animations.ts
  utils.ts
public/
  images/
  icons/
```

**Actions:**
1. Read **BUILD_GUIDE.md** for complete tech stack
2. Set up project structure
3. Configure Tailwind with Station33 colors (see **STYLES.md**)
4. Add Inter font from Google Fonts
5. Create basic layout.tsx and globals.css

---

### **PHASE 2: Navigation & Hero** 🎨
**Build first, then style, then animate**

1. Read **COMPONENTS.md** → "Navigation Header" section
2. Build `<Navigation />` component
3. Style with Tailwind (reference **STYLES.md** for colors)
4. Add sticky-on-scroll behavior (see **ANIMATIONS.md**)

5. Read **COMPONENTS.md** → "Hero Section"
6. Build `<Hero />` component with:
   - Split-text headline
   - Subtitle + description
   - Dual CTAs
7. Style with proper spacing (see **STYLES.md** for measurements)
8. Add GSAP word-by-word animation (see **ANIMATIONS.md**)

**Checkpoint**: Hero should look like Sienna template with Station33 branding

---

### **PHASE 3: Stats & Features** 📊

1. Read **COMPONENTS.md** → "Stats Section"
2. Build `<Stats />` with 5-column grid
3. Add counter animation (GSAP - see **ANIMATIONS.md**)

4. Read **COMPONENTS.md** → "Vision Section"
5. Build `<Features />` with 3-column responsive grid
6. Create 6 feature cards (Commercial, Residential, Hotel, Dining, Plaza, Riverwalk)
7. Add scroll-triggered fade-in animation

**Checkpoint**: Stats + Features grid responsive on all breakpoints

---

### **PHASE 4: Timeline & Location** 📍

1. Read **COMPONENTS.md** → "The Perfect Day (Timeline Story)"
2. Build `<Timeline />` with alternating layout
3. Add time labels, content cards, images
4. Implement alternating slide-in animation (see **ANIMATIONS.md**)

5. Read **COMPONENTS.md** → "Location Section"
6. Build `<Location />` with map + highlights
7. 6 location items with icons

**Checkpoint**: Timeline alternates correctly, animations smooth

---

### **PHASE 5: Carousel & CTA** 🎠

1. Read **COMPONENTS.md** → "Community Events (Carousel)"
2. Build `<EventsCarousel />` with horizontal scroll
3. Implement drag-to-scroll functionality
4. Add prev/next buttons
5. Style carousel cards (see **STYLES.md**)

6. Read **COMPONENTS.md** → "CTA Section (Dual)"
7. Build `<CTA />` with 2-column grid
8. Investor card + Community card
9. Add gradient background

**Checkpoint**: Carousel scrolls smoothly, CTAs prominent

---

### **PHASE 6: FAQ & Footer** ❓

1. Read **COMPONENTS.md** → "FAQ Accordion"
2. Build `<FAQ />` with accordion functionality
3. 6 FAQ items with smooth expand/collapse
4. GSAP height animation (see **ANIMATIONS.md**)

5. Read **COMPONENTS.md** → "Footer"
6. Build `<Footer />` with 4-column grid
7. Add newsletter form
8. Footer links, social icons, legal

**Checkpoint**: FAQ expands/collapses smoothly, footer complete

---

### **PHASE 7: Polish & Refinement** ✨

1. **Mobile Responsive**:
   - Test all breakpoints (320px, 768px, 1024px, 1440px)
   - Mobile menu hamburger
   - Stack layouts properly

2. **Animations**:
   - Read **ANIMATIONS.md** → "Master Animation Initialize Function"
   - Implement all scroll-triggered animations
   - Test 60fps performance

3. **Forms**:
   - Newsletter form validation
   - Loading states
   - Success messages

4. **Content**:
   - Read **CONTENT.md** for all copy
   - Replace placeholder text
   - Add proper alt text for images

5. **SEO**:
   - Meta tags in layout.tsx
   - Open Graph images
   - Favicon

---

## 🎨 CRITICAL DESIGN REQUIREMENTS

**Must match Sienna template exactly:**
- ✅ Section spacing: 200-400px padding top/bottom
- ✅ Hero height: min-height 100vh
- ✅ Stats grid: 5 columns (desktop) → 2 (mobile)
- ✅ Feature cards: 3 columns → 1 (mobile)
- ✅ Timeline: alternating left/right layout
- ✅ Carousel: horizontal scroll, 400px item width
- ✅ FAQ: smooth accordion animation
- ✅ Footer: 4 columns → 1 (mobile)

**Station33 brand colors** (see STYLES.md for full palette):
- Primary: `#C8102E` (Station Red)
- Accent: `#F26522` (Station Orange)
- Background: `#1A1A1A` (Dark gray)
- Text: `#F1E8D6` (Cream)

---

## 🎬 ANIMATION REQUIREMENTS

**Every section needs:**
1. Scroll-triggered entrance animation
2. Proper stagger timing (0.08-0.15s)
3. Smooth easing (`power3.out` or `power2.out`)

**Key animations:**
- Hero headline: Word-by-word fade + slide up
- Stats: Counter animation from 0 to target
- Cards: Stagger fade-in on scroll
- Timeline: Alternate slide left/right
- Carousel: Drag-to-scroll with momentum
- FAQ: Smooth height expand/collapse

---

## 📱 RESPONSIVE BREAKPOINTS

```css
/* Mobile First */
Base: 320px+

/* Tablet */
@media (min-width: 768px) {
  - 2-column grids
  - Larger typography
}

/* Desktop */
@media (min-width: 1024px) {
  - 3-5 column grids
  - Full navigation
  - Larger spacing
}

/* Large Desktop */
@media (min-width: 1440px) {
  - Max-width container: 1920px
}
```

---

## 🚫 CRITICAL NOTES

**DO:**
- ✅ Build incrementally (one phase at a time)
- ✅ Reference docs as needed (don't load everything)
- ✅ Test responsive at each phase
- ✅ Use Tailwind classes where possible
- ✅ Match Sienna spacing exactly
- ✅ Implement all GSAP animations
- ✅ Use Station33 brand colors/fonts

**DON'T:**
- ❌ Try to build everything at once
- ❌ Skip mobile responsive testing
- ❌ Forget animations (they're critical!)
- ❌ Use generic spacing (match Sienna exactly)
- ❌ Mention Disney Imagineering (not finalized)
- ❌ Over-complicate (keep it clean)

---

## 🎯 SUCCESS CRITERIA

**The site is complete when:**
1. ✅ Homepage loads in <3 seconds
2. ✅ All animations are smooth (60fps)
3. ✅ Mobile responsive (all breakpoints)
4. ✅ Forms work (newsletter + contact)
5. ✅ Layout matches Sienna template
6. ✅ Station33 branding throughout
7. ✅ No console errors
8. ✅ Passes accessibility checks
9. ✅ All content from CONTENT.md added
10. ✅ SEO meta tags in place

---

## 🚀 GETTING STARTED

1. **Read BUILD_GUIDE.md** to understand architecture
2. **Start Phase 1**: Set up Next.js project
3. **Reference other docs as needed** during each phase
4. **Build incrementally**: Complete each phase before moving on
5. **Test constantly**: Check responsive + animations at every step

---

## 📞 NEED HELP?

- Stuck on animations? → Read **ANIMATIONS.md**
- Design questions? → Check **STYLES.md**
- Component structure unclear? → See **COMPONENTS.md**
- Copy/content needed? → Reference **CONTENT.md**

---

**Now begin Phase 1: Foundation Setup** 🚀
