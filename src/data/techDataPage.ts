export interface Servicios {
  title: string;
  description: string;
}

export type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
};


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
  image: string[];
  beneficios: TechDates[];
  servicios: Servicios[]
  whyTech: string
  proceso?: TechDates[]
  faq: FAQItemProps[];
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
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
    faq: [
      { id: 1, question: "¿Qué ventajas tiene usar JavaScript en mi proyecto?", answer: "JavaScript es universal, compatible con todos los navegadores y permite desarrollar tanto frontend como backend, agilizando el desarrollo. Además, su ecosistema de librerías y frameworks permite crear aplicaciones interactivas y escalables, mejorando la experiencia de usuario." },
      { id: 2, question: "¿Puedo combinar JavaScript con frameworks modernos?", answer: "Sí, se integra perfectamente con frameworks como React, Next.js, Angular o incluso con Tailwind para diseño, mejorando productividad y experiencia de usuario. Esto permite desarrollar proyectos más rápidos y mantener código limpio y modular." },
      { id: 3, question: "¿El rendimiento se ve afectado por usar JavaScript?", answer: "No, con buenas prácticas y optimizaciones, JavaScript ofrece excelente rendimiento incluso en aplicaciones complejas. La optimización de cargas, lazy loading y uso de frameworks modernos aseguran rapidez y eficiencia." },
      { id: 4, question: "¿JavaScript es seguro para aplicaciones críticas?", answer: "Sí, al implementar buenas prácticas de seguridad, validaciones y control de datos, se puede construir aplicaciones confiables y seguras, minimizando riesgos y vulnerabilidades comunes." }
    ]
  },
  typescript: {
    id: 2,
    slug: "typescript",
    color: "text-blue-600",
    title: "TypeScript",
    subtitle:
      "Superconjunto de JavaScript que agrega tipado estático, ideal para proyectos grandes y mantenibles.",
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
    faq: [
      { id: 1, question: "¿Por qué usar TypeScript sobre JavaScript?", answer: "TypeScript añade tipado estático y detección de errores en tiempo de compilación, reduciendo fallos y mejorando la mantenibilidad del código en proyectos grandes. Esto permite entregar software más robusto y seguro." },
      { id: 2, question: "¿TypeScript funciona con frameworks existentes?", answer: "Sí, TypeScript se integra con React, Angular, Next.js y otros frameworks modernos, permitiendo un desarrollo más seguro y eficiente, con autocompletado y validaciones de tipos que aceleran la producción de código de calidad." },
      { id: 3, question: "¿Cómo ayuda TypeScript al equipo de desarrollo?", answer: "TypeScript ayuda a detectar errores antes de ejecutar la aplicación, facilita la colaboración entre desarrolladores y asegura que todos sigan la misma estructura de datos y convenciones de código." },
      { id: 4, question: "¿Es difícil aprender TypeScript si sé JavaScript?", answer: "No, la curva de aprendizaje es moderada si ya conoces JavaScript. Solo necesitas entender conceptos de tipado, interfaces y tipos avanzados, que ayudan a construir aplicaciones más robustas y mantenibles." }
    ]
  },
  tailwindcss: {
    id: 3,
    slug: "tailwindcss",
    color: "text-teal-500",
    title: "Tailwind CSS",
    subtitle:
      "Framework de utilidades para CSS que acelera el desarrollo de interfaces modernas y responsivas.",
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
    faq: [
      { id: 1, question: "¿Qué es Tailwind CSS?", answer: "Tailwind CSS es un framework de utilidades que permite crear interfaces modernas y responsivas rápidamente, sin necesidad de escribir CSS personalizado, agilizando el desarrollo frontend." },
      { id: 2, question: "¿Tailwind funciona con React, Next.js o Angular?", answer: "Sí, Tailwind se integra perfectamente con cualquier framework moderno, aplicando clases utilitarias directamente en JSX, templates o componentes, manteniendo consistencia en el diseño." },
      { id: 3, question: "¿Tailwind mejora la productividad?", answer: "Sí, Tailwind permite construir diseños responsivos, consistentes y personalizables rápidamente, reduciendo tiempo de desarrollo y simplificando la gestión de estilos." },
      { id: 4, question: "¿Tailwind es SEO-friendly?", answer: "Sí, Tailwind solo maneja estilos y no altera la semántica HTML, por lo que no afecta el SEO, permitiendo que los motores de búsqueda indexen correctamente el contenido de la web." }
    ]

  },
  nextjs: {
    id: 4,
    slug: "nextjs",
    color: "text-black",
    title: "Next.js",
    subtitle:
      "Framework de React optimizado para producción, con soporte para SSR, SSG y APIs integradas.",
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
    faq: [
      { id: 1, question: "¿Qué es Next.js y por qué usarlo?", answer: "Next.js permite renderizado del lado del servidor (SSR), generación de sitios estáticos (SSG) y rutas dinámicas, optimizando velocidad y SEO. Es ideal para proyectos donde el rendimiento y visibilidad en buscadores es clave." },
      { id: 2, question: "¿Puedo usar Next.js con TypeScript y React?", answer: "Sí, Next.js funciona perfectamente con React y TypeScript, combinando tipado seguro, componentes reutilizables y optimización de rutas y APIs, lo que agiliza el desarrollo y mejora la calidad del proyecto." },
      { id: 3, question: "¿Cómo mejora Next.js la velocidad de mi web?", answer: "Next.js optimiza la carga usando SSR, SSG e ISR, lo que reduce tiempos de espera, mejora la experiencia de usuario y aumenta la puntuación de Core Web Vitals." },
      { id: 4, question: "¿Next.js es adecuado para proyectos grandes?", answer: "Sí, su arquitectura modular, optimizaciones de rendimiento y rutas dinámicas facilitan la construcción de proyectos escalables y mantenibles, ideales para aplicaciones empresariales y startups." }
    ]
  },
  angular: {
    id: 5,
    slug: "angular",
    color: "text-red-600",
    title: "Angular",
    subtitle:
      "Framework robusto de Google para aplicaciones web empresariales con TypeScript.",
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
      { icon: "Brush", title: "Planificación", description: "Definimos arquitectura y módulos." },
      { icon: "CodeXml", title: "Desarrollo Angular", description: "Implementamos componentes, servicios y rutas según arquitectura." },
      { icon: "Package", title: "Deploy", description: "Publicamos la aplicación en servidores optimizados para Angular." },
    ],
    faq: [
      { id: 1, question: "¿Qué ventajas tiene Angular frente a otros frameworks?", answer: "Angular es un framework completo con herramientas integradas para desarrollo, testing y arquitectura robusta. Su CLI y módulos predefinidos agilizan el desarrollo de aplicaciones complejas." },
      { id: 2, question: "¿Angular funciona con TypeScript?", answer: "Sí, Angular está construido sobre TypeScript, ofreciendo tipado seguro y autocompletado, facilitando la escalabilidad y manteniendo la consistencia del código en proyectos grandes." },
      { id: 3, question: "¿Angular es adecuado para aplicaciones empresariales?", answer: "Sí, su arquitectura modular y servicios integrados permiten manejar aplicaciones de gran tamaño con múltiples funcionalidades, manteniendo el rendimiento y facilidad de mantenimiento." },
      { id: 4, question: "¿Se puede integrar Angular con librerías externas?", answer: "Sí, Angular permite integrar librerías externas cuando sea necesario, sin afectar la estructura del proyecto, y soporta herramientas de testing y optimización de rendimiento." }
    ]

  },
  react: {
    id: 6,
    slug: "react",
    color: "text-sky-500",
    title: "React",
    subtitle:
      "Librería de JavaScript para construir interfaces de usuario interactivas y dinámicas.",
    image: ["/assets/images/herocenter1.png", "/assets/images/herocenter2.png"],
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
    faq: [
      { id: 1, question: "¿Qué ventajas tiene React para mis proyectos?", answer: "React permite crear interfaces dinámicas y componentes reutilizables, mejorando la experiencia de usuario y facilitando el mantenimiento. Su ecosistema permite integraciones con bibliotecas de estado, routing y testing, agilizando el desarrollo." },
      { id: 2, question: "¿React funciona con TypeScript?", answer: "Sí, React y TypeScript se combinan para ofrecer tipado seguro, autocompletado y validaciones en desarrollo. Esto reduce errores y facilita la escalabilidad de proyectos grandes y complejos." },
      { id: 3, question: "¿Puedo usar React para aplicaciones móviles?", answer: "Sí, con React Native puedes portar tus componentes y lógica a aplicaciones móviles nativas, manteniendo consistencia en el diseño y optimizando tiempo de desarrollo." },
      { id: 4, question: "¿React es SEO-friendly?", answer: "React por sí solo tiene limitaciones en SEO, pero usando SSR o SSG con Next.js, se pueden generar páginas completamente indexables, optimizando visibilidad y posicionamiento en buscadores." }
    ]
  },
};
