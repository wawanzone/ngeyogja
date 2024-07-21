/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,php}"],
  theme: {
    extend: {
      safelist: [
        // 'bg-opacity-50',
        // 'inset-0',
      ],
      colors: {
        'theme': {
          100: '#fff9f6',
          200: '#fff9f6',
          300: '#fff9f6',
          400: '#f5e3c5',
          500: '#c39d68',
          600: '#907550',
          700: '#713f12',
          800: '#342a1c',
          900: '#251e14',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

