"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface TechBenefitsProps {
  name: string;
  benefits: Benefit[];
}

// Contenedor de cards (staggerChildren)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Cada card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function TechBenefits({benefits, name}: TechBenefitsProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Ventajas competitivas</span>
          </motion.div>

          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText("Beneficios al usar ").map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-white"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText(name).map((letter, idx) => (
              <motion.span
                key={idx + 100}
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorHover5 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Descubre por qué {name} es la elección perfecta para tu próximo proyecto
          </motion.p>
        </div>

        {/* Grid de beneficios mejorado */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon =
              (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
                LucideProps
              >) || Icons.HelpCircle;

            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className={`
                  group relative p-8 rounded-3xl 
                  bg-colorFondo/80 backdrop-blur-sm
                  border-2 border-white/20 hover:border-colorPrimario5/40
                  shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.2)]
                  transition-all duration-300 text-center
                `}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                
                {/* Efectos decorativos */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Badge numerado */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icono principal */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Contenido */}
                <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 mb-4 group-hover:text-colorPrimario5 transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-colorPrimario1 leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Badge de beneficio */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-semibold text-sm">
                    Beneficio clave
                  </span>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <Award className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-colorHover5 font-semibold text-lg">
              Aprovecha todas estas ventajas en tu próximo proyecto
            </span>
            <TrendingUp className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}