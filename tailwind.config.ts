import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A028',
        'gold-hover': '#A8851E',
        'gold-light': '#F0D98A',
        'gold-pale': '#FDF6E3',
        'purple-deep': '#3D2050',
        'purple-heading': '#4A2C5E',
        'purple-mid': '#5A3878',
        cream: '#F8F4EE',
        'cream-dark': '#EDE8E0',
        'text-dark': '#2A2A2A',
        'text-muted': '#6B6B6B',
        'text-light': '#9A9A9A',
        border: '#E8E0D6',
        'border-light': '#F0EAE2',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
        nav: '0 2px 20px rgba(0, 0, 0, 0.08)',
        gold: '0 4px 20px rgba(201, 160, 40, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.65) 100%)',
        'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
