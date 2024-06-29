// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   darkMode: 'class', // Use 'class' para alternar temas com classes
//   theme: {
//     extend: {
//       colors: {
//         lightBackground: '#ffffff', // Cor de fundo clara
//         darkBackground: '#1a202c',  // Cor de fundo escura
//         lightText: '#000000',       // Cor do texto clara
//         darkText: '#ffffff',        // Cor do texto escura
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Use 'class' to toggle themes with classes
  theme: {
    extend: {
      backgroundImage: {
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
