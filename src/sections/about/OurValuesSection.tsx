"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function OurValuesSection() {
  const values = [
    {
      title: "Innovación constante en Devhooh",
      description: "Adoptamos tecnologías modernas como IA y Blockchain para crear soluciones únicas y mantenernos a la vanguardia.",
      image: "/assets/images/innovacion.png",
      alt: "Innovación constante",
    },
    {
      title: "Calidad y enfoque al cliente",
      description: "Entregamos software confiable y eficiente, siempre adaptado a las necesidades de cada cliente.",
      image: "/assets/images/calidad.png",
      alt: "Calidad y enfoque al cliente",
    },
    {
      title: "Transparencia y colaboración",
      description: "Fomentamos comunicación clara y trabajo conjunto, generando confianza y proyectos bien gestionados.",
      image: "/assets/images/transparencia.png",
      alt: "Transparencia y colaboración",
    },
    {
      title: "Crecimiento y excelencia continua",
      description: "Impulsamos el aprendizaje constante y la mejora profesional para ofrecer soluciones modernas y competitivas.",
      image: "/assets/images/crecimiento.png",
      alt: "Crecimiento y excelencia continua",
    },
    {
      title: "Responsabilidad y cumplimiento",
      description: "Cumplimos con lo prometido, entregando proyectos a tiempo y con los más altos estándares de calidad.",
      image: "/assets/images/responsabilidad.png",
      alt: "Responsabilidad y cumplimiento",
    },
  ];

  // Variantes para contenedor (stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay entre cada card
      },
    },
  };

  // Variantes para cada card
  const cardVariants: Variants = {
    hidden: { opacity: 0},
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // El texto saldra uno por uno
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const splitText = (text: string) => text.split("");

  return (
    <section className="bg-white py-16 my-20 px-2 md-tablet:px-4">
      <div className="container mx-auto max-w-7xl text-center">

        <motion.h2
          className="
          text-4xl md-tablet:text-5xl font-extrabold mb-12 text-colorPrimario2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        >
          {splitText("Nuestros Valores").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Contenedor animado con stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                bg-colorFondo rounded-2xl shadow-xl p-6 flex flex-col items-center 
                text-center border border-gray-400 w-80 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-xl
              "
            >
              <div className="relative mb-4">
                <Image
                  width={500}
                  height={500}
                  src={value.image}
                  alt={value.alt}
                  className="w-28 h-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-colorPrimario2 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700/80">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
