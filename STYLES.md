# STYLES - Station33 Design System (Brand Kit v2.0)

## Color Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Dark (Charcoal) | `#2b2f33` | Backgrounds, dark text |
| Copper | `#a85f42` | Accent, CTAs, links |
| Cream | `#ece8e1` | Headings on dark, light backgrounds |

### Derived / Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-darker` | `#1f2327` | Footer, darker sections |
| `card-bg` | `#373b3f` | Card backgrounds |
| `divider-gray` | `#44494e` | Borders, dividers |
| `station-gray` | `#525455` | Subtle accents |
| `copper-light` | `#c4876e` | Lighter copper variant |
| `body-text` | `#B8BFC7` | Body text on dark backgrounds |

### Accessibility Notes

- Copper (`#a85f42`) on cream (`#ece8e1`) is ~3.8:1 contrast — use only for large text, headings, or decorative elements.
- Body text on light backgrounds should use Dark (`#2b2f33`) instead.
- Body text (`#B8BFC7`) on Dark (`#2b2f33`) passes WCAG AA.

### CSS Custom Properties

```css
:root {
  --color-dark: #2b2f33;
  --color-gold: #a85f42;    /* copper */
  --color-white: #ece8e1;   /* cream */
  --bg-darker: #1f2327;
  --card-bg: #373b3f;
  --divider-gray: #44494e;
  --station-gray: #525455;
  --station-green-light: #c4876e;
  --body-text: #B8BFC7;
}
```

---

## Typography

### Font Stack

```css
--font-family-brand: Metropolis, 'Inter', system-ui, sans-serif;
```

### Font Weights

| Role | Weight | File |
|------|--------|------|
| Body (Regular) | 400 | Metropolis-Medium.woff2 (mapped to 400 until Regular is sourced) |
| Headings (SemiBold) | 600 | Metropolis-SemiBold.woff2 |

### Type Scale

```css
--text-display: clamp(2.5rem, 6vw, 4.5rem);
--text-h1: clamp(2rem, 4vw, 3rem);
--text-h2: clamp(1.5rem, 3vw, 2.25rem);
--text-h3: clamp(1.25rem, 2.5vw, 1.75rem);
--text-h4: 1.25rem;
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-body-sm: 0.875rem;
--text-caption: 0.75rem;
```

---

## Token Architecture

All colors flow through CSS custom properties in `globals.css`. Tailwind tokens in `tailwind.config.ts` mirror these values for utility-class usage. Legacy alias names (e.g. `station-red`, `accent-teal`, `station-orange`) all point to the single copper accent `#a85f42`.

### Tailwind Color Tokens

```ts
colors: {
  'station-dark': '#2b2f33',
  'station-gold': '#a85f42',
  'station-white': '#ece8e1',
  'primary-text': '#ece8e1',
  'body-text': '#B8BFC7',
  'bg-dark': '#2b2f33',
  'bg-darker': '#1f2327',
  'card-bg': '#373b3f',
  'accent-teal': '#a85f42',
  'accent-rust': '#a85f42',
  'divider-gray': '#44494e',
  'border-light': '#a85f42',
  'station-red': '#a85f42',
  'station-orange': '#a85f42',
  'station-gray': '#525455',
  'station-black': '#2b2f33',
  'station-green': '#a85f42',
  'station-green-light': '#c4876e',
  'station-gold-light': '#c4876e',
  'text-light': '#B8BFC7',
}
```

---

## Spacing

### Container

```css
.container {
  padding: 0 5%;        /* mobile */
  padding: 0 8%;        /* tablet (768px+) */
  padding: 0 10%;       /* desktop (1024px+) */
  max-width: 1920px;
}
```

### Section Spacing

| Class | Padding |
|-------|---------|
| `.section-hero` | min-h-screen, pb-12 / md:pb-16 |
| `.section-standard` | py-16 / md:py-24 / lg:py-32 |
| `.section-large` | py-20 / md:py-28 / lg:py-40 |
| `.section-compact` | py-12 / md:py-16 / lg:py-20 |

---

## Components

### Buttons

- `.btn-primary` — outlined, cream border/text on dark, inverts on hover
- `.btn-secondary` — filled copper background, cream text
- `.btn-rust` — filled copper background, cream text (alias)

All buttons include a trailing `→` arrow and 56px min-height for touch targets.

### Cards

- `.feature-card` — dark card-bg, divider-gray border, hover lifts + copper border
- `.timeline-card` — simpler dark card
- `.carousel-card` — scrollable card, 320–400px min-width responsive

### Forms

- `.form-input` — dark card-bg, divider-gray border, copper focus glow
- `.form-label` — uppercase, tracked, text-light

---

## Effects

- `.glass-effect` — white/5 background + backdrop-blur
- `.gradient-dark` — bg-darker → bg-dark vertical gradient
- `.text-gradient` — copper → dark diagonal gradient on text

---

## Breakpoints

| Name | Min-width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |
