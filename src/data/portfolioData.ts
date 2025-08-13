// src/data/portfolioData.ts
// Este archivo centraliza los datos para el portafolio.

// 1. Definimos la interfaz del proyecto para asegurar la tipificación de los datos.
export interface Project {
  id: number;
  title: string;
  country: string;
  service: string;
  technologies: string[];
}

// 2. Aquí están los datos de prueba de los proyectos.
// Esto simula la información que obtendrías de una base de datos o API.
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
];

// 3. Generamos dinámicamente las opciones de filtro a partir de los datos.
// Ahora usamos Array.from() para convertir explícitamente el Set en un array.
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
