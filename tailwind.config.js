module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#ffd300",
        "primary-200": "#3a10e5",
        "primary-300": "#10162f",
        "primary-400": "#fff0e5"
      },
      boxShadow: {
        "primary-yellow": "-10px 10px 0px 5px rgba(255,211,0,1)",
        "secondary-yellow": "0px 0px 15px 4px rgba(255,211,0,1)"
      }
    },
  },
  plugins: [],
}
