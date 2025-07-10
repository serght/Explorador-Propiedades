/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000EE',
        secondary: '#97AAFC',
        accent: '#6C9FFF',
        light: '#EEF4FF',
        dark: '#001122',
        green: '#25D366',
        grayText: '#666666',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
