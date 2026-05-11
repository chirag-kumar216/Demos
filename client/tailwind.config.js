/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#FAF8F5',
          text: '#1A1A1A'
        },
        secondary: {
          bg: '#F0EDE8',
          text: '#6B6B6B'
        },
        accent: {
          gold: '#C9A96E',
          dark: '#2C2C2C'
        },
        card: {
          white: '#FFFFFF'
        },
        border: {
          divider: '#E8E2D9'
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        accent: ['Montserrat', 'sans-serif']
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        kenBurns: 'kenBurns 20s ease-out infinite alternate',
        marquee: 'marquee 20s linear infinite'
      }
    },
  },
  plugins: [],
}
