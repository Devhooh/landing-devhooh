"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="relative h-auto bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      
      <div className="max-w-[1550px] mx-auto px-6 pt-16 md-tablet:pt-10 table-lg:pt-0 md-tablet:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-6">
          {/* Contenedor central */}
          <div className="flex flex-col items-center text-center gap-10 col-span-1">
            {/* Título */}
            <motion.div
              className="md-tablet:mt-2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h1 className="mt-5 text-colorPrimario2 table-lg:px-24 text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                Somos Devhooh: {""}
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
                  Tecnología con propósito.
                </span>
                <br className="hidden md-tablet:block" />
                <span className="block text-lg md-tablet:text-2xl font-semibold text-colorPrimario1/80 mt-2">
                  Nuestra misión va más allá del software
                </span>
              </h1>
            </motion.div>
            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4}}
              viewport={{ once: true }}
            >
              <p className="text-lg md-tablet:text-xl text-colorPrimario1/70 max-w-xl mb-5 md-tablet:mb-16 mx-auto">
                Detrás del código, somos un equipo que escucha, colabora y
                construye contigo. Conoce quiénes somos y por qué trabajamos
                diferente.
              </p>
            </motion.div>
            {/* Botón CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 table-lg:mt-1 mb-8 table-lg:my-8 "
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 text-xl md:text-2xl font-bold bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white rounded-2xl shadow-xl hover:bg-colorSecundario4 transform transition-all duration-300 flex items-center gap-3 drop-shadow-lg"
                >
                  <span className="inline-block w-3 h-3 rounded-full bg-colorPrimario5 animate-pulse"></span>
                  Hablemos de tu proyecto
                  <span className="inline-block w-3 h-3 rounded-full bg-colorSecundario1 animate-pulse"></span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
