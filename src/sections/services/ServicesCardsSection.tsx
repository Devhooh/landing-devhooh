"use client";

import { Lightbulb, Rocket, Repeat } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Variantes para animaciones
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeUpStagger: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.10},
  }),
};

export default function ServicesCardsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="px-6 table-lg:px-8 py-10 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 table-lg:grid-cols-[6fr_4fr] gap-6 items-start">
          
          {/* Lado izquierdo - Contenedor de las tarjetas */}
          <div className="flex flex-col gap-10 self-start order-last table-lg:order-first">
            
            {/* Tarjeta pequeña */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
              className="
                bg-gradient-to-b from-indigo-600/70 via-blue-600/70 to-indigo-800/80 
                ring-2 ring-white/20 hover:ring-fuchsia-400/40
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-md w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-gradient-to-br from-fuchsia-400 to-pink-500 p-6 rounded-full flex-shrink-0">
                  <Lightbulb className="h-10 w-10 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Tienes una gran idea</h3>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Construimos la presencia digital de tu startup, prototipos y MVPs funcionales.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta mediana */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
              className="
                bg-gradient-to-b from-indigo-600/70 via-blue-600/70 to-indigo-800/80 
                ring-2 ring-white/20 hover:ring-fuchsia-400/40
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-fuchsia-400 to-pink-500 p-6 rounded-full flex-shrink-0">
                  <Rocket className="h-10 w-10 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Buscas crecimiento</h3>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Desarrollamos soluciones web y móviles robustas para PyMEs, diseñadas para escalar y optimizar procesos.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta grande */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpStagger}
              className="
                bg-gradient-to-b from-indigo-600/70 via-blue-600/70 to-indigo-800/80 
                ring-2 ring-white/20 hover:ring-fuchsia-400/40
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-2xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1.2, ease: "linear" }} className="bg-gradient-to-br from-fuchsia-400 to-pink-500 p-6 rounded-full flex-shrink-0">
                  <Repeat className="h-10 w-10 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 text-white">Necesitas actualizarte</h3>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Renovamos tu plataforma, añadimos nuevas funcionalidades y optimizamos su rendimiento para que sea más veloz.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Lado derecho - Título y subtítulo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeRight}
            className="text-center table-lg:text-right order-first table-lg:order-last"
          >
            <h2 className="text-4xl md-tablet:text-7xl font-extrabold text-blue-900 mb-8">
              ¿En qué etapa se encuentra tu proyecto?
            </h2>
            <p className="text-xl md-tablet:text-2xl font-semibold text-gray-700 mb-8 mx-auto table-lg:mx-0">
              No importa si estás dando los primeros pasos o buscas escalar. En Devhooh,
              adaptamos nuestros servicios para impulsar tu visión.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
  whileHover={{ scale: 1.05, skewX: -5 }} // solo se aplica en desktop
  transition={{ duration: 0.3 }}
  className="
    relative overflow-hidden
    text-center py-12 px-8 my-20 shadow-2xl mx-auto select-none
    bg-gradient-to-r from-fuchsia-600 to-purple-600
    w-full cursor-pointer transform
    md-tablet:hover:scale-105 md-tablet:hover:skew-x-[-5deg] // aplica solo en desktop
    md-tablet:skew-x-0
    
  "
>
  {/* Glow animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-sky-400 opacity-30 blur-2xl animate-pulse" />
  
  <h2 className="relative text-3xl md-tablet:text-4xl font-extrabold text-white leading-tight italic table-lg:not-italic">
    Tenemos una amplia <span className="text-sky-300">gama de servicios. </span>  
    Escoge el ideal <span className="text-sky-300">para ti</span>
  </h2>
</motion.div>
    </section>
  );
}
