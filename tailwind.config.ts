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
        colorPrimarioLogo1: "#8159BA", // color principal del logo princpal
        colorPrimarioLogo2: "#B197D4", // color principal del logo suave
        colorHover: "#C0ACDC",
        colorHover2: "#8C85FE",
        colorHover3: "#D5DFFF", // de hostinger
        colorHover4: "#CBD2E3", 
        colorFondo: "#FFFEFE", // principal de fondo
        colorPrimario1: "#232323", // color del logo secundario - oscuro suave
        colorPrimario2: "#0A0A0B", // color del logo terciario - oscuro fuerte
        colorPrimario3: "#663CE6", // boton de hostinger
        colorPrimario4: "#734FE7", // color hostionger mas fuerte
        colorPrimario5: "#8C84FD", // color de hostinger mas suave
        colorDarkFondo1: "#321A7B", // azul oscuro
        colorDarkFondo2: "#1E1245", 
        colorDarkFondo3: "#261559", 
        colorDarkFondo4: "#221A50", 
        colorDarkFondo5: "#2E1C6A", // ligeramente suave

        colorSecundario: "#674CC4", // variante 1 del color principal
        colorSecundario1: "#673DE6", // variante 2 del color principal
        colorSecundario2: "#7550E7", // variante 3 del color principal
        colorSecundario3: "#5A29EB", // variante 4 del color principal mas fuerte


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
