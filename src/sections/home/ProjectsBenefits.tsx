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
    "Garantizamos la entrega de soluciones de software de alto nivel, con código limpio, escalable y diseñado para ofrecer una Experiencia de Usuario (UX) sorprendente."
  },
  {
    icon: <Wrench className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Transparencia y colaboración",
    description:
      "Trabajamos de la mano contigo en ciclos cortos (Sprints). Mantenemos comunicación constante a través de herramientas de gestión para total transparencia en cada avance."
  },
  {
    icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    title: "Responsabilidad y cumplimiento",
    description:
      "Nuestro compromiso es con el resultado final. Cumplimos con los plazos de entrega acordados y con los estándares internacionales de calidad y seguridad de datos en el desarrollo."
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
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h2 
            className="text-4xl tablet-md:text-5xl font-extrabold mb-7 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            ¿Por qué Devhooh?
            <br/>
            Nuestras ventajas competitivas
          </motion.h2>

          <motion.p 
            className="text-gray-200 text-base tablet-md:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vamos más allá de la programación. Nuestro valor reside en la excelencia continua, la metodología ágil y el compromiso total con la visión de tu proyecto. Aseguramos que cada solución de software a medida impulse el crecimiento y la eficiencia de tu negocio.
          </motion.p>
        </motion.div>

        {/* Cards de beneficios */}
        <motion.div
          className="flex flex-col tablet-md:flex-row gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={listItemVariants}
              className="flex flex-col gap-4 bg-colorDarkFondo5 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex-1"
            >
              <div>{benefit.icon}</div>
              <h3 className="text-xl tablet-md:text-2xl font-bold text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-200 text-sm tablet-md:text-base">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
