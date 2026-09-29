import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Strictly black & white; mute/line are neutral greys for hierarchy.
      colors: {
        paper: "#FFFFFF",
        ink: "#000000",
        mute: "#6B6B6B",
        line: "#E5E5E5",
      },
      fontFamily: {
        sans: ['"Switzer"', '"Switzer Placeholder"', "sans-serif"],
        serif: ['"Switzer"', '"Switzer Placeholder"', "sans-serif"],
      },
      letterSpacing: { tightest: "-0.055em" },
    },
  },
  plugins: [],
};
export default config;
