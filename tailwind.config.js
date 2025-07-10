// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3323',
        accent: '#0000EE',
        softBlue: '#97AAFC',
        softGreen: '#25D366',
        lightBlue: '#EEF4FF',
        dark: '#001122',
        grayText: '#666666',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
