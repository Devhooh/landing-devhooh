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
      description: "TechNova es una empresa líder en soluciones digitales, especializada en comercio electrónico y plataformas escalables para clientes internacionales.",
    },
    aboutProject: {
      image: "/assets/images/mision.png",
      description: "Este proyecto consistió en desarrollar un marketplace global con funcionalidades de compra-venta y pasarela de pagos integrada, optimizado para múltiples dispositivos.",
    },
  },
]