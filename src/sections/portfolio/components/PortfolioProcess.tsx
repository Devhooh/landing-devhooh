"use client"
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";
import { Cog, CheckCircle, CodeXml  } from "lucide-react";

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

// Cada card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function PortfolioProcess({ project }: ChallengeSectionProps) {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <motion.div
            className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Cog className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Metodología aplicada</span>
          </motion.div>

          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Proceso de {""} 
            <strong className="text-colorPrimario5">
              desarrollo
            </strong>
          </motion.h2>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            La metodología paso a paso que seguimos para garantizar el éxito de cada proyecto
          </motion.p>
        </div>

        {/* Contenedor principal mejorado */}
        <div className="relative p-6 rounded-3xl 
          bg-gradient-to-br from-colorDarkFondo2/20 via-colorDarkFondo3/20 to-colorDarkFondo4/20 
          backdrop-blur-sm border border-colorPrimario5/20 shadow-[0_0_40px_rgba(103,61,230,0.1)]">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true}}
            className="grid gap-8 tablet-md:grid-cols-2 table-lg:grid-cols-3 justify-items-center"
          >
            {project.process.map((proceso) => {

              return (
                <motion.div 
                  variants={cardVariants}
                  key={proceso.id}
                  className={`
                    group relative w-full max-w-sm p-4 rounded-3xl 
                    bg-colorFondo/80 backdrop-blur-sm
                    border-2 border-white/20 hover:border-colorPrimario5/40
                    shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                    transition-all duration-300 flex flex-col
                  `}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  
                  {/* Efectos decorativos de la card */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Badge numerado superior */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                    {proceso.id}
                  </div>

                  {/* Icono principal */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className={`
                        w-16 h-16 rounded-2xl 
                        bg-gradient-to-r from-colorPrimario5 to-colorPrimario6
                        flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <CodeXml  className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 mb-6 text-center group-hover:text-colorPrimario5 transition-colors duration-300">
                    {proceso.title}
                  </h3>

                  {/* Lista de procesos mejorada */}
                  <motion.div
                    className="flex-grow"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <ul className="space-y-3">
                      {proceso.process.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-colorHover4 border border-white/10 hover:bg-colorHover3 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <p className="text-colorPrimario1/80 text-sm leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Badge de estado */}
                  <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm w-fit mx-auto">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-600 font-semibold text-xs">
                      Fase completada
                    </span>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3}}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Metodología probada y exitosa
            </span>
            <CodeXml  className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}