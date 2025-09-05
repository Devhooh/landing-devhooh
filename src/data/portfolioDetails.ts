import { iconsData } from "./techData";

interface Tech {
  name: string;       
  icon: keyof typeof iconsData;
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

interface PicturesData {
  descripcion: string;
  images: string[];
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
  pictures: PicturesData
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
    imageHero: "/assets/images/webSoftware.png",
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
    },
    pictures: {
      descripcion: "Un vistazo al resultado final del proyecto, mostrando las pantallas principales y adaptaciones en distintos dispositivos.",
      images: [
        "/assets/images/webSoftware.png",
        "/assets/images/slide2.png",
        "/assets/images/slide3.png",
        "/assets/images/slide4.png",
      ]
    }
  },

  {
    id: 2,
    slug: "control-inventario",
    title: "Desarrollo web para InnoSoft",
    company: "InnoSoft",
    projectName: "App de Control de Inventario",
    location: "Colombia",
    service: "Desarrollo Móvil",
    imageHero: "/assets/images/webSoftware.png",
    aboutCompany: {
      image: "/assets/images/BgColor.png",
      description: "InnoSoft es una empresa líder en soluciones de software móvil, especializada en optimizar procesos de inventario y logística para clientes de distintos sectores. Su enfoque está en eficiencia operativa y experiencia de usuario en dispositivos móviles."
    },
    
    aboutProject: {
      image: "/assets/images/mision.png",
      description: "El proyecto consistió en diseñar y desarrollar una aplicación móvil para control de inventario, que permitiera escanear productos, sincronizar datos en la nube y generar reportes en tiempo real. Se buscó mejorar la eficiencia y reducir errores humanos en los almacenes."
    },
    
    challengeData: [
      { 
        image: "/assets/images/mision.png", 
        title: "Desafío",  
        description: "El principal desafío fue garantizar que los datos de inventario estuvieran siempre sincronizados y correctos, evitando pérdidas o inconsistencias en almacenes de distintos tamaños y ubicaciones.",
        listData: [
          "Reducción de errores humanos en el registro de productos.",
          "Sincronización en tiempo real con la nube.",
          "Optimización de procesos logísticos internos.",
          "Compatibilidad con distintos dispositivos móviles."
        ]
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Solución",
        description: "Se desarrolló una app móvil con integración en la nube usando Firebase, permitiendo escaneo rápido de productos mediante código de barras, registro automático y reportes instantáneos para la administración."
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Impacto", 
        description: "El impacto fue inmediato: la app permitió reducir los errores de inventario en un 60% en los primeros 4 meses, mejorando la eficiencia del personal y la satisfacción de los clientes internos.",
        listData: [
          "Reducción del 60% en errores de inventario.",
          "Mejora en tiempos de registro y actualización.",
          "Acceso a reportes en tiempo real para la administración.",
          "Optimización logística general de los almacenes."
        ]
      },
    ],
    
    process: [
      {
        id: 1,
        title: "Descubrimiento",
        process: [
          "Reunión inicial con InnoSoft para entender necesidades y procesos de inventario.",
          "Mapeo de flujo de trabajo actual y problemas frecuentes.",
          "Definición de objetivos medibles para la app móvil."
        ]
      },
      {
        id: 2,
        title: "Diseño y Prototipado",
        process: [
          "Wireframes y prototipos interactivos de la app.",
          "Validación de experiencia de usuario para escaneo y registro de productos.",
          "Ajustes de UI según feedback del cliente."
        ]
      },
      {
        id: 3,
        title: "Desarrollo e Integración",
        process: [
          "Desarrollo de la app con Kotlin y Firebase.",
          "Integración de escaneo de códigos de barras y sincronización en la nube.",
          "Panel de administración para reportes y estadísticas."
        ]
      },
      {
        id: 4,
        title: "Pruebas y Optimización",
        process: [
          "Pruebas de carga y sincronización de datos.",
          "Optimización de la interfaz y velocidad de la app.",
          "Corrección de errores y refinamiento de UX."
        ]
      },
      {
        id: 5,
        title: "Lanzamiento y Monitoreo",
        process: [
          "Despliegue en dispositivos de prueba y producción.",
          "Monitoreo de sincronización y rendimiento en tiempo real.",
          "Soporte post-lanzamiento y mejoras continuas."
        ]
      }
    ],

    stackTech: [
      {name: "Kotlin", icon: "kotlin", color: "text-fuchsia-500"},
      {name: "MySQL", icon: "mysql", color: "text-blue-400"}
    ],

    result: {
      descripcion: "La app de control de inventario de InnoSoft permitió reducir errores y optimizar la logística interna, mejorando eficiencia y confiabilidad en los procesos de almacén.",
      antes: [
        "Errores frecuentes en inventario.",
        "Procesos lentos y manuales.",
        "Falta de visibilidad de datos en tiempo real.",
      ],
      despues: [
        "Reducción del 60% en errores de inventario.",
        "Procesos automatizados y sincronizados en la nube.",
        "Reportes y estadísticas en tiempo real."
      ]
    },
    
    pictures: {
      descripcion: "Capturas de pantalla de la app de control de inventario en distintos dispositivos.",
      images: [
        "/assets/images/webSoftware.png",
        "/assets/images/slide2.png",
        "/assets/images/slide3.png",
        "/assets/images/slide4.png",
      ]
    }
  },

  {
    id: 3,
    slug: "learning-interactiva",    
    title: "Diseño UX/UI para EduNext",
    company: "EduNext",
    projectName: "Learning Interactiva",
    location: "Chile",
    service: "Diseño UX/UI",
    imageHero: "/assets/images/webSoftware.png",
    aboutCompany: { 
      image: "/assets/images/BgColor.png", 
      description: "EduNext es una startup chilena enfocada en la transformación digital de la educación. Su misión es ofrecer plataformas de aprendizaje accesibles, dinámicas y efectivas que potencien la retención estudiantil y mejoren la interacción entre profesores y alumnos. Con presencia en instituciones educativas y empresas de formación, EduNext impulsa la innovación en e-learning." 
    },
    aboutProject: { 
      image: "/assets/images/mision.png", 
      description: "El proyecto consistió en rediseñar y optimizar la experiencia de usuario de la plataforma de e-learning de EduNext. Se buscó mejorar la navegación, la accesibilidad y la participación de los estudiantes mediante una interfaz moderna, integración de clases en vivo, evaluaciones dinámicas y un sistema de recompensas gamificado." 
    },
    challengeData: [
      { 
        image: "/assets/images/mision.png", 
        title: "Desafío",  
        description: "El reto principal fue modernizar la interfaz existente, que resultaba confusa y poco atractiva, afectando la retención estudiantil. También se requería garantizar un acceso fluido en dispositivos móviles, integrar herramientas de interacción en tiempo real y diseñar una plataforma inclusiva y accesible para todo tipo de estudiantes.",
        listData: [
          "Baja retención estudiantil (<60%).",
          "Interfaz desactualizada y poco intuitiva.",
          "Falta de accesibilidad en dispositivos móviles.",
          "Escasa interacción en tiempo real."
        ]
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Solución",
        description: "Se diseñó una experiencia centrada en el estudiante, aplicando principios de UX/UI modernos con prototipos interactivos validados por usuarios reales. Se incorporaron clases en vivo con chat integrado, evaluaciones gamificadas y un sistema de seguimiento personalizado. Además, se aplicaron pautas de accesibilidad WCAG para una experiencia inclusiva."
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Impacto", 
        description: "El rediseño tuvo un impacto inmediato: la retención estudiantil aumentó en un 35%, el tiempo promedio de conexión semanal creció un 50% y la satisfacción de los usuarios alcanzó una calificación promedio de 4.6/5. La nueva plataforma también permitió a EduNext expandirse a más instituciones educativas.",
        listData: [
          "Incremento del 35% en la retención estudiantil.",
          "Mayor participación gracias a clases en vivo y evaluaciones interactivas.",
          "Tiempo de conexión semanal aumentado en un 50%.",
          "Expansión a nuevas instituciones educativas."
        ]
      },
    ],
    process: [
      {
        id: 1,
        title: "Investigación",
        process: [
          "Análisis de la plataforma actual y entrevistas con estudiantes y docentes.",
          "Estudio de tendencias de e-learning y plataformas competidoras.",
          "Definición de objetivos de mejora centrados en la experiencia de usuario."
        ]
      },
      {
        id: 2,
        title: "Diseño UX/UI",
        process: [
          "Creación de wireframes y prototipos interactivos en Figma.",
          "Diseño de un sistema visual moderno y adaptable.",
          "Pruebas de usabilidad con grupos de estudiantes."
        ]
      },
      {
        id: 3,
        title: "Implementación",
        process: [
          "Integración del diseño en la plataforma usando Next.js.",
          "Optimización de la accesibilidad y la experiencia móvil.",
          "Desarrollo de módulos interactivos para clases y evaluaciones."
        ]
      },
      {
        id: 4,
        title: "Pruebas y Lanzamiento",
        process: [
          "Validación del flujo de usuario con pruebas piloto.",
          "Corrección de problemas de navegación y accesibilidad.",
          "Lanzamiento de la nueva plataforma a gran escala."
        ]
      }
    ],
    stackTech: [
      {name: "Figma", icon: "figma", color: "text-pink-500"},
      {name: "Next.js", icon: "nextjs", color: "text-gray-900"},
      {name: "React", icon: "react", color: "text-blue-500"}
    ],
    result: {
      descripcion: "Devhooh colaboró con EduNext en la creación de una plataforma educativa moderna y atractiva que mejoró significativamente la retención estudiantil y la interacción entre usuarios. Gracias al rediseño, EduNext consolidó su posición como referente en soluciones de e-learning en Chile.",
      antes: [
        "Interfaz confusa y poco atractiva.",
        "Baja retención de estudiantes.",
        "Problemas de accesibilidad en móviles."
      ],
      despues: [
        "Retención estudiantil +35%.",
        "Interfaz moderna y gamificada.",
        "Accesibilidad optimizada en móviles y desktop."
      ]
    },
    pictures: {
      descripcion: "Imágenes de la nueva plataforma e-learning con diseño moderno, accesible y optimizado para múltiples dispositivos.",
      images: [
        "/assets/images/webSoftware.png",
        "/assets/images/slide2.png",
        "/assets/images/slide3.png"
      ]
    }
  },

  {
    id: 4,
    slug: "reservas-online",
    title: "Desarrolllo web para ReservaPlus",
    company: "ReservaPlus",
    projectName: "Sistema de Reservas Online",
    location: "México",
    service: "Desarrollo Web",
    imageHero: "/assets/images/webSoftware.png",
    
    aboutCompany: { 
      image: "/assets/images/BgColor.png", 
      description: "ReservaPlus es una empresa enfocada en soluciones digitales para reservas y gestión de citas. Su objetivo es mejorar la experiencia de usuario y optimizar la administración de servicios en distintos sectores." 
    },
    
    aboutProject: { 
      image: "/assets/images/mision.png", 
      description: "Este proyecto consistió en desarrollar un sistema de reservas online intuitivo, con recordatorios automáticos y sincronización de calendarios, facilitando la gestión de citas y mejorando la eficiencia de los usuarios finales." 
    },
    
    challengeData: [
      { 
        image: "/assets/images/mision.png", 
        title: "Desafío",  
        description: "El reto principal fue crear un sistema capaz de manejar múltiples reservas simultáneas sin conflictos y con recordatorios automáticos confiables.",
        listData: [
          "Gestión de miles de reservas simultáneas.",
          "Sincronización precisa con calendarios.",
          "Envío de recordatorios automáticos.",
          "Experiencia de usuario simple e intuitiva."
        ]
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Solución",
        description: "Se desarrolló una plataforma web robusta con backend en Laravel y base de datos MySQL, implementando notificaciones automáticas y sincronización en tiempo real con calendarios de los usuarios."
      },
      { 
        image: "/assets/images/mision.png", 
        title: "Impacto", 
        description: "El sistema permitió automatizar más de 5,000 citas mensuales, reduciendo errores y mejorando la experiencia de clientes y administradores.",
        listData: [
          "Automatización de más de 5,000 citas mensuales.",
          "Reducción significativa de errores humanos.",
          "Mayor satisfacción de los clientes.",
          "Optimización del flujo de reservas y gestión interna."
        ]
      },
    ],
    
    process: [
      {
        id: 1,
        title: "Descubrimiento",
        process: [
          "Reunión con el cliente para entender el flujo de reservas y necesidades específicas.",
          "Mapeo del proceso actual y problemas principales.",
          "Definición de objetivos claros y medibles para el sistema de reservas."
        ]
      },
      {
        id: 2,
        title: "Diseño y Prototipado",
        process: [
          "Diseño de wireframes y prototipos interactivos del sistema.",
          "Validación de UX/UI con el cliente y usuarios finales.",
          "Iteraciones de diseño según feedback recibido."
        ]
      },
      {
        id: 3,
        title: "Desarrollo e Integración",
        process: [
          "Desarrollo de backend en Laravel y base de datos MySQL.",
          "Implementación de notificaciones automáticas y sincronización con calendarios.",
          "Desarrollo del panel administrativo y dashboard de reservas."
        ]
      },
      {
        id: 4,
        title: "Pruebas y Optimización",
        process: [
          "Pruebas de carga y sincronización de reservas.",
          "Optimización de interfaz y velocidad de respuesta.",
          "Corrección de errores y mejoras en la experiencia de usuario."
        ]
      },
      {
        id: 5,
        title: "Lanzamiento y Monitoreo",
        process: [
          "Despliegue del sistema en servidores productivos.",
          "Monitoreo de reservas y notificaciones automáticas.",
          "Soporte post-lanzamiento y ajustes continuos."
        ]
      }
    ],

    stackTech: [
      {name: "Typescript", icon: "typescript", color: "text-blue-500"},
      {name: "MySQL", icon: "mysql", color: "text-blue-500"}
    ],

    result: {
      descripcion: "El proyecto permitió automatizar las reservas y optimizar la gestión interna, mejorando eficiencia y experiencia del usuario.",
      antes: [
        "Procesos manuales de reservas.",
        "Errores frecuentes en la gestión de citas.",
        "Falta de recordatorios automáticos."
      ],
      despues: [
        "Automatización completa de reservas.",
        "Reducción de errores humanos.",
        "Notificaciones y sincronización automáticas."
      ]
    },
    
    pictures: {
      descripcion: "Vista del sistema de reservas online en diferentes dispositivos y secciones clave.",
      images: [
        "/assets/images/webSoftware.png",
        "/assets/images/slide2.png",
        "/assets/images/slide3.png",
        "/assets/images/slide4.png",
      ]
    }
  },

  {
  id: 5,
  slug: "fitness-custom",
  title: "Desarrollo movil para FitLife",
  company: "FitLife",
  projectName: "Aplicación de Fitness Personalizada",
  location: "Perú",
  service: "Desarrollo Móvil",
  imageHero: "/assets/images/webSoftware.png",

  aboutCompany: { 
    image: "/assets/images/BgColor.png", 
    description: "FitLife es una empresa dedicada al desarrollo de soluciones digitales para fitness y bienestar, ofreciendo aplicaciones que mejoran la experiencia del usuario y el seguimiento de su progreso personal." 
  },
  
  aboutProject: { 
    image: "/assets/images/mision.png", 
    description: "El proyecto consistió en desarrollar una aplicación de fitness personalizada con rutinas adaptadas, integración con wearables y seguimiento en tiempo real, mejorando la motivación y resultados de los usuarios." 
  },

  challengeData: [
    { 
      image: "/assets/images/mision.png", 
      title: "Desafío",  
      description: "El principal reto fue crear una app que integrara rutinas personalizadas y datos de wearables en tiempo real sin afectar la experiencia del usuario.",
      listData: [
        "Sincronización con distintos dispositivos y wearables.",
        "Rendimiento óptimo en iOS y Android.",
        "Interfaz intuitiva y motivadora para los usuarios."
      ]
    },
    { 
      image: "/assets/images/mision.png", 
      title: "Solución",
      description: "Se construyó una app móvil en React Native con backend en Express, integrando wearables y algoritmos de seguimiento de progreso para ofrecer planes personalizados."
    },
    { 
      image: "/assets/images/mision.png", 
      title: "Impacto", 
      description: "La app logró más de 20,000 descargas en los primeros 6 meses, con usuarios activos que reportaron mejoras en su rutina y seguimiento de progreso.",
      listData: [
        "Más de 20,000 descargas en 6 meses.",
        "Alta retención y engagement de usuarios.",
        "Seguimiento de progreso en tiempo real.",
        "Experiencia de usuario fluida y motivadora."
      ]
    },
  ],

  process: [
    {
      id: 1,
      title: "Descubrimiento",
      process: [
        "Reunión con el cliente para definir objetivos y funcionalidades clave de la app.",
        "Análisis de usuarios y sus necesidades de fitness.",
        "Definición del alcance del proyecto y métricas de éxito."
      ]
    },
    {
      id: 2,
      title: "Diseño y Prototipado",
      process: [
        "Creación de wireframes y prototipos interactivos para validar UX/UI.",
        "Diseño de interfaces atractivas y motivadoras.",
        "Pruebas con usuarios para iterar sobre la experiencia."
      ]
    },
    {
      id: 3,
      title: "Desarrollo e Integración",
      process: [
        "Desarrollo en React Native y Express, integrando wearables y seguimiento de progreso.",
        "Implementación de rutinas personalizadas y notificaciones motivacionales.",
        "Creación de dashboard de usuario para seguimiento en tiempo real."
      ]
    },
    {
      id: 4,
      title: "Pruebas y Optimización",
      process: [
        "Pruebas de rendimiento en iOS y Android.",
        "Optimización de sincronización de datos con wearables.",
        "Corrección de errores y mejoras en la interfaz."
      ]
    },
    {
      id: 5,
      title: "Lanzamiento y Monitoreo",
      process: [
        "Publicación en App Store y Google Play.",
        "Monitoreo de métricas de descargas y engagement.",
        "Actualizaciones y soporte continuo."
      ]
    }
  ],

  stackTech: [
    {name: "React Native", icon: "react", color: "text-blue-500"},
    {name: "Express", icon: "express", color: "text-gray-400"}
  ],

  result: {
    descripcion: "La app de FitLife permitió a los usuarios seguir rutinas personalizadas y mejorar su bienestar con seguimiento en tiempo real, logrando un alto engagement y descargas en los primeros meses.",
    antes: [
      "Seguimiento manual de rutinas.",
      "Falta de integración con wearables.",
      "Difícil personalización de planes de entrenamiento."
    ],
    despues: [
      "App personalizada con rutinas dinámicas.",
      "Integración completa con wearables y seguimiento en tiempo real.",
      "Experiencia de usuario motivadora y sencilla."
    ]
  },

  pictures: {
    descripcion: "Vista de la aplicación de fitness mostrando rutinas, dashboards y progresos de los usuarios.",
    images: [
      "/assets/images/webSoftware.png",
      "/assets/images/slide2.png",
      "/assets/images/slide3.png",
      "/assets/images/slide4.png",
    ]
  }
},

{
  id: 6,
  slug: "contabilidad",
  title: "Desarrollo web para ContaPro",
  company: "ContaPro",
  projectName: "Software de Contabilidad en la Nube",
  location: "Colombia",
  service: "Desarrollo Web",
  imageHero: "/assets/images/webSoftware.png",

  aboutCompany: { 
    image: "/assets/images/BgColor.png", 
    description: "ContaPro es una empresa especializada en soluciones contables digitales, ofreciendo sistemas seguros y flexibles que facilitan la gestión administrativa y financiera de sus clientes." 
  },

  aboutProject: { 
    image: "/assets/images/mision.png", 
    description: "Este proyecto consistió en desarrollar un software contable en la nube que permite la generación de reportes financieros automáticos, cumplimiento tributario y una administración eficiente de los recursos contables de la empresa." 
  },

  challengeData: [
    { 
      image: "/assets/images/mision.png", 
      title: "Desafío",  
      description: "El principal reto fue crear un sistema seguro y escalable que permitiera manejar grandes volúmenes de datos financieros y cumplir con regulaciones tributarias automáticamente.",
      listData: [
        "Integración de módulos contables completos y precisos.",
        "Cumplimiento automático de normativas fiscales y tributarias.",
        "Seguridad de los datos financieros sensibles."
      ]
    },
    { 
      image: "/assets/images/mision.png", 
      title: "Solución",
      description: "Se implementó un software en Django con base de datos PostgreSQL, ofreciendo una interfaz web intuitiva y funcionalidades automatizadas para contabilidad, reportes y gestión de usuarios."
    },
    { 
      image: "/assets/images/mision.png", 
      title: "Impacto", 
      description: "El software permitió a las empresas ahorrar hasta un 40% en gestión administrativa, mejorar la precisión de sus reportes financieros y reducir errores humanos.",
      listData: [
        "Reducción del 40% en gestión administrativa.",
        "Automatización de reportes financieros y tributarios.",
        "Mayor eficiencia y confiabilidad en los procesos contables."
      ]
    },
  ],

  process: [
    {
      id: 1,
      title: "Descubrimiento",
      process: [
        "Reunión inicial con ContaPro para entender las necesidades contables y administrativas.",
        "Análisis de procesos actuales y requisitos legales.",
        "Definición del alcance del proyecto y funcionalidades críticas."
      ]
    },
    {
      id: 2,
      title: "Diseño y Prototipado",
      process: [
        "Creación de wireframes y prototipos del sistema contable.",
        "Diseño de interfaz clara y accesible para usuarios administrativos.",
        "Validación del flujo de trabajo y reportes financieros."
      ]
    },
    {
      id: 3,
      title: "Desarrollo e Integración",
      process: [
        "Desarrollo del backend en Django y PostgreSQL.",
        "Implementación de módulos para contabilidad, reportes y cumplimiento tributario.",
        "Integración de funcionalidades automatizadas y seguridad de datos."
      ]
    },
    {
      id: 4,
      title: "Pruebas y Optimización",
      process: [
        "Pruebas unitarias y de integración para garantizar precisión contable.",
        "Optimización de velocidad y experiencia de usuario.",
        "Ajustes y corrección de errores detectados."
      ]
    },
    {
      id: 5,
      title: "Lanzamiento y Monitoreo",
      process: [
        "Despliegue en la nube y configuración de backups automáticos.",
        "Monitoreo del desempeño y seguridad del sistema.",
        "Soporte continuo y actualizaciones periódicas."
      ]
    }
  ],

  stackTech: [
    {name: "Python", icon: "python", color: "text-yellow-500"},
    {name: "Django", icon: "django", color: "text-green-700"},
    {name: "PostgreSQL", icon: "postgresql", color: "text-blue-600"}
  ],

  result: {
    descripcion: "El software de ContaPro permitió una gestión contable más eficiente, automatizando procesos y asegurando el cumplimiento tributario de manera confiable y segura.",
    antes: [
      "Procesos contables manuales y lentos.",
      "Alta probabilidad de errores en reportes financieros.",
      "Gestión administrativa ineficiente y costosa."
    ],
    despues: [
      "Software en la nube con contabilidad automatizada.",
      "Generación de reportes financieros confiables.",
      "Ahorro significativo en gestión administrativa y reducción de errores."
    ]
  },

  pictures: {
    descripcion: "Vista del sistema contable mostrando dashboards, reportes y módulos de gestión administrativa.",
    images: [
      "/assets/images/webSoftware.png",
      "/assets/images/slide2.png",
      "/assets/images/slide3.png",
      "/assets/images/slide4.png",
    ]
  }
}

]