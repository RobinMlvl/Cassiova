/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  presets: [require("@relume_io/relume-tailwind")],
};

