/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumslateblue: "#7f56d9",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        anton: "Anton",
        antic: "Antic",
      },
    },
    fontSize: {
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
