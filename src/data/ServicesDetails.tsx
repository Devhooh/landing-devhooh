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
      {
        description: "Nuestros servicios incluyen la pila tecnológica necesaria para crear una aplicación web exitosa y personalizada para su negocio",
        tech: [
          {
            icon: "Database",
            color: "blue",
            title: "Base de datos",
            listTech: ["MySQL", "Postgres", "MongoDB"]
          },
          {
            icon: "Server",
            color: "green",
            title: "Back-End",
            listTech: ["NestJS", "Node.js", "ExpressJS"]
          },
          {
            icon: "Laptop",
            color: "purple",
            title: "Front-End",
            listTech: ["React", "Next.js", "TypeScript", "TailwindCSS"]
          }
        ]
      }
    ]
  },
};
