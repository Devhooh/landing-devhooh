// Card data interface
export interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

// Datos de la Card
export const customDevelopmentCardData: CardData[] = [
  {
    title: "Desarrollo web",
    slug: "desarrollo-web",
    details: "Creamos páginas web modernas y personalizadas para negocios, tiendas online y portafolios, enfocadas en diseño atractivo, usabilidad y resultados reales.",
    icon: "/assets/images/desarrollo-web.png",
  },
  {
    slug: "desarrollo-mobile",
    title: "Desarrollo Mobile",
    details: "Desarrollamos apps móviles nativas y multiplataforma para iOS y Android, optimizadas en rendimiento y pensadas para mejorar la experiencia del usuario.",

    icon: "/assets/images/desarrollo-movil.png",
  },
  {
    slug: "desarrollo-software",
    title: "Desarrollo Software",
    details: "Construimos software a medida que automatiza procesos, mejora la gestión y se adapta 100% a las necesidades de tu negocio.",
    icon: "/assets/images/desarrollo-software.png",
  },
];


export const ServicesIACardData: CardData[] = [
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    details: "Desarrollamos soluciones de inteligencia artificial que automatizan procesos, mejoran la toma de decisiones y elevan la productividad de tu negocio.",
    icon: "/assets/images/ia-services.png",
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    details: "Creamos aplicaciones y sistemas basados en blockchain que garantizan seguridad, transparencia y confianza en tus operaciones digitales.",
    icon: "/assets/images/blockchain.png",
  },
];

export const InfraestructureSupportCardData: CardData[] = [
  {
    slug: "despliegue",
    title: "Despliegue de Aplicaciones",
    details: "Nos encargamos del despliegue seguro y eficiente de tus aplicaciones en entornos locales o en la nube, asegurando escalabilidad, estabilidad y continuidad operativa.",
    icon: "/assets/images/despliegue.png",
  },
  {
    slug: "infraestructura",
    title: "Infraestructura",
    details: "Diseñamos, implementamos y gestionamos infraestructuras tecnológicas sólidas y escalables, adaptadas a las necesidades de tu negocio y listas para crecer contigo.",
    icon: "/assets/images/infraestructura.png",
  },
];

export const DesignerQACardData: CardData[] = [
  {
    slug: "diseno",
    title: "Diseño UX/UI",
    details: "Creamos experiencias digitales atractivas y funcionales con un diseño UX/UI enfocado en usabilidad, accesibilidad y conversión, mejorando la interacción de los usuarios con tu producto.",
    icon: "/assets/images/design.png",
  },
  {
    slug: "qa",
    title: "QA",
    details: "Implementamos pruebas de calidad (QA) para asegurar que tus aplicaciones funcionen sin errores, con alto rendimiento y una experiencia confiable en todas las plataformas.",
    icon: "/assets/images/qa.png",
  },
];

