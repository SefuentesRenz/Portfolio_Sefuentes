import { defineConfig } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        // Custom accent
        pink: {
          400: '#ec4899',
          500: '#db2777',
        },
        purple: {
          400: '#a855f7',
          500: '#9333ea',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
})

