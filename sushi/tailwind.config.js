/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        "icon-main": "rgb(23, 42, 69)",
        secondary: "#8892b0",
        "light-secondary": "rgb(136, 146, 176)",
        "dark-link": "rgb(23, 42, 69)",
        "dark-link-highlight": "rgba(23, 42, 69, 0.15)",
        runloop: "#118362",
        "runloop-highlight": "rgba(17, 131, 98, 0.15)",
        stripe: "#6772e5",
        "stripe-highlight": "rgba(103, 114, 229, 0.15)",
        airkit: "rgb(255, 78, 131)",
        "airkit-highlight": "rgba(255, 78, 131, 0.15)",
        facebook: "#39579c",
        "facebook-highlight": "rgba(57, 87, 156, 0.15)",
        salesforce: "#17a0db",
        "salesforce-highlight": "rgba(23, 160, 219, 0.15)",
        tableau: "#4e79a7",
        "tableau-highlight": "rgba(78, 121, 167, 0.15)",
        motorola: "#000000",
        "motorola-highlight": "rgba(0, 0, 0, 0.15)",
        caterpillar: "#d5b60a",
        "caterpillar-highlight": "rgba(213, 182, 10, 0.15)",
        ameren: "#35962b",
        "ameren-highlight": "rgba(53, 150, 43, 0.15)",
        linkedin: "#0a66c2",
        "linkedin-highlight": "rgba(10, 102, 194, 0.15)",
        "uiuc-orange": "#e84a27",
        "uiuc-orange-highlight": "rgba(232, 74, 39, 0.15)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
