/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#dfeeff',
          300: '#81b9ff',
          400: '#4fa0ff',
          500: '#2387ff',
          600: '#0d6ae6',
          700: '#0d58c2',
          900: '#081a34'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(59,130,246,0.35)'
      }
    }
  },
  plugins: []
};
