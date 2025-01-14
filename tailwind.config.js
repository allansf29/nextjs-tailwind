/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/images/bg.png')",
        "hamb-1": "url('/assets/images/hamb-1.png')",
        'lightGradient': 'linear-gradient(100deg, #F0F8FF, #F0FFFF)', // Light gradient
        'darkGradient': 'linear-gradient(41deg, #1C1C1C, #000000)',  // Dark gradient
      },
      colors: {
        lightText: '#757575',       // Light mode text color
        darkText: '#F0F8FF',        // Dark mode text color
      },
    },
  },
  plugins: [],
};
