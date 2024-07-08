/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'index.html',
  ],
  theme: {
    extend: {
      colors: {
        'body-color': 'hsl(30, 38%, 92%)',
        'color-p': 'hsl(158, 30%, 37%);',
        'h1-color': 'hsl(212, 21%, 14%)',
        'button-hover': 'hsl(158, 50%, 20%)',
      },

      fontFamily: {
        'font-h1': ['Fraunces', 'serif']
      },

      backgroundImage: {
        imagemobile: "url('image/image-product-mobile.jpg')",

        imagedesktop: "url('image/image-product-desktop.jpg')",
      },
      height: {
        'sect': '450px'
      }
    },
  },
  plugins: [],
}

