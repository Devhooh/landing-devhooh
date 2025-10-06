"use client";

import { useState } from "react";
import { motion} from "framer-motion";
import { projectsData} from "@/data/portfolioData";

import PortfolioFiltersBar from "./PortfolioFiltersBar";
import PortfolioCardsGrid from "./PortfolioCardsGrid";
import { PartyPopper, Filter, Folder, Sparkles } from "lucide-react";

export default function PortfolioFilters() {
  const [selectedProject, setSelectedProject] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const [selectedService, setSelectedService] = useState("Todos");
  const [selectedTechnology, setSelectedTechnology] = useState("Todos");

  const selectedFilterKey = `${selectedProject}-${selectedCountry}-${selectedService}-${selectedTechnology}`;

  const filteredProjects = projectsData.filter((project) => {
    const projectMatch = selectedProject === "Todos" || project.ProjectName === selectedProject;
    const countryMatch = selectedCountry === "Todos" || project.location === selectedCountry;
    const serviceMatch = selectedService === "Todos" || project.service === selectedService;
    const technologyMatch = selectedTechnology === "Todos" || project.technologies.includes(selectedTechnology);
    return projectMatch && countryMatch && serviceMatch && technologyMatch;
  });

  return (
    <div className="relative bg-white w-full max-w-[1550px] mx-auto overflow-hidden">
  
  {/* Sección del título mejorada */}
  <section className="relative z-10 pb-20 pt-10 mx-4 md-tablet:mx-8">
    
    {/* Badge superior */}
    <motion.div
      className="flex justify-center mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
        <Folder className="w-5 h-5 text-colorPrimario5" />
        <span className="text-colorPrimario5 font-semibold">Casos de éxito</span>
      </div>
    </motion.div>

    {/* Contenedor principal con glassmorphism */}
    <div className="relative p-4 md-tablet:p-10 rounded-3xl bg-gradient-to-br from-colorHover3 to-colorHover5 backdrop-blur-sm border border-white/20 shadow-[0_0_40px_rgba(103,61,230,0.1)]">
      
      {/* Efectos decorativos del contenedor */}
      <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30"></div>
      <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>

      <div className="text-center mb-12">
        
        {/* Título con animación letra por letra */}
        <motion.h2
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Vea cómo {""}
          <span className="text-colorPrimario5">
            Devhooh {""}
          </span>
          ayudó
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          a sus clientes a lograr su visión de{" "}
          <span className="font-bold text-colorPrimario5">
            innovación digital
          </span>{" "}
          y transformar sus ideas en soluciones exitosas.
        </motion.p>

        {/* Estadísticas rápidas */}
        <motion.ul
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <li className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30">
            <div className="text-2xl font-bold text-colorPrimario5 mb-1">20+</div>
            <p className="text-sm text-colorPrimario1/70">Proyectos exitosos</p>
          </li>
          
          <li className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30">
            <div className="text-2xl font-bold text-colorPrimario5 mb-1">15+</div>
            <p className="text-sm text-colorPrimario1/70">Países atendidos</p>
          </li>
          
          <li className="text-center p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30">
            <div className="text-2xl font-bold text-colorPrimario5 mb-1">98%</div>
            <p className="text-sm text-colorPrimario1/70">Satisfacción</p>
          </li>
        </motion.ul>
      </div>

      {/* Barra de filtros mejorada */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3}}
        viewport={{ once: true }}
      >
        {/* Encabezado de filtros */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
            <Filter className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-bold text-colorPrimario2">
            Filtrar proyectos
          </h3>
          <div className="flex-grow h-px bg-gradient-to-r from-colorPrimario5/20 to-transparent"></div>
        </div>

        {/* Contenedor de filtros con efectos */}
        <div className="relative rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20">
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
        </div>
      </motion.div>

      {/* Indicador de resultados */}
      <motion.div
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-colorSecundario1/10 border border-colorSecundario1/20">
          <div className="w-2 h-2 rounded-full bg-colorSecundario1 animate-pulse"></div>
          <span className="text-colorSecundario1 font-semibold text-base md-tablet:text-xl">
            Mostrando {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        </div>
      </motion.div>
    </div>
  </section>

  {/* Cards filtradas mejoradas */}
  <motion.div
      className="relative z-10 px-4 md-tablet:px-8 pb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      viewport={{ once: true }}
      key={selectedFilterKey}
    >
      <PortfolioCardsGrid filteredProjects={filteredProjects} />
    </motion.div>

  {/* Call to action final */}
  <motion.div
    className="relative z-10 text-center p-8"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
      <Sparkles className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
      <span className="text-colorPrimario5 font-semibold text-lg">
        ¿Tu proyecto será el próximo caso de éxito?
      </span>
      <PartyPopper className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
    </div>
  </motion.div>
</div>
  );
}

