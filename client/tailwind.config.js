/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        blur: {
          "0%": { filter: "blur(0px)" },
          "100%": { filter: "blur(5px)" }
        },
        opacity: {
          "0%": { display: "none", opacity: 0 },
          "1%": { display: "block", opacity: 0 },
          "100%": { display: "block", opacity: 1 }
        }
      },
      animation: {
        blur: "blur 5s linear 0s 1 forwards",
        opacity: "opacity 5s ease-out"
      },
    },
  },
  plugins: [],
}
