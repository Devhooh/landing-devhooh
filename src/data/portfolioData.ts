export interface Project {
  id: number;
  title: string;
  country: string;
  service: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Proyecto de E-commerce",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "App de Gestión de Inventario",
    country: "Colombia",
    service: "Desarrollo Móvil",
    technologies: ["Swift", "Firebase"],
  },
  {
    id: 3,
    title: "Plataforma de E-learning",
    country: "Chile",
    service: "Diseño UX/UI",
    technologies: ["Figma", "Sketch"],
  },
  {
    id: 4,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
  },
  {
    id: 5,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
  },
  {
    id: 6,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
  },
  {
    id: 7,
    title: "Sistema de Reservas",
    country: "México",
    service: "Desarrollo Web",
    technologies: ["PHP", "Laravel"],
  },
  {
    id: 8,
    title: "Aplicación de Fitness",
    country: "Perú",
    service: "Desarrollo Móvil",
    technologies: ["React Native", "Express"],
  },
  {
    id: 9,
    title: "Software de Contabilidad",
    country: "Colombia",
    service: "Desarrollo Web",
    technologies: ["Python", "Django"],
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
