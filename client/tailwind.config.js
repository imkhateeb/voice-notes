/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greeny: "#31CD63",
        creamy: "#EDE8E3",
        darky: "#191D63",
        greenish: "#45C486",
        grayish: "#747475",
      },
      keyframes: {
        "slight-up": {
          "0%": { transform: "translateY(5px)", opacity: "0.8" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "slight-left": {
          "0%": { transform: "translateX(5px)", opacity: "0.8" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "slight-right": {
          "0%": { transform: "translateX(-5px)", opacity: "0.8" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "slight-down": {
          "0%": { transform: "translateY(-5px)", opacity: "0.8" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "shrink-effect": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "slight-up": "slight-up 0.3s ease-in-out",
        "slight-left": "slight-left 0.3s ease-in-out",
        "slight-right": "slight-right 0.3s ease-in-out",
        "slight-down": "slight-down 0.3s ease-in-out",
        "shrink-effect": "shrink-effect 0.2s ease-in-out",
      },
      boxShadow: {
        "even-shadow-sm": "0px 2px 4px rgba(0, 0, 0, 0.1)",
        "even-shadow-md": "0px 4px 8px rgba(0, 0, 0, 0.15)",
        "even-shadow-lg": "0px 8px 16px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
