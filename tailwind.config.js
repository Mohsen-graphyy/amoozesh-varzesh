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
          50: "#545CC1",
          100: "#424AB5",
        },
        "beta-green": {
          100: "#36B06B",
        },
        "beta-gray": {
          100: "#B8C6D8",
          150: "#94A3B8",
          300: "#64748B",
          500: "#475569",
          700: "#334155",
        },
      },
    },
  },
  plugins: [],
};
