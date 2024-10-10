/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-primary": {
          ligth: "#4cc9f0",
          medium: "#4895ef",
          default: "#4361ee",
          dark: "#3f37c9",
          "very-dark": "#3a0ca3",
        },
        "custom-accent": {
          bright: "#f72585",
          default: "#b5179e",
          "very-dark": "#7209b7",
        },
      },
    },
  },
  plugins: [],
};
