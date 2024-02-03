/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/auth/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/teste.{js,jsx,ts,tsx}",
    "./src/app.data.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@kamona/tailwindcss-perspective')],
}

