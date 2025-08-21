interface aboutData {
  image: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  company: string;
  imageHero: string;
  projectName: string;
  location: string;
  service: string;
  aboutCompany: aboutData;
  aboutProject: aboutData;
}

export const portfolioDetails: Project[] = [
  {
    id: 1,
    slug: "marketplace-global",    
    title: "Proyecto web para TechNova",
    company: "TechNova",
    projectName: "Marketplace Global",
    location: "México",
    service: "Desarrollo Web",
    imageHero: "/assets/images/slide1.png",
    aboutCompany: {
      image: "/assets/images/BgColor.png",
      description: "TechNova es una empresa líder en soluciones digitales, especializada en el desarrollo de plataformas de comercio electrónico, aplicaciones web escalables y soluciones tecnológicas innovadoras para clientes internacionales. Con un enfoque en la experiencia de usuario, optimización de procesos y seguridad, TechNova ha ayudado a empresas de distintos sectores a crecer en el entorno digital y alcanzar sus objetivos de negocio.",
    },

    aboutProject: {
      image: "/assets/images/mision.png",
      description: "Este proyecto consistió en diseñar y desarrollar un marketplace global altamente funcional, integrando pasarelas de pago seguras, gestión de inventarios en tiempo real y un sistema de administración intuitivo. El enfoque principal fue garantizar la escalabilidad, rendimiento y accesibilidad, ofreciendo a los usuarios finales una experiencia de compra fluida y optimizada para múltiples dispositivos y navegadores.",
    },
  },
]