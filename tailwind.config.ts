import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import typography from "@tailwindcss/typography"
import containerQueries from "@tailwindcss/container-queries"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FD7F20",
        secondary: "#717171",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
      },
      blink: {
        "0%": { opacity: 0.2 },
        "20%": { opacity: 1 },
        "100%": { opacity: 0.2 },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        blink: "blink 1.4s both infinite",
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [
    typography,
    containerQueries,
    plugin(
      ({
        matchUtilities,
        theme,
      }: {
        matchUtilities: any
        theme: (path: string) => Record<string, string>
      }) => {
        matchUtilities(
          {
            "animation-delay": (value: string) => {
              return {
                "animation-delay": value,
              }
            },
          },
          {
            values: theme("transitionDelay"),
          }
        )
      }
    ),
  ],
} satisfies Config
