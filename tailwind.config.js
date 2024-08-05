/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,vue}",
    "./node_modules/vue3-tailwind-components/dist/vue3-tailwind-components.es.js"
  ],
  safelist: [
    {
      pattern: /bg-(primary|secondary|warning|success|danger|info)-(\d00)/,
      variants:  ['hover', 'focus', 'file','dark', 'dark:hover'],
    },
    {
      pattern: /border-(primary|secondary|warning|success|danger|info)-(\d00)/,
      variants:  ['dark', 'dark:hover'],
    },
    {
      pattern: /text-(\w+)-(\d00)/,
      variants:['file','dark']
    },
    {
      pattern: /accent-(\w+)-(\d00)/,
      variants:['file','dark']
    },
    {
      pattern: /placeholder-(\w+)-(\d00)/,
    },

  ],
  theme: {
    extend: {
      colors:{
        primary:colors.slate,
        secondary:colors.lime,
        warning:colors.amber,
        success:colors.green,
        danger:colors.red,
        info:colors.indigo
      }
    },
  },
  plugins: [],
}

