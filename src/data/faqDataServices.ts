export type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
};

// Datos de ejemplo para las preguntas frecuentes
export const faqDataServices: FAQItemProps[] = [
  {
    id: 1,
    question: "¿Cuánto tiempo toma desarrollar una app móvil?",
    answer: "En Devhoo, nos especializamos en soluciones digitales innovadoras. Nuestro enfoque se centra en entender a fondo las necesidades de tu negocio para crear productos que no solo cumplan tus expectativas, sino que las superen. Trabajamos de cerca contigo en cada etapa del proceso, garantizando transparencia y un resultado que realmente impulse tu crecimiento.",
  },
  {
    id: 2,
    question: "¿Puedo actualizar mi sitio web después del lanzamiento?",
    answer: "El tiempo de entrega depende de la complejidad y el alcance del proyecto. Sin embargo, en Devhoo trabajamos con metodologías ágiles que nos permiten entregar resultados de manera incremental y constante. Esto asegura que veas progresos desde el principio y que el proyecto se complete en el menor tiempo posible sin sacrificar calidad.",
  },
  {
    id: 3,
    question: "¿Ofrecen diseños personalizados o usan plantillas?",
    answer: "Atendemos a una amplia gama de empresas, desde startups que buscan lanzar su primer producto digital hasta grandes corporaciones que necesitan una transformación digital completa. Nuestro portafolio incluye proyectos de diversas industrias, como finanzas, retail, tecnología, salud y educación.",
  },
  {
    id: 4,
    question: "¿Mi web o app será compatible con dispositivos móviles?",
    answer: "Sí, en Devhoo ofrecemos planes de pago flexibles que se adaptan a tus necesidades. Es posible estructurar el pago por fases, según los hitos del proyecto o de forma mensual. Discutiremos contigo la mejor opción para tu negocio antes de iniciar el proyecto.",
  },
  {
    id: 5,
    question: "¿Brindan soporte después de entregar el proyecto?",
    answer: "Recomendamos tecnologías modernas y robustas que aseguren escalabilidad, seguridad y rendimiento a largo plazo. Dependiendo del proyecto, podemos sugerir frameworks como React o Next.js para el frontend, y Node.js o Python para el backend. La elección final se hace en función de los requerimientos específicos de tu proyecto y de lo que mejor se adapte a tus objetivos.",
  },
];
