
export interface Beneficio {
  icon: string;
  title: string;
  description: string;
}

export interface DataTech {
  id: number;
  slug: string;
  color: string;
  title: string;
  subtitle: string;
  image: string;
  beneficios: Beneficio[];
}

// 🔹 Objeto centralizado con todas las tecnologías
export const techData: Record<string, DataTech> = {
  javascript: {
    id: 1,
    slug: "javascript",
    color: "text-yellow-500",
    title: "JavaScript",
    subtitle:
      "El lenguaje estándar universal para aplicaciones web, flexible y dinámico en todas partes.",
    image: "/assets/images/slide1.png",
    beneficios: [
      { icon: "Code", title: "Lenguaje universal", description: "Se usa tanto en frontend como backend." },
      { icon: "Globe", title: "Ecosistema amplio", description: "Miles de librerías y frameworks disponibles." },
      { icon: "Rocket", title: "Alto rendimiento", description: "Motores como V8 hacen que corra rápido." },
      { icon: "Shield", title: "Soporte continuo", description: "Comunidad enorme y soporte de grandes empresas." },
      { icon: "Users", title: "Comunidad activa", description: "Millones de desarrolladores comparten conocimiento." },
      { icon: "Zap", title: "Productividad", description: "Permite crear prototipos y productos rápido." },
    ],
  },
  typescript: {
    id: 2,
    slug: "typescript",
    color: "text-blue-600",
    title: "TypeScript",
    subtitle:
      "Superconjunto de JavaScript que agrega tipado estático, ideal para proyectos grandes y mantenibles.",
    image: "/assets/images/slide2.png",
    beneficios: [
      { icon: "Code", title: "Tipado estático", description: "Reduce errores y mejora la productividad." },
      { icon: "Globe", title: "Ecosistema amplio", description: "Compatible con casi todas las librerías de JS." },
      { icon: "Rocket", title: "Escalabilidad", description: "Facilita el desarrollo de proyectos grandes." },
      { icon: "Shield", title: "Soporte de Microsoft", description: "Respaldo oficial y mejoras constantes." },
      { icon: "Users", title: "Comunidad activa", description: "Gran adopción en la industria." },
      { icon: "Zap", title: "Mejor DX", description: "Autocompletado e IntelliSense potenciado." },
    ],
  },
  tailwindcss: {
    id: 3,
    slug: "tailwindcss",
    color: "text-teal-500",
    title: "Tailwind CSS",
    subtitle:
      "Framework de utilidades para CSS que acelera el desarrollo de interfaces modernas y responsivas.",
    image: "/assets/images/slide3.png",
    beneficios: [
      { icon: "Zap", title: "Alta productividad", description: "Diseña interfaces sin salir del HTML." },
      { icon: "Layout", title: "Diseños modernos", description: "Estilos consistentes y listos para producción." },
      { icon: "Rocket", title: "Velocidad de desarrollo", description: "Reduce tiempo escribiendo CSS repetitivo." },
      { icon: "Layers", title: "Customizable", description: "Configura tu propio diseño y estilos globales." },
      { icon: "Smartphone", title: "Responsive fácil", description: "Breakpoints simples para diseño adaptable." },
      { icon: "Users", title: "Comunidad activa", description: "Gran ecosistema de plugins y ejemplos." },
    ],
  },
  nextjs: {
    id: 4,
    slug: "nextjs",
    color: "text-black",
    title: "Next.js",
    subtitle:
      "Framework de React optimizado para producción, con soporte para SSR, SSG y APIs integradas.",
    image: "/assets/images/slide4.png",
    beneficios: [
      { icon: "Rocket", title: "SSR y SSG", description: "Carga rápida y SEO mejorado." },
      { icon: "Globe", title: "Escalabilidad", description: "Ideal para proyectos pequeños y grandes." },
      { icon: "Zap", title: "Optimización automática", description: "Imágenes, fuentes y recursos optimizados." },
      { icon: "Layers", title: "Ruteo sencillo", description: "Sistema de rutas basado en archivos." },
      { icon: "Server", title: "API integrada", description: "Backend ligero con serverless functions." },
      { icon: "Shield", title: "Soporte de Vercel", description: "Infraestructura de primera para despliegues." },
    ],
  },
  angular: {
    id: 5,
    slug: "angular",
    color: "text-red-600",
    title: "Angular",
    subtitle:
      "Framework robusto de Google para aplicaciones web empresariales con TypeScript.",
    image: "/assets/images/slide1.png",
    beneficios: [
      { icon: "Shield", title: "Soporte de Google", description: "Mantenido y actualizado constantemente." },
      { icon: "Layers", title: "Arquitectura modular", description: "Organiza proyectos grandes de forma clara." },
      { icon: "Code", title: "TypeScript first", description: "Basado en TS, seguro y escalable." },
      { icon: "Users", title: "Comunidad amplia", description: "Gran cantidad de documentación y foros." },
      { icon: "Rocket", title: "Rendimiento", description: "Optimizado para aplicaciones empresariales." },
      { icon: "Zap", title: "Herramientas integradas", description: "CLI potente para scaffolding y builds." },
    ],
  },
  react: {
    id: 6,
    slug: "react",
    color: "text-sky-500",
    title: "React",
    subtitle:
      "Librería de JavaScript para construir interfaces de usuario interactivas y dinámicas.",
    image: "/assets/images/slide2.png",
    beneficios: [
      { icon: "Zap", title: "Componentes reutilizables", description: "Crea interfaces modulares y mantenibles." },
      { icon: "Rocket", title: "Rápido y eficiente", description: "Renderizado con Virtual DOM." },
      { icon: "Globe", title: "Ecosistema enorme", description: "Compatible con miles de librerías." },
      { icon: "Users", title: "Comunidad activa", description: "Gran soporte y recursos de aprendizaje." },
      { icon: "Smartphone", title: "React Native", description: "Expande tu app al desarrollo móvil." },
      { icon: "Layers", title: "Flexibilidad", description: "Se adapta a proyectos de cualquier tamaño." },
    ],
  },

};
