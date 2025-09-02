"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface TechBenefitsProps {
  name: string;
  benefits: Benefit[];
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
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

  // El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function TechBenefits({benefits, name}: TechBenefitsProps) {
  return (
    <section className="my-20 py-12 px-4 items-center justify-center bg-violet-950">

      <motion.h2
        className="text-center text-2xl md-tablet:text-4xl font-bold text-white mb-6 mx-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03} } }}
      >
        {splitText(`Beneficios al usar ${name}`).map((letter, idx) => (
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
        className="text-center grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {benefits.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <motion.div
              variants={cardVariants}
              key={index}
              className="
                flex flex-col items-center text-center p-6 rounded-2xl shadow-md 
                bg-gradient-to-b from-violet-300 to-white border-2 border-fuchsia-200 hover:shadow-lg transition"
            >
              <Icon className="w-10 h-10 mb-4 text-fuchsia-600" />
              <h3 className="text-lg font-semibold text-violet-950 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
