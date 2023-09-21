/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D9F117",
        secondary: "#EB6817",
        primaryHover: "#C8DD1D",
        secondaryHover: "#EA874A",
        backgroundColor: "#85C8EA",
      },
      boxShadow: {
        card: "-20px 10px 120px -75px #211e35",
      },
    },
  },
  plugins: [],
};
