import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mcdYellow: "#FFC72C",
        mcdRed: "#DA291C",
        cream: "#FFF8E8",
        warm: "#F8E7C5",
        ink: "#2B2118",
      },
      boxShadow: {
        soft: "0 16px 50px rgba(58, 36, 15, 0.12)",
        lift: "0 18px 30px rgba(218, 41, 28, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pop: {
          "0%": { transform: "scale(.96)", opacity: ".4" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        pop: "pop .22s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
