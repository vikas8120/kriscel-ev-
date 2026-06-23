/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.14), 0 18px 60px rgba(15, 23, 42, 0.10)',
        luxe: '0 24px 80px rgba(15, 23, 42, 0.12)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'ui-sans-serif', 'system-ui'],
        editorial: ['Cormorant Garamond', 'ui-serif', 'Georgia'],
        script: ['Parisienne', 'cursive'],
      },
      colors: {
        brand: {
          blue: '#1888ff',
          cyan: '#46f3ff',
          ink: '#1f2937',
          soft: '#f7f2e7',
          sage: '#e0ece4',
          stone: '#d8d3cd',
          gray: '#797a7e',
        },
      },
    },
  },
  plugins: [],
};
