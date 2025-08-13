export interface Project {
  id: number;
  title: string;
  country: string;
  service: string;
  technologies: string[];
  description: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Proyecto de E-commerce",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["React", "Node.js", "MongoDB"],
    description: "Desarrollamos una plataforma de comercio electrónico escalable y optimizada para la conversión, con un sistema de pagos integrado y una experiencia de usuario fluida."
  },
  {
    id: 2,
    title: "App de Gestión de Inventario",
    country: "Colombia",
    service: "Desarrollo Móvil",
    technologies: ["Swift", "Firebase"],
    description: "Creamos una aplicación móvil robusta para gestionar el inventario en tiempo real, permitiendo a los usuarios escanear productos y actualizar existencias de manera eficiente."
  },
  {
    id: 3,
    title: "Plataforma de E-learning",
    country: "Chile",
    service: "Diseño UX/UI",
    technologies: ["Figma", "Sketch"],
    description: "Diseñamos una interfaz intuitiva y atractiva para una plataforma de aprendizaje en línea, centrándonos en la facilidad de navegación y la retención del usuario."
  },
  {
    id: 4,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 5,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 6,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },
  {
    id: 7,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 8,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 9,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },
  {
    id: 10,
    title: "Proyecto de E-commerce",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["React", "Node.js", "MongoDB"],
    description: "Desarrollamos una plataforma de comercio electrónico escalable y optimizada para la conversión, con un sistema de pagos integrado y una experiencia de usuario fluida."
  },
  {
    id: 11,
    title: "App de Gestión de Inventario",
    country: "Colombia",
    service: "Desarrollo Móvil",
    technologies: ["Swift", "Firebase"],
    description: "Creamos una aplicación móvil robusta para gestionar el inventario en tiempo real, permitiendo a los usuarios escanear productos y actualizar existencias de manera eficiente."
  },
  {
    id: 12,
    title: "Plataforma de E-learning",
    country: "Chile",
    service: "Diseño UX/UI",
    technologies: ["Figma", "Sketch"],
    description: "Diseñamos una interfaz intuitiva y atractiva para una plataforma de aprendizaje en línea, centrándonos en la facilidad de navegación y la retención del usuario."
  },
  {
    id: 13,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 14,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 15,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },
  {
    id: 16,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
    description: "Implementamos un sistema de reservas en línea que automatiza la programación de citas y la gestión de calendarios para una empresa de servicios."
  },
  {
    id: 17,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
    description: "Construimos una aplicación de fitness con rutinas personalizadas, seguimiento de progreso y notificaciones para motivar a los usuarios a alcanzar sus metas."
  },
  {
    id: 18,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
    description: "Creamos un software de contabilidad a medida para pequeñas y medianas empresas, facilitando el seguimiento de ingresos, gastos y la generación de reportes."
  },

];

const allProjects = ["Todos", ...projectsData.map((p) => p.title)];
const allCountries = ["Todos", ...Array.from(new Set(projectsData.map((p) => p.country)))];
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
