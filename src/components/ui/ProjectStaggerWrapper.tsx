"use client";

import { motion, Variants } from "framer-motion";
import React from 'react';

interface ProjectStaggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  isListItem?: boolean;
  index?: number; 
}

// Devuelve las variantes de texto/párrafo
const generateTextVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
  },
});

// Devuelve las variantes de lista
const generateListItemVariants = (): Variants => ({
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
});


export default function ProjectStaggerWrapper({
  children,
  className,
  isListItem = false,
  index = 0
}: ProjectStaggerWrapperProps) {

   // 1. Calcular las variantes a aplicar
  const variantsToApply: Variants = isListItem 
    ? generateListItemVariants() 
    : generateTextVariants(index);

      // 2. Si es un bloque (motion.div)
  if (!isListItem) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={variantsToApply}
        custom={index} 
      >
        {children}
      </motion.div>
    );
  }

    // 3. Si es un elemento de lista (motion.li)
  return (
    <motion.li
      className={className}
      variants={variantsToApply}
    >
      {children}
    </motion.li>
  );
}