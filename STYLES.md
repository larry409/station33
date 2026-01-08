# 🎨 STYLES - Complete Design System

## 🎨 Color Palette

### **Primary Colors**

```css
--station-red: #C8102E;        /* Primary CTA, accents */
--station-orange: #F26522;      /* Hover states, highlights */
--station-gray: #58595B;        /* Subtle accents */
--station-black: #231F20;       /* Deep blacks */
```

### **Secondary Colors**

```css
--olive-green: #708238;         /* PANTONE 3517 C */
--warm-orange: #E17A4C;         /* PANTONE 168 C */
--deep-brown: #4A3426;          /* Earthy tones */
--cream: #F1E8D6;               /* Text light */
```

### **Neutral Palette**

```css
--bg-dark: #1A1A1A;             /* Main background */
--bg-darker: #0D0D0D;           /* Footer, darker sections */
--card-bg: #2A2A2A;             /* Card backgrounds */
--border-gray: #3A3A3A;         /* Borders, dividers */
--text-light: #F1E8D6;          /* Body text */
--text-white: #FFFFFF;          /* Headings, emphasis */
```

### **Usage Guidelines**

```css
/* Backgrounds */
body { background: var(--bg-dark); }
footer { background: var(--bg-darker); }
.card { background: var(--card-bg); }

/* Text */
h1, h2, h3 { color: var(--text-white); }
p, li { color: var(--text-light); }

/* CTAs & Accents */
.btn-primary { background: var(--station-red); }
.btn-primary:hover { background: var(--station-orange); }
.link { color: var(--station-orange); }
```

---

## ✍️ Typography

### **Font Stack**

```css
/* Headings */
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-weight: 700-800;

/* Body */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
font-weight: 400-500;
```

### **Type Scale - Desktop**

```css
/* Hero/Display */
.text-hero {
  font-size: 4.2rem;      /* 67.2px */
  line-height: 1.1;       /* 74px */
  letter-spacing: -0.02em;
  font-weight: 700;
}

/* H1 - Page Titles */
h1, .text-h1 {
  font-size: 3rem;        /* 48px */
  line-height: 1.2;       /* 57.6px */
  letter-spacing: -0.01em;
  font-weight: 700;
}

/* H2 - Section Headings */
h2, .text-h2 {
  font-size: 2.25rem;     /* 36px */
  line-height: 1.2;       /* 43.2px */
  letter-spacing: -0.01em;
  font-weight: 600;
}

/* H3 - Card Titles */
h3, .text-h3 {
  font-size: 2rem;        /* 32px */
  line-height: 1.3;       /* 41.6px */
  letter-spacing: normal;
  font-weight: 600;
}

/* H4 - Subsections */
h4, .text-h4 {
  font-size: 1.5rem;      /* 24px */
  line-height: 1.4;       /* 33.6px */
  font-weight: 600;
}

/* Body Text */
p, .text-body {
  font-size: 1.125rem;    /* 18px */
  line-height: 1.6;       /* 28.8px */
  letter-spacing: normal;
  font-weight: 400;
}

/* Small Text */
.text-small {
  font-size: 1rem;        /* 16px */
  line-height: 1.5;       /* 24px */
}

/* Tiny Text */
.text-tiny {
  font-size: 0.875rem;    /* 14px */
  line-height: 1.5;       /* 21px */
}
```

### **Type Scale - Mobile**

```css
/* Hero/Display */
@media (max-width: 768px) {
  .text-hero {
    font-size: 2.5rem;    /* 40px */
    line-height: 1.1;
  }
}

/* H1 */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;      /* 32px */
    line-height: 1.2;
  }
}

/* H2 */
@media (max-width: 768px) {
  h2 {
    font-size: 1.75rem;   /* 28px */
    line-height: 1.3;
  }
}

/* H3 */
@media (max-width: 768px) {
  h3 {
    font-size: 1.5rem;    /* 24px */
    line-height: 1.3;
  }
}

/* Body */
@media (max-width: 768px) {
  p {
    font-size: 1rem;      /* 16px */
    line-height: 1.6;
  }
}
```

### **Font Weights**

```css
.font-normal { font-weight: 400; }    /* Body text */
.font-medium { font-weight: 500; }    /* Emphasized text */
.font-semibold { font-weight: 600; }  /* Subheadings */
.font-bold { font-weight: 700; }      /* Headings */
.font-extrabold { font-weight: 800; } /* Hero */
```

### **Text Transforms**

```css
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* Common usage */
.stat-label { 
  text-transform: uppercase; 
  letter-spacing: 0.1em;
  font-size: 1rem;
}
```

---

## 📏 Spacing System

### **Section Spacing** (EXACT from Sienna)

```css
/* Hero Section */
.section-hero {
  padding-bottom: 80px;    /* 5rem */
  min-height: 100vh;
}

/* Standard Sections */
.section-standard {
  padding-top: 200px;      /* 12.5rem */
  padding-bottom: 224px;   /* 14rem */
}

/* Large Sections */
.section-large {
  padding-top: 320px;      /* 20rem */
  padding-bottom: 320px;   /* 20rem */
}

/* Compact Sections */
.section-compact {
  padding-top: 80px;       /* 5rem */
  padding-bottom: 80px;    /* 5rem */
}
```

### **Component Spacing**

```css
/* Gap between grid items */
.gap-xs { gap: 8px; }      /* 0.5rem */
.gap-sm { gap: 16px; }     /* 1rem */
.gap-md { gap: 24px; }     /* 1.5rem */
.gap-lg { gap: 32px; }     /* 2rem */
.gap-xl { gap: 48px; }     /* 3rem */
.gap-2xl { gap: 64px; }    /* 4rem */

/* Common usage */
.feature-grid { gap: 32px; }
.timeline { gap: 64px; }
.footer-grid { gap: 48px; }
```

### **Container Padding**

```css
/* Mobile */
.container {
  padding-left: 5%;
  padding-right: 5%;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding-left: 8%;
    padding-right: 8%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding-left: 10%;
    padding-right: 10%;
  }
}

/* Large Desktop */
@media (min-width: 1920px) {
  .container {
    max-width: 1920px;
    margin: 0 auto;
  }
}
```

### **Margin Scale**

```css
/* Tailwind scale */
.mb-2  { margin-bottom: 8px; }
.mb-4  { margin-bottom: 16px; }
.mb-6  { margin-bottom: 24px; }
.mb-8  { margin-bottom: 32px; }
.mb-12 { margin-bottom: 48px; }
.mb-16 { margin-bottom: 64px; }
.mb-24 { margin-bottom: 96px; }
.mb-32 { margin-bottom: 128px; }
```

---

## 🎯 Button Styles

### **Primary Button**

```css
.btn-primary {
  display: inline-block;
  padding: 16px 32px;
  background: var(--station-red);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid var(--station-red);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--station-orange);
  border-color: var(--station-orange);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(200, 16, 46, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### **Secondary Button**

```css
.btn-secondary {
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  color: var(--text-white);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 8px;
  border: 2px solid var(--text-white);
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: var(--text-white);
  color: var(--bg-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}
```

### **Text Link**

```css
.link-arrow {
  color: var(--station-orange);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.link-arrow::after {
  content: ' →';
  transition: transform 0.3s;
  display: inline-block;
}

.link-arrow:hover {
  color: var(--station-red);
}

.link-arrow:hover::after {
  transform: translateX(4px);
}
```

---

## 🃏 Card Styles

### **Feature Card**

```css
.feature-card {
  background: var(--card-bg);
  padding: 2.5rem;           /* 40px */
  border-radius: 12px;
  border: 1px solid var(--border-gray);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(200, 16, 46, 0.2);
  border-color: var(--station-orange);
}
```

### **Timeline Card**

```css
.timeline-card {
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-gray);
}
```

### **Carousel Card**

```css
.carousel-card {
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-gray);
  transition: transform 0.3s;
  min-width: 400px;
}

.carousel-card:hover {
  transform: translateY(-8px);
}

.carousel-card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.carousel-card-content {
  padding: 1.5rem;
}
```

---

## 📐 Grid Systems

### **3-Column Grid**

```css
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### **Stats Grid (5 columns)**

```css
.grid-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  text-align: center;
}

@media (min-width: 768px) {
  .grid-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-stats {
    grid-template-columns: repeat(5, 1fr);
  }
}
```

### **2-Column Grid**

```css
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### **Footer Grid (4 columns)**

```css
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 🎭 Effects & Transitions

### **Hover Effects**

```css
/* Card hover */
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Button hover */
.btn-hover {
  transition: all 0.3s ease;
}

.btn-hover:hover {
  transform: translateY(-2px);
}

/* Image hover */
.img-hover {
  transition: transform 0.5s ease;
}

.img-hover:hover {
  transform: scale(1.05);
}
```

### **Backdrop Blur**

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### **Gradients**

```css
/* Background gradients */
.gradient-dark {
  background: linear-gradient(180deg, var(--bg-darker) 0%, var(--bg-dark) 100%);
}

.gradient-red {
  background: linear-gradient(180deg, var(--bg-dark) 0%, var(--station-red) 100%);
}

/* Text gradients */
.text-gradient {
  background: linear-gradient(135deg, var(--station-red), var(--station-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 📱 Responsive Utilities

### **Breakpoints**

```css
/* Mobile First */
/* xs: 0-479px (base) */

/* sm: 480px+ */
@media (min-width: 480px) { }

/* md: 768px+ (tablet) */
@media (min-width: 768px) { }

/* lg: 1024px+ (desktop) */
@media (min-width: 1024px) { }

/* xl: 1440px+ (large desktop) */
@media (min-width: 1440px) { }

/* 2xl: 1920px+ */
@media (min-width: 1920px) { }
```

### **Show/Hide Classes**

```css
/* Hide on mobile, show on desktop */
.hidden-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hidden-mobile {
    display: block;
  }
}

/* Show on mobile, hide on desktop */
.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .mobile-only {
    display: none;
  }
}
```

---

## 🎨 Form Styles

### **Input Fields**

```css
input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 12px 16px;
  background: var(--card-bg);
  border: 1px solid var(--border-gray);
  border-radius: 4px;
  color: var(--text-white);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--station-orange);
}

input::placeholder {
  color: rgba(241, 232, 214, 0.5);
}
```

### **Labels**

```css
label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### **Form Layout**

```css
.form-field {
  margin-bottom: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 🎯 Icon Styles

```css
.icon-circle {
  width: 64px;
  height: 64px;
  background: var(--station-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-circle img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1);
}
```

---

## 📊 Stat Counter Styles

```css
.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 4rem;
  font-weight: 700;
  color: var(--station-orange);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
  }
}
```

---

## 🔔 Badge Styles

```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--station-red);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-secondary {
  background: var(--station-orange);
}
```

---

## ✅ Tailwind Config Reference

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'station-red': '#C8102E',
        'station-orange': '#F26522',
        'station-gray': '#58595B',
        'station-black': '#231F20',
        'olive-green': '#708238',
        'warm-orange': '#E17A4C',
        'deep-brown': '#4A3426',
        'cream': '#F1E8D6',
        'bg-dark': '#1A1A1A',
        'bg-darker': '#0D0D0D',
        'card-bg': '#2A2A2A',
        'text-light': '#F1E8D6',
        'border-gray': '#3A3A3A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.2rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
```

---

**This is your complete design system. Reference this file whenever you need color values, spacing, or typography specifications.**
