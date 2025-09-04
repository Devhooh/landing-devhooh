import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "md-tablet": "550px",
      "tablet-md": "750px",
      "table-lg": "950px",
      "lg-table": "1150px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorPrimario: "#8159BA", // color principal del logo princpal
        colorHover: "#C0ACDC",
        colorFondo: "#FFFEFE", // principal de fondo
        colorPrimario1: "#232323", // color del logo secundario
        colorPrimario2: "#0A0A0B", // color del logo terciario

        colorSecundario: "#674CC4", // variante 1 del color principal
        colorSecundario1: "#673DE6", // variante 2 del color principal
        colorSecundario2: "#7550E7", // variante 3 del color principal

      },
      keyframes: {
        scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }, // mueve la mitad del contenedor
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-reverse': 'scroll 40s linear infinite reverse',
      }
    },
  },
  plugins: [],
};
export default config;
