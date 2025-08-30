"use client";

import { sliderLogoTech } from "@/data/sliderLogoTech";
import { SliderTech } from "./SliderTech";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="w-full pb-5 pt-16 mx-auto bg-gradient-to-t from-white via-blue-200/50 to-blue-800/50">
      {/* Hero de Tecnología */}
      <div className="max-w-5xl mx-auto px-10 text-center items-center space-y-4">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-extrabold text-indigo-950 pb-5"
        >
          Todo lo que necesitas para construir y escalar
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl max-w-3xl mx-auto"
        >
          Utilizamos herramientas modernas que aseguran rendimiento,
          escalabilidad y experiencias inolvidables. No solo se trata de usar
          tecnología, sino de cómo la aplicamos para hacer crecer tu proyecto.
        </motion.p>
      </div>

      {/* Carrusel de logos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="overflow-hidden mt-12 mx-auto"
      >
        <SliderTech logos={sliderLogoTech} direction="left" />
        <SliderTech logos={sliderLogoTech} direction="right" />
      </motion.div>

      {/* Bloque de Kit Tecnológico */}
      <div className="overflow-hidden mx-auto mt-16 px-10 space-y-4 text-left">
        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-2xl md-tablet:text-3xl font-bold text-indigo-950"
        >
          De un vistazo a nuestro kit <br /> de herramientas tecnológicas
        </motion.h3>

        <motion.p
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl max-w-2xl"
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
