"use client";

import { motion } from "framer-motion";
import { Code, Database, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";

export default function TechSection() {
  const technologies = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Frontend",
      description: "React, TypeScript y TailwindCSS para interfaces rápidas y modernas.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Backend",
      description: "Node.js y APIs modulares con buenas prácticas.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      title: "Mobile",
      description: "Apps multiplataforma con React Native / Flutter.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      title: "Cloud",
      description: "Despliegue y escalado en Vercel / AWS.",
    },
  ];

  const splitText = (text: string) => text.split("");

  // Variants para animar letra por letra
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Variants para fade + slide-up de bloques
  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título animado letra por letra */}
        <motion.h2
          className="text-4xl md-tablet:text-5xl font-extrabold mb-6 p-4 bg-gradient-to-r from-blue-800 to-violet-400 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Nuestro stack tecnológico").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Texto descriptivo */}
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg md-tablet:text-2xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={blockVariants}
          transition={{ duration: 0.6 }}
        >
          Estas son algunas de las herramientas que forman parte de nuestro stack.
        </motion.p>

        <div className="relative">
          <div className="hidden tablet-md:block absolute inset-x-0 top-7 h-px bg-gray-300" />
          <div className="block tablet-md:hidden absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />

          {/* Items animados */}
          <motion.div
            className="relative z-10 flex flex-col tablet-md:flex-row tablet-md:items-start md-tablet:justify-between gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }}
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center md-tablet:flex-1 px-4"
                variants={blockVariants}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow z-20"
                  initial={{ y: 0 }}
                  animate={{ y: [0, 3, 5, -10, 5, 3, 0, 3, 5, 10, 5, 3, 0] }} // movimiento tipo ola
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: idx * 0.3, // cada icono inicia la animación en un punto distinto
                  }}
                >
                  {tech.icon}
                </motion.div>

                <motion.h3
                  className="mt-4 text-lg font-semibold"
                  variants={blockVariants}
                >
                  {tech.title}
                </motion.h3>
                <motion.p
                  className="mt-2 text-sm text-gray-600 max-w-xs"
                  variants={blockVariants}
                >
                  {tech.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Botón animado */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/tecnologia"
          >
            <button className="text-xl md-tablet:text-2xl bg-gradient-to-r from-sky-600 to-blue-400 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Vea todos nuestros servicios
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


