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
      border: {
        '3': '3px',
      },
      fontFamily: {
        google: ['Zen Maru Gothic', 'sans-serif'],
      },
    },
    // 新規ブレークポイント、デフォルトは効かなくなる
    screens: {
      sp: "350px",
      tb: "768px",
      pc: "1280px",
    },
  },
  plugins: [],
}

