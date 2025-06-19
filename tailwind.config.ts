import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'violet-gradient': 'linear-gradient(180deg, #983cf0, #463e5e);',
      },
      keyframes: {
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
        'shine-vertical': {
          "0%": {
            'background-position': '0 200%'
          },
          '100%': {
            'background-position': '0 -200%'
          }
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        'shine-vertical': 'shine-vertical 5s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
