"use client";

import { motion, Variants } from "framer-motion";
import { CustomSelect } from "@/sections/portfolio/CustomSelect";
import { Project } from "@/data/portfolioData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface FiltersProps {
  projectsData: Project[];
  selectedProject: string;
  setSelectedProject: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedService: string;
  setSelectedService: (value: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (value: string) => void;
}

export default function PortfolioFiltersBar({
  projectsData,
  selectedProject,
  setSelectedProject,
  selectedCountry,
  setSelectedCountry,
  selectedService,
  setSelectedService,
  selectedTechnology,
  setSelectedTechnology,
}: FiltersProps) {
  const uniqueProjects = ["Todos", ...Array.from(new Set(projectsData.map(p => p.ProjectName)))];
  const uniqueCountries = ["Todos", ...Array.from(new Set(projectsData.map(p => p.location)))];
  const uniqueServices = ["Todos", ...Array.from(new Set(projectsData.map(p => p.service)))];
  const uniqueTechnologies = ["Todos", ...Array.from(new Set(projectsData.flatMap(p => p.technologies)))];

  return (
    <motion.div
      className="bg-colorSecundario4 shadow-2xl rounded-xl flex flex-col tablet-md:flex-row gap-4 items-center mb-6 p-6 mx-2 md-tablet:mx-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="w-full text-white">
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
  );
}
