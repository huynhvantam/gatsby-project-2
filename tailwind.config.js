/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {},
    },
  },
  // variants: {
  //   extend: {
  //     displays: ['group-focus']
  //   },
  // },
  plugins: [],
};
