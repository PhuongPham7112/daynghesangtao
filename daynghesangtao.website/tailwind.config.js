/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
    },
    fontFamily: {
      "bt-beausans": ["BT-Beau-Sans", "sans-serif"],
    },
    colors: {
      "deepBlue": "#10619C",
      "brightBlue": "#1378C2",
      "lightBlue": "#B1DEFF",
      "white": "#FFFFFF",
      "zincGray": "#8B8B8B",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

