import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        gold: "#c8a66a",
        cream: "#f4efe6",
        muted: "#aaa49a"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(200,166,106,.12)"
      }
    }
  },
  plugins: []
};

export default config;
