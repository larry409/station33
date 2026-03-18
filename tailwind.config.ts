import type { Config } from 'tailwindcss'

// Brand Kit v2.0 — single source of truth for all color tokens.
// Tailwind aliases below all reference these constants so values are never duplicated.
const brand = {
  dark: '#2b2f33',
  copper: '#a85f42',
  cream: '#ece8e1',
  darker: '#1f2327',
  cardBg: '#373b3f',
  divider: '#44494e',
  gray: '#525455',
  copperLight: '#c4876e',
  bodyText: '#B8BFC7',
} as const

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand tokens
        'station-dark': brand.dark,
        'station-gold': brand.copper,
        'station-white': brand.cream,

        // Semantic tokens
        'primary-text': brand.cream,
        'body-text': brand.bodyText,
        'bg-dark': brand.dark,
        'bg-darker': brand.darker,
        'card-bg': brand.cardBg,
        'divider-gray': brand.divider,
        'station-gray': brand.gray,
        'station-black': brand.dark,
        'station-gold-light': brand.copperLight,
        'station-green-light': brand.copperLight,
        'text-light': brand.bodyText,

        // Legacy aliases (all point to copper accent)
        'accent-teal': brand.copper,
        'accent-rust': brand.copper,
        'border-light': brand.copper,
        'station-red': brand.copper,
        'station-orange': brand.copper,
        'station-green': brand.copper,
      },
      fontFamily: {
        brand: ['var(--font-metropolis)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-metropolis)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-metropolis)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.2rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
