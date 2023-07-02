/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#641ae6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#2a323c",
          "base-100": "#f3f4f6",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#ef4444",
        },
      },
      {
        dark: {
          primary: "#8b5cf6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#9ca3af",
          "base-100": "#374151",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        oled: {
          primary: "#8b5cf6",
          secondary: "#d926a9",
          accent: "#1fb2a6",
          neutral: "#9ca3af",
          "base-100": "#111827",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "base-content": "#AAAAAA",
        },
      },
    ],
  },
};
