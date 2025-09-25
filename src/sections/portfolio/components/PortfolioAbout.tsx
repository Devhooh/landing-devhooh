"use client";
import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";
import { FileText, Building2, Target, Users } from "lucide-react";

interface ProjectAboutProps {
  project: Project;
}

// Variantes de animación mejoradas
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50, y: 30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50, y: 30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: 3 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" } 
  },
};

export default function PortfolioAbout({ project }: ProjectAboutProps) {

  return (
    <section className="relative w-full bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 py-20 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md-tablet:px-8">
        
        {/* Título de sección */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Conoce más del {""}
            <span className="text-colorPrimario5">
              proyecto
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Descubre los detalles detrás de esta solución y la empresa que confió en nosotros
          </motion.p>
        </div>

        {/* Sobre el proyecto */}
        <div className="flex flex-col table-lg:flex-row items-center gap-12 mb-24">
          
          {/* Contenido de texto */}
          <motion.div
            className="table-lg:w-1/2 relative"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative p-8 md-tablet:p-10 rounded-3xl bg-white backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(103,61,230,0.1)] hover:shadow-[0_0_40px_rgba(103,61,230,0.15)] transition-all duration-300 group">
              
              {/* Efectos decorativos */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Badge con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                    Sobre el proyecto
                  </h3>
                  <p className="text-sm text-colorPrimario5 font-semibold">Detalles y objetivos</p>
                </div>
              </div>

              <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed">
                {project.aboutProject.description}
              </p>

              {/* Indicadores adicionales */}
              <div className="flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorPrimario5/10 border border-colorPrimario5/20 w-fit">
                <Target className="w-4 h-4 text-colorPrimario5" />
                <span className="text-sm font-semibold text-colorPrimario5">Objetivos cumplidos</span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Imagen del proyecto */}
          <motion.div
            className="table-lg:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(103,61,230,0.2)] group-hover:shadow-[0_0_50px_rgba(103,61,230,0.3)] transition-all duration-500">
                <Image
                  src={project.aboutProject.image}
                  alt={`Sobre el proyecto ${project.projectName}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="animate-pulse absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 opacity-20"
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Sobre la compañía */}
        <div className="flex flex-col table-lg:flex-row-reverse items-center gap-12">
          
          {/* Contenido de texto */}
          <motion.div
            className="table-lg:w-1/2 relative"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative p-8 md-tablet:p-10 rounded-3xl bg-white backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(103,61,230,0.1)] hover:shadow-[0_0_40px_rgba(103,61,230,0.15)] transition-all duration-300 group">
              
              {/* Efectos decorativos */}
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Badge con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 flex items-center justify-center shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario2 group-hover:text-colorSecundario1 transition-colors duration-300">
                    Sobre la compañía
                  </h3>
                  <p className="text-sm text-colorSecundario1 font-semibold">Nuestro cliente</p>
                </div>
              </div>

              <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed">
                {project.aboutCompany.description}
              </p>

              {/* Indicadores adicionales */}
              <div className="flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorSecundario1/10 border border-colorSecundario1/20 w-fit">
                <Users className="w-4 h-4 text-colorSecundario1" />
                <span className="text-sm font-semibold text-colorSecundario1">Cliente satisfecho</span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Imagen de la compañía */}
          <motion.div
            className="table-lg:w-1/2 relative flex justify-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(103,61,230,0.2)] group-hover:shadow-[0_0_50px_rgba(103,61,230,0.3)] transition-all duration-500 max-w-sm">
                <Image
                  src={project.aboutCompany.image}
                  alt={`Sobre la compañía ${project.company}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="animate-pulse absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 opacity-30"
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
            <span className="text-colorPrimario5 font-semibold text-lg">
              ¿Te interesa un proyecto similar?
            </span>
            <div className="w-2 h-2 rounded-full bg-colorSecundario1 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}