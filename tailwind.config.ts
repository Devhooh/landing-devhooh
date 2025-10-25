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
        colorHover5: "#F4F5FF", 
        colorHover6: "#EBEBFF", 

        colorFondo: "#FFFEFE", // principal de fondo
        colorPrimario1: "#232323", // color del logo - oscuro suave 1
        colorPrimario2: "#0A0A0B", // color del logo - oscuro fuerte 1
        colorPrimario3: "#0D0D0C", // color del logo - oscuro fuerte 2
        colorPrimario4: "#1C1E21", // color del logo - oscuro suave 2

        colorPrimario5: "#663CE6", // boton de hostinger
        colorPrimario6: "#734FE7", // color hostionger mas fuerte
        colorPrimario7: "#8C84FD", // color de hostinger mas suave
        colorPrimario8: "#8D85FE", // color de hostinger mas suave

        colorPrimario11: "#262730", // color de hostinger mas suave
        colorPrimario22: "#161619", // color de hostinger mas fuerte

        colorDarkFondo1: "#321A7B", // azul oscuro
        colorDarkFondo2: "#1E1245", 
        colorDarkFondo3: "#261559", 
        colorDarkFondo4: "#221A50", 
        colorDarkFondo5: "#2E1C6A", // ligeramente suave

        colorSecundario: "#674CC4", // variante 1 del color principal
        colorSecundario1: "#673DE6", // variante 2 del color principal
        colorSecundario2: "#7550E7", // variante 3 del color principal
        colorSecundario3: "#5A29EB", // variante 4 del color principal mas fuerte
        colorSecundario4: "#5025D1", // variante 5 del color principal
      },
      keyframes: {
        scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }, // mueve la mitad del contenedor
        },
        'card-image-in': {
          // El mismo efecto de Framer Motion
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'scroll-reverse': 'scroll 40s linear infinite reverse',
        'card-image-in': 'card-image-in 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};
export default config;
