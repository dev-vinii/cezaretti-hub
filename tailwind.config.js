/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('/public/login-image.jpg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        
      },
    },
  },
  plugins: [],
};
