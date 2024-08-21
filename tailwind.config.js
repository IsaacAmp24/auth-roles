/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line

  ],

  theme: {
    extend: {
      "colors": {
        "azul-claro": "#1E90FF",
        "azul-escuro": "#00008B",
      },
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line
  ],
}

