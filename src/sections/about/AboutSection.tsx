"use client";
import { motion, Variants } from "framer-motion";
import { Sparkles, Award } from "lucide-react";
import AboutSectionCard from "./AboutSectionCard";

const centralVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AboutSection() {
  const splitText = (text: string) => text.split("");

  return (
    <div className="relative bg-colorFondo pt-20 w-full overflow-hidden">

      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        {/* Card central mejorada */}
        <div className="flex justify-center px-4">
          <motion.div
            variants={centralVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 text-white rounded-3xl p-8 md-tablet:p-12 shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 backdrop-blur-md max-w-5xl text-center"
          >
            {/* Efectos decorativos en la card */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>
            
            {/* Sparkles flotantes */}
            <motion.div 
              className="absolute top-10 left-10 text-colorPrimario5"
              variants={floatingVariants}
              animate="animate"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-12 right-12 text-colorSecundario1"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "1s" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>

            {/* Título con animación letra por letra */}
            <motion.h2
              className="text-2xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-8 leading-tight"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {splitText("Cuando la confianza es alta, ").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="text-white"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {splitText("la comunicación es ").map((letter, idx) => (
                <motion.span
                  key={idx + 100}
                  className="text-white"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {splitText("efectiva").map((letter, idx) => (
                <motion.span
                  key={idx + 200}
                  className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="text-lg table-lg:text-xl font-light leading-relaxed max-w-4xl mx-auto text-colorHover5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              En solo 5 años, Devhooh ha ayudado a startups y empresas a transformar sus ideas en soluciones digitales exitosas. 
              Con un equipo apasionado por la innovación, combinamos diseño, desarrollo y tecnologías de vanguardia para que tu proyecto destaque desde el primer día.
            </motion.p>

            {/* Badge de años de experiencia */}
            <motion.div
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Award className="w-5 h-5 text-colorPrimario5" />
              <span className="text-colorHover5 font-semibold">5+ años de experiencia</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Componente de las cards */}
        <AboutSectionCard/>
      </div>
    </div>
  );
}