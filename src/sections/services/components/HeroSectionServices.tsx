"use client";

import Link from "next/link";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  service: ServicesData;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // retraso entre cada hijo
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3} },
};

export default function HeroSectionServices({ service }: HeroSectionProps) {
  return (
    <motion.section
      className="relative w-full pt-24 pb-16 bg-gradient-to-b from-colorPrimario5 to-white flex flex-col items-center text-center px-4 md-tablet:px-8 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Sparkles decorativo */}
      <motion.div
        className="animate-pulse absolute top-8 right-8 text-colorFondo opacity-60"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Sparkles className="w-10 h-10" />
      </motion.div>
      {/* Título */}
      <motion.h1
        variants={fadeUp}
        className="
          text-4xl md-tablet:text-6xl table-lg:text-7xl font-extrabold mb-6 
          text-white drop-shadow-lg"
      >
        {service.name}
      </motion.h1>
      
      {/* Separador decorativo */}
      <motion.div
        variants={fadeUp}
        className="mx-auto mb-8 w-24 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 shadow-md"
      />

      {/* Subtítulo */}
      <motion.p
        variants={fadeUp}
        className="text-lg md-tablet:text-2xl table-lg:text-3xl text-colorPrimario1 mb-10 max-w-3xl mx-auto font-medium drop-shadow-sm"
      >
        {service.subtitle}
      </motion.p>
      
      {/* Botón global */}
      <motion.div variants={fadeUp} className="my-8 mx-10">
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-5 text-xl md:text-2xl font-bold bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white rounded-2xl shadow-xl hover:bg-colorSecundario4 transform transition-all duration-300 flex items-center gap-3 drop-shadow-lg"
          >
            <span className="inline-block w-3 h-3 rounded-full bg-colorPrimario5 animate-pulse"></span>
            Cotiza tu proyecto
            <span className="inline-block w-3 h-3 rounded-full bg-colorSecundario1 animate-pulse"></span>
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
