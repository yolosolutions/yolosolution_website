import type { Config } from 'tailwindcss'

/**
 * Brand palette is sampled from the YOLO logo:
 *   brand-600 = #004AAD (logo blue)   gold-400 = #FFBD59 (logo gold)
 * `ink` is a blue-tinted neutral scale used for text, borders and dark sections.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF4FF',
          100: '#D9E6FF',
          200: '#B6CEFF',
          300: '#86AEF5',
          400: '#4D82E0',
          500: '#1A5FC4',
          600: '#004AAD',
          700: '#003B8A',
          800: '#002D69',
          900: '#001F4A',
          950: '#00112B',
        },
        gold: {
          50: '#FFF8EB',
          100: '#FFEFCF',
          200: '#FFE0A0',
          300: '#FFD07A',
          400: '#FFBD59',
          500: '#F5A63A',
          600: '#D98A1E',
          700: '#A96A14',
        },
        ink: {
          50: '#F6F8FB',
          100: '#EDF1F7',
          200: '#DBE2EC',
          300: '#B5C0D0',
          400: '#8794A8',
          500: '#5F6E85',
          600: '#44526A',
          700: '#2E3A50',
          800: '#1B2538',
          900: '#0E1626',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(14, 22, 38, 0.04), 0 8px 24px -10px rgba(14, 22, 38, 0.10)',
        lift: '0 2px 4px rgba(14, 22, 38, 0.04), 0 18px 44px -16px rgba(0, 74, 173, 0.28)',
        float: '0 30px 80px -20px rgba(0, 17, 43, 0.55)',
        gold: '0 10px 30px -10px rgba(255, 189, 89, 0.55)',
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(to right, rgba(14,22,38,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,22,38,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
