/* eslint-disable @typescript-eslint/no-require-imports */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import type { Config } from "tailwindcss"
// import plugin from "tailwindcss/plugin"
// import typography from "@tailwindcss/typography"
// import containerQueries from "@tailwindcss/container-queries"

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: ["var(--font-poppins)"],
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         primary: "#FD7F20",
//         secondary: "#717171",
//       },
//       keyframes: {
//         fadeIn: {
//           from: { opacity: "0" },
//           to: { opacity: "1" },
//         },
//         blink: {
//           "0%": { opacity: "0.2" },
//           "20%": { opacity: "1" },
//           "100%": { opacity: "0.2" },
//         },
//       },
//       animation: {
//         fadeIn: "fadeIn 0.3s ease-in-out",
//         blink: "blink 1.4s both infinite",
//       },
//     },
//     future: {
//       hoverOnlyWhenSupported: true,
//     },
//   },
//   plugins: [
//     typography,
//     containerQueries,
//     plugin(
//       ({
//         matchUtilities,
//         theme,
//       }: {
//         matchUtilities: any
//         theme: (path: string) => Record<string, string>
//       }) => {
//         matchUtilities(
//           {
//             "animation-delay": (value: string) => {
//               return {
//                 "animation-delay": value,
//               }
//             },
//           },
//           {
//             values: theme("transitionDelay"),
//           }
//         )
//       }
//     ),
//   ],
// } satisfies Config

/* eslint-disable @typescript-eslint/no-explicit-any */
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        primaryCustom: "#FD7F20",
        secondaryCustom: "#717171",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        blink: "blink 1.4s both infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  },
  plugins: [
    typography,
    containerQueries,
    require("tailwindcss-animate"),
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
            "animation-delay": (value: string) => ({
              "animation-delay": value,
            }),
          },
          {
            values: theme("transitionDelay"),
          }
        )
      }
    ),
  ],
} satisfies Config
