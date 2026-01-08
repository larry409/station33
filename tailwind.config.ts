import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Template Color System
        'primary-text': '#EBE3DD',        // Off-white for all headings and prominent text
        'body-text': '#9CA3AF',           // Medium gray for descriptions
        'bg-dark': '#1A1A1A',             // Near black primary background
        'bg-darker': '#0D0D0D',           // Darker sections
        'card-bg': '#2A2A2A',             // Card backgrounds
        'accent-teal': '#14B8A6',         // Service badges, interactive elements
        'accent-rust': '#E17A4C',         // Alternative CTAs, secondary accents
        'divider-gray': '#374151',        // Dividers and lines
        'border-light': '#E5E7EB',        // Light borders
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
