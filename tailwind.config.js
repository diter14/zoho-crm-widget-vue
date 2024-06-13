/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#EDF0F4',
        footer: '#EFEFEF',
        button: '#00A3F3',
        gray: {
          normal: '#616E96',
        },
        base: {
          normal: '#d7e2ed'
        }
      }
    },
    fontFamily: {
      'body': 'ZohoPuvi, Poppins, sans-serif',
    },
    boxShadow: {
      't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
      't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
  },
  plugins: [],
}

