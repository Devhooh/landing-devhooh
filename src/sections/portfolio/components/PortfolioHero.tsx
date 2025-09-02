"use client";
import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";

interface PortfolioHeroProps {
  project: Project;
}

// Animación general para el grid (controla el delay de los hijos)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 🔥 cada hijo aparece con retraso de 0.2s
    },
  },
};

// Animación de cada div (h3 + p)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Animación para la imagen
const imageVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.8 },
  },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function PortfolioHero({ project }: PortfolioHeroProps) {
  return (
    <section className="w-full bg-gradient-to-b from-purple-950 via-purple-700 to-white py-12">
      {/* Título */}
      <div className="text-center mb-10">

        <motion.h2
          className="text-3xl mx-5 md-tablet:text-4xl font-extrabold text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07} } }}
        >
          {splitText(project.title).map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Grid de detalles con animaciones */}
      <motion.div
        className="grid grid-cols-2 table-lg:grid-cols-4 gap-6 max-w-4xl mx-5 md-tablet:mx-auto text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Proyecto</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.projectName}</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Cliente</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.company}</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Servicio</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.service}</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Ubicación</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.location}</p>
        </motion.div>
      </motion.div>

      {/* Imagen principal con animación */}
      <motion.div
        className="flex justify-center"
        variants={imageVariants}
        initial="hidden"
        animate="show"
      >
        <Image
          src={project.imageHero}
          alt={project.projectName}
          width={900}
          height={500}
          className="rounded-xl shadow-lg min-w-10 object-cover"
        />
      </motion.div>
    </section>
  );
}
