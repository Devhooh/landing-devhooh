"use client"
import { Project } from "@/data/portfolioDetails";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { motion, Variants } from "framer-motion";

interface ResultSectionProps {
  project: Project;
}

const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // escalonado
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ResultSection({ project }: ResultSectionProps) {
  const result = project.result;

  return (
    <section className="w-full bg-gray-50 py-12 px-4 md-tablet:px-8">
      {/* Título */}
      <motion.h2
        className="text-2xl md-tablet:text-4xl font-bold text-blue-950 mb-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03} } }}
      >
        {splitText("Resultado").map((letter, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="text-gray-600 text-base md-tablet:text-lg mb-8 max-w-3xl mx-auto text-center"
        variants={descriptionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {result.descripcion}
      </motion.p>

      {/* Bloques Before / After */}
      <div className="flex flex-col table-lg:flex-row gap-8">
        {/* Before */}
        <div className="table-lg:w-1/2 bg-white border border-fuchsia-300 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Antes:</h3>
          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-2"
          >
            {result.antes.map((item, index) => (
              <motion.li 
                variants={listItem}
                key={index} 
                className="flex items-center gap-2 text-gray-600"
              >
                <AiOutlineClose className="flex-shrink-0 text-red-500" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* After */}
        <div className="table-lg:w-1/2 bg-white border border-fuchsia-300 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Despues:</h3>
          <motion.ul 
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-2"
          >
            {result.despues.map((item, index) => (
              <motion.li 
                variants={listItem}
                key={index} 
                className="flex items-center gap-2 text-gray-600"
              >
                <AiOutlineCheck className="flex-shrink-0 text-green-500" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
