import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#EEF4FD',
          100: '#DCE8FB',
          200: '#B3CEF6',
          300: '#7FADF0',
          400: '#4886E8',
          500: '#1E63D6',
          600: '#1850AD',
          700: '#143E87',
          800: '#102F66',
          900: '#0B2149',
        },
        gold: {
          50: '#FEF9EE',
          100: '#FDF0D3',
          200: '#FADFA0',
          300: '#F7CD6D',
          400: '#F2B544',
          500: '#E29F27',
          600: '#BC821D',
          700: '#8F6217',
          800: '#634411',
          900: '#3D2A0B',
        },
        charcoal: {
          50: '#F5F6F7',
          100: '#E9EAED',
          200: '#C7CBD3',
          300: '#9CA3B0',
          400: '#6B7280',
          500: '#4B5160',
          600: '#363C4A',
          700: '#252A36',
          800: '#1A1E27',
          900: '#12151C',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(18, 21, 28, 0.06), 0 8px 24px -8px rgba(18, 21, 28, 0.08)',
        softLg: '0 8px 30px -8px rgba(18, 21, 28, 0.12), 0 24px 60px -24px rgba(18, 21, 28, 0.14)',
        glow: '0 0 0 1px rgba(30, 99, 214, 0.08), 0 12px 40px -12px rgba(30, 99, 214, 0.25)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(18,21,28,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,21,28,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
