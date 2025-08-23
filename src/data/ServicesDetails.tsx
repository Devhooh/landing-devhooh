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
};
