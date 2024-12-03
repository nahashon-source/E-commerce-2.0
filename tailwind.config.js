/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom animations for the background
      animation: {
        pulse: 'pulse 4s infinite',
        bounce: 'bounce 6s infinite',
      },
      // Custom keyframes for more control over animations
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      // Custom colors or themes for light/dark mode
      colors: {
        primary: {
          light: '#3b82f6', // Light theme primary color
          dark: '#1e40af',  // Dark theme primary color
        },
        secondary: {
          light: '#fbbf24', // Light theme secondary color
          dark: '#d97706',  // Dark theme secondary color
        },
      },
    },
  },
  darkMode: 'class', // Enables dark mode based on a class
  plugins: [],
};
