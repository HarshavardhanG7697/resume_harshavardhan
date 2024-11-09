/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'awsblack': '#232f3e',
        'awswhite': '#f2f2f2',
        'accent-orange': '#ff9900',
        'secondary-blue': '#146eb4',
      },
    },
  },
  plugins: [],
}