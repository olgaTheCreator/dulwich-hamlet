/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        player: "url('/src/assets/player.png')",
      },
      colors: {
        blue: {
          DEFAULT: "rgba(57, 55, 146, 1)",
        },
        pink: {
          DEFAULT: "rgba(226, 126, 187, 1)",
        },
        red: {
          DEFAULT: "#ff0022",
        },
        off_white: "rgba(245, 245, 243, 1)",
        cyan: "rgba(126, 226, 190, 1)",
        deep_sky: "#30C5FF",
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
