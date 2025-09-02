"use client"
import { Project } from "@/data/portfolioDetails";
import { motion, Variants } from "framer-motion";

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

  // El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function PortfolioProcess({ project }: ChallengeSectionProps) {
  return (
    <section className="py-16 px-4">

      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-blue-950 tablet-md:text-4xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05} } }}
      >
        {splitText("Proceso de Desarrollo").map((letter, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="
          grid gap-6 justify-center md-tablet:grid-cols-2 table-lg:grid-cols-3 max-w-6xl mx-auto p-5 rounded-3xl
          bg-gradient-to-tr from-purple-800 via-purple-200 to-purple-800 border border-purple-300"
      >
        {project.process.map((proceso) => (
          <motion.div 
            variants={cardVariants}
            key={proceso.id}
            className="
              bg-fuchsia-50 shadow-md rounded-2xl p-6 
              border border-fuchsia-300
              hover:shadow-lg transition-shadow
              flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fuchsia-500 text-white text-lg font-bold mb-4">
              {proceso.id}
            </div>
            <h3 className="text-xl font-semibold text-blue-950 mb-4">{proceso.title}</h3>
            <ul className="text-gray-600 text-sm mx-3 list-disc text-left">
              {proceso.process.map((items, idx) => (
                <li key={idx} className="pb-3">
                  {items}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
