/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          darkbg: '#0B1F1A',
          chatgreen: '#1B4332',
          chatblue: '#0A9396',
          accent: '#94D2BD',
        },
      },
    },
    plugins: [],
  }
  