"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Animación del título letra por letra
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Animación general escalonada (container → hijos)
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // escalonado entre cards
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const splitText = (text: string) => text.split("");

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Entregas rápidas y confiables",
      description:
        "Cumplimos plazos y garantizamos que tu proyecto esté listo para despegar sin retrasos.",
      image: "/assets/icons/fast.png",
      alt: "Entregas rápidas y confiables",
    },
    {
      title: "Soluciones a medida",
      description:
        "Cada proyecto es único. Diseñamos estrategias y software que se adaptan exactamente a lo que necesitas.",
      image: "/assets/icons/solution.png",
      alt: "Soluciones a medida",
    },
    {
      title: "Trabajo colaborativo",
      description:
        "Te mantenemos al tanto en cada fase con metodologías ágiles y comunicación clara.",
      image: "/assets/icons/collaborative.png",
      alt: "Trabajo colaborativo",
    },
    {
      title: "Seguridad y calidad",
      description:
        "Aplicamos buenas prácticas para asegurar que tu producto sea confiable, escalable y protegido.",
      image: "/assets/icons/securities.png",
      alt: "Seguridad y calidad",
    },
    {
      title: "Crecimiento garantizado",
      description:
        "Creamos soluciones que no solo funcionan, sino que ayudan a que tu negocio evolucione y escale.",
      image: "/assets/icons/guaranteed.png",
      alt: "Crecimiento garantizado",
    },
  ];

  return (
    <section className="bg-colorHover5 py-10 md-tablet:px-8">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Título animado letra por letra */}
        <motion.h2
          className="text-4xl md-tablet:text-5xl font-extrabold py-12 text-colorPrimario2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("¿Por qué elegir a Devhooh?").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Cards animadas desde abajo en escalonado */}
        <motion.div
          className="flex flex-col px-4 pb-16 gap-8 md-tablet:gap-10 table-lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <motion.div
                variants={fadeUp}
                className={`flex items-center gap-4 
                  py-6 px-6 md-tablet:px-12
                  w-full md-tablet:w-3/4 lg:w-2/3
                  rounded-xl bg-white shadow-lg
                  flex-col tablet-md:flex-row
                  ${index % 2 !== 0 ? "tablet-md:flex-row-reverse" : ""}`}
              >
                {/* Imagen */}
                <div className="flex-shrink-0 w-20 h-20 relative">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                {/* Texto */}
                <div
                  className={`flex-grow min-w-0 text-center 
                    ${index % 2 === 0 ? "tablet-md:text-left" : "tablet-md:text-right"}`}
                >
                  <h3 className="text-2xl font-bold text-colorPrimario2 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            </div>
          ))}



        </motion.div>
      </div>
    </section>
  );
}
