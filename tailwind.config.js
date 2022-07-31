/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        plant: "url('/bghome.jpeg')",
      },
      colors: {
        "dark-gold": "#AE8625",
        "light-gold": "#F7EF8A",
      },
    },
  },
}
