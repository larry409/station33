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
        // Station33 Brand Colors (Brand Kit v1.0)
        'station-dark': '#31363a',
        'station-gold': '#c8b493',
        'station-white': '#ffffff',

        // Legacy mappings (pointed to new brand palette)
        'primary-text': '#ffffff',
        'body-text': '#B8BFC7',
        'bg-dark': '#31363a',
        'bg-darker': '#252a2e',
        'card-bg': '#3d4347',
        'accent-teal': '#c8b493',
        'accent-rust': '#c8b493',
        'divider-gray': '#4a5056',
        'border-light': '#c8b493',
        'station-red': '#c8b493',
        'station-orange': '#c8b493',
        'station-gray': '#58595B',
        'station-black': '#31363a',
        'station-green': '#c8b493',
        'station-green-light': '#d4c4a7',
        'station-gold-light': '#d4c4a7',
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
