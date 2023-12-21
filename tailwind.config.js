/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {},
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xll:'1355px',
      '2xl': '1536px',
      'max2xl': {max: '1536px'},
      maxxl: {max: '1280px'},
      'max1200' : {max: '1200px'},
      maxlg: {max: '1024px'},
      maxtablet : {max: '991px'},
      maxmd: {max: '768px'},
      maxsm: {max: '640px'},
    },
  },
  plugins: [],
}

