/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "57em" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
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
