module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'primary' : '#3f599D',
        'secondary' : '#182A59',
        'back' : '#f3f8ff',
        'darkback' : '#161622',
        'yellow' : '#FAFF00',
    },
    backgroundImage: {
      'AboutBackground' : "url('./imgs/About-img.png')"
    }
    },
  },
  plugins: [],
}