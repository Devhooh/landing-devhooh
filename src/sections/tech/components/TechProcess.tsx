"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";


interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface TechProcessProps {
  name: string;
  steps: ProcessStep[];
}

// Variantes para el contenedor (controla escalonado)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Variantes para cada step
const stepVariant: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function TechProcess({ name, steps }: TechProcessProps) {
  if (!steps || steps.length === 0) return null;
  const splitText = (text: string) => text.split("");

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md-tablet:px-12">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText(`Cómo trabajamos con ${name}`).map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-colorPrimario2"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Así trabajamos el servicio de <span className="font-bold text-colorPrimario5">{name}</span>, paso a paso con metodología ágil
          </motion.p>
        </div>

        {/* Timeline mejorado */}
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          
          {/* Línea principal del timeline */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-colorPrimario5 via-colorSecundario1 to-colorPrimario5 rounded-full shadow-lg"></div>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon =
              (Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
              Icons.HelpCircle;

              const isLast = index === steps.length - 1;
              
              return (
                <motion.div 
                  key={index} 
                  className="relative flex items-start gap-2 md-tablet:gap-8"
                  variants={stepVariant}
                >
                  
                  {/* Número del timeline mejorado */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center shadow-lg group hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-xl animate-pulse">{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Card del paso mejorada */}
                  <div className="flex-grow group">
                    <motion.div 
                      className="
                        relative p-4 md-tablet:p-8 rounded-3xl bg-white backdrop-blur-sm border-2 border-white/20 hover:border-colorPrimario5/30 shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)] transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      
                      {/* Efectos decorativos */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Header del step */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 flex items-center justify-center border border-colorPrimario5/30">
                          <Icon className="w-5 h-5 text-colorPrimario5" />
                        </div>
                        <div>
                          <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="text-sm text-colorPrimario5 font-semibold">Paso {index + 1}</div>
                            <div className="w-1 h-1 rounded-full bg-colorPrimario5/50"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Badge de estado */}
                      <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorPrimario5/10 border border-colorPrimario5/20">
                        <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
                        <span className="text-colorPrimario5 font-semibold text-sm">
                          {isLast ? "Entrega final" : "En progreso"}
                        </span>
                      </div>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Resumen final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Proceso optimizado para garantizar el éxito
            </span>
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}