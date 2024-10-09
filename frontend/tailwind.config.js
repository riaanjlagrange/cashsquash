/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-primary": {
          100: "#4cc9f0",
          250: "#4895ef",
          500: "#4361ee",
          750: "#3f37c9",
          900: "#3a0ca3",
        },
        "custom-accent": {
          100: "#f72585",
          250: "#b5179e",
          500: "#7209b7",
          750: "#560bad",
          900: "#480ca8",
        },
      },
    },
  },
  plugins: [],
};
