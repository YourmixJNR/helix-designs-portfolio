/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f7f8fa",
        dark: "#191d20",
        blue: {
          "very-light": "#edf1fc",
          light: "#00b4d8",
          medium: "#3a7ebf",
          dark: "#01192f",
          "very-dark": "#12122c",
        },
        slightly: {
          white: "#f1f1f1",
          black: "#1f1f1f",
        },
        faded: {
          white: "rgba(255, 255, 255, 0.7)",
          black: "rgba(0, 0, 0, 0.9)",
        },
      },
      fontFamily: {
        U8: "U8, sans-serif",
        "U8-Bold": "U8-Bold, sans-serif",
      },
      boxShadow: {
        "custom-light": "0 1rem 2rem rgba(0, 0, 0, 0.2)",
        "custom-dark": "0 1rem 2rem rgba(225, 225, 225, 0.2)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

