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
        superlight:"#f4f2ff",
        light:"#A79ED9",
        DEFAULT:"#50487A",
        dark:'#322D52',
        darker:"#1e1b30",
        accent:"#F86767"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
