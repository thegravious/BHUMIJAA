/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "button-color": "#82B440",
        "background-color": "#FFFFFF",
        "secondary-text": "#79A204",
        "primary-text": "#262626",
        "card-background": "#F4F4F4",
        "hover-button" : "#78a63b",
        "hover-text" : "#78a63b",
        "font-title-bold" : "200px"
      },
    },
  },
  plugins: [],
};
