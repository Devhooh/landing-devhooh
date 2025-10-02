"use client";

import { motion, Variants } from "framer-motion";
import { SolutionCard } from "./SolutionCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
  {
    title: "Desarrollo de Software Web Escalable", // Título más largo y específico
    description:
      "Creamos páginas web de alto rendimiento, e-commerce escalables y software a medida que aumentan tu visibilidad online. Optimizamos tus procesos empresariales con código limpio y tecnología moderna.",
    image: "/assets/images/webSoft.png",
    benefits: [
      "Código limpio y escalable para crecer sin límites",
      "Diseños adaptados a la identidad de tu marca y SEO",
      "Integraciones fluidas con herramientas de gestión (CRM/ERP)",
    ],
  },
  {
    title: "Apps Móviles Nativas (iOS & Android)", // Título con palabras clave
    description:
      "Especialistas en el desarrollo de Apps Móviles Nativas y multiplataforma. Creamos experiencias fluidas con alto rendimiento para iOS y Android, garantizando máxima usabilidad y retención de usuarios.",
    image: "/assets/images/mobil.png",
    benefits: [
      "Notificaciones push para aumentar la retención de usuarios",
      "Interfaz intuitiva que mejora la usabilidad (UX)",
      "Optimización para un rendimiento rápido y estable",
    ],
  },
  {
    title: "Integración de Machine Learning e IA", // Palabras clave específicas de IA
    description:
      "Implementamos Inteligencia Artificial y Machine Learning para automatizar la toma de decisiones. Desarrollamos chatbots avanzados, sistemas de predicción y automatización de procesos para reducir costos operativos.",
    image: "/assets/images/ia.png",
    benefits: [
      "Chatbots y asistentes virtuales personalizados",
      "Predicciones basadas en análisis de datos (Business Intelligence)",
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
            className="text-4xl md-tablet:text-5xl font-extrabold mb-8 leading-tight text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario3 bg-clip-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Desarrollo de <strong>soluciones web, móviles e IA</strong> para tu empresa
          </motion.h2>

          {/* Subtítulo mejorado */}
          <motion.p
            className="text-colorPrimario1/80 text-lg md-tablet:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Creamos páginas web profesionales, aplicaciones móviles nativas y multiplataforma y sistemas empresariales con inteligencia artificial. Te acompañamos desde la idea hasta el lanzamiento para mejorar tu presencia digital, automatizar procesos y hacer tu negocio más competitivo.
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