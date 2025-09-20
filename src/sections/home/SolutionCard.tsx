"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;  
  reverse?: boolean;
  benefits?: string[];
  gradient?: string;
  accentColor?: string;
  index?: number;
}

export function SolutionCard({
  title,
  description,
  image,
  reverse = false,
  benefits = [],
  index = 0
}: SolutionCardProps) {

  // Variantes de animación mejoradas
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 50, 
        damping: 15,
        delay: index * 0.2
      } 
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 1, scale: 0.8, rotate: reverse ? -5 : 5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 12,
        delay: 0.3 + index * 0.2
      } 
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: reverse ? 50 : -50 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 50,
        delay: 0.4 + index * 0.2
      } 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={`relative max-w-5xl mx-auto
        ${reverse ? "table-lg:ml-auto table-lg:mr-0" : "table-lg:ml-0 table-lg:mr-auto"}`}
    >
      <div
        className={`
          relative rounded-3xl p-8 md-tablet:p-12
          bg-colorFondo
          backdrop-blur-sm border border-white/20
          shadow-[0_0_30px_rgba(0,0,0,0.08)]
          hover:shadow-[0_0_40px_rgba(103,61,230,0.15)]
          transition-all duration-500
          flex flex-col table-lg:flex-row gap-8 md-tablet:gap-12
          ${reverse ? "table-lg:flex-row-reverse" : ""}
          group
        `}
      >
        
        {/* Efectos decorativos */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
        <div className={`absolute bottom-6 ${reverse ? 'right-6' : 'left-6'} w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40`}></div>

        {/* Contenedor de imagen */}
        <motion.div 
          className="table-lg:w-2/5 flex items-center justify-center relative"
          variants={imageVariants}
        >
          <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              width={450} // ajusta al tamaño máximo mostrado en pantalla
              height={350} // ajusta al alto máximo mostrado en pantalla
              src={image}
              alt={title}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 250px"
              className="w-full h-auto object-contain max-w-[250px] md-tablet:max-w-[280px] transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Círculo decorativo flotante */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 opacity-20"
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>

        {/* Contenido de texto */}
        <motion.div 
          className="table-lg:w-3/5 flex flex-col justify-center text-center table-lg:text-left"
          variants={contentVariants}
        >
          {/* Número de índice */}
          <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm mb-4 ${reverse ? 'table-lg:ml-auto' : ''} mx-auto table-lg:mx-0`}>
            {String(index + 1).padStart(2, '0')}
          </div>

          <h3 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-extrabold text-colorPrimario2 mb-4 group-hover:text-colorSecundario1 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* Lista de beneficios mejorada */}
          {benefits.length > 0 && (
            <div
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-colorPrimario2 mb-4">
                Características principales:
              </h4>
              <ul className="space-y-3">
                {benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group/item"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center mt-0.5 shadow-sm group-hover/item:shadow-md transition-all duration-200">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-colorPrimario1/80 text-sm md-tablet:text-base leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Badge de tecnología */}
          <div className={`mt-8 ${reverse ? 'table-lg:text-right' : 'table-lg:text-left'} text-center`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 text-colorPrimario5 border border-colorPrimario5/20">
              Tecnología de vanguardia
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}