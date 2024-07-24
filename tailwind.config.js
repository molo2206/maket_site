/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: "#e8604c",
      textColor:"#313041",
      gray:"#A9A8B6"
    },
  },
  plugins: [],
}