/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"]
      },
      backgroundImage: {
        mobile: "url('/images/pattern-bg-mobile.png')",
        desktop: "url('/images/pattern-bg-desktop.png')"
      }
    },
  },
  plugins: [],
}

