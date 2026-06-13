/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Light mode
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        // Dark mode
        'dark-bg': '#1a1a1a',
        'dark-text': '#ffffff',
        // Accent
        'accent': '#2563eb',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
