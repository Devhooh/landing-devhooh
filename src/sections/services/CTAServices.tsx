"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Cog, Sparkles, ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

// Variantes de animación tomadas de tu ejemplo CTAHome
const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Variantes para la animación de entrada secuencial
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0},
};

export default function CTAServices() {
  return (
    <section className="relative w-full h-auto my-10 py-16 flex justify-center items-center overflow-hidden px-4">
      
      {/* Contenedor principal del CTA */}
      <motion.div
        className="
          relative z-10 mx-auto px-6 tablet-md:px-10 py-10 w-full h-auto max-w-[950px]
          flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-between
          gap-10
          border border-colorDarkFondo5 rounded-3xl overflow-hidden 
          bg-colorDarkFondo4 backdrop-blur-xl
          shadow-2xl shadow-colorPrimario22/50
        "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Columna izquierda - Contenido de texto */}
        <div className="flex flex-col items-center tablet-md:items-start text-center tablet-md:text-left">
          <motion.h2 variants={itemVariants} className="text-3xl tablet-md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Transforma tu visión en <span className="text-transparent bg-gradient-to-r from-colorPrimario7 to-colorSecundario2 bg-clip-text">Realidad Digital</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-md tablet-md:text-lg text-colorHover5 mb-8 max-w-lg">
            Permítenos ser tu socio tecnológico y construir la solución a medida que tu proyecto necesita para destacar y crecer.
          </motion.p>
          
          {/* CAMBIO: Contenido enriquecido con puntos clave */}
          <motion.ul variants={itemVariants} className="flex flex-col md-tablet:flex-row gap-6 mb-8 w-full justify-center tablet-md:justify-start">
            <li className="flex items-center gap-2 text-sm text-colorHover5">
              <ShieldCheck className="w-5 h-5 text-colorPrimario7" />
              <p>Fiabilidad Garantizada</p>
            </li>
            <li className="flex items-center gap-2 text-sm text-colorHover5">
              <Zap className="w-5 h-5 text-colorPrimario7" /> 
              <p>Desarrollo Ágil</p>
            </li>
            <li className="flex items-center gap-2 text-sm text-colorHover5">
              <BarChart3 className="w-5 h-5 text-colorPrimario7" /> 
              <p>Soluciones Escalables</p>
            </li>
          </motion.ul>

          {/* CAMBIO: Botón con efecto "shine" de CTAHome */}
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <motion.button
                className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base md-tablet:text-lg bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Agenda una Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Columna derecha - Visual animado */}
        <motion.div 
            variants={itemVariants}
            className="relative hidden tablet-md:flex w-48 h-48 lg:w-56 lg:h-56 flex-shrink-0"
        >
          <motion.div variants={floatingVariants} animate="animate">
            <Cog className="w-full h-full text-cyan-500" />
          </motion.div>
          <div className="absolute top-4 right-4 text-colorPrimarioLogo2 animate-pulse">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-4 left-4 text-colorHover animate-pulse">
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}