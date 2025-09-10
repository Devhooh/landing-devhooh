export type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
};

// Preguntas frecuentes para la sección de tecnologías
export const faqDataTech: FAQItemProps[] = [
  {
    id: 1,
    question: "¿Qué tecnologías usan para el desarrollo frontend?",
    answer: "Para el frontend, utilizamos frameworks modernos como React, Next.js y Tailwind CSS, asegurando interfaces rápidas, escalables y optimizadas para SEO. Adaptamos la tecnología según las necesidades específicas de cada proyecto y el tipo de interacción que se desea ofrecer al usuario.",
  },
  {
    id: 2,
    question: "¿Y para el backend y bases de datos?",
    answer: "Implementamos backends robustos con Node.js, Python o Java según el proyecto. También usamos bases de datos SQL y NoSQL, garantizando que tus aplicaciones sean seguras, escalables y fáciles de mantener a largo plazo.",
  },
  {
    id: 3,
    question: "¿Desarrollan aplicaciones móviles nativas o multiplataforma?",
    answer: "Sí, trabajamos tanto con aplicaciones móviles nativas (Swift para iOS, Kotlin para Android) como multiplataforma usando Flutter o React Native. Esto nos permite ofrecer soluciones que funcionen perfectamente en cualquier dispositivo y con alto rendimiento.",
  },
  {
    id: 4,
    question: "¿Utilizan inteligencia artificial o machine learning en sus proyectos?",
    answer: "Sí, aplicamos IA y machine learning para optimizar procesos, analizar datos y generar soluciones inteligentes personalizadas. Dependiendo del proyecto, entrenamos modelos predictivos, sistemas de recomendación o análisis avanzado de datos.",
  },
  {
    id: 5,
    question: "¿Cómo garantizan la seguridad y estabilidad de las aplicaciones?",
    answer: "Implementamos buenas prácticas de seguridad, pruebas unitarias y de integración, y gestionamos infraestructura confiable en la nube. Además, usamos herramientas modernas para monitoreo y mantenimiento, asegurando que tu aplicación sea estable y segura a largo plazo.",
  },
  {
    id: 6,
    question: "¿Puedo actualizar o escalar mi aplicación después del lanzamiento?",
    answer: "Absolutamente. Diseñamos nuestras soluciones con escalabilidad en mente, usando arquitecturas modulares y tecnologías flexibles que permiten agregar nuevas funcionalidades o actualizar la aplicación sin problemas en el futuro.",
  },
];
