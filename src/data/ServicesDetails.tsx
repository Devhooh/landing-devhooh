
interface BenefitsData {
  icon: string;
  title: string;
  list: string
}

export interface ServicesData {
  slug: string;
  title: string;
  subtitle: string;
  services: BenefitsData[]
}

export const ServicesDetails: Record<string, ServicesData> = {
  "desarrollo-web": { 
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "Creamos soluciones web modernas, rápidas y escalables.",
    services: [
      {
        icon: "PenTool",
        title: "Diseño a medida y personalizado",
        list: "Nada de plantillas genéricas. Tu web será tan única como tu negocio."
      },
      {
        icon: "Smartphone",
        title: "Totalmente responsive",
        list: "Se adapta perfectamente a celulares, tablets y computadoras."
      },
      {
        icon: "Search",
        title: "Optimización SEO básica incluida",
        list: "Para que Google y otros te encuentren desde el día uno."
      },
      {
        icon: "Layers",
        title: "Escalable y administrable",
        list: "Creamos estructuras que puedes expandir fácilmente, y con panel si es necesario."
      },
      {
        icon: "Zap",
        title: "Velocidad optimizada",
        list: "Código limpio y ligero para que tu web cargue rápido."
      },
      {
        icon: "Shield",
        title: "Seguridad",
        list: "Aplicamos prácticas seguras para proteger tu sitio y datos de tus usuarios."
      },
      {
        icon: "LifeBuoy",
        title: "Soporte y mantenimiento",
        list: "No te dejamos solo después de entregarte el sitio."
      }
    ]
  },
};
