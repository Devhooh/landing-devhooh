"use client";

import Link from "next/link";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HeroSectionServices({ service }: HeroSectionProps) {
  return (
    <motion.section
      className="w-full pt-20 bg-gradient-to-b from-purple-900 via-purple-800 to-white flex flex-col items-center text-center px-4 md-tablet:px-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* Título */}
      <motion.h1
        variants={fadeUp}
        className="
          text-4xl md-tablet:text-6xl font-extrabold mb-4
          bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-white
        "
      >
        {service.name}
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        variants={fadeUp}
        className="text-base md-tablet:text-lg tablet-md:text-xl table-lg:text-2xl text-gray-200 mb-10 max-w-3xl"
      >
        {service.subtitle}
      </motion.p>

      {/* Botón global */}
      <motion.div variants={fadeUp} className="my-8 mx-10">
        <Link href="/contact">
          <button className="px-6 py-3 md-tablet:px-8 md-tablet:py-4 bg-fuchsia-950 text-white rounded-full font-semibold text-base md-tablet:text-lg hover:bg-fuchsia-800 transition-colors">
            Contáctanos
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
