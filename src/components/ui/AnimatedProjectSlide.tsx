"use client";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from 'react';

// 💡 1. Variante del ÍTEM: Define el movimiento individual.
const itemVariants: Variants = {
  // Estado inicial: Abajo y oculto
  hidden: { opacity: 0, y: 30 }, 
  // Estado final: Posición normal, el timing lo dicta el padre.
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, // Ajusta la rigidez del movimiento (velocidad)
      damping: 20      // Ajusta el rebote
    } 
  },
};

interface AnimatedProjectSlideProps {
  children: ReactNode;
}

// Este componente envuelve tu ProjectCard (Server Component)
export function AnimatedProjectSlide({ children }: AnimatedProjectSlideProps) {
    return (
        <motion.div 
            variants={itemVariants} 
            className="h-full w-full" 
        >
            {children}
        </motion.div>
    );
}