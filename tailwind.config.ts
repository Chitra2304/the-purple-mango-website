import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A046',
        'gold-hover': '#B89035',
        'gold-light': '#E8CE85',
        'gold-dark': '#2B2111',
        'purple-deep': '#3D2050',
        'purple-heading': '#46275C',
        'purple-mid': '#5A3878',
        'purple-muted': '#7E678F',
        cream: '#FAF7F2',
        'cream-dark': '#F0EBE1',
        'text-dark': '#2A2A2A',
        'text-body': '#55504E',
        'text-muted': '#6B6866',
        'text-light': '#9A9694',
        border: '#E8E0D6',
        'border-light': '#F0EAE2',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.10)',
        nav: '0 2px 16px rgba(0, 0, 0, 0.06)',
        btn: '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.60) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
