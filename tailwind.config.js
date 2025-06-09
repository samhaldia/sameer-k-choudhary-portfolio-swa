/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Custom font family definition
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sets 'Inter' as the primary sans-serif font
      },
      // Custom keyframes for animations
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeInUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeInTop: { from: { opacity: '0', transform: 'translateY(-20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        }
      },
      // Apply keyframes to custom animation names
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-top': 'fadeInTop 1s ease-out forwards',
        'blob': 'blob 7s infinite linear',
      },
    },
  },
  plugins: [], // No additional Tailwind plugins used for this project
}
