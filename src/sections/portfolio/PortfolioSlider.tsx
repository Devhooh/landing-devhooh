"use client"

import { ProjectSlider } from "../home/ProjectSlider";
import { logos } from "@/data/projects";
import { motion} from "framer-motion";

export function PortfolioSlider() {
  return (
    <div className="relative my-20 bg-colorFondo">
  
      {/* Efectos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-colorPrimario5/5 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-colorSecundario1/5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-colorPrimario7/8 blur-xl"></div>
      </div>

      {/* Título y subtítulo mejorados */}
      <motion.div 
        className="relative z-10 text-center mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Título principal con animación letra por letra */}
        <motion.h3
          className="text-3xl tablet-md:text-5xl font-extrabold mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ 
            hidden: {}, 
            show: { transition: { staggerChildren: 0.03 } } 
          }}
        >
          {["Empresas", " ", "que", " ", "confían", " ", "en", " ", "nosotros"].map((word, wordIdx) => (
            <span key={wordIdx}>
              {word === " " ? " " : 
                word.split("").map((letter, letterIdx) => (
                  <motion.span
                    key={letterIdx}
                    className={wordIdx < 2 ? "text-colorPrimario2" : "text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario3 bg-clip-text"}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))
              }
            </span>
          ))}
        </motion.h3>

        {/* Subtítulo descriptivo */}
        <motion.p
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Desde startups hasta grandes corporaciones, hemos transformado ideas en soluciones digitales exitosas que impulsan el crecimiento empresarial
        </motion.p>

        {/* Estadísticas de impacto */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">20+</div>
            <div className="text-sm text-colorPrimario1/70">Empresas atendidas</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">98%</div>
            <div className="text-sm text-colorPrimario1/70">Tasa de éxito</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">24m</div>
            <div className="text-sm text-colorPrimario1/70">Tiempo promedio</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Sliders de logos con animación mejorada */}
      <motion.div 
        className="relative z-10 flex flex-col mb-16 px-6 md-tablet:px-12 gap-4 bg-gradient-to-r from-colorPrimarioLogo2/20 via-colorPrimarioLogo2/30 to-colorPrimarioLogo2/20 py-8 rounded-3xl mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </motion.div>

    </div>
  )
}