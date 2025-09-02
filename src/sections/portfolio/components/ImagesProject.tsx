"use client"
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface ChallengeSectionProps {
  project: Project;
}

// Contenedor de cards (staggerChildren)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

// Cada card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};


const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ImageProject({project}: ChallengeSectionProps) {
  return (
      <div className="max-w-7xl mx-auto mt-12 bg-gradient-to-t from-purple-300 to-white border border-gray-500 rounded-3xl">
        {/* Encabezado */}
        <div className="text-center mb-16 pt-12">

          <motion.h2
            className=" text-3xl md-tablet:text-5xl font-bold pb-4 text-blue-950"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05} } }}
          >
            {splitText(project.company).map((letter, idx) => (
              <motion.span key={idx} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
            
          <motion.p
            className="mt-2 text-lg text-gray-700"
            variants={descriptionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {project.pictures.descripcion}
          </motion.p>

        </div>

        {/* Grid de imágenes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md-tablet:grid-cols-2 gap-6"
        >
          {project.pictures.images.map((src, index) => (
            <motion.div
              variants={cardVariants}
              key={index} 
              className="flex justify-center m-8"
            >
              <Image
                src={src}
                alt={`Imagen del proyecto ${project.projectName} - ${index + 1}`}
                width={600}
                height={400}
                className="min-w-10 h-auto rounded-xl shadow-lg object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
}