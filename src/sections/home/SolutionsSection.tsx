"use client";

import { motion, Variants } from "framer-motion";
import { SolutionCard } from "./SolutionCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Webs & Software",
      description:
        "Desarrollamos páginas web profesionales y software a medida que aumentan la visibilidad online, mejoran la experiencia del cliente y optimizan los procesos internos de tu empresa.",
      image: "/assets/images/webSoft.png",
      benefits: [
        "Código limpio y escalable para crecer sin límites",
        "Diseños adaptados a la identidad de tu marca",
        "Integraciones fluidas con herramientas de gestión",
      ],
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Creamos aplicaciones móviles nativas y multiplataforma que combinan diseño atractivo, alto rendimiento y compatibilidad total con iOS y Android para maximizar tu alcance.",
      image: "/assets/images/mobil.png",
      benefits: [
        "Notificaciones push para aumentar la retención",
        "Interfaz intuitiva que mejora la usabilidad",
        "Optimización para un rendimiento rápido y estable",
      ],
    },
    {
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones de inteligencia artificial y machine learning que automatizan tareas, reducen costes y aportan datos valiosos para decisiones más estratégicas.",
      image: "/assets/images/ia.png",
      benefits: [
        "Chatbots y asistentes virtuales personalizados",
        "Predicciones basadas en análisis de datos",
        "Automatización inteligente de procesos repetitivos",
      ],
    },
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.3 },
    },
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden relative">

      {/* Encabezado mejorado */}
      <motion.div
        className="relative z-10 px-4 md-tablet:px-8 flex flex-col text-center items-center mb-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-4xl">
          
          {/* Título principal con animación letra por letra */}
          <motion.h2
            variants={textVariants}
            className="text-4xl md-tablet:text-5xl font-extrabold mb-8 leading-tight text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario3 bg-clip-text"
          >
            Impulsamos tu negocio con
            soluciones modernas
          </motion.h2>

          {/* Subtítulo mejorado */}
          <motion.p
            className="text-colorPrimario1/80 text-lg md-tablet:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={textVariants}
          >
            Desde tu primera idea hasta el lanzamiento, desarrollamos webs, apps y sistemas inteligentes que transforman tu presencia digital y optimizan cada proceso de tu negocio.
          </motion.p>

          {/* Estadísticas rápidas */}
          <motion.ul
            className="flex flex-wrap justify-center gap-8 mt-10"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            <li className="text-center">
              <div className="text-2xl md-tablet:text-4xl font-bold text-colorPrimario5">3+</div>
              <p className="text-base md-tablet:text-xl text-colorPrimario1/70">Especialidades</p>
            </li>
            <li className="text-center">
              <div className="text-2xl md-tablet:text-4xl font-bold text-colorSecundario1">100%</div>
              <p className="text-base md-tablet:text-xl text-colorPrimario1/70">Personalizado</p>
            </li>
            <li className="text-center">
              <div className="text-2xl md-tablet:text-4xl font-bold text-colorSecundario3">24/7</div>
              <p className="text-base md-tablet:text-xl text-colorPrimario1/70">Soporte</p>
            </li>
          </motion.ul>
        </div>
      </motion.div>

      {/* Cards mejoradas */}
      <div className="relative z-10 w-full px-4 md-tablet:px-8">
        <div className="mx-auto flex flex-col gap-16 max-w-[1400px] justify-center">
          {solutions.map((solution, i) => (
            <SolutionCard
              key={i}
              title={solution.title}
              description={solution.description}
              image={solution.image}
              benefits={solution.benefits}
              reverse={i % 2 === 1}
              index={i}
            />
          ))}
        </div>

        {/* Botón mejorado */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-20"
        >
          <Link href="/services" className="group">
            <motion.button 
              className="relative overflow-hidden text-lg md-tablet:text-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario2 text-white py-4 px-10 rounded-2xl font-semibold shadow-[0_0_25px_rgba(103,61,230,0.3)] hover:shadow-[0_0_35px_rgba(103,61,230,0.5)] transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              <p className="relative z-10">
                Descubre todas nuestras soluciones
              </p>
              <ArrowRight className="flex-shrink-0 relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}