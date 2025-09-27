export interface Project {
  id: number;
  slug: string;
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
  slug: "marketplace-global",    
  company: "TechNova",
  imageSrc: "/assets/images/portfolio1.jpg",
  ProjectName: "Marketplace Global",
  location: "México",
  service: "Desarrollo Web",
  technologies: ["React", "Node.js", "MongoDB"],
  subtitle: "Escalamos la operación a más de 50,000 usuarios activos.",
  description: "Creamos un marketplace robusto con integración de pagos y gestión de inventarios en tiempo real, enfocado en la escalabilidad y experiencia de compra."
},
{
  id: 2,
  slug: "control-inventario",    
  company: "InnoSoft",
  imageSrc: "/assets/images/portfolio2.jpg",
  ProjectName: "App de Control de Inventario",
  location: "Colombia",
  service: "Desarrollo Móvil",
  technologies: ["Kotlin", "Firebase"],
  subtitle: "Redujimos un 60% los errores de inventario en 4 meses.",
  description: "Diseñamos una app móvil que permite escanear productos, sincronizar datos en la nube y optimizar la logística de almacenes."
},
{
  id: 3,
  slug: "learning-interactiva",    
  company: "EduNext",
  imageSrc: "/assets/images/portfolio3.jpg",
  ProjectName: "Plataforma de E-learning Interactiva",
  location: "Chile",
  service: "Diseño UX/UI",
  technologies: ["Figma", "Next.js"],
  subtitle: "Mejoramos la retención estudiantil en un 35%.",
  description: "Creamos una experiencia de usuario atractiva y fluida en una plataforma educativa con clases en vivo y evaluaciones dinámicas."
},
{
  id: 4,
  slug: "reservas-online",    
  company: "ReservaPlus",
  imageSrc: "/assets/images/portfolio4.jpg",
  ProjectName: "Sistema de Reservas Online",
  location: "México",
  service: "Desarrollo Web",
  technologies: ["Typescript", "MySQL"],
  subtitle: "Automatizamos más de 5,000 citas mensuales.",
  description: "Implementamos un sistema intuitivo de reservas con recordatorios automáticos y sincronización de calendarios."
},
{
  id: 5,
  slug: "fitness-custom",    
  company: "FitLife",
  imageSrc: "/assets/images/portfolio5.jpg",
  ProjectName: "Aplicación de Fitness Personalizada",
  location: "Perú",
  service: "Desarrollo Móvil",
  technologies: ["React Native", "Express"],
  subtitle: "Más de 20,000 descargas en los primeros 6 meses.",
  description: "Construimos una app con rutinas personalizadas, integración con wearables y seguimiento de progreso en tiempo real."
},
{
  id: 6,
  slug: "contabilidad",    
  company: "ContaPro",
  imageSrc: "/assets/images/portfolio6.jpg",
  ProjectName: "Software de Contabilidad en la Nube",
  location: "Colombia",
  service: "Desarrollo Web",
  technologies: ["Python", "Django", "PostgreSQL"],
  subtitle: "Ahorro del 40% en gestión administrativa.",
  description: "Creamos un sistema contable seguro y flexible, con generación de reportes financieros y cumplimiento tributario automático."
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
