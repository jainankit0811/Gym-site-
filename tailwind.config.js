/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#EF4444',
          blue: '#3B82F6',
          green: '#10B981',
          purple: '#8B5CF6',
        },
      },
    },
  },
  plugins: [],
};