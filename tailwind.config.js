/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      lg: { max: "57em" },

      md: { max: "47em" },

      sm: { max: "34em" },

      xs: { max: "28em" },
    },
    extend: {
      colors: {
        "dark-purple": "#24053e",
        eucaplyptus: "#44ffa1",
        "davys-greya": "#584d62",
        "ghost-white": "#fcf8ff",
      },
      fontSize: {
        "h-sm": "3.2rem",
        "h-md": "5.6rem",
        "h-lg": "8rem",
        "body-base": "1.8rem",
      },
    },
  },
  plugins: [],
};
