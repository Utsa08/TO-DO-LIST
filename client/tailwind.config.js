/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        todo: {
          50: "#e5f4ff",
          100: "#b9defa",
          200: "#8cc9f7",
          300: "#61b4f6",
          400: "#419ef5",
          500: "#3286dc",
          600: "#2668aa",
          700: "#1a4a79",
          800: "#0c2d49",
          900: "#000f1a",
        },
      },
    },
  },
  plugins: [],
};
