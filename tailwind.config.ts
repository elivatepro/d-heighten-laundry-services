import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "var(--color-black)",
          "dark-gray": "var(--color-dark-gray)",
          "medium-gray": "var(--color-medium-gray)",
          "light-gray": "var(--color-light-gray)",
          yellow: "var(--color-sunny-yellow)",
          "yellow-hover": "var(--color-sunny-yellow-hover)",
          blue: "var(--color-sky-blue)",
          "blue-hover": "var(--color-sky-blue-hover)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        hero: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "hero-mobile": [
          "2.25rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-whatsapp": "pulse-whatsapp 2s infinite",
      },
      boxShadow: {
        "yellow-glow": "0 0 12px 0px var(--color-sunny-yellow-glow)",
        "blue-glow": "0 0 10px 0px var(--color-sky-blue-glow)",
        "whatsapp-glow": "0 2px 12px rgba(37, 211, 102, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
