"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { Project, projectsData } from "@/data/portfolioData";
import { CustomSelect } from "@/sections/portfolio/CustomSelect";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  // Función para agrupar proyectos en arrays de 3
  const chunkArray = (array: Project[], size: number) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };
  
  const chunkedProjects = chunkArray(filteredProjects, 3);

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
        <CustomSelect label="Proyectos" options={uniqueProjects} value={selectedProject} onChange={setSelectedProject} />
        <CustomSelect label="País" options={uniqueCountries} value={selectedCountry} onChange={setSelectedCountry} />
        <CustomSelect label="Servicio" options={uniqueServices} value={selectedService} onChange={setSelectedService} />
        <CustomSelect label="Tecnologías" options={uniqueTechnologies} value={selectedTechnology} onChange={setSelectedTechnology} />
      </div>

      {/* Versión para PC: Grid 3x3. Oculta en movil/tablet y visible a partir de table-lg */}
      <div className="hidden table-lg:grid grid-cols-1 mx-2 md-tablet:mx-8 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8 mt-8">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>

      {/* Versión para Tablet y Móvil: Deslizadores. Visible en movil/tablet y oculta a partir de table-lg */}
      <div className="block table-lg:hidden mt-8">
        {chunkedProjects.map((chunk, index) => (
          <div key={index} className="mb-8">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
              slidesPerView={1}
              spaceBetween={20} 
              breakpoints={{
                // Breakpoint para tablet (550px)
                550: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {chunk.map((project) => (
                <SwiperSlide key={project.id} className="p-2">
                  <PortfolioCard project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
}