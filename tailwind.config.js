/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradiant": "linear-gradient(30deg, #059669, #0284c7)",
      },
    },
  },
  plugins: [],
};
