// // src/components/sections/portfolio/PortfolioFilters.tsx
// "use client";

// import { useState } from "react";
// import PortfolioCard from "@/sections/portfolio/PortfolioCard";
// // Importamos los datos y las opciones de filtro desde el archivo de datos centralizado
// import { projectsData, filterOptions } from "@/data/portfolioData";

// // =====================================================================================================================
// // === COMPONENTE PRINCIPAL ===
// // =====================================================================================================================
// export default function PortfolioFilters() {
//   // Estados para cada filtro seleccionado
//   const [selectedProject, setSelectedProject] = useState("Todos");
//   const [selectedCountry, setSelectedCountry] = useState("Todos");
//   const [selectedService, setSelectedService] = useState("Todos");
//   const [selectedTechnology, setSelectedTechnology] = useState("Todos");

//   // Función para filtrar los proyectos
//   const filteredProjects = projectsData.filter((project) => {
//     // Lógica para filtrar por Proyecto
//     const projectMatch = selectedProject === "Todos" || project.title === selectedProject;

//     // Lógica para filtrar por País
//     const countryMatch = selectedCountry === "Todos" || project.country === selectedCountry;

//     // Lógica para filtrar por Servicio
//     const serviceMatch = selectedService === "Todos" || project.service === selectedService;

//     // Lógica para filtrar por Tecnología
//     const technologyMatch = selectedTechnology === "Todos" || project.technologies.includes(selectedTechnology);

//     return projectMatch && countryMatch && serviceMatch && technologyMatch;
//   });

//   return (
//     <div className="bg-white p-6 shadow-md rounded-lg mx-auto max-w-7xl">
//       <h2 className="text-xl font-bold mb-4 text-gray-800">
//         Vea cómo Devhoo ha ayudado a sus clientes a lograr su visión de innovación digital.
//       </h2>
//       <div className="flex flex-wrap gap-4 items-center">
//         {/* Dropdown de Proyectos */}
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {filterOptions.projects.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
        
//         {/* Dropdown de País */}
//         <select
//           value={selectedCountry}
//           onChange={(e) => setSelectedCountry(e.target.value)}
//           className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {filterOptions.countries.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         {/* Dropdown de Servicio */}
//         <select
//           value={selectedService}
//           onChange={(e) => setSelectedService(e.target.value)}
//           className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {filterOptions.services.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>

//         {/* Dropdown de Tecnologías */}
//         <select
//           value={selectedTechnology}
//           onChange={(e) => setSelectedTechnology(e.target.value)}
//           className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         >
//           {filterOptions.technologies.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Grid para mostrar las tarjetas filtradas */}
//       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredProjects.map((project) => (
//           <PortfolioCard key={project.id} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// }


// src/components/sections/portfolio/PortfolioFilters.tsx
"use client";

import { useState } from "react";
import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { projectsData, filterOptions } from "@/data/portfolioData";

export default function PortfolioFilters() {
  const [selectedProject, setSelectedProject] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const [selectedService, setSelectedService] = useState("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState("Todos");

  const filteredProjects = projectsData.filter((project) => {
    const projectMatch = selectedProject === "Todos" || project.title === selectedProject;
    const countryMatch = selectedCountry === "Todos" || project.country === selectedCountry;
    const serviceMatch = selectedService === "Todos" || project.service === selectedService;
    const technologyMatch = selectedTechnology === "Todos" || project.technologies.includes(selectedTechnology);
    return projectMatch && countryMatch && serviceMatch && technologyMatch;
  });

  return (
    <div className="bg-white p-6 shadow-md rounded-lg mx-auto max-w-7xl">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Vea cómo Devhoo ha ayudado a sus clientes a lograr su visión de innovación digital.
      </h2>
      <div className="flex flex-wrap gap-4 items-center">
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterOptions.projects.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterOptions.countries.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterOptions.services.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
        <select
          value={selectedTechnology}
          onChange={(e) => setSelectedTechnology(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {filterOptions.technologies.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
      </div>

      {/* Aquí es donde está el cambio para el layout responsivo */}
      <div className="mt-8 grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
