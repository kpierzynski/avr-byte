/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        calm: '#f1f0ec',
        primary: '#222129',
      },
    },
  },
  plugins: [],
}
