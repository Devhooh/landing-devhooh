"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";

export default function CTATech() {
  return (
    <section className="relative w-full py-32 mt-20 overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 bg-colorHover5 opacity-95"></div>
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div> */}

      {/* Iconos flotantes */}
      <motion.div
        className="absolute top-12 left-10 text-colorDarkFondo2"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-12 text-colorDarkFondo2"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Rocket size={50} />
      </motion.div>

      {/* Contenedor */}
      <div className="
        relative z-10 mx-5 tablet-md:mx-10 px-4 tablet-md:px-10 py-10 rounded-2xl shadow-xl 
        bg-colorHover3 backdrop-blur-lg text-center">
        
        {/* Texto principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2 leading-tight mb-4"
        >
          ¿Necesitas una 
          <span className="text-colorPrimario5"> solución similar?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-lg md-tablet:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
        >
          Creamos software personalizado que conecta con tus clientes, mejora la experiencia y asegura resultados reales.
        </motion.p>

        {/* Stats / Beneficios */}
        <ul className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mb-12">
          <li className="bg-white/70 rounded-xl p-6 flex flex-col items-center">
            <Zap className="w-8 h-8 text-colorPrimario5 mb-2" />
            <h3 className="text-xl font-bold text-colorPrimario1">+200%</h3>
            <p className="text-sm text-gray-700">Rendimiento optimizado</p>
          </li>
          <li className="bg-white/70 rounded-xl p-6 flex flex-col items-center">
            <ShieldCheck className="w-8 h-8 text-colorPrimario5 mb-2" />
            <h3 className="text-xl font-bold text-colorPrimario1">99.9%</h3>
            <p className="text-sm text-gray-700">Seguridad garantizada</p>
          </li>
          <li className="bg-white/70 rounded-xl p-6 flex flex-col items-center">
            <Rocket className="w-8 h-8 text-colorPrimario5 mb-2" />
            <h3 className="text-xl font-bold text-colorPrimario1">Escalabilidad</h3>
            <p className="text-sm text-gray-700">Preparado para crecer</p>
          </li>
        </ul>

        {/* CTA */}
        <div className="flex flex-col md-tablet:flex-row items-center justify-center gap-4">
          {/* Botón principal con efecto shine */}
          <Link href="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-xl shadow-lg text-white bg-colorSecundario4 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Solicita una consulta</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </motion.button>
          </Link>

          {/* Botón secundario */}
          <Link href="/portfolio">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 font-bold text-lg rounded-xl border border-white/30 text-colorPrimario5 shadow-md hover:bg-white/10 transition-all duration-500"
            >
              Ver portafolio
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

