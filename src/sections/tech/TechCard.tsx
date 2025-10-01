"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

interface Technology {
  name: string;
  icon: IconType;
  color?: string;
  slug: string;
}

interface TechCardProps {
  title: string;
  subtitle: string;
  technologies: Technology[];
}

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: 0.2 } },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const techItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TechCard({ title, subtitle, technologies }: TechCardProps) {
  const splitText = (text: string) => text.split("");

  return (
    <article className="relative group">
      <div className="relative p-4 rounded-3xl bg-black border border-colorPrimario5/20 shadow-[0_0_30px_rgba(103,61,230,0.15)] hover:shadow-[0_0_40px_rgba(103,61,230,0.25)] transition-all duration-500 overflow-hidden">
        
        {/* Efectos decorativos */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

        {/* Badge superior */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div className="px-3 py-1 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <span className="text-white font-semibold text-sm">Especialización</span>
          </div>
        </div>

        {/* Título con animación letra por letra */}
        <motion.h3
          className="text-2xl md-tablet:text-3xl font-extrabold text-white mb-4 leading-tight"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText(title).map((letter, idx) => {
            return (
              <motion.span 
                key={idx} 
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.h3>

        {/* Subtítulo mejorado */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-colorHover5 mb-8 leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>

        {/* Contador de tecnologías */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-4 h-4 text-colorSecundario1" />
          <span className="text-colorHover5 font-semibold text-sm">
            {technologies.length} tecnologías disponibles
          </span>
        </div>

        {/* Grid de tecnologías mejorado */}
        <motion.ul
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="my-3 grid grid-cols-1 table-lg:grid-cols-2 lg-table:grid-cols-4 gap-4"
        >
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;

            return (
              <motion.li key={idx} variants={techItemVariants}>
                <Link
                  href={`/tecnologia/${tech.slug}`}
                  className={`
                    group/tech relative block p-2 rounded-2xl 
                    bg-gradient-to-r from-colorHover5/80 to-colorHover6/80
                    backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40
                    shadow-lg hover:shadow-xl 
                    transform transition-all duration-300 hover:scale-102 hover:-translate-y-1
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Icono con contenedor */}
                      <div className="w-8 h-8 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover/tech:bg-white/80 transition-all duration-300 shadow-sm">
                        <Icon className={`${tech.color || "text-colorPrimario2"} text-2xl group-hover/tech:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Información */}
                      <div>
                        <h3 className="text-xl md-tablet:text-base tablet-md:text-lg table-lg:text-base lg-table:text-xl font-bold text-colorPrimario2 group-hover/tech:text-colorPrimario5 transition-colors duration-300">
                          {tech.name}
                        </h3>
                        <p className="text-xs text-colorPrimario1/70 font-medium">
                          Explorar tecnología
                        </p>
                      </div>
                    </div>

                    {/* Flecha con animación */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-colorPrimario5/20 flex items-center justify-center group-hover/tech:bg-colorPrimario5 transition-all duration-300">
                      <ArrowRight className="flex-shrink-0 w-4 h-4 text-colorPrimario5 group-hover/tech:text-white transition-all duration-300" />
                    </div>
                  </div>

                  {/* Línea decorativa animada */}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Call to action */}
        <motion.div
          className="text-center my-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4}}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <span className="text-white font-semibold text-sm">
              Haz clic en cualquier tecnología para explorar más
            </span>
          </div>
        </motion.div>

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </article>
  );
}