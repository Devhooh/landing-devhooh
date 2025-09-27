"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";

export default function CTASlugServices() {
  return (
    <section className="relative w-full pb-20 pt-12  overflow-hidden">
      {/* Fondo gradiente premium */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4">
        <motion.div
          className="flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-between gap-10 bg-white px-8 py-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Columna izquierda: texto */}
          <div className="flex-1 flex flex-col items-center tablet-md:items-start text-center tablet-md:text-left">

            <motion.p
              className="text-xl tablet-md:text-2xl font-semibold text-colorPrimario1 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              ¿Listo para llevar tu proyecto al siguiente nivel?
            </motion.p>

            <motion.h2
              className="text-3xl tablet-md:text-4xl font-extrabold mb-4 leading-tight text-colorPrimario2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Nuestro equipo está listo para despegar. Empezemos {" "}
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
                tu proyecto ahora!
              </span>{" "}
            </motion.h2>


            {/* Estadísticas rápidas */}
            <motion.ul
              className="flex gap-8 mb-8 justify-center tablet-md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">+15</div>
                <p className="text-sm text-colorPrimario4">Clientes Agradecidos</p>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">99%</div>
                <p className="text-sm text-colorPrimario4">Satisfacción</p>
              </li>
              <li className="text-center">
                <div className="text-2xl font-bold text-colorPrimario7">24/7</div>
                <p className="text-sm text-colorPrimario4">Soporte</p>
              </li>
            </motion.ul>

            {/* Botón premium */}
            <motion.div
              className="flex justify-center tablet-md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base md-tablet:text-lg bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    ¡Ponte en contacto!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Columna derecha: visual premium */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* VISUAL: Un elemento animado más simple y elegante */}
            <div
              className="relative w-40 h-40 md-tablet:w-48 md-tablet:h-48 flex-shrink-0 flex items-center justify-center"
            >
              {/* Círculo con 'glow' animado */}
              <motion.div
                className="absolute inset-0 rounded-full bg-colorPrimario5/70 border border-white/10"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px 0px rgba(102, 60, 230, 0.4)",
                    "0 0 30px 5px rgba(115, 79, 231, 0.5)",
                    "0 0 20px 0px rgba(102, 60, 230, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
              
              {/* Icono del cohete flotando */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Rocket className="w-16 h-16 md-tablet:w-20 md-tablet:h-20 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

