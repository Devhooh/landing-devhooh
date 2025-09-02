"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails"; // tu modelo
import { motion, Variants } from "framer-motion";

interface BenefitsSectionProps {
  service: ServicesData;
}

// Texto con efecto "letra por letra"
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const splitText = (text: string) => text.split("");

// Variantes para las cards (fade + scale-up desde el centro)
const cardVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15, // escalonado
    },
  }),
};

export default function ServicesDataSection({ service }: BenefitsSectionProps) {
  return (
    <section className="py-10 px-6 md-tablet:px-12 bg-gray-50">
      {/* Título con animación letra por letra */}
      <div className="pb-10 items-center">
        <motion.h2
          className="text-3xl md-tablet:text-4xl font-bold text-center text-blue-900"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText(`Servicios de ${service.name}`).map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Grid de servicios */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {service.servicesData.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              className="
                flex flex-col items-center text-center p-8 rounded-2xl 
                bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border-blue-200 shadow-sm hover:shadow-xl 
                hover:border-fuchsia-300 transition duration-300
              "
            >
              {/* Icono */}
              <Icon className="w-14 h-14 text-fuchsia-600 mb-4" />

              {/* Título */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
