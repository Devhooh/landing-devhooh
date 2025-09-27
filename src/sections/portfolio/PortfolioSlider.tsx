"use client"

import { ProjectSlider } from "../home/ProjectSlider";
import { logos } from "@/data/projects";
import { motion} from "framer-motion";

export function PortfolioSlider() {
  return (
    <div className="relative my-20 bg-colorFondo">
  
      {/* Título y subtítulo mejorados */}
      <motion.div 
        className="relative z-10 text-center mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Título principal con animación letra por letra */}
        <motion.h2
          className="text-3xl tablet-md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Empresas que confían en {""}
          <span className="text-colorPrimario5">
            nosotros
          </span>
        </motion.h2>

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
        <motion.ul
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">20+</div>
            <p className="text-sm text-colorPrimario1/70">Empresas atendidas</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">98%</div>
            <p className="text-sm text-colorPrimario1/70">Tasa de éxito</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">24m</div>
            <p className="text-sm text-colorPrimario1/70">Tiempo promedio</p>
          </li>
        </motion.ul>
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