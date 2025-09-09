"use client";

import { sliderLogoTech } from "@/data/sliderLogoTech";
import { SliderTech } from "./SliderTech";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="w-full pb-5 pt-16 mx-auto">

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="flex justify-center px-4">

        {/* Hero de Tecnología */}
          <div className="
            max-w-5xl mx-auto px-10 text-center items-center space-y-4 relative backdrop-blur-md
            bg-gradient-to-b from-colorHover2 to-colorHover3 py-5 rounded-3xl"
          >
            {/* Efectos decorativos en la card */}
            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-colorPrimario5 opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-colorSecundario3 opacity-40"></div>
            
            
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-extrabold text-colorFondo pb-5"
            >
              Todo lo que necesitas para construir y escalar
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-colorPrimario1 md-tablet:text-xl max-w-3xl mx-auto"
            >
              Utilizamos herramientas modernas que aseguran rendimiento,
              escalabilidad y experiencias inolvidables. No solo se trata de usar
              tecnología, sino de cómo la aplicamos para hacer crecer tu proyecto.
            </motion.p>

            {/* Badge de años de experiencia */}
            <motion.div
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-colorPrimario5 border border-colorPrimario5/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-white flex-shrink-0" />
              <span className="text-colorHover5 font-semibold">Empieza tu proyecto con calidad</span>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Carrusel de logos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden mt-12 py-5 mx-auto bg-colorPrimario5 border-y border-colorSecundario3"
      >
        <SliderTech logos={sliderLogoTech} direction="left" />
        <SliderTech logos={sliderLogoTech} direction="right" />
      </motion.div>

      {/* Bloque de Kit Tecnológico */}
      <div className="overflow-hidden mx-auto mt-16 px-5 md-tablet:px-10 space-y-4 pb-5 text-left">
        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario1"
        >
          De un vistazo a nuestro kit <br /> de herramientas tecnológicas
        </motion.h3>

        <motion.p
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl max-w-2xl text-gray-700"
        >
          Profundizamos en las necesidades de su proyecto para asegurarnos de
          seleccionar las mejores herramientas y marcos para su producto. La
          mayoría de los proyectos en los que trabajamos se dividen en el
          siguiente stack de tecnológicas.
        </motion.p>
      </div>
    </section>
  );
}
