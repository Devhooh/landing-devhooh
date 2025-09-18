"use client"
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Camera, Grid, ZoomIn } from "lucide-react";

interface ChallengeSectionProps {
  project: Project;
}

// Contenedor de cards (staggerChildren)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Cada imagen
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ImageProject({project}: ChallengeSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Contenedor principal mejorado */}
        <div className="relative p-4 md-tablet:p-12 rounded-3xl bg-colorFondo/70 backdrop-blur-sm border border-colorPrimario5/20 shadow-[0_0_40px_rgba(103,61,230,0.1)]">
          
          {/* Efectos decorativos del contenedor */}
          <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30"></div>
          <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>

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
              <Camera className="w-5 h-5 text-colorPrimario5" />
              <span className="text-colorPrimario5 font-semibold">Galería del proyecto</span>
            </motion.div>

            {/* Título con animación letra por letra */}
            <motion.h2
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {splitText(project.company).map((letter, idx) => {
                const isHighlighted = idx > project.company.length * 0.4;
                return (
                  <motion.span 
                    key={idx} 
                    className={isHighlighted ? "text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text" : "text-colorPrimario2"}
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </motion.h2>
              
            <motion.p
              className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed"
              variants={descriptionVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {project.pictures.descripcion}
            </motion.p>

            {/* Contador de imágenes */}
            <motion.div
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorSecundario1/10 border border-colorSecundario1/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Grid className="w-4 h-4 text-colorSecundario1" />
              <span className="text-colorSecundario1 font-semibold text-sm">
                {project.pictures.images.length} imágenes del proyecto
              </span>
            </motion.div>
          </div>

          {/* Grid de imágenes mejorado */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md-tablet:grid-cols-2 gap-8"
          >
            {project.pictures.images.map((src, index) => (
              <motion.div
                variants={imageVariants}
                key={index} 
                className="group relative overflow-hidden rounded-3xl bg-colorHover6 backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)] transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                
                {/* Badge numerado */}
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Overlay con zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative p-4">
                  <Image
                    src={src}
                    alt={`Imagen del proyecto ${project.projectName} - ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 shadow-lg"
                  />
                </div>

                {/* Información adicional */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-colorPrimario2 font-bold text-sm mb-1">
                      Vista {index + 1}
                    </h4>
                    <p className="text-colorPrimario1/70 text-xs">
                      {project.projectName} - Captura del proyecto
                    </p>
                  </div>
                </div>

                {/* Efectos decorativos */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                ></motion.div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to action final */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
              <Camera className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
              <span className="text-colorPrimario5 font-semibold text-lg">
                Cada detalle cuenta en el resultado final
              </span>
              <ZoomIn className="w-6 h-6 text-colorSecundario1 flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}