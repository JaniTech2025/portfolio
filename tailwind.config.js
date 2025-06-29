export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Quicksand"', "sans-serif"],
      },
      screens: {
        custom: "700px",
      },
    },
  },
  plugins: [],
};
