interface ProcessStep {
  number: number;
  title: string;
  description: string;
  points?: string[];
}

interface FAQItemProps  {
  id: number;
  question: string;
  answer: string;
};

interface Benefits {
  icon: string;
  title: string;
  description: string;
}

interface ListTech {
  icon: string;
  color?: string;
  title: string;
  listTech: string[];
}

interface TechStack {
  description: string;
  tech: ListTech[]
}

interface ServicesInclud {
  icon: string;
  title: string;
  subtitle: string
  list?: string[]
}

export interface ServicesData {
  slug: string;
  name: string;
  description: string;
  subtitle: string;
  services: ServicesInclud[];
  benefits: Benefits[];
  servicesData: ServicesInclud[]
  stackTech: TechStack[]
  process: ProcessStep[]
  faq: FAQItemProps[]
}

export const ServicesDetails: Record<string, ServicesData> = {
  "desarrollo-web": { 
    slug: "desarrollo-web",
    name: "Desarrollo Web",
    subtitle: "Nuestro equipo te acompaña en cada paso para garantizar resultados efectivos y duraderos.",
    description: "Ofrecemos un ciclo completo de servicios de diseño, desarrollo e integración de soluciones web. Ya sea un sitio orientado al consumidor o una plataforma empresarial a gran escala, te acompañamos en todo el proceso: desde la idea inicial hasta la entrega final y el soporte continuo.",
    services: [
      { icon: "PenTool", title: "Diseño a medida y personalizado", subtitle: "Creamos páginas únicas que reflejan la esencia de tu negocio, sin usar plantillas genéricas.",
        list: ["Diseños exclusivos adaptados a tu marca","Experiencia visual moderna","Enfoque en la usabilidad"],
      },
      { icon: "Smartphone", title: "Totalmente responsive", subtitle: "Tu sitio funcionará perfectamente en computadoras, tablets y móviles.",
        list: ["Diseño adaptable a cualquier pantalla","Pruebas en múltiples dispositivos","Experiencia fluida para tus usuarios"] 
      },
      { icon: "LifeBuoy", title: "Soporte y mantenimiento", subtitle: "Nos encargamos de que tu web esté siempre actualizada, segura y funcionando sin problemas.", 
        list: ["Actualizaciones periódicas","Corrección de errores y fallos","Mejoras continuas según tus necesidades"] 
      },
      { icon: "Layers", title: "Escalable y administrable", subtitle: "Tu web crecerá junto a tu negocio, con opciones de gestión sencillas.",
        list: ["Panel de administración fácil de usar","Espacio para agregar nuevas secciones","Preparado para futuras integraciones"] 
      },
      { icon: "Zap", title: "Velocidad optimizada", subtitle: "Garantizamos tiempos de carga rápidos para mejorar la experiencia del usuario.",
        list: ["Optimización de imágenes y recursos","Carga rápida en cualquier dispositivo","Mejor rendimiento en buscadores"] 
      },
      { icon: "Shield", title: "Seguridad", subtitle: "Protegemos tu web frente a amenazas y garantizamos la tranquilidad de tus clientes.",
        list: ["Certificado SSL incluido","Protección contra ataques comunes","Actualizaciones regulares de seguridad"] 
      },
    ],
    benefits: [
      { icon: "BarChart", title: "Análisis de rendimiento", description: "Medimos y optimizamos el rendimiento de tu web para maximizar la conversión y retención de usuarios."},
      { icon: "TrendingUp", title: "Crecimiento de tu negocio", description: "Una web profesional genera confianza y ayuda a atraer más clientes y oportunidades."},
      { icon: "Gift", title: "Mejora de la experiencia de usuario", description: "Creamos interfaces intuitivas y agradables que facilitan la navegación y fidelizan visitantes."},
      { icon: "Globe", title: "Presencia internacional", description: "Tu sitio puede llegar a clientes en cualquier parte del mundo con optimización multilingüe y geolocalización."},
      { icon: "Headphones", title: "Soporte y asesoría", description: "Recibirás orientación profesional durante y después del desarrollo para mantener tu web siempre actualizada."}
    ],
    servicesData: [
      { icon: "Globe", title: "Landing Pages", subtitle: "Webs rápidas para captar clientes."},
      { icon: "ShoppingCart", title: "E-commerce", subtitle: "Tiendas en línea con carrito de compras."},
      { icon: "BookOpen", title: "Blogs / Revistas digitales", subtitle: "Páginas para publicar contenido."},
      { icon: "Building2", title: "Páginas Corporativas", subtitle: "Empresas que quieren presencia profesional."},
      { icon: "User", title: "Portafolios personales", subtitle: "Para freelancers o creativos."},
      { icon: "GraduationCap", title: "Webs Educativas", subtitle: "Cursos, academias, plataformas e-learning."},
    ],
    stackTech: [
      { description: "Nuestros servicios incluyen la pila tecnológica necesaria para crear una aplicación web exitosa y personalizada para su negocio",
        tech: [
          { icon: "Database", color: "blue", title: "Base de datos", listTech: ["MySQL", "Postgres", "MongoDB"]},
          { icon: "Server", color: "green", title: "Back-End", listTech: ["NestJS", "Node.js", "ExpressJS"]},
          { icon: "Laptop", color: "purple", title: "Front-End", listTech: ["React", "Next.js", "TypeScript", "TailwindCSS"]}
        ]
      }
    ],
    process: [
      {
        number: 1,
        title: "Reunión Inicial",
        description: "Nos reunimos contigo para conocer a fondo tus necesidades, objetivos de negocio y expectativas. Esta etapa es fundamental para entender qué tipo de página web necesitas, el público al que deseas llegar y los resultados que esperas lograr. Aquí construimos la base del proyecto asegurando que todos estemos alineados desde el inicio.",
      },
      {
        number: 2,
        title: "Planificación",
        description: "Definimos un plan de trabajo claro y organizado, donde estructuramos el proyecto en fases y tareas específicas. En esta etapa nos aseguramos de que cada detalle quede documentado, desde la arquitectura web hasta las funcionalidades principales, estableciendo plazos realistas y entregables bien definidos.",
        points: ["Arquitectura web", "Definición de funcionalidades", "Plazos de entrega"],
      },
      {
        number: 3,
        title: "Diseño UI/UX",
        description: "Creamos un diseño visual atractivo y una experiencia de usuario intuitiva. Te presentamos wireframes y prototipos interactivos para que puedas visualizar cómo lucirá tu sitio antes de ser desarrollado. Nuestro objetivo es que tu página no solo se vea bien, sino que también sea fácil de navegar para tus usuarios.",
        points: ["Wireframes", "Prototipos interactivos", "Validación con cliente"],
      },
      {
        number: 4,
        title: "Desarrollo",
        description: "Construimos tu sitio web utilizando tecnologías modernas que aseguran velocidad, seguridad y escalabilidad. Implementamos un frontend responsivo que se adapta a cualquier dispositivo y un backend optimizado para manejar tus necesidades. También incluimos prácticas de optimización SEO para que tu sitio tenga mayor visibilidad en buscadores.",
        points: ["Frontend responsivo", "Integración con APIs", "Optimización SEO"],
      },
      {
        number: 5,
        title: "Pruebas",
        description: "Antes de lanzar tu sitio web, realizamos pruebas exhaustivas para asegurar que todo funcione correctamente. Validamos la usabilidad, compatibilidad en diferentes navegadores y dispositivos, así como la velocidad de carga. Esto nos permite garantizar que tu página ofrecerá la mejor experiencia posible a tus usuarios.",
        points: ["Pruebas de usabilidad", "Compatibilidad en navegadores", "Optimización de velocidad"],
      },
      {
        number: 6,
        title: "Entrega & Soporte",
        description: "Publicamos tu página web en el servidor definitivo y nos aseguramos de que todo esté funcionando de manera óptima. Además, te brindamos soporte técnico continuo para resolver cualquier duda o necesidad que pueda surgir después del lanzamiento. Queremos que tu proyecto siga creciendo contigo.",
      },
    ],
    faq: [
      {
        id: 1,
        question: "¿Cuánto tiempo tarda en desarrollarse una página web?",
        answer: "El tiempo depende del tamaño y complejidad del proyecto. Una web básica puede tardar entre 2 y 4 semanas, mientras que proyectos más grandes con funcionalidades personalizadas pueden tomar varios meses. Siempre planificamos entregas parciales para que veas avances constantes."
      },
      {
        id: 2,
        question: "¿El diseño será adaptable a celulares y tablets?",
        answer: "Sí, todos nuestros desarrollos son 100% responsivos. Esto significa que tu página web se adaptará automáticamente a cualquier dispositivo, ya sea computadora, tablet o celular, garantizando una buena experiencia de navegación."
      },
      {
        id: 3,
        question: "¿Puedo actualizar el contenido de mi página yo mismo?",
        answer: "Claro, integramos tu web con un sistema de gestión de contenidos (CMS) o desarrollamos un panel personalizado para que puedas modificar textos, imágenes y secciones sin necesidad de conocimientos técnicos."
      },
      {
        id: 4,
        question: "¿La página estará optimizada para aparecer en Google?",
        answer: "Sí, aplicamos prácticas de SEO técnico como estructura optimizada, carga rápida, etiquetas correctas y compatibilidad móvil. Además, podemos asesorarte en estrategias de posicionamiento para mejorar tu visibilidad en buscadores."
      },
      {
        id: 5,
        question: "¿Ofrecen soporte después de la entrega?",
        answer: "Sí, ofrecemos planes de soporte y mantenimiento que incluyen actualizaciones, copias de seguridad y mejoras continuas para que tu página web siempre funcione de manera óptima y segura."
      }
    ]
  },

  "desarrollo-mobile": { 
    slug: "desarrollo-mobile",
    name: "Desarrollo Móvil",
    subtitle: "Creamos aplicaciones móviles intuitivas, seguras y escalables que conectan con tus clientes donde quiera que estén.",
    description: "Ofrecemos un ciclo completo de servicios de diseño y desarrollo de aplicaciones móviles. Desde la idea inicial hasta la publicación en App Store y Google Play, te acompañamos en cada paso para garantizar que tu aplicación no solo funcione, sino que también ofrezca una experiencia excepcional a tus usuarios.",
    
    services: [
      { icon: "Smartphone", title: "Aplicaciones nativas", subtitle: "Desarrollamos apps optimizadas para iOS y Android con el máximo rendimiento.",
        list: ["iOS (Swift, Objective-C)", "Android (Kotlin, Java)", "Interfaz fluida y rápida"],
      },
      { icon: "Layers", title: "Aplicaciones multiplataforma", subtitle: "Un solo desarrollo que funciona en ambas plataformas.",
        list: ["React Native", "Flutter", "Menor costo y tiempo de desarrollo"] 
      },
      { icon: "PenTool", title: "Diseño centrado en el usuario", subtitle: "Apps visualmente atractivas y fáciles de usar.",
        list: ["UI moderna y limpia", "UX intuitiva", "Pruebas de usabilidad"] 
      },
      { icon: "Zap", title: "Rendimiento optimizado", subtitle: "Nuestras apps funcionan rápido y sin interrupciones.",
        list: ["Carga veloz", "Consumo eficiente de batería", "Mejor experiencia de usuario"] 
      },
      { icon: "Shield", title: "Seguridad avanzada", subtitle: "Protegemos los datos de tus usuarios con altos estándares.",
        list: ["Encriptación de datos", "Autenticación segura", "Cumplimiento de normativas"] 
      },
      { icon: "LifeBuoy", title: "Soporte y mantenimiento", subtitle: "Nos aseguramos de que tu app siga funcionando con el tiempo.",
        list: ["Actualizaciones periódicas", "Corrección de errores", "Mejoras continuas"] 
      },
    ],

    benefits: [
      { icon: "Users", title: "Conexión con clientes", description: "Tu marca estará siempre en el bolsillo de tus usuarios, lista para interactuar con ellos en cualquier momento."},
      { icon: "TrendingUp", title: "Impulso a tu negocio", description: "Una app profesional genera confianza y abre nuevas oportunidades de venta y fidelización."},
      { icon: "Globe", title: "Presencia digital", description: "Con una app en las principales tiendas, tu negocio alcanza mayor visibilidad y prestigio."},
      { icon: "BarChart", title: "Datos en tiempo real", description: "Obtén métricas de uso y comportamiento para tomar decisiones basadas en datos."},
      { icon: "Headphones", title: "Soporte personalizado", description: "Te acompañamos antes, durante y después del desarrollo para que tu app siempre crezca contigo."}
    ],

    servicesData: [
      { icon: "ShoppingCart", title: "E-commerce móvil", subtitle: "Lleva tu tienda en línea a dispositivos móviles."},
      { icon: "Utensils", title: "Apps de delivery", subtitle: "Pedidos rápidos y fáciles desde el celular."},
      { icon: "User", title: "Aplicaciones corporativas", subtitle: "Herramientas internas para empresas."},
      { icon: "Heart", title: "Salud y bienestar", subtitle: "Apps para fitness, nutrición o telemedicina."},
      { icon: "GraduationCap", title: "Educación móvil", subtitle: "Cursos, clases y plataformas e-learning."},
      { icon: "Gamepad2", title: "Entretenimiento", subtitle: "Juegos y apps interactivas."},
    ],

    stackTech: [
      { description: "Utilizamos tecnologías modernas para crear aplicaciones móviles rápidas, seguras y escalables.",
        tech: [
          { icon: "Smartphone", color: "blue", title: "Multiplataforma", listTech: ["React Native", "Flutter"]},
          { icon: "Code2", color: "green", title: "Nativo", listTech: ["Kotlin", "Swift", "Java"]},
          { icon: "Server", color: "purple", title: "Back-End", listTech: ["Node.js", "Firebase", "GraphQL"]}
        ]
      }
    ],

    process: [
      {
        number: 1,
        title: "Análisis inicial",
        description: "Nos reunimos contigo para entender el objetivo de tu aplicación, el público al que deseas llegar y las funcionalidades clave. Definimos juntos la visión y el propósito de la app."
      },
      {
        number: 2,
        title: "Planificación",
        description: "Organizamos el desarrollo en fases claras y priorizamos las funciones más importantes. Definimos plazos realistas y un roadmap con entregas parciales.",
        points: ["Definición de funcionalidades", "Diseño de arquitectura", "Plan de entregas"]
      },
      {
        number: 3,
        title: "Diseño UI/UX",
        description: "Creamos pantallas intuitivas, atractivas y centradas en el usuario. Diseñamos prototipos interactivos para validar la experiencia antes del desarrollo.",
        points: ["Wireframes", "Prototipos interactivos", "Pruebas de usabilidad"]
      },
      {
        number: 4,
        title: "Desarrollo",
        description: "Construimos la aplicación con código limpio y tecnologías modernas. Aseguramos un rendimiento óptimo tanto en iOS como en Android.",
        points: ["Desarrollo nativo o híbrido", "Integración con APIs", "Optimización de rendimiento"]
      },
      {
        number: 5,
        title: "Pruebas",
        description: "Realizamos pruebas exhaustivas en distintos dispositivos y sistemas operativos para asegurar estabilidad, seguridad y una experiencia fluida.",
        points: ["Pruebas de compatibilidad", "Pruebas de seguridad", "Optimización de velocidad"]
      },
      {
        number: 6,
        title: "Lanzamiento y soporte",
        description: "Publicamos tu aplicación en App Store y Google Play, y ofrecemos soporte continuo con actualizaciones y mejoras constantes."
      }
    ],

    faq: [
      {
        id: 1,
        question: "¿Cuánto tiempo tarda en desarrollarse una aplicación móvil?",
        answer: "Depende de la complejidad. Una app sencilla puede tardar de 2 a 3 meses, mientras que proyectos más grandes con múltiples funcionalidades pueden llevar entre 4 y 6 meses o más."
      },
      {
        id: 2,
        question: "¿La aplicación funcionará tanto en iOS como en Android?",
        answer: "Sí, desarrollamos tanto apps nativas como multiplataforma. Según tus necesidades y presupuesto, recomendamos la mejor opción para asegurar compatibilidad en ambas plataformas."
      },
      {
        id: 3,
        question: "¿Se puede actualizar la app después del lanzamiento?",
        answer: "Por supuesto. Ofrecemos planes de mantenimiento y soporte para agregar nuevas funciones, corregir errores y mantener tu app al día con los cambios en iOS y Android."
      },
      {
        id: 4,
        question: "¿La aplicación estará optimizada para la seguridad de los datos?",
        answer: "Sí, implementamos encriptación, autenticación segura y seguimos buenas prácticas de seguridad para proteger la información de tus usuarios."
      },
      {
        id: 5,
        question: "¿Publican ustedes la app en App Store y Google Play?",
        answer: "Sí, nosotros nos encargamos del proceso de publicación y te guiamos con todos los requisitos necesarios para que tu aplicación esté disponible en ambas tiendas."
      }
    ]
  },

  "desarrollo-software": { 
    slug: "desarrollo-software",
    name: "Desarrollo de Software",
    subtitle: "Creamos soluciones de software robustas y escalables para impulsar tu negocio.",
    description: "Ofrecemos un ciclo completo de diseño, desarrollo e integración de software a medida. Ya sea una aplicación empresarial, un sistema interno o una solución multiplataforma, te acompañamos desde la idea inicial hasta la entrega final y el soporte continuo.",
    services: [
      { icon: "PenTool", title: "Software a medida", subtitle: "Creamos aplicaciones adaptadas a tus necesidades específicas.",
        list: ["Soluciones personalizadas","Funcionalidades adaptadas a tu negocio","Diseño centrado en el usuario"]
      },
      { icon: "Smartphone", title: "Multiplataforma", subtitle: "Aplicaciones para escritorio, móviles y web desde un mismo núcleo.",
        list: ["Compatibilidad con distintos sistemas","Experiencia unificada","Desarrollo eficiente"]
      },
      { icon: "LifeBuoy", title: "Soporte y mantenimiento", subtitle: "Nos aseguramos de que tu software siga siendo estable y seguro.",
        list: ["Actualizaciones periódicas","Corrección de errores","Mejoras continuas"]
      },
      { icon: "Layers", title: "Escalable y flexible", subtitle: "Tu software crecerá con tu negocio y se adaptará a nuevos retos.",
        list: ["Arquitectura modular","Preparado para integraciones futuras","Gestión sencilla"]
      },
      { icon: "Zap", title: "Alto rendimiento", subtitle: "Optimizamos el software para garantizar rapidez y eficiencia.",
        list: ["Procesamiento veloz","Uso eficiente de recursos","Experiencia fluida para usuarios"]
      },
      { icon: "Shield", title: "Seguridad", subtitle: "Protegemos tu software frente a vulnerabilidades.",
        list: ["Cifrado de datos","Prácticas de seguridad modernas","Monitoreo constante"]
      }
    ],
    benefits: [
      { icon: "BarChart", title: "Optimización de procesos", description: "Automatizamos y mejoramos la eficiencia operativa de tu negocio."},
      { icon: "TrendingUp", title: "Escalabilidad del negocio", description: "Un software bien diseñado impulsa el crecimiento de la empresa."},
      { icon: "Gift", title: "Experiencia de usuario", description: "Interfaces intuitivas que facilitan la adopción del software por parte de tus equipos."},
      { icon: "Globe", title: "Alcance global", description: "Soluciones preparadas para usarse en diferentes regiones e idiomas."},
      { icon: "Headphones", title: "Soporte y asesoría", description: "Te acompañamos en la implementación y evolución de tu software."}
    ],
    servicesData: [
      { icon: "Globe", title: "Aplicaciones Web", subtitle: "Plataformas accesibles desde cualquier navegador."},
      { icon: "Smartphone", title: "Apps móviles", subtitle: "Desarrollo nativo e híbrido para iOS y Android."},
      { icon: "Building2", title: "Sistemas empresariales", subtitle: "ERP, CRM y software de gestión a medida."},
      { icon: "Database", title: "Integraciones", subtitle: "Conexión con APIs y sistemas externos."},
      { icon: "User", title: "Software interno", subtitle: "Herramientas para optimizar la operación diaria."},
      { icon: "GraduationCap", title: "Plataformas educativas", subtitle: "Soluciones de e-learning y gestión académica."}
    ],
    stackTech: [
      { description: "Trabajamos con las tecnologías necesarias para construir software moderno, escalable y seguro.",
        tech: [
          { icon: "Database", color: "blue", title: "Base de datos", listTech: ["Postgres", "MySQL", "MongoDB"]},
          { icon: "Server", color: "green", title: "Back-End", listTech: ["Node.js", "Java", "Python", "NestJS"]},
          { icon: "Laptop", color: "purple", title: "Front-End / Mobile", listTech: ["React", "React Native", "Flutter", "TypeScript"]}
        ]
      }
    ],
    process: [
      { number: 1, title: "Reunión Inicial", description: "Analizamos tus objetivos, procesos y requerimientos técnicos. Definimos el problema que el software resolverá."},
      { number: 2, title: "Planificación", description: "Diseñamos la arquitectura de software y establecemos entregables claros.", points: ["Arquitectura del sistema","Definición de módulos","Plazos de entrega"]},
      { number: 3, title: "Diseño UI/UX", description: "Creamos prototipos y wireframes para validar la experiencia de usuario.", points: ["Wireframes","Prototipos","Feedback con el cliente"]},
      { number: 4, title: "Desarrollo", description: "Construimos el software aplicando buenas prácticas de código y metodologías ágiles.", points: ["Metodología ágil","Integraciones con APIs","Código escalable"]},
      { number: 5, title: "Pruebas", description: "Validamos funcionalidad, rendimiento y seguridad antes de la entrega.", points: ["Pruebas unitarias","Pruebas de carga","Auditorías de seguridad"]},
      { number: 6, title: "Entrega & Soporte", description: "Implementamos el software en tu infraestructura y damos soporte continuo."}
    ],
    faq: [
      { id: 1, question: "¿Cuánto tiempo tarda en desarrollarse un software?", answer: "Depende del alcance y la complejidad. Proyectos pequeños pueden tomar 1-2 meses, mientras que sistemas grandes requieren varios meses con entregas parciales."},
      { id: 2, question: "¿El software funcionará en móviles y escritorio?", answer: "Sí, desarrollamos soluciones multiplataforma que funcionan en navegadores, apps móviles y escritorios."},
      { id: 3, question: "¿Puedo escalar el software en el futuro?", answer: "Sí, diseñamos arquitecturas escalables que permiten agregar nuevas funciones o integraciones."},
      { id: 4, question: "¿Incluye medidas de seguridad?", answer: "Sí, implementamos cifrado, control de accesos y auditorías para proteger tus datos."},
      { id: 5, question: "¿Ofrecen soporte después de la entrega?", answer: "Sí, contamos con planes de mantenimiento y soporte técnico continuo."}
    ]
  }

};
