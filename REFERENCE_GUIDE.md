# 🗺️ REFERENCE GUIDE - When to Read What

This document tells Claude Code **exactly which file to read at each step**.

---

## 📖 Document Quick Reference

| File | Purpose | When to Read |
|------|---------|--------------|
| **PROMPT.md** | Main instructions | READ FIRST - Always |
| **BUILD_GUIDE.md** | Architecture & setup | Phase 1, when setting up project |
| **STYLES.md** | Colors, fonts, spacing | Phases 1-7, whenever styling anything |
| **COMPONENTS.md** | Component code | Phases 2-6, when building each component |
| **ANIMATIONS.md** | GSAP patterns | Phases 2-6, when adding animations |
| **CONTENT.md** | Copy & messaging | Phases 2-7, when adding text content |

---

## 🎯 Decision Tree: "Which File Should I Read?"

```
START
  ↓
  Am I starting the project?
  ├─ YES → Read BUILD_GUIDE.md (project structure)
  └─ NO → Continue
      ↓
      What am I working on?
      ├─ Setting up Tailwind config?
      │   └─ Read STYLES.md → "Color Palette" & "Tailwind Config"
      │
      ├─ Building a component?
      │   ├─ Navigation? → Read COMPONENTS.md → "Navigation" section
      │   ├─ Hero? → Read COMPONENTS.md → "Hero" section
      │   ├─ Stats? → Read COMPONENTS.md → "Stats" section
      │   ├─ Features? → Read COMPONENTS.md → "Features" section
      │   ├─ Timeline? → Read COMPONENTS.md → "Timeline" section (if it exists)
      │   ├─ Carousel? → Read COMPONENTS.md → "Carousel" section (if it exists)
      │   ├─ FAQ? → Read COMPONENTS.md → "FAQ" section (if it exists)
      │   └─ Footer? → Read COMPONENTS.md → "Footer" section (if it exists)
      │
      ├─ Adding animations?
      │   ├─ Word-by-word text? → Read ANIMATIONS.md → "Word-by-Word Animation"
      │   ├─ Counter animation? → Read ANIMATIONS.md → "Counter Animation"
      │   ├─ Scroll triggers? → Read ANIMATIONS.md → "Scroll-Triggered Fade In"
      │   ├─ Timeline alternating? → Read ANIMATIONS.md → "Timeline Alternating"
      │   ├─ Accordion? → Read ANIMATIONS.md → "Accordion Expand/Collapse"
      │   └─ General setup? → Read ANIMATIONS.md → "Core GSAP Setup"
      │
      ├─ Styling something?
      │   ├─ Colors needed? → Read STYLES.md → "Color Palette"
      │   ├─ Typography? → Read STYLES.md → "Typography"
      │   ├─ Spacing? → Read STYLES.md → "Spacing System"
      │   ├─ Buttons? → Read STYLES.md → "Button Styles"
      │   ├─ Cards? → Read STYLES.md → "Card Styles"
      │   ├─ Grids? → Read STYLES.md → "Grid Systems"
      │   └─ Responsive? → Read STYLES.md → "Responsive Utilities"
      │
      └─ Adding content/copy?
          ├─ Hero text? → Read CONTENT.md → "Hero Section"
          ├─ Feature descriptions? → Read CONTENT.md → "Features Section"
          ├─ Timeline items? → Read CONTENT.md → "Timeline Section"
          ├─ FAQ questions? → Read CONTENT.md → "FAQ Section"
          └─ Footer text? → Read CONTENT.md → "Footer"
```

---

## 📋 Phase-by-Phase Reading Guide

### **PHASE 1: Foundation Setup**

**Tasks:** Initialize Next.js, install dependencies, setup Tailwind

**Read in this order:**
1. ✅ **BUILD_GUIDE.md** → "Project Structure" section
2. ✅ **BUILD_GUIDE.md** → "Tech Stack" section  
3. ✅ **STYLES.md** → "Color Palette" section
4. ✅ **STYLES.md** → "Tailwind Config Reference" section

**Actions:**
- Create Next.js project
- Install GSAP
- Configure Tailwind with Station33 colors
- Set up globals.css with CSS variables

---

### **PHASE 2: Navigation & Hero**

**Tasks:** Build header navigation and hero section

**Read in this order:**
1. ✅ **COMPONENTS.md** → "Navigation Component Structure"
2. ✅ **STYLES.md** → "Typography" section (for nav link styles)
3. ✅ **COMPONENTS.md** → "Hero Component"
4. ✅ **ANIMATIONS.md** → "Word-by-Word Text Animation"
5. ✅ **CONTENT.md** → "Hero Section" (for copy)

**Actions:**
- Build Navigation.tsx with sticky behavior
- Build Hero.tsx with animated headline
- Add GSAP animations
- Insert hero copy

---

### **PHASE 3: Stats & Features**

**Tasks:** Build stats counter and features grid

**Read in this order:**
1. ✅ **COMPONENTS.md** → "Stats Component"
2. ✅ **ANIMATIONS.md** → "Counter Animation"
3. ✅ **CONTENT.md** → "Stats Section" (for numbers)
4. ✅ **COMPONENTS.md** → "Features Component"
5. ✅ **STYLES.md** → "Card Styles" section
6. ✅ **CONTENT.md** → "Features Section" (for copy)

**Actions:**
- Build Stats.tsx with counter animation
- Build Features.tsx with 6 cards
- Add scroll-triggered animations
- Insert all copy

---

### **PHASE 4: Timeline & Location**

**Tasks:** Build "Perfect Day" timeline and location highlights

**Read in this order:**
1. ✅ **COMPONENTS.md** → Look for Timeline section (may need to build from scratch)
2. ✅ **ANIMATIONS.md** → "Timeline Alternating Animation"
3. ✅ **CONTENT.md** → "Timeline Section"
4. ✅ **COMPONENTS.md** → Look for Location section
5. ✅ **CONTENT.md** → "Location Section"

**Actions:**
- Build Timeline.tsx with alternating layout
- Build Location.tsx with map and highlights
- Add animations
- Insert all copy

---

### **PHASE 5: Carousel & CTA**

**Tasks:** Build events carousel and dual CTA cards

**Read in this order:**
1. ✅ **COMPONENTS.md** → Look for Carousel section
2. ✅ **ANIMATIONS.md** → "Carousel Component" animation
3. ✅ **CONTENT.md** → "Events Section"
4. ✅ **COMPONENTS.md** → Look for CTA section
5. ✅ **CONTENT.md** → "CTA Section"

**Actions:**
- Build EventsCarousel.tsx with drag-to-scroll
- Build CTA.tsx with investor + community cards
- Add animations
- Insert all copy

---

### **PHASE 6: FAQ & Footer**

**Tasks:** Build FAQ accordion and footer

**Read in this order:**
1. ✅ **COMPONENTS.md** → Look for FAQ section
2. ✅ **ANIMATIONS.md** → "Accordion Expand/Collapse"
3. ✅ **CONTENT.md** → "FAQ Section"
4. ✅ **COMPONENTS.md** → Look for Footer section
5. ✅ **CONTENT.md** → "Footer"

**Actions:**
- Build FAQ.tsx with accordion
- Build Footer.tsx with newsletter form
- Add animations
- Insert all copy

---

### **PHASE 7: Polish & Refinement**

**Tasks:** Mobile responsive, final animations, forms, SEO

**Read in this order:**
1. ✅ **STYLES.md** → "Responsive Utilities"
2. ✅ **ANIMATIONS.md** → "Master Animation Initialize Function"
3. ✅ **BUILD_GUIDE.md** → "Testing Checklist"
4. ✅ **CONTENT.md** → "Meta Descriptions"

**Actions:**
- Test all breakpoints
- Verify all animations work
- Add form validation
- Add meta tags
- Final testing

---

## 🚨 Critical Reading Rules

### **ALWAYS Read:**
- **PROMPT.md** first (main instructions)
- **CONTENT.md** when adding any text
- **STYLES.md** when styling anything

### **Read When Stuck:**
- Can't remember colors? → **STYLES.md** → "Color Palette"
- Animation not working? → **ANIMATIONS.md** → Look up the pattern
- Component structure unclear? → **COMPONENTS.md** → Find the component
- Need copy? → **CONTENT.md** → Find the section

### **Never Skip:**
- Phase reading guides in **PROMPT.md**
- Cleanup patterns in **ANIMATIONS.md** (prevents memory leaks)
- Responsive testing in **BUILD_GUIDE.md**

---

## 💡 Pro Tips

### **Tip 1: Search by Section Title**
All files have clear section headers like:
- `## Hero Component`
- `## Color Palette`
- `## Timeline Section`

Just search for what you need!

### **Tip 2: Follow the Phase Numbers**
The phase numbers in **PROMPT.md** match the reading order above. Trust the sequence!

### **Tip 3: Reference Multiple Files**
Building a component often requires reading from:
- **COMPONENTS.md** (structure)
- **STYLES.md** (styling)
- **ANIMATIONS.md** (animations)
- **CONTENT.md** (copy)

That's normal and expected!

### **Tip 4: Check Examples**
Every file has code examples. Copy them, then customize for Station33.

---

## 🎯 Quick Decision Table

| I Need To... | Read This File | Section |
|--------------|----------------|---------|
| Know what colors to use | STYLES.md | Color Palette |
| Build navigation | COMPONENTS.md | Navigation Component |
| Add hero animation | ANIMATIONS.md | Word-by-Word Animation |
| Get hero copy | CONTENT.md | Hero Section |
| Set up project structure | BUILD_GUIDE.md | Project Structure |
| Style buttons | STYLES.md | Button Styles |
| Create stats counters | ANIMATIONS.md | Counter Animation |
| Make accordion work | ANIMATIONS.md | Accordion Expand/Collapse |
| Add responsive breakpoints | STYLES.md | Responsive Utilities |
| Test the build | BUILD_GUIDE.md | Testing Checklist |

---

## ✅ Checklist: "Did I Read the Right Files?"

After completing each phase, ask:

- [ ] Did I check COMPONENTS.md for structure?
- [ ] Did I check STYLES.md for colors/spacing?
- [ ] Did I check ANIMATIONS.md for motion?
- [ ] Did I check CONTENT.md for copy?
- [ ] Does my code match the examples?

If you answered NO to any, go back and read that file!

---

## 🆘 When You're Stuck

**Problem:** I don't know what to build next
**Solution:** Read **PROMPT.md** → Find your current phase

**Problem:** I don't know what this component should look like
**Solution:** Read **COMPONENTS.md** → Find the component section

**Problem:** I don't know what color to use
**Solution:** Read **STYLES.md** → "Color Palette"

**Problem:** Animation isn't working
**Solution:** Read **ANIMATIONS.md** → Find the pattern & check cleanup

**Problem:** I don't know what text to put here
**Solution:** Read **CONTENT.md** → Find the matching section

**Problem:** I'm lost
**Solution:** Read **PROMPT.md** again from the top

---

**Remember: These files are YOUR REFERENCE LIBRARY. Use them liberally!** 📚
