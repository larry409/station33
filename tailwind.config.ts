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
