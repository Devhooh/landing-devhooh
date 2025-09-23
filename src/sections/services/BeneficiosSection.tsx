"use client";

import { motion } from "framer-motion";
import BeneficiosSection1 from "./BeneficiosSection1";
import BeneficiosSection2 from "./BeneficiosSection2";
import BeneficiosSection3 from "./BeneficiosSection3";

export default function BeneficiosSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4">
      <div className="container mx-auto px-6 tablet-md:px-12 max-w-7xl flex flex-col gap-24">

        {/* Encabezado */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl tablet-md:text-5xl font-extrabold text-colorPrimario7 py-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Beneficios inmediatos para tu negocio
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md-tablet:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lo que ganas al trabajar con nosotros va más allá de un simple servicio: son resultados tangibles y duraderos.
          </motion.p>
        </motion.div>

        {/* Bloque 1 */}
        <BeneficiosSection1/>

        {/* Bloque 2 */}
        <BeneficiosSection2/>

        {/* Bloque 3 */}
        <BeneficiosSection3/>

        {/* Bloque 4 - Stats */}
        <motion.ul
          className="flex flex-wrap justify-center gap-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">+50</div>
            <p className="text-sm text-colorPrimario1/70">proyectos entregados con éxito.</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">Hasta 3x</div>
            <p className="text-sm text-colorPrimario1/70">más rápido en implementación que la media.</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">99%</div>
            <p className="text-sm text-colorPrimario1/70">uptime en soluciones en la nube.</p>
          </li>
        </motion.ul>

      </div>
    </section>
  );
}
