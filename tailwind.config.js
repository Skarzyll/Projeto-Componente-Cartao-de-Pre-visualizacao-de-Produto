/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body-color': 'hsl(30, 38%, 92%)',
        'color-p': 'hsl(158, 36%, 37%);',
        
      },

      fontFamily: {
        'font-h1': ['Fraunces', 'serif']
      },

      backgroundImage: {
        imagemobile: "url('src/images/image-product-mobile.jpg')",

        imagedesktop: "url('src/images/image-product-desktop.jpg')",
      },
      height: {
        'sect': '450px'
      }
    },
  },
  plugins: [],
}

