"use client";
import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { CircleCheckIcon, Target, Lightbulb, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ChallengeSectionProps {
  project: Project;
}

// Variantes de animación mejoradas
const titleVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const descLeft: Variants = {
  hidden: { opacity: 0, x: -50, y: 30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const descRight: Variants = {
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

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ChallengeSection({ project }: ChallengeSectionProps) {
  const splitText = (text: string) => text.split("");

  const sectionIcons = [Target, Lightbulb, Zap]; // Iconos rotativos para cada sección

  return (
    <section className="relative my-16 mx-4 md-tablet:mx-8 table-lg:mx-16 overflow-hidden">
      
      {/* Contenedor principal con gradiente mejorado */}
      <div className="relative bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 rounded-3xl py-16 px-6 md-tablet:px-12 border border-colorPrimario5/20 shadow-[0_0_50px_rgba(103,61,230,0.3)]">
        
        {/* Efectos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-colorPrimario5/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-colorSecundario1/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-colorPrimario7/15 blur-2xl"></div>
        </div>

        {/* Título de sección principal */}
        <div className="relative z-10 text-center mb-20">
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText("Desafíos y ").map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-white"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText("Soluciones").map((letter, idx) => (
              <motion.span
                key={idx + 100}
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-lg text-colorHover5 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Cada proyecto presenta desafíos únicos. Aquí te mostramos cómo los enfrentamos
          </motion.p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
          {project.challengeData.map((item, index) => {
            const isEven = index % 2 !== 0;
            const IconComponent = sectionIcons[index % sectionIcons.length];
            
            return (
              <div key={item.title} className="flex flex-col gap-12">
                
                {/* Título de la sección */}
                <motion.div
                  className="text-center"
                  variants={titleVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Badge con icono y número */}
                  <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <IconComponent className="w-5 h-5 text-colorPrimario5" />
                    <span className="text-colorHover5 font-semibold">Desafío {index + 1}</span>
                  </div>

                  <h3 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                </motion.div>

                {/* Contenido en zig-zag */}
                <div
                  className={`flex flex-col table-lg:flex-row items-center gap-12 ${
                    isEven ? "table-lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Contenido de texto */}
                  <motion.div
                    className="table-lg:w-1/2"
                    variants={isEven ? descRight : descLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-colorHover5/5 to-colorHover6/5 backdrop-blur-sm border border-white/10 hover:border-colorPrimario5/30 transition-all duration-300 group">
                      
                      {/* Efectos decorativos */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Descripción */}
                      <p className="text-colorHover5 text-base md-tablet:text-lg leading-relaxed mb-6 text-center table-lg:text-left">
                        {item.description}
                      </p>

                      {/* Lista mejorada */}
                      {item.listData && (
                        <motion.div
                          variants={listContainer}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <h4 className="text-white font-bold text-lg mb-4 text-center table-lg:text-left">
                            Soluciones implementadas:
                          </h4>
                          <ul className="space-y-3">
                            {item.listData.map((items, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                variants={listItem}
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                                  <CircleCheckIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-colorHover5 leading-relaxed">{items}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {/* Badge de resultado */}
                      <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-300 font-semibold text-sm">Desafío resuelto</span>
                      </div>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Imagen mejorada */}
                  <motion.div
                    className="table-lg:w-1/2 flex justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(103,61,230,0.2)] group-hover:shadow-[0_0_50px_rgba(103,61,230,0.3)] transition-all duration-500">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${project.projectName}`}
                          width={500}
                          height={350}
                          className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Círculos decorativos flotantes */}
                      <motion.div
                        className={`absolute ${isEven ? '-bottom-4 -right-4' : '-top-4 -left-4'} w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-20`}
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      ></motion.div>

                      {/* Badge de imagen */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-colorPrimario5/90 backdrop-blur-sm text-white font-semibold text-xs shadow-lg">
                        Evidencia
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action final */}
        <motion.div
          className="relative z-10 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <Target className="w-6 h-6 text-green-400" />
            <span className="text-colorHover5 font-semibold text-lg">
              Todos los desafíos superados con éxito
            </span>
            <Zap className="w-6 h-6 text-colorPrimario5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}