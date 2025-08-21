interface ChallengeData {
  image: string;
  title: string;
  description: string;
  listData?: string[]
}
interface AboutData {
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
  aboutCompany: AboutData;
  aboutProject: AboutData;
  challengeData: ChallengeData[]
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
    aboutCompany: { image: "/assets/images/BgColor.png", description: "TechNova es una empresa líder en soluciones digitales, especializada en el desarrollo de plataformas de comercio electrónico, aplicaciones web escalables y soluciones tecnológicas innovadoras para clientes internacionales. Con un enfoque en la experiencia de usuario, optimización de procesos y seguridad, TechNova ha ayudado a empresas de distintos sectores a crecer en el entorno digital y alcanzar sus objetivos de negocio."},
    aboutProject: { image: "/assets/images/mision.png", description: "Este proyecto consistió en diseñar y desarrollar un marketplace global altamente funcional, integrando pasarelas de pago seguras, gestión de inventarios en tiempo real y un sistema de administración intuitivo. El enfoque principal fue garantizar la escalabilidad, rendimiento y accesibilidad, ofreciendo a los usuarios finales una experiencia de compra fluida y optimizada para múltiples dispositivos y navegadores.",},
    challengeData: [
      { 
        image: "/assets/images/mision.png", 
        title: "Desafío",  
        description: "El principal desafío fue construir un marketplace global capaz de manejar miles de usuarios concurrentes y transacciones simultáneas sin comprometer la seguridad ni la velocidad. Además, debía integrarse con diferentes pasarelas de pago internacionales y cumplir con normativas de protección de datos, garantizando una experiencia uniforme para usuarios en distintos países.",
        listData: [
          "Escalabilidad para soportar miles de usuarios concurrentes.",
          "Integración con múltiples pasarelas de pago internacionales.",
          "Cumplimiento de normativas de seguridad y privacidad (GDPR, PCI-DSS).",
          "Experiencia fluida y rápida en múltiples dispositivos y navegadores."
        ]
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Solución",
        description: "La solución consistió en implementar una arquitectura basada en microservicios con balanceadores de carga, lo que permitió una alta disponibilidad y escalabilidad. Se integraron pasarelas de pago como PayPal y Stripe con seguridad avanzada mediante encriptación y tokenización. Asimismo, se optimizó la experiencia de usuario con un diseño responsivo, navegación intuitiva y cargas rápidas en dispositivos móviles y de escritorio."
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Impacto", 
        description: "El impacto del proyecto fue altamente positivo: la plataforma logró atraer a más de 50,000 usuarios activos en los primeros seis meses, con una tasa de retención del 70%. Se redujeron los errores en transacciones en un 30% gracias a la optimización de los procesos de pago y la experiencia de compra mejorada aumentó la satisfacción del cliente, generando un crecimiento sostenido en ventas.",
        listData: [
          "Más de 50,000 usuarios activos en los primeros 6 meses.",
          "Reducción del 30% en errores de transacciones.",
          "Aumento de la tasa de retención del 70%.",
          "Mayor satisfacción y confianza de los clientes."
        ]
      },
    ],
  },
]