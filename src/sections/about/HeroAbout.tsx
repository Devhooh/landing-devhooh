"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="h-auto bg-colorFondo">
      <div className="max-w-[1550px] mx-auto px-6 pt-10 md-tablet:pt-4 table-lg:pt-0 md-tablet:px-12">
        <div className="grid grid-cols-1 items-center gap-6">

          {/* Contenedor central */}
          <div className="flex flex-col items-center text-center gap-8 col-span-1">
            
            {/* Título */}
            <motion.div
              className="md-tablet:mt-2"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-5 text-colorPrimario2 table-lg:px-24 text-4xl md-tablet:text-5xl table-lg:text-4xl font-extrabold leading-tight">
                Somos Devhooh: {""}
                <span className="text-colorPrimarioLogo1">Tecnología con propósito.</span> Nuestra misión va más allá del software
              </h2>
            </motion.div>

            {/* Subtítulo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md-tablet:text-xl text-gray-700 max-w-lg mb-5 md-tablet:mb-16">
                Detrás del código, somos un equipo que escucha, colabora y construye contigo. Conoce quiénes somos y por qué trabajamos diferente.
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg md:text-xl font-semibold bg-colorPrimario5 text-white rounded-xl shadow-md hover:bg-colorSecundario4 transform transition-all duration-300 flex items-center gap-2"
                >
                  Hablemos de tu proyecto
                </motion.button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
