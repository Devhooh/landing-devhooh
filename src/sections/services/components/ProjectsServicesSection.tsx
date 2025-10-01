"use client";

import Link from "next/link";
import ProjectsServicesCard from "./ProjectsServicesCard";
import { projectsData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ArrowRight, Folder, Sparkles, Award } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsServicesSection() {
  const limit: number = 6;
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="relative py-20 bg-colorFondo overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 md-tablet:px-8">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Folder className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Portafolio destacado</span>
          </motion.div>

          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Los proyectos que hemos
            <br />
            hecho realidad
          </motion.h2>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Estos son algunos de los proyectos donde aplicamos{" "}
            <span className="font-bold text-colorPrimario5">
              nuestra experiencia y tecnología
            </span>{" "}
            para crear soluciones digitales que transforman negocios.
          </motion.p>
        </div>

        {/* Estadísticas rápidas */}
        <motion.ul
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li className="text-center p-6 rounded-2xl bg- bg-colorHover4 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario5 mb-2">
              {projectsData.length}+
            </div>
            <p className="text-sm text-colorPrimario1/70">Proyectos completados</p>
          </li>
          
          <li className="text-center p-6 rounded-2xl bg- bg-colorHover4 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorSecundario1 mb-2">100%</div>
            <p className="text-sm text-colorPrimario1/70">Clientes satisfechos</p>
          </li>
          
          <li className="text-center p-6 rounded-2xl bg- bg-colorHover4 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario7 mb-2">5+</div>
            <p className="text-sm text-colorPrimario1/70">Años de experiencia</p>
          </li>
        </motion.ul>

        {/* Grid de proyectos mejorado */}
        <motion.div
          className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Badge de proyecto destacado para algunos */}
              {index < 3 && (
                <div className="absolute -top-3 -right-3 z-20 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center shadow-lg">
                  <Award className="w-4 h-4 text-white" />
                </div>
              )}
              
                <ProjectsServicesCard projects={project} />
            </div>
          ))}
        </motion.div>

        {/* Sección de call to action mejorada */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {/* Texto motivacional */}
          <div className="mb-8">
            <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario2 mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-colorPrimario1/70 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad de crear algo extraordinario. Tu idea podría ser la siguiente.
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col md-tablet:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <motion.button
                className="group relative overflow-hidden px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  Ver todos los proyectos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-colorPrimario5 text-colorPrimario5 hover:bg-colorPrimario5 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar mi proyecto
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decoración final */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3}}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-colorPrimario5" />
            </motion.div>
            
            <span className="text-colorPrimario1/60 font-medium">
              Transformando ideas en realidad digital
            </span>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-colorSecundario1" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}