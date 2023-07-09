const { themes } = require("./src/themes");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: themes.light,
      },
      {
        dark: themes.dark,
      },
      {
        oled: themes.oled,
      },
    ],
  },
};
