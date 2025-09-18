"use client";
import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Briefcase, User, Sparkles } from "lucide-react";

interface PortfolioHeroProps {
  project: Project;
}

// Animación general para el grid (controla el delay de los hijos)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Animación de cada div (h3 + p)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animación para la imagen
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function PortfolioHero({ project }: PortfolioHeroProps) {
  const projectDetails = [
    {
      icon: Briefcase,
      label: "Proyecto",
      value: project.projectName,
    },
    {
      icon: User,
      label: "Cliente",
      value: project.company,
    },
    {
      icon: Calendar,
      label: "Servicio",
      value: project.service,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: project.location,
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 py-20 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorHover5 font-semibold">Proyecto Destacado</span>
          </motion.div>

          {/* Título principal con animación letra por letra */}
          <motion.h1
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText(project.title).map((letter, idx) => {
              // Destacar ciertas palabras con gradiente
              const isHighlighted = idx > project.title.length * 0.6; // Últimas palabras
              return (
                <motion.span 
                  key={idx} 
                  className={isHighlighted ? "text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text" : "text-white"}
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorHover5 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explora los detalles de esta solución digital y cómo transformamos la visión del cliente en realidad
          </motion.p>
        </div>

        {/* Grid de detalles mejorado */}
        <motion.div
          className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projectDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-colorHover5/10 to-colorHover6/10 backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40 transition-all duration-300 text-center hover:shadow-[0_0_25px_rgba(103,61,230,0.15)]"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              
              {/* Icono con gradiente */}
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Etiqueta */}
              <h3 className="text-sm font-bold text-colorHover5 uppercase tracking-wider mb-2">
                {detail.label}
              </h3>
              
              {/* Valor */}
              <p className="text-lg md-tablet:text-xl font-semibold text-white transition-colors duration-300">
                {detail.value}
              </p>

              {/* Efecto decorativo */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Imagen principal mejorada */}
        <motion.div
          className="relative flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="relative group max-w-4xl">
            
            {/* Contenedor de imagen con efectos */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(103,61,230,0.3)] group-hover:shadow-[0_0_60px_rgba(103,61,230,0.4)] transition-all duration-500">
              <Image
                src={project.imageHero}
                alt={project.projectName}
                width={900}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Efectos decorativos alrededor de la imagen */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 opacity-20"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 w-8 h-8 rounded-full bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 opacity-30"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            ></motion.div>

            {/* Badge de estado */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-green-500/90 backdrop-blur-sm text-white font-semibold text-sm shadow-lg">
              Proyecto Completado
            </div>
          </div>
        </motion.div>

        {/* Call to action adicional */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20">
            <span className="text-colorHover5 font-medium">
              Desplázate para ver más detalles del proyecto
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}