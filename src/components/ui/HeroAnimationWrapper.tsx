"use client";

import { motion, Variants, HTMLMotionProps, Transition } from "framer-motion";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from 'react';

interface HeroAnimationWrapperProps {
    children: React.ReactNode;
}

export default function HeroAnimationWrapper({ children }: HeroAnimationWrapperProps) {
    // Variants para stagger en la lista
  const springTransition: Transition = {
      type: "spring",
      duration: 0.3,
    };

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0},
  };

  // La animación del título
  const titleAnimation: Partial<HTMLMotionProps<'h1'>> = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: springTransition,
  };

  // La animación del subtítulo
  const subtitleAnimation: Partial<HTMLMotionProps<'h2'>> = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.3, delay: 0.2 },
  };

  // La animación de la imagen
  const imageAnimation: Partial<HTMLMotionProps<'div'>> = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3, delay: 0.1 },
  };

  // Datos de la lista
  const listItems = [
    <>Aplicaciones <strong>web rápidas y escalables</strong> (Next.js)</>,
    <><strong>Apps móviles modernas y fluidas</strong> (iOS y Android)</>,
    <><strong>Integración de Inteligencia Artificial</strong> en tus procesos empresariales</>,
    <>Desarrollo de <strong>Sistemas empresariales personalizados</strong> (CRM, ERP)</>,
  ];

  return (
    <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">
      <motion.h1
        {...titleAnimation}
        className="order-1 text-center table-lg:text-left text-4xl md-tablet:text-5xl font-extrabold text-colorPrimario2 leading-tight tracking-tight"
      >
        Desarrollo de 
        <strong className="text-colorPrimario5"> software inteligente </strong> 
        a tu medida
      </motion.h1>
      <motion.div
        {...imageAnimation}
        className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
      >
        {children} 
      </motion.div>
      <motion.h2
        {...subtitleAnimation}
        className="order-3 text-lg md-tablet:text-xl text-center table-lg:text-left text-colorPrimario1 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
      >
        Desarrollo de páginas web modernas, aplicaciones móviles y sistemas empresariales con inteligencia artificial para que tu negocio sea más innovador, eficiente y competitivo en el mercado digital.
      </motion.h2>
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="
          order-4 space-y-2 text-base md-tablet:text-lg text-gray-800
          text-left table-lg:text-left max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0"
      >
        {listItems.map((item, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            className="flex items-center gap-3"
          >
            <CircleCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="order-5 flex justify-center items-center flex-col md-tablet:flex-row table-lg:justify-start pt-4 gap-4"
      >
        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
              bg-colorSecundario3 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ver nuestros servicios
          </motion.button>
        </Link>

        <Link href="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
              bg-white hover:bg-colorSecundario3 text-black rounded-2xl shadow-lg hover:shadow-xl hover:text-white transition-all duration-300"
          >
            Ver nuestro portafolio
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
