/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary:'#FBCEB1',
      bgrd: '#fffbeb',
      secondary:'#65000B',
      white:'white',
      black:'black',
      transparent:'transparent'
    },
    fontFamily: {
      logoF: ['Kaushan Script']
    },
    extend: {
    },
  },
  plugins: [],
};
