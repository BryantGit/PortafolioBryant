// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});

module.exports = {
  theme: {
    extend: {
      animation: {
        blob: "blob 35s infinite ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(25px, -35px) scale(1.05)" },
          "66%": { transform: "translate(-25px, 20px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
