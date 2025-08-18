export interface Project {
  id: number;
  link: string;
  company: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
  subtitle: string;
}

export const projectsData: Project[] = [
  {
  id: 1,
  link: "#",    
  company: "TechNova",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Marketplace Global",
  location: "México",
  service: "Desarrollo Web",
  technologies: ["React", "Node.js", "MongoDB"],
  subtitle: "Escalamos la operación a más de 50,000 usuarios activos.",
  description: "Creamos un marketplace robusto con integración de pagos y gestión de inventarios en tiempo real, enfocado en la escalabilidad y experiencia de compra."
},
{
  id: 2,
  link: "#",    
  company: "InnoSoft",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "App de Control de Inventario",
  location: "Colombia",
  service: "Desarrollo Móvil",
  technologies: ["Kotlin", "Firebase"],
  subtitle: "Redujimos un 60% los errores de inventario en 4 meses.",
  description: "Diseñamos una app móvil que permite escanear productos, sincronizar datos en la nube y optimizar la logística de almacenes."
},
{
  id: 3,
  link: "#",    
  company: "EduNext",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Plataforma de E-learning Interactiva",
  location: "Chile",
  service: "Diseño UX/UI",
  technologies: ["Figma", "Next.js"],
  subtitle: "Mejoramos la retención estudiantil en un 35%.",
  description: "Creamos una experiencia de usuario atractiva y fluida en una plataforma educativa con clases en vivo y evaluaciones dinámicas."
},
{
  id: 4,
  link: "#",    
  company: "ReservaPlus",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Sistema de Reservas Online",
  location: "México",
  service: "Desarrollo Web",
  technologies: ["Laravel", "MySQL"],
  subtitle: "Automatizamos más de 5,000 citas mensuales.",
  description: "Implementamos un sistema intuitivo de reservas con recordatorios automáticos y sincronización de calendarios."
},
{
  id: 5,
  link: "#",    
  company: "FitLife",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Aplicación de Fitness Personalizada",
  location: "Perú",
  service: "Desarrollo Móvil",
  technologies: ["React Native", "Express"],
  subtitle: "Más de 20,000 descargas en los primeros 6 meses.",
  description: "Construimos una app con rutinas personalizadas, integración con wearables y seguimiento de progreso en tiempo real."
},
{
  id: 6,
  link: "#",    
  company: "ContaPro",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Software de Contabilidad en la Nube",
  location: "Colombia",
  service: "Desarrollo Web",
  technologies: ["Python", "Django", "PostgreSQL"],
  subtitle: "Ahorro del 40% en gestión administrativa.",
  description: "Creamos un sistema contable seguro y flexible, con generación de reportes financieros y cumplimiento tributario automático."
},
{
  id: 7,
  link: "#",    
  company: "MediLink",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Plataforma de Telemedicina",
  location: "Argentina",
  service: "Desarrollo Web",
  technologies: ["Angular", "Spring Boot"],
  subtitle: "Más de 15,000 consultas médicas realizadas en línea.",
  description: "Desarrollamos una solución de telemedicina con videollamadas seguras, historial clínico digital y recetas electrónicas."
},
{
  id: 8,
  link: "#",    
  company: "EcoTrack",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Sistema de Monitoreo Ambiental",
  location: "Perú",
  service: "Desarrollo Móvil",
  technologies: ["Flutter", "Firebase"],
  subtitle: "Optimización de reportes ambientales en tiempo real.",
  description: "Creamos una app que recopila y analiza datos de sensores ambientales para mejorar la sostenibilidad de empresas."
},
{
  id: 9,
  link: "#",    
  company: "LogistiCore",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "Plataforma de Logística Inteligente",
  location: "Colombia",
  service: "Desarrollo Web",
  technologies: ["Ruby on Rails", "PostgreSQL"],
  subtitle: "Reducimos los tiempos de entrega en un 25%.",
  description: "Construimos una plataforma para optimizar rutas de transporte, monitorear flotas y gestionar entregas en tiempo real."
},
{
  id: 10,
  link: "#",
  company: "ShopHub",
  imageSrc: "/assets/images/slide1.png",
  ProjectName: "E-commerce Multimarca",
  location: "México",
  service: "Desarrollo Web",
  technologies: ["Next.js", "Node.js", "Stripe"],
  subtitle: "Ventas incrementadas en un 70% en el primer año.",
  description: "Creamos un e-commerce ágil con pasarela de pagos segura y gestión de productos a gran escala."
}
,
  {
    id: 11,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "App de Gestión de Inventario",
    location: "Colombia",
    service: "Desarrollo Móvil",
    technologies: ["Swift", "Firebase"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Creamos una aplicación móvil robusta para gestionar el inventario en tiempo real, permitiendo a los usuarios escanear productos y actualizar existencias de manera eficiente."
  },
  {
    id: 12,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Plataforma de E-learning",
    location: "Chile",
    service: "Diseño UX/UI",
    technologies: ["Figma", "Sketch"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Diseñamos una interfaz intuitiva y atractiva para una plataforma de aprendizaje en línea, centrándonos en la facilidad de navegación y la retención del usuario."
  },
  {
    id: 13,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Sistema de Reservas",
    location: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 14,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Aplicación de Fitness",
    location: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 15,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Software de Contabilidad",
    location: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },
  {
    id: 16,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Sistema de Reservas",
    location: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 17,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Aplicación de Fitness",
    location: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 18,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Software de Contabilidad",
    location: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },

];

const allProjects = ["Todos", ...projectsData.map((p) => p.ProjectName)];
const allCountries = ["Todos", ...Array.from(new Set(projectsData.map((p) => p.location)))];
const allServices = ["Todos", ...Array.from(new Set(projectsData.map((p) => p.service)))];
const allTechnologies = [
  "Todos",
  ...Array.from(new Set(projectsData.flatMap((p) => p.technologies))),
];

export const filterOptions = {
  projects: allProjects,
  countries: allCountries,
  services: allServices,
  technologies: allTechnologies,
};
