"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Star, Wrench } from "lucide-react";

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
    icon: <Star className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Calidad y enfoque al cliente",
    description:
      "Nos comprometemos a entregar soluciones de alto nivel, diseñadas para sorprender a tus usuarios y ajustadas a tus necesidades específicas.",
  },
  {
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Transparencia y colaboración",
    description:
      "Trabajamos de la mano contigo, manteniendo comunicación constante y claridad en cada etapa del proyecto.",
  },
  {
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Responsabilidad y cumplimiento",
    description:
      "Cumplimos con los plazos, estándares y compromisos adquiridos, asegurando confianza y resultados consistentes para tu negocio.",
  },
];

export function ProjectsBenefits() {
  return (
    <section className="bg-colorDarkFondo2 w-full mb-20 tablet-md:mb-24  px-6 tablet-md:px-12 py-16">

      <div className="max-w-6xl mx-auto ">
        {/* Título SEO y descripción */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-4xl tablet-md:text-5xl font-extrabold mb-7 text-white p"
          >
            Por qué escoger <span className="text-colorSecundario3"> Devhooh</span>
          </motion.h2>
          <motion.p
            className="text-gray-200 text-base tablet-md:text-lg max-w-3xl mx-auto"
          >
            Nos destacamos por nuestra calidad, enfoque al cliente y compromiso con cada proyecto. Transparencia, colaboración y excelencia continua son los valores que garantizan resultados efectivos y negocios que crecen.
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
