"use client";

import { Brain, Smartphone, Database, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function FeaturedSection() {
  const items = [
    {
      title: "Aplicaciones Full Stack",
      icon: <Layers className="w-8 h-8 text-colorSecundario4" />,
      description:
        "Creamos aplicaciones web escalables con frontend y backend modernos. Gestionamos clústeres en Kubernetes, microservicios y pruebas de seguridad para garantizar rendimiento, agilidad y crecimiento.",
    },
    {
      title: "Inteligencia Artificial",
      icon: <Brain className="w-8 h-8 text-colorSecundario4" />,
      description:
        "Desarrollamos soluciones de inteligencia artificial aplicando algoritmos avanzados y aprendizaje automático. Desde el análisis de datos hasta el entrenamiento de modelos predictivos, creamos sistemas inteligentes adaptados a cada necesidad.",
    },
    {
      title: "Aplicaciones con datos intensivos",
      icon: <Database className="w-8 h-8 text-colorSecundario4" />,
      description:
        "Administramos bases de datos a gran escala e integramos análisis avanzados y aprendizaje automático. Garantizamos aplicaciones confiables, seguras y escalables que se adaptan a sus necesidades más exigentes.",
    },
    {
      title: "Aplicaciones móviles (Android & iOS)",
      icon: <Smartphone className="w-8 h-8 text-colorSecundario4" />,
      description:
        "Desarrollamos aplicaciones móviles nativas y multiplataforma, asegurando interfaces intuitivas, alto rendimiento y compatibilidad con Android e iOS. Creamos experiencias móviles atractivas, responsivas y adaptadas a las necesidades de los usuarios.",
    },
  ];

  // Variantes para el título
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="my-24 mx-4 md-tablet:mx-12 py-16 rounded-2xl bg-colorPrimario4">
      {/* Título animado */}
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl table-lg:text-4xl font-extrabold text-center mb-4 text-white"
      >
        En qué nos destacamos
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-base md-tablet:text-lg"
      >
        Soluciones tecnológicas que marcan la diferencia en cada proyecto.
      </motion.p>

      {/* Grid con stagger */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 tablet-md:grid-cols-2 gap-8 px-5 tablet-md:px-10"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-colorPrimario3 border border-colorPrimario2 rounded-2xl shadow-md p-6 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icono con círculo */}
            <div className="absolute top-4 left-4 bg-white/10 p-3 rounded-full">
              {item.icon}
            </div>

            {/* Título debajo del icono */}
            <h3 className="text-xl text-white font-semibold text-left mt-12">
              <span className="text-colorSecundario4">▹ </span>
              {item.title}
            </h3>

            {/* Descripción alineada a la izquierda */}
            <p className="text-gray-200 text-left mt-3">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
