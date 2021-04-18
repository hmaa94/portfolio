module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
    colors: {
      'beige': '#F9EDDC',
      'brown': '#685044',
      'light-beige': '#FCF6EE',
   },
   fontFamily: {
     body: ['Raleway'],
     display: ['Lato']
   }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
