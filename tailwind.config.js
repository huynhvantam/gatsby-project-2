/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        "red-300": "#db2777",
      },
    },
  },
  plugins: [],
};
