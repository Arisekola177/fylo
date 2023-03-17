/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImages: {
        desktop: "url('./images/bg-curve-desktop.svg')",
        mobile: "url('/images/bg-curve-mobile.svg')",
      },
    },
  },
  plugins: [],
};
