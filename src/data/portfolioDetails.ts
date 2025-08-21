import { iconsData } from "./techData";

interface Tech {
  name: string;       
  icon: keyof typeof iconsData; // O que pongo aqui?
  color?: string;   
}

interface ProcessData {
  id: number;
  title: string;
  process: string[];
}

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

interface ResultData {
  descripcion: string;
  antes: string[]
  despues: string[]
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
  process: ProcessData[]
  stackTech: Tech[]
  result: ResultData
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
    process: [
      {
        id: 1,
        title: "Descubrimiento",
        process: [
          "Reunión inicial con el cliente para comprender en detalle las necesidades, objetivos de negocio y expectativas del marketplace global.", 
          "Investigación de mercado para analizar tendencias de comercio electrónico y evaluar competidores directos e indirectos.",
          "Definición del alcance del proyecto, funcionalidades clave y criterios de éxito medibles."
        ]
      },
      {
        id: 2,
        title: "Diseño y Prototipado",
        process: [
          "Creación de wireframes y prototipos interactivos para validar la experiencia de usuario antes del desarrollo.",
          "Diseño UI adaptado a la identidad de TechNova, con énfasis en usabilidad y accesibilidad.",
          "Pruebas con usuarios para identificar mejoras en la navegación y el flujo de compra."
        ]
      },
      {
        id: 3,
        title: "Desarrollo e Integración",
        process: [
          "Implementación de arquitectura escalable basada en microservicios para garantizar rendimiento y disponibilidad.",
          "Integración de pasarelas de pago internacionales como PayPal y Stripe con encriptación avanzada.",
          "Desarrollo de un panel de administración intuitivo para la gestión de productos, pedidos y usuarios."
        ]
      },
      {
        id: 4,
        title: "Pruebas y Optimización",
        process: [
          "Pruebas unitarias, de integración y de estrés para validar seguridad y rendimiento en alta concurrencia.",
          "Optimización de la velocidad de carga en dispositivos móviles y navegadores.",
          "Corrección de errores y refinamiento de la experiencia de usuario."
        ]
      },
      {
        id: 5,
        title: "Lanzamiento y Monitoreo",
        process: [
          "Despliegue en infraestructura en la nube con balanceo de carga y redundancia.",
          "Monitoreo en tiempo real de métricas clave como transacciones, retención de usuarios y tiempos de respuesta.",
          "Acompañamiento post-lanzamiento con soporte técnico y actualizaciones continuas."
        ]
      }
    ],

    stackTech: [
      {name: "React", icon: "react", color: "text-blue-500"},
      {name: "Node.js", icon: "node", color: "text-green-400"},
      {name: "MongoDB", icon: "mongodb", color: "text-green-700"}
    ],

    result: {
      descripcion: "Devhooh ayudó a TechNova a construir un marketplace global que optimiza la experiencia de compra de los usuarios y mejora la eficiencia operativa del equipo interno. Gracias a una arquitectura moderna y procesos bien definidos, el proyecto logró resultados medibles y mejoras significativas en varios aspectos clave.",
      antes: [
        "Código heredado con poca escalabilidad.",
        "Integraciones mínimas o inexistentes con terceros.",
        "Procesos internos lentos para gestión de pedidos y usuarios.",
      ],
      despues: [
        "Lanzamiento de un MVP funcional en 6 semanas.",
        "Integraciones con múltiples servicios y pasarelas de pago.",
        "Arquitectura moderna basada en microservicios escalable y segura.",
      ]
    }
  },
]