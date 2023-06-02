/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/images/**/*.{jpg,png,svg}",
  ],
  theme: {
    screens: {
      lg: { max: "1280px" },
      md: { max: "991.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },

    extend: {
      backgroundImage: {},
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"],
        raleway: ["Raleway", "sans-serif"],
        russo: ["Russo One", "sans-serif"],
      },
      colors: {
        textColor: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
