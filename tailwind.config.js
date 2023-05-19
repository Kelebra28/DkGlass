/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dk-main': '##1081A9',
      'dk-secondary': '#60DBC5',
      'dk-red': '#D91F26',
      'dk-gray': '#C4C4C4',
      'dk-bluelight': '#dff8f3',
      'dk-darkgray': '#6B6B6B',
      'dk-bg-gray': '#F1F1F1',
    },
    height: {
      '22': '5.313rem',
      '120': '32.8rem'
    }
  },
  plugins: [],
}
