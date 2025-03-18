/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Green for buttons and accents
        secondary: '#f4f4f4', // Light gray background
        dark: '#1a202c', // Dark color for sidebar
      },
    },
  },
  plugins: [],
};