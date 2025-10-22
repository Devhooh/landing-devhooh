"use client";

import { motion, Variants } from "@/utils/Motion";
import React, { ReactNode } from 'react';

interface FloatingWrapperProps {
  children?: ReactNode; // Puede recibir o no elementos hijos
  className?: string;
  // Opcional: permitir anular las variantes si es necesario
  customVariants?: Variants; 
  duration?: number;
  rotation?: number;
}

export function FloatingWrapper({ 
  children, 
  className, 
  customVariants, 
  duration = 3, 
  rotation = 5 
}: FloatingWrapperProps) {

  // Usa las variantes predeterminadas o las personalizadas
  const variantsToUse: Variants = customVariants || {
    animate: {
      y: [0, -10, 0],
      rotate: [0, rotation, 0],
      transition: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={variantsToUse}
      animate="animate" // Inicia la animación de forma automática
    >
      {children}
    </motion.div>
  );
}