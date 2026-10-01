/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm & Earthy Theme from CLAUDE.md
        'espresso': '#2C1A1D',
        'warm-amber': '#D97706',
        'cream': '#FAF7F2',
        'warm-neutral': '#F5EFEB',
        'muted': '#A8A29E',
      },
    },
  },
  plugins: [],
}