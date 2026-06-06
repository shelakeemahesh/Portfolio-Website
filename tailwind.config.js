/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1100px',
    },
    extend: {
      colors: {
        navyBg: '#07101f',
        navyCard: 'rgba(17, 34, 64, 0.7)',
        goldPrimary: '#c8a96e',
        goldLight: '#e2c98a',
        silverMuted: '#8fa3b8',
        textPrimary: '#e8edf2',
        textMuted: '#6b85a0',
        cardBorder: 'rgba(200, 169, 110, 0.2)',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        goldGlow: '0 0 15px rgba(200, 169, 110, 0.35)',
        goldGlowLight: '0 0 25px rgba(226, 201, 138, 0.15)',
      }
    },
  },
  plugins: [],
}
