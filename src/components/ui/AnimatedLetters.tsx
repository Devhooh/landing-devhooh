"use client";

import { motion, Variants } from "@/utils/Motion";
import React from 'react';

interface AnimatedH2Props {
  text: string;
  className?: string;
  staggerDelay?: number;
  initialY?: number;
}

const letterVariants: Variants = {
  hidden: (customY: number) => ({ opacity: 0, y: customY }),
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

export function AnimatedLetters({ 
  text, 
  className, 
  staggerDelay = 0.03, 
  initialY = 20,
}: AnimatedH2Props) {
  
  // 2. Variantes del contenedor (para el staggerChildren)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { 
        staggerChildren: staggerDelay,
      },
    },
  };

  const splitText = text.split("");

  return (
    // 💡 Usamos motion.h2 directamente y removemos la lógica 'as={Wrapper}'
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }} 
      variants={containerVariants}
    >
      {splitText.map((letter, idx) => (
        <motion.span 
          key={idx} 
          variants={letterVariants}
          custom={initialY} // Pasa el valor Y inicial
          className="inline-block" // Crucial para que el movimiento funcione
        >
          {/* Si es un espacio, se asegura de renderizarlo con un espacio no rompible */}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
}