import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile-xs": "320px", // iPhone se
        "mobile-sm": "360px", // iPhone mini
        "mobile-md": "390px", // iPhone pro
        "mobile-xl": "428px", // iPhone pro max
        "mobile-2xl": "480px",

        "tablet-xs": "600px",
        "tablet-sm": "768px", // iPad mini, iPad air, ipad
        "tablet-md": "800px",
        "tablet-lg": "1024px", // iPad Pro 11-inch
        "tablet-xl": "1280px", // iPad Pro 12-inch

        "laptop-sm": "1366px", // MacBook Pro 13-inch
        "laptop-md": "1440px", // MacBook Pro 14-inch
        "laptop-lg": "1600px", // MacBook Pro 16-inch
        "laptop-xl": "1728px",

        desktop: "1920px",
      },

      colors: {
        cBlack: "#1d1d1f",
        cLightBlack: "#86868B",
        cWhite: "#f5f5f7",
        cDeepWhite: "#A1A1A6",
        cGrayWhite: "#f1f1f1",
        cButton: "#f5f5f7",
        cRed: "#FF0000",
        cOrange: "#F56900",
        cBlue: "#0066CC",
      },
      backgroundColor: {
        bgBlack: "#1d1d1f",
        bgLightBlack: "#86868B",
        bgWhite: "#fdfdfd",
        bgDeepWhite: "#A1A1A6",
        bgGrayWhite: "#f1f1f1",
        bgRed: "#FF0000",
        bgOrange: "#F56900",
        bgBlue: "#0066CC",
      },

      borderRadius: {
        main: "0.3rem",
      },

      boxShadow: {
        main: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;",
      },

      padding: {
        btn: "0.5rem 1rem", // Button padding

        "pd-lg": "0.8rem 1.6rem",
        "pd-md": "0.5rem 1rem",
        "pd-sm": "0.3rem 0.8rem",

        "box-lg": "1.5rem",
        "box-md": "1rem",
        "box-sm": "0.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
