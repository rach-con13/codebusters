module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      "staatliches":['staatliches','sans-serif'],
      "raleway":["raleway","sans-serif"]
    },
    colors:{
        superlight:"#D4CCFF",
        light:"#A79ED9",
        DEFAULT:"#50487A",
        dark:'#322D52',
        accent:"#F86767"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
