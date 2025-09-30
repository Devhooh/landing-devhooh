"use client";

import { Lightbulb, Rocket, Repeat, Sparkles, Target, Zap } from "lucide-react";
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
      <div className="px-6 table-lg:px-8 py-10 bg-colorFondo">
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
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-md w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >
              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div> 

              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(1).padStart(2, '0')}
              </div>

              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-white">Tienes una gran idea</h2>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Construimos la presencia digital de tu startup, prototipos y MVPs funcionales.
                  </p>

                  {/* Badge de especialización */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mt-5 rounded-full bg-white/20 border border-white/30">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-white font-semibold text-xs">
                      Servicio garantizado
                    </span>
                  </div>
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
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div> 

              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(2).padStart(2, '0')}
              </div>

              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
                  <Rocket className="h-10 w-10 text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-white">Buscas crecimiento</h2>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Desarrollamos soluciones web y móviles robustas para PyMEs, diseñadas para escalar y optimizar procesos.
                  </p>

                  {/* Badge de especialización */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mt-5 rounded-full bg-white/20 border border-white/30">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-white font-semibold text-xs">
                      Servicio garantizado
                    </span>
                  </div>
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
                bg-colorSecundario4
                ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-2xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl
              "
            >

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white opacity-70"></div>  

              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(3).padStart(2, '0')}
              </div>

              <div className="flex flex-col items-center text-center gap-4 table-lg:flex-row table-lg:items-start table-lg:text-left">
                <div className="bg-colorHover2 p-6 rounded-full flex-shrink-0">
                  <Repeat className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-1 text-white">Necesitas actualizarte</h2>
                  <p className="text-lg md-tablet:text-xl leading-snug text-gray-200">
                    Renovamos tu plataforma, añadimos nuevas funcionalidades y optimizamos su rendimiento para que sea más veloz.
                  </p>

                  {/* Badge de especialización */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 mt-5 rounded-full bg-white/20 border border-white/30">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-white font-semibold text-xs">
                      Servicio garantizado
                    </span>
                  </div>
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
            <h2 className="text-4xl md-tablet:text-7xl font-extrabold text-colorPrimario2 mb-8">
              ¿En qué etapa se encuentra 
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> tu proyecto?</span>
            </h2>
            <p className="text-lg md-tablet:text-2xl font-semibold text-gray-700 mb-8 mx-auto table-lg:mx-0">
              No importa si estás dando los primeros pasos o buscas escalar. 
              <span className="text-colorSecundario4"> En Devhooh, </span>
              adaptamos nuestros servicios para
              <span className="text-colorSecundario4"> impulsar tu visión. </span>
            </p>
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          className="relative z-10 text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3,}}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl
            bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg md-tablet:text-2xl">
              Trabajemos en tu próximo proyecto ahora!
            </span>
            <Zap className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>


      </div>

      <motion.div
        whileHover={{ scale: 1.05, skewX: -5 }} // solo se aplica en desktop
        transition={{ duration: 0.3 }}
        className="
          relative overflow-hidden
          text-center py-12 px-8 my-20 shadow-2xl mx-auto select-none
          bg-colorHover2
          w-full cursor-pointer transform
          md-tablet:hover:scale-105 md-tablet:hover:skew-x-[-5deg] // aplica solo en desktop
          md-tablet:skew-x-0
          
        "
      >
        {/* Glow animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-sky-400 opacity-30 blur-2xl animate-pulse" />
        
        <h3 className="relative text-3xl md-tablet:text-4xl font-extrabold text-white leading-tight italic table-lg:not-italic">
          Tenemos una amplia <span className="text-colorDarkFondo2">gama de servicios. </span>  
          Escoge el ideal <span className="text-colorDarkFondo2">para ti</span>
        </h3>
      </motion.div>
    </section>
  );
}
