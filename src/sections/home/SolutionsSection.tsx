"use client";

import { motion, Variants } from "framer-motion";
import { SolutionCard } from "./SolutionCard";
import Link from "next/link";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Webs & Software",
      description:
        "Diseñamos sitios web y sistemas a medida, rápidos, escalables y optimizados para mejorar la presencia digital de tu negocio.",
      image: "/assets/images/webSoftware.png",
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Creamos apps nativas y multiplataforma para iOS y Android, enfocadas en experiencia de usuario y rendimiento eficiente.",
      image: "/assets/images/mobil.png",
    },
    {
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones de IA y machine learning que automatizan procesos y generan decisiones inteligentes para tu empresa.",
      image: "/assets/images/ia.png",
    },
  ];

  // Variants para animación de textos
  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, delay: 0.3 } },
};

  return (
    <section className="w-full py-12 bg-colorHover6 overflow-x-hidden">
      {/* Encabezado */}
      <motion.div
        className="px-5 md-tablet:px-10 flex flex-col text-center table-lg:flex-row justify-center items-center mb-12 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="max-w-2xl" variants={containerVariants}>
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-colorPrimario2 to-colorPrimario1"
            variants={textVariants}
          >
            Impulsamos tu negocio con{" "}
            <span className="bg-clip-text bg-colorSecundario3">
              soluciones modernas
            </span>
          </motion.h2>

          <motion.p
            className="text-colorPrimario1 text-base md-tablet:text-lg leading-relaxed"
            variants={textVariants}
          >
            Desde tu primera idea hasta el lanzamiento,{" "}
            <span className="font-semibold text-colorSecundario2">desarrollamos webs</span>,{" "}
            <span className="font-semibold text-colorSecundario2">apps</span> y{" "}
            <span className="font-semibold text-colorSecundario2">sistemas inteligentes</span>{" "}
            que ayudan a tu empresa a destacar en el entorno digital, optimizando procesos y mejorando la experiencia de tus usuarios.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cards */}
      <div className="w-full pt-12 px-5 md-tablet:px-10">
        <div className="mx-auto flex flex-col gap-10 max-w-[1550px] justify-center">
          {solutions.map((s, i) => (
            <SolutionCard
              key={i}
              title={s.title}
              description={s.description}
              image={s.image}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        {/* Botón */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Link href="/services">
            <button className="text-xl md-tablet:text-2xl bg-colorSecundario2 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Vea todos nuestros servicios
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
