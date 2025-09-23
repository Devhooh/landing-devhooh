"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Mail, Sparkles, ArrowRight } from "lucide-react";

export default function CTAHome() {

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md-tablet:px-10">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido */}
          <motion.div
            className="text-center table-lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Título principal animado */}
            <motion.h2
              className="text-3xl md-tablet:text-5xl font-extrabold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Queremos que tu empresa sea nuestro próximo{" "}
              <span className="text-green-500">
                caso de éxito
              </span>
            </motion.h2>


            {/* Subtítulo */}
            <motion.p
              className="text-lg md-tablet:text-xl text-colorHover5 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Impulsa tu proyecto con soluciones digitales innovadoras, hechas a tu medida y respaldadas por años de experiencia
            </motion.p>

            {/* Estadísticas rápidas */}
            <motion.ul
              className="flex flex-wrap justify-center table-lg:justify-start gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">20+</div>
                <p className="text-sm text-colorHover5">Proyectos</p>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">99%</div>
                <p className="text-sm text-colorHover5">Satisfacción</p>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">24/7</div>
                <p className="text-sm text-colorHover5">Soporte</p>
              </li>
            </motion.ul>

            {/* Botón principal */}
            <motion.div
              className="flex flex-col md-tablet:flex-row gap-4 justify-center table-lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    ¡Empezamos tu proyecto hoy!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>

            </motion.div>
          </motion.div>

          {/* Columna derecha - Visual */}
          <motion.div
            className="flex justify-center table-lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Contenedor principal del visual */}
              <div className="relative w-80 h-80 md-tablet:w-96 md-tablet:h-96">
                
                {/* Círculo principal */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-colorPrimario5/20 to-colorSecundario1/20 backdrop-blur-sm border border-white/10"
                  variants={floatingVariants}
                  animate="animate"
                ></motion.div>

                {/* Mail icon central */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Mail className="w-20 h-20 tablet-md:w-32 tablet-md:h-32 text-white" />
                </motion.div>

                {/* Sparkles decorativos */}
                <motion.div
                  className="absolute top-16 right-16 text-colorPrimario5 animate-pulse"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>

                <motion.div
                  className="absolute bottom-20 left-12 text-colorSecundario1 animate-pulse"
                >
                  <Sparkles className="w-6 h-6" />
                </motion.div>

                <motion.div
                  className="absolute top-24 left-20 text-colorPrimario7 animate-pulse"
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>

                {/* Círculos orbitales */}
                <motion.div
                  className="animate-pulse absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-colorPrimario5"
                ></motion.div>

                <motion.div
                  className="animate-pulse absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-colorSecundario1"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}