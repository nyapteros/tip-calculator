/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plumeria': "url('../images/bg-plumeria.png')",
        'honu': "url('../images/bg-honu.png')",
        'bgBlue': "url('../images/bg-blue.png')",
        'wave': "url('../images/bg-wave.png')",
      },
      fontFamily: {
        google: ['Zen Maru Gothic', 'sans-serif'],
      },
    },
    // 新規ブレークポイント、デフォルトは効かなくなる
    screens: {
      sp: "400px",
      tb: "768px",
      pc: "1280px",
    },
  },
  plugins: [],
}
