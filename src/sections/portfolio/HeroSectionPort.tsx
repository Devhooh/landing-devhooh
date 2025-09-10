"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function HeroSectionPort() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-colorFondo">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.div
            className="order-1 table-lg:order-2 mt-10 table-lg:mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold leading-tight text-center table-lg:text-right text-colorPrimario2">
              Realidades digitales. Resultados que hablan por sí solos
            </h2>
          </motion.div>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            className="
              my-10 table-lg:mb-16 order-2 table-lg:order-1 table-lg:row-span-4 rounded-xl
              bg-colorHover5 flex justify-center table-lg:justify-start shadow-xl"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/assets/images/hero2.png"
              alt="Desarrollo de softwara, portafolio"
              width={500}
              height={500}
              className="w-64 md-tablet:w-80 table-lg:w-96 h-auto object-contain rounded-lg"
            />
          </motion.div>

          {/* --- 3) SUBTÍTULO --- */}
          <motion.div
            className="order-3 mb-5 table-lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md-tablet:text-xl text-gray-600 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              Cada proyecto representa una historia de innovación, colaboración y éxito. Mira cómo ayudamos a crecer negocios con tecnología moderna.
            </p>
          </motion.div>

          {/* --- 4) LISTA --- */}
          <motion.div
            className="order-4 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
              <ul className="space-y-3 text-gray-800 text-left max-w-md mx-auto table-lg:mx-0">
                {[
                  "Tiendas online con integración de pagos",
                  "Aplicaciones móviles multiplataforma",
                  "Dashboards empresariales con análisis en tiempo real",
                  "Proyectos con inteligencia artificial aplicada"

                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-base md-tablet:text-xl">{feature}</span>
                  </motion.li>
                ))}
              </ul>
          </motion.div>

          {/* Boton CTA */}
          <motion.div
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 text-lg md-tablet:text-xl font-semibold bg-colorPrimario6 text-white rounded-xl shadow-md hover:scale-105 transform transition-all duration-300">
                Cotiza tu proyecto ahora
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

