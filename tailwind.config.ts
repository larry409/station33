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
        // Station33 Brand Colors (Brand Kit v2.0)
        'station-dark': '#2b2f33',
        'station-gold': '#a85f42',
        'station-white': '#ece8e1',

        // Legacy mappings (pointed to new brand palette)
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
