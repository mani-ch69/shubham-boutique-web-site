/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#D4AF37',
        secondary: '#4A3B33',
        soft: '#FFFDFB',
        accent: '#F5E6D3',
      }
    },
  },
  plugins: [],
}
