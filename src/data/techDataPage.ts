export interface Servicios {
  title: string;
  description: string;
}

export interface TechDates {
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
  beneficios: TechDates[];
  servicios: Servicios[]
  whyTech: string
  proceso?: TechDates[]
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
    whyTech: "En nuestra agencia hemos logrado optimizar proyectos con React JS alcanzando hasta un 100% en PageSpeed y Lighthouse. Pasando de cargas de 1.5s a 0.2s al migrar de WordPress a React, mejorando así la experiencia del usuario y el posicionamiento web.",
    beneficios: [
      { icon: "Code", title: "Lenguaje universal", description: "Se usa tanto en frontend como backend." },
      { icon: "Globe", title: "Ecosistema amplio", description: "Miles de librerías y frameworks disponibles." },
      { icon: "Rocket", title: "Alto rendimiento", description: "Motores como V8 hacen que corra rápido." },
      { icon: "Shield", title: "Soporte continuo", description: "Comunidad enorme y soporte de grandes empresas." },
      { icon: "Users", title: "Comunidad activa", description: "Millones de desarrolladores comparten conocimiento." },
      { icon: "Zap", title: "Productividad", description: "Permite crear prototipos y productos rápido." },
    ],
    servicios: [
      { title: "Desarrollo Frontend", description: "Creamos interfaces web interactivas, dinámicas y responsivas usando JavaScript puro o frameworks modernos como React, garantizando una experiencia de usuario fluida y atractiva."},
      { title: "Aplicaciones Backend", description: "Desarrollamos APIs rápidas, seguras y escalables con Node.js y JavaScript, facilitando la comunicación entre el frontend y bases de datos, optimizando el rendimiento de tus aplicaciones."},
      { title: "Integraciones en tiempo real", description: "Implementamos websockets y funcionalidades de actualización instantánea para aplicaciones colaborativas y plataformas en tiempo real, mejorando la interacción y la productividad del usuario."},
      { title: "Automatización de procesos", description: "Creamos scripts personalizados y soluciones automatizadas con JavaScript para optimizar tareas repetitivas, aumentando la eficiencia operativa de tu negocio y reduciendo errores humanos."},
      { title: "Aplicaciones multiplataforma", description: "Construimos soluciones que funcionan en navegador, escritorio y dispositivos móviles, asegurando compatibilidad y rendimiento óptimo en todas las plataformas con JavaScript y tecnologías modernas."},
    ],
    proceso: [
      { icon: "PenTool", title: "Diseño", description: "Planificamos la arquitectura y diseñamos componentes modulares." },
      { icon: "Code", title: "Desarrollo", description: "Implementamos funcionalidades con JavaScript y frameworks modernos." },
      { icon: "Activity", title: "Testing", description: "Verificamos rendimiento y compatibilidad en todos los navegadores." },
      { icon: "Package", title: "Deploy", description: "Desplegamos la aplicación asegurando velocidad y estabilidad." },
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
    whyTech: "Con TypeScript hemos logrado mejorar la calidad del código y reducir los errores en producción gracias a su tipado estático. Esto se traduce en proyectos más escalables, seguros y fáciles de mantener, mejorando la velocidad de desarrollo en equipos grandes.",
    beneficios: [
      { icon: "Code", title: "Tipado estático", description: "Reduce errores y mejora la productividad." },
      { icon: "Globe", title: "Ecosistema amplio", description: "Compatible con casi todas las librerías de JS." },
      { icon: "Rocket", title: "Escalabilidad", description: "Facilita el desarrollo de proyectos grandes." },
      { icon: "Shield", title: "Soporte de Microsoft", description: "Respaldo oficial y mejoras constantes." },
      { icon: "Users", title: "Comunidad activa", description: "Gran adopción en la industria." },
      { icon: "Zap", title: "Mejor DX", description: "Autocompletado e IntelliSense potenciado." },
    ],
    servicios: [
      { title: "Desarrollo Frontend con TS", description: "Creamos interfaces seguras y escalables usando TypeScript junto a frameworks modernos como React o Vue."},
      { title: "APIs y Backend tipado", description: "Construimos APIs robustas y seguras con Node.js y TypeScript, garantizando menos errores y mayor mantenibilidad."},
      { title: "Proyectos grandes y escalables", description: "Aplicaciones empresariales con arquitectura sólida, utilizando TS para asegurar consistencia y control de tipos."},
      { title: "Integración con librerías modernas", description: "Compatibilidad total con librerías JS/TS y herramientas modernas de desarrollo para productividad máxima."},
      { title: "Optimización y calidad de código", description: "Buenas prácticas y tipado estático para código más limpio, seguro y fácil de mantener a largo plazo."},
    ],
    proceso: [
      { icon: "PenTool", title: "Diseño", description: "Planificamos la arquitectura y diseñamos componentes modulares." },
      { icon: "Code", title: "Desarrollo", description: "Implementamos funcionalidades con JavaScript y frameworks modernos." },
      { icon: "Activity", title: "Testing", description: "Verificamos rendimiento y compatibilidad en todos los navegadores." },
      { icon: "Package", title: "Deploy", description: "Desplegamos la aplicación asegurando velocidad y estabilidad." },
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
    whyTech: "Tailwind CSS nos permite diseñar interfaces modernas y responsivas sin sacrificar velocidad. Hemos reducido un 60% el tiempo de maquetado y logrado diseños consistentes y escalables, ideales para proyectos que necesitan flexibilidad y personalización.",
    beneficios: [
      { icon: "Zap", title: "Alta productividad", description: "Diseña interfaces sin salir del HTML." },
      { icon: "Layout", title: "Diseños modernos", description: "Estilos consistentes y listos para producción." },
      { icon: "Rocket", title: "Velocidad de desarrollo", description: "Reduce tiempo escribiendo CSS repetitivo." },
      { icon: "Layers", title: "Customizable", description: "Configura tu propio diseño y estilos globales." },
      { icon: "Smartphone", title: "Responsive fácil", description: "Breakpoints simples para diseño adaptable." },
      { icon: "Users", title: "Comunidad activa", description: "Gran ecosistema de plugins y ejemplos." },
    ],
    servicios: [
      { title: "Diseño de interfaces modernas", description: "Creamos páginas y componentes estilizados con Tailwind CSS, garantizando consistencia y estética profesional."},
      { title: "Responsivo y adaptable", description: "Diseños que se adaptan perfectamente a dispositivos móviles, tablets y pantallas grandes mediante breakpoints personalizables."},
      { title: "Componentes reutilizables", description: "Construcción de bloques y componentes modulares para acelerar el desarrollo y mantener coherencia visual."},
      { title: "Integración con JS y TS", description: "Tailwind funciona perfectamente junto a JavaScript y TypeScript, facilitando el desarrollo de interfaces dinámicas."},
      { title: "Optimización y rendimiento", description: "Generamos CSS eficiente y ligero, reduciendo el tamaño de archivos y mejorando la velocidad de carga."},
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
    whyTech: "Next.js ha sido clave para optimizar proyectos con renderizado del lado del servidor (SSR) y generación estática (SSG). Gracias a él, hemos mejorado SEO, reducido tiempos de carga y alcanzado puntuaciones perfectas en Google PageSpeed.",
    beneficios: [
      { icon: "Rocket", title: "SSR y SSG", description: "Carga rápida y SEO mejorado." },
      { icon: "Globe", title: "Escalabilidad", description: "Ideal para proyectos pequeños y grandes." },
      { icon: "Zap", title: "Optimización automática", description: "Imágenes, fuentes y recursos optimizados." },
      { icon: "Layers", title: "Ruteo sencillo", description: "Sistema de rutas basado en archivos." },
      { icon: "Server", title: "API integrada", description: "Backend ligero con serverless functions." },
      { icon: "Shield", title: "Soporte de Vercel", description: "Infraestructura de primera para despliegues." },
    ],
    servicios: [
      { title: "SSR y SSG optimizados", description: "Desarrollamos aplicaciones rápidas y amigables con SEO mediante Server-Side y Static Rendering en Next.js."},
      { title: "Ruteo automático", description: "Sistema de rutas basado en archivos para crear páginas y secciones fácilmente sin configuraciones complejas."},
      { title: "API Integrada", description: "Creamos endpoints y funciones serverless directamente dentro de tu proyecto Next.js para manejar backend ligero y eficiente."},
      { title: "Optimización automática", description: "Next.js optimiza imágenes, fuentes y recursos estáticos automáticamente, mejorando la experiencia del usuario."},
      { title: "Escalabilidad y mantenimiento", description: "Aplicaciones listas para crecer con arquitectura modular y soporte de Vercel para despliegues confiables."},
    ],
    proceso: [
      { icon: "Code", title: "Desarrollo Next.js", description: "Construimos páginas y APIs usando SSR, SSG o ISR según requerimientos." },
      { icon: "Activity", title: "Testing", description: "Validamos rutas, performance y experiencia de usuario." },
      { icon: "Package", title: "Deploy", description: "Desplegamos con optimización de SEO y velocidad de carga." },
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
    whyTech: "Hemos implementado proyectos complejos con Angular para clientes corporativos, logrando aplicaciones escalables con una arquitectura modular que redujo en un 40% los costos de mantenimiento a largo plazo.",
    beneficios: [
      { icon: "Shield", title: "Soporte de Google", description: "Mantenido y actualizado constantemente." },
      { icon: "Layers", title: "Arquitectura modular", description: "Organiza proyectos grandes de forma clara." },
      { icon: "Code", title: "TypeScript first", description: "Basado en TS, seguro y escalable." },
      { icon: "Users", title: "Comunidad amplia", description: "Gran cantidad de documentación y foros." },
      { icon: "Rocket", title: "Rendimiento", description: "Optimizado para aplicaciones empresariales." },
      { icon: "Zap", title: "Herramientas integradas", description: "CLI potente para scaffolding y builds." },
    ],
    servicios: [
      { title: "Aplicaciones empresariales", description: "Desarrollamos soluciones web robustas y escalables con Angular y TypeScript para empresas de cualquier tamaño."},
      { title: "Arquitectura modular", description: "Proyectos organizados por módulos, facilitando mantenimiento y expansión futura."},
      { title: "Componentes reutilizables", description: "Creación de componentes altamente reutilizables y personalizables para acelerar el desarrollo."},
      { title: "CLI potente", description: "Angular CLI para scaffolding, builds y tests automáticos, aumentando la productividad del equipo."},
      { title: "Optimización y rendimiento", description: "Aplicaciones optimizadas para velocidad, carga y experiencia del usuario final."},
    ],
    proceso: [
      { icon: "Design", title: "Planificación", description: "Definimos arquitectura y módulos." },
      { icon: "Dev", title: "Desarrollo Angular", description: "Implementamos componentes, servicios y rutas según arquitectura." },
      { icon: "Deploy", title: "Deploy", description: "Publicamos la aplicación en servidores optimizados para Angular." },
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
    whyTech: "React nos permite construir interfaces modernas y reactivas con gran eficiencia. Con su enfoque basado en componentes, hemos reducido tiempos de desarrollo en un 40% y logrado experiencias de usuario más fluidas y rápidas en proyectos empresariales.",
    beneficios: [
      { icon: "Zap", title: "Componentes reutilizables", description: "Crea interfaces modulares y mantenibles." },
      { icon: "Rocket", title: "Rápido y eficiente", description: "Renderizado con Virtual DOM." },
      { icon: "Globe", title: "Ecosistema enorme", description: "Compatible con miles de librerías." },
      { icon: "Users", title: "Comunidad activa", description: "Gran soporte y recursos de aprendizaje." },
      { icon: "Smartphone", title: "React Native", description: "Expande tu app al desarrollo móvil." },
      { icon: "Layers", title: "Flexibilidad", description: "Se adapta a proyectos de cualquier tamaño." },
    ],
    servicios: [
      { title: "Componentes y UI dinámica", description: "Construimos interfaces interactivas y modulares usando React para web y React Native para móvil."},
      { title: "Aplicaciones SPA", description: "Desarrollamos Single Page Applications rápidas y eficientes con React y manejo avanzado del estado."},
      { title: "Integración con librerías y frameworks", description: "React es compatible con un ecosistema enorme de librerías, herramientas y plugins para cualquier necesidad."},
      { title: "Optimización y rendimiento", description: "Uso de Virtual DOM y buenas prácticas para aplicaciones rápidas y con carga mínima."},
      { title: "Desarrollo multiplataforma", description: "React Native permite llevar la misma base de código a móviles, acelerando la creación de apps."},
    ],
    proceso: [
      { icon: "Layout", title: "Diseño UI/UX", description: "Planificamos la experiencia de usuario y la estructura de componentes." },
      { icon: "Code", title: "Desarrollo React", description: "Construimos componentes reutilizables y gestionamos el estado de manera eficiente." },
      { icon: "Activity", title: "Testing", description: "Validamos funcionalidad y rendimiento con pruebas unitarias y de integración." },
      { icon: "Package", title: "Deploy", description: "Publicamos la app optimizando tiempos de carga y SEO." },
    ],
  },

};
