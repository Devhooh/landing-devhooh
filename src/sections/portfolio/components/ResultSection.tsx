"use client"
import { Project } from "@/data/portfolioDetails";
import { X, Check, TrendingUp, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ResultSectionProps {
  project: Project;
}

const descriptionVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20, y: 10 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ResultSection({ project }: ResultSectionProps) {
  const result = project.result;

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 md-tablet:px-8">
        
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
            <Award className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-semibold">Proyecto completado con éxito</span>
          </motion.div>

          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText("Resultados ").map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-colorPrimario2"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText("obtenidos").map((letter, idx) => (
              <motion.span
                key={idx + 100}
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Descripción mejorada */}
          <motion.p
            className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed"
            variants={descriptionVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {result.descripcion}
          </motion.p>
        </div>

        {/* Comparativa Before/After mejorada */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-8 mb-16">
          
          {/* Bloque "Antes" */}
          <motion.div
            className="relative group"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-50/60 to-red-100/40 backdrop-blur-sm border-2 border-red-200/30 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300">
              
              {/* Header con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  <X className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-red-700">Antes</h3>
                  <p className="text-sm text-red-600 font-medium">Situación inicial</p>
                </div>
              </div>

              {/* Lista de problemas */}
              <motion.ul
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4"
              >
                {result.antes.map((item, index) => (
                  <motion.li 
                    variants={listItem}
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50 border border-red-200/30 hover:bg-red-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-colorPrimario1/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Badge de estado */}
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-red-600 font-semibold text-sm">Problemática inicial</span>
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500/20"></div>
            </div>
          </motion.div>

          {/* Bloque "Después" */}
          <motion.div
            className="relative group"
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-50/60 to-green-100/40 backdrop-blur-sm border-2 border-green-200/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300">
              
              {/* Header con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-green-700">Después</h3>
                  <p className="text-sm text-green-600 font-medium">Resultado alcanzado</p>
                </div>
              </div>

              {/* Lista de mejoras */}
              <motion.ul 
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4"
              >
                {result.despues.map((item, index) => (
                  <motion.li 
                    variants={listItem}
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 border border-green-200/30 hover:bg-green-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-colorPrimario1/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Badge de éxito */}
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 font-semibold text-sm">Objetivos cumplidos</span>
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
          </motion.div>
        </div>

        {/* Flecha de transformación */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            
            {/* Círculos decorativos pulsantes */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-colorPrimario5/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Métricas de impacto */}
        <motion.div
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-colorPrimario1/70">Objetivos alcanzados</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario5 mb-2">✓</div>
            <div className="text-sm text-colorPrimario1/70">Cliente satisfecho</div>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorSecundario1 mb-2">24/7</div>
            <div className="text-sm text-colorPrimario1/70">Funcionamiento óptimo</div>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <Award className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Transformación exitosa completada
            </span>
            <TrendingUp className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}