/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--theme-primary)",
      "primary-light": "var(--theme-primary-light)",
      "background-transparent": "var(--theme-background-transparent)",
      secondary: "var(--theme-secondary)",
      "secondary-light": "var(--theme-secondary-light)",
      "text-base": "var(--theme-text-base)",
    },
    extend: {
      backgroundImage: {
        player: "url('/src/assets/player.png')",
        triangles: "url('/src/assets/bg_triangle_opt.svg')",
      },
      colors: {
        dark: {
          background: "#1c1a29",
          text: "rgba(226, 126, 187, 1)",
        },
        pink: {
          DEFAULT: "rgba(226, 126, 187, 1)",
          background: "rgba(226, 126, 187, 1)",
          text: "rgba(226, 126, 187, 1)",
        },
        light: {
          background: "rgba(245, 245, 243, 1)",
          text: "rgba(57, 55, 146, 1)",
        },
        blue: {
          DEFAULT: "rgba(57, 55, 146, 1)",
          background: "#1c1a29",
          text: "rgba(226, 126, 187, 1)",
          100: "#DADAF1",
          200: "#B6B5E3",
          300: "#9190D5",
          400: "#6D6BC7",
          500: "#4846B9",
          600: "#393792",
          700: "#2B2A6F",
          800: "#1D1C4A",
          900: "#0E0E25",
        },
        red: {
          DEFAULT: "#ff0022",
        },
        off_white: "rgba(245, 245, 243, 1)",
        cyan: "rgba(126, 226, 190, 1)",
        deep_sky: "#30C5FF",
        black: "black",
        transparent: "transparent",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 4px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        inner: "0px 2px 1px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         blue: {
//           DEFAULT: "rgba(57, 55, 146, 1)",
//         },
//         pink: {
//           DEFAULT: "rgba(226, 126, 187, 1)",
//         },
//         off_white: "rgba(245, 245, 243, 1)",
//         cyan: "rgba(126, 226, 190, 1)",
//       },
//     },
//   },
//   plugins: [],
// };
