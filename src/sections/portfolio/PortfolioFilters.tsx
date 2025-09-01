"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, Variants } from "framer-motion";

import PortfolioCard from "@/sections/portfolio/PortfolioCard";
import { Project, projectsData } from "@/data/portfolioData";
import { CustomSelect } from "@/sections/portfolio/CustomSelect";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Variantes para contenedor y tarjetas
const gridContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // delay entre cards
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variantes para animación escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // tiempo entre hijos
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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

  const uniqueProjects = ["Todos", ...Array.from(new Set(projectsData.map(p => p.ProjectName)))];
  const uniqueCountries = ["Todos", ...Array.from(new Set(projectsData.map(p => p.location)))];
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
        <motion.h2
          initial={{ opacity: 0, y: 50 }}     // empieza oculto y abajo
          whileInView={{ opacity: 1, y: 0 }}  // aparece cuando entra en viewport
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // solo una vez, se dispara al 30% visible
          className="text-2xl md-tablet:text-3xl font-extrabold text-blue-950"
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
      

      <motion.div
        className="bg-fuchsia-900 rounded-3xl flex flex-col md-tablet:flex-row gap-4 items-center mb-6 p-6 mx-2 md-tablet:mx-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="w-full">
          <CustomSelect label="Proyectos" options={uniqueProjects} value={selectedProject} onChange={setSelectedProject} />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full">
          <CustomSelect label="País" options={uniqueCountries} value={selectedCountry} onChange={setSelectedCountry} />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full">
          <CustomSelect label="Servicio" options={uniqueServices} value={selectedService} onChange={setSelectedService} />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full">
          <CustomSelect label="Tecnologías" options={uniqueTechnologies} value={selectedTechnology} onChange={setSelectedTechnology} />
        </motion.div>
      </motion.div>


      {/* Versión para PC: Grid 3x3. Oculta en movil/tablet y visible a partir de table-lg */}
      <motion.div
        className="hidden table-lg:grid grid-cols-1 mx-2 md-tablet:mx-8 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8 mt-8"
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={cardItem}>
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      
      {/* Versión para Tablet y Móvil: Deslizadores. Visible en movil/tablet y oculta a partir de table-lg */}
      <div className="block table-lg:hidden mt-8">
        {chunkedProjects.map((chunk, index) => (
          <motion.div
            key={index}
            className="mb-8"
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                550: { slidesPerView: 2, spaceBetween: 20 },
              }}
            >
              {chunk.map((project) => (
                <SwiperSlide key={project.id} className="p-2">
                  <motion.div variants={cardItem}>
                    <PortfolioCard project={project} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </div>
    </div>
  );
}