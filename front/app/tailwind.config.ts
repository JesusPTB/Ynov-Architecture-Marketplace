module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [
      require('@tailwindcss/typography'),
      require('daisyui')
  ],
  daisyui:{
    themes: [
      "light" , "valentine", "halloween", "sunset", "garden"
    ]
  }
}
