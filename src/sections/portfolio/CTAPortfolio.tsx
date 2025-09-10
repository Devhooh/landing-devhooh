"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export default function CTAServices() {
  const splitText = (text: string) => text.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        
        {/* Contenido principal */}
        <div className="space-y-8">
          
          {/* Título principal animado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 leading-tight"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {splitText("Cuando estés listo:").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="text-white"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>
            
            <motion.h3
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-bold"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03, delayChildren: 0.3 } } }}
            >
              {splitText("Hablemos sobre tu ").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="text-colorHover5"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {splitText("proyecto").map((letter, idx) => (
                <motion.span
                  key={idx + 100}
                  className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h3>
          </motion.div>

          {/* Elementos visuales decorativos */}
          <motion.div
            className="flex justify-center items-center gap-8 my-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Sparkles flotantes */}
            <motion.div variants={floatingVariants} animate="animate">
              <Sparkles className="w-8 h-8 text-colorPrimario5" />
            </motion.div>
            
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div>
            
            <motion.div 
              variants={floatingVariants} 
              animate="animate"
              style={{ animationDelay: "1s" }}
            >
              <Users className="w-10 h-10 text-colorSecundario1" />
            </motion.div>
            
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-colorHover5 to-transparent"></div>
            
            <motion.div 
              variants={floatingVariants} 
              animate="animate"
              style={{ animationDelay: "0.5s" }}
            >
              <Sparkles className="w-6 h-6 text-colorPrimario7" />
            </motion.div>
          </motion.div>

          {/* Botón principal mejorado */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative overflow-hidden px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_30px_rgba(103,61,230,0.5)] hover:shadow-[0_0_40px_rgba(103,61,230,0.7)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  Ponte en contacto
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Estadísticas de confianza */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-2xl font-bold text-colorPrimario5">50+</div>
              <div className="text-sm text-colorHover5">Proyectos exitosos</div>
            </div>
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-2xl font-bold text-colorSecundario1">98%</div>
              <div className="text-sm text-colorHover5">Clientes satisfechos</div>
            </div>
            <div className="text-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-2xl font-bold text-colorPrimario7">24h</div>
              <div className="text-sm text-colorHover5">Tiempo de respuesta</div>
            </div>
          </motion.div>

          {/* Mensaje final mejorado */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md-tablet:text-xl text-colorHover5 font-semibold leading-relaxed mb-6">
              Desde startups hasta grandes empresas, 
              <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text font-bold">
                {" "}tú puedes ser el siguiente
              </span>
            </p>
            
            {/* Call to action secundario */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/portfolio" className="text-colorHover5 hover:text-colorPrimario5 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Ver nuestro portafolio
              </Link>
              <span className="text-colorHover5/50">•</span>
              <Link href="/about" className="text-colorHover5 hover:text-colorSecundario1 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Conoce nuestro equipo
              </Link>
              <span className="text-colorHover5/50">•</span>
              <Link href="/services" className="text-colorHover5 hover:text-colorPrimario7 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
                Nuestros servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}