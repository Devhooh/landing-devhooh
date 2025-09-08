"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASlugfolio() {
  const splitText = (text: string) => text.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    { value: "50+", label: "Proyectos completados", color: "from-colorPrimario5 to-colorSecundario1" },
    { value: "98%", label: "Clientes satisfechos", color: "from-colorSecundario1 to-colorPrimario7" },
    { value: "24h", label: "Soporte garantizado", color: "from-colorPrimario7 to-colorPrimario5" },
  ];

  return (
    <section className="relative w-full py-28 px-5 tablet-md:px-10 flex justify-center overflow-hidden text-white">
      {/* Contenedor principal */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center gap-8 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 p-10 rounded-3xl shadow-2xl text-center">
        
        {/* Título animado letra por letra */}
        <motion.h2
          className="text-3xl tablet-md:text-5xl font-extrabold leading-tight"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Innovación tecnológica que impulsa tu negocio").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-base tablet-md:text-xl text-gray-200 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Desarrollamos soluciones digitales con seguridad, escalabilidad y un enfoque personalizado para maximizar tu crecimiento.
        </motion.p>

        {/* Botón principal */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Link href="/contact">
            <motion.button
              className="relative group inline-flex items-center gap-3 px-10 py-4 font-bold text-lg rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10 flex items-center gap-2">
                Ponte en contacto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats / badges */}
        <motion.div className="flex flex-wrap justify-center gap-6 mt-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={`px-6 py-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
