import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        brandPink: "var(--color-brand-pink)",
        brandPinkLight: "var(--color-brand-pink-light)",
        brandPinkPastel: "var(--color-brand-pink-pastel)",
        brandYellow: "var(--color-brand-yellow)",
        brandYellowDark: "var(--color-brand-yellow-dark)",
        brandViolet: "var(--color-brand-violet)",
        blackMain: "var(--color-black-main)",
        whiteMain: "var(--color-white-main)",
        grayLight: "var(--color-gray-light)",
        textPrimary: "var(--color-text-primary)",
        textMuted: "var(--color-text-muted)"
      },
      borderRadius: {
        "xl-2": "1.25rem"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      }
    }
  },
  plugins: []
};

export default config;
