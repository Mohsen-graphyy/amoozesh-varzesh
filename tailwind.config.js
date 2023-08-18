/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        olied: {
          100: "#424AB5",
        },
        "beta-green": {
          100: "#36B06B",
        },
      },
    },
  },
  plugins: [],
};
