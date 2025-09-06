"use client";

import { useState } from "react";
import { motion} from "framer-motion";
import { projectsData} from "@/data/portfolioData";

import PortfolioFiltersBar from "./PortfolioFiltersBar";
import PortfolioCardsGrid from "./PortfolioCardsGrid";

export default function PortfolioFilters() {
  const [selectedProject, setSelectedProject] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const [selectedService, setSelectedService] = useState("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState("Todos");

  const filteredProjects = projectsData.filter((project) => {
    const projectMatch = selectedProject === "Todos" || project.ProjectName === selectedProject;
    const countryMatch = selectedCountry === "Todos" || project.location === selectedCountry;
    const serviceMatch = selectedService === "Todos" || project.service === selectedService;
    const technologyMatch = selectedTechnology === "Todos" || project.technologies.includes(selectedTechnology);
    return projectMatch && countryMatch && serviceMatch && technologyMatch;
  });

  return (
    <div className="bg-white w-full p-6 mx-auto max-w-[1550px]">
      
      {/* Título */}
      <section className="bg-colorHover5 py-5 my-10 rounded-2xl">
        <div className="mb-6 mx-2 md-tablet:mx-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-2xl md-tablet:text-3xl font-extrabold text-colorPrimario2"
          >
            Vea cómo Devhooh ayudó
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-600 mt-2 text-lg md-tablet:text-xl"
          >
            a sus clientes a lograr su visión de innovación digital.
          </motion.p>
        </div>

        {/* Barra de filtros */}
        <PortfolioFiltersBar
          projectsData={projectsData}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />
      </section>

      {/* Cards filtradas */}
      <PortfolioCardsGrid filteredProjects={filteredProjects} />
    </div>
  );
}

