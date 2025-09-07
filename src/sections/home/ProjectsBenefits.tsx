"use client";

import { motion, Variants } from "framer-motion";
import { Rocket, Star, Wrench } from "lucide-react";

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
  }),
};

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Entrega rápida",
    description:
      "Todos los proyectos se ejecutan con tiempos optimizados sin comprometer la calidad, asegurando resultados en tiempo récord.",
  },
  {
    icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Calidad premium",
    description:
      "Diseños y soluciones de alto nivel que sorprenden a los usuarios y elevan la experiencia de tu negocio.",
  },
  {
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Soporte completo",
    description:
      "Acompañamiento dedicado durante todo el proceso y después del lanzamiento, para que tu proyecto siempre funcione perfectamente.",
  },
];

export function ProjectsBenefits() {
  return (
    <section className="bg-colorDarkFondo2 w-full mb-8 px-6 tablet-md:px-12 py-16">

      <div className="max-w-6xl mx-auto ">
        {/* Título SEO y descripción */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl tablet-md:text-4xl font-extrabold mb-4 text-white"
          >
            Beneficios clave de nuestros proyectos
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base tablet-md:text-lg max-w-3xl mx-auto"
          >
            Con cada proyecto, garantizamos rapidez, calidad y soporte completo, asegurando que tu negocio alcance resultados medibles y clientes satisfechos.
          </motion.p>
        </motion.div>

        {/* Cards de beneficios */}
        <motion.div
          className="flex flex-col tablet-md:flex-row gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={listItemVariants}
              className="flex flex-col gap-4 bg-colorDarkFondo5 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1"
            >
              <div>{benefit.icon}</div>
              <h4 className="text-xl tablet-md:text-2xl font-bold text-white">
                {benefit.title}
              </h4>
              <p className="text-gray-200 text-sm tablet-md:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
