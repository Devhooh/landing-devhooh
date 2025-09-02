"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface BenefitsSectionProps {
  service: ServicesData;
}

// Variantes para textos (título y descripción)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variantes container para escalonar las cards
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // controla la velocidad
  },
};

// Variantes individuales para cada card
const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesIncluded({ service }: BenefitsSectionProps) {
  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">
      {/* Intro */}
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-900"
          variants={fadeUp}
        >
          ¿Por qué elegirnos para tu proyecto de {service.name.toLowerCase()}?
        </motion.h2>
        <motion.p
          className="text-gray-600 leading-relaxed"
          variants={fadeUp}
        >
          {service.description}
        </motion.p>
      </motion.div>

      {/* Título secundario */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Qué incluye nuestro servicio de{" "}
        <span className="text-fuchsia-600 underline">{service.name}</span>
      </motion.h2>

      {/* Grid de beneficios */}
      <motion.div
        className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {service.services.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <motion.div
              key={index}
              variants={card}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-t from-white to-purple-200 border shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              {/* Icono + título */}
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Icon className="w-7 h-7 text-fuchsia-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>

              {/* Subtítulo */}
              {benefit.subtitle && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {benefit.subtitle}
                </p>
              )}

              {/* Lista */}
              <ul className="mt-2 space-y-2">
                {benefit.list?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm leading-relaxed"
                  >
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
