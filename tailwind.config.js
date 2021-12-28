module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        }
      },
      fontFamily: {
        headline: "Lato, sans-serif"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
