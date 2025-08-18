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
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Proyecto de E-commerce",
    location: "México",
    service: "Desarrollo Web",
    technologies: ["React", "Node.js", "MongoDB"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Desarrollamos una plataforma de comercio electrónico escalable y optimizada para la conversión, con un sistema de pagos integrado y una experiencia de usuario fluida.",
  },
  {
    id: 2,
    link: "#",    
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "App de Gestión de Inventario",
    location: "Colombia",
    service: "Desarrollo Móvil",
    technologies: ["Swift", "Firebase"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Creamos una aplicación móvil robusta para gestionar el inventario en tiempo real, permitiendo a los usuarios escanear productos y actualizar existencias de manera eficiente.",
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    link: "#",
    company: "devhooh",
    imageSrc: "/assets/images/slide1.png",
    ProjectName: "Proyecto de E-commerce",
    location: "México",
    service: "Desarrollo Web",
    technologies: ["React", "Node.js", "MongoDB"],
    subtitle: "Aumentamos un 45% sus ventas en 3 meses.",
    description: "Desarrollamos una plataforma de comercio electrónico escalable y optimizada para la conversión, con un sistema de pagos integrado y una experiencia de usuario fluida."
  },
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
