"use client";

import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface DevelopmentProcessProps {
  service: ServicesData;
}

// Variantes para el contenedor (controla escalonado)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // tiempo entre steps
    },
  },
};

// Variantes para cada step
const stepVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProcessServicesSection({ service }: DevelopmentProcessProps) {
  const steps = service.process; // array de pasos

  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">
      {/* Encabezado */}
      <motion.div
        className="max-w-2xl mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md-tablet:text-4xl font-bold mb-4 text-blue-900">
          Proceso de Desarrollo
        </h2>
        <p className="text-gray-600 text-xl">
          Así trabajamos el servicio de {service.name}, paso a paso.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative"
      >

        <div className="absolute top-0 left-2 w-1 h-full bg-fuchsia-400"></div>

        <motion.div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="mb-10 ml-16"
            >
              {/* Número del timeline */}
              <div className="text-2xl absolute -left-5 flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-600 text-white font-bold">
                {index + 1}
              </div>

              {/* Card del paso */}
              <motion.div 
                variants={stepVariant}
                className="bg-purple-50 border border-fuchsia-300 p-6 rounded-2xl shadow-md w-full md-tablet:w-[90%]"
              >
                <h3 className="text-lg text-blue-900 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                {step.points && (
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {step.points.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
