"use client";

import { useState } from "react";
import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { projectsData } from "@/data/portfolioData";
import { CustomSelect } from "@/sections/portfolio/CustomSelect";

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

  const uniqueProjects = ["Todos", ...Array.from(new Set(projectsData.map(p => p.title)))];
  const uniqueCountries = ["Todos", ...Array.from(new Set(projectsData.map(p => p.country)))];
  const uniqueServices = ["Todos", ...Array.from(new Set(projectsData.map(p => p.service)))];
  const uniqueTechnologies = ["Todos", ...Array.from(new Set(projectsData.flatMap(p => p.technologies)))];


  return (
    <div className="bg-white p-6 shadow-md rounded-lg mx-auto max-w-7xl">
      
      <div className="mb-6 mx-2 md-tablet:mx-8">
        <h2 className="text-2xl md-tablet:text-3xl font-extrabold text-gray-800">
          Vea cómo Devhoo ayudo
        </h2>
        <p className="text-gray-600 mt-2 text-lg md-tablet:text-xl">
          a sus clientes a lograr su visión de innovación digital.
        </p>
      </div>
      
      <div className="bg-gray-200 rounded-3xl flex flex-col md-tablet:flex-row gap-4 items-center mb-6 p-6 mx-2 md-tablet:mx-8">
        {/* Dropdown de Proyectos */}
        <CustomSelect
          label="Proyectos"
          options={uniqueProjects}
          value={selectedProject}
          onChange={setSelectedProject}
        />

        {/* Dropdown de País */}
        <CustomSelect
          label="País"
          options={uniqueCountries}
          value={selectedCountry}
          onChange={setSelectedCountry}
        />

        {/* Dropdown de Servicio */}
        <CustomSelect
          label="Servicio"
          options={uniqueServices}
          value={selectedService}
          onChange={setSelectedService}
        />
        
        {/* Dropdown de Tecnologías */}
        <CustomSelect
          label="Tecnologías"
          options={uniqueTechnologies}
          value={selectedTechnology}
          onChange={setSelectedTechnology}
        />
      </div>

      {/* Grid para mostrar las tarjetas filtradas */}
      <div className="mt-8 grid grid-cols-1 mx-2 md-tablet:mx-8 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

