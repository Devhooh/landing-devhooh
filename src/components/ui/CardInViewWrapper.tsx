"use client";
import { motion, Variants, Transition } from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

type Direction = 'x' | 'y';

interface CardInViewWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  offset?: number; 
  transition?: Transition;
  viewportAmount?: number; 
}

// 2. Interfaz para la prop 'custom' (solo necesitamos la dirección y el offset)
interface CustomProps {
  direction: Direction;
  offset: number;
  transition: Transition;
}

// 3. Variantes para el efecto de tarjeta (menos opacidad y menos movimiento)
const cardAnimationVariants: Variants = {
  hidden: (custom: CustomProps) => ({ 
    opacity: 0.9, // Menos desvanecimiento
    scale: 0.98,  // Ligera contracción
    [custom.direction]: custom.offset,
  }),
  // Estado final: Totalmente visible y en su posición.
  show: (custom: CustomProps) => ({ 
    opacity: 1, 
    scale: 1, 
    x: 0,
    y: 0,
    transition: custom.transition,
  }),
};


export function CardInViewWrapper({ 
  children, 
  className, 
  delay = 0.1,
  direction = 'y',
  offset = 15, 
  transition,
  viewportAmount = 0.2,
}: CardInViewWrapperProps) {

  // Transición por defecto más suave y rápida para cards
  const defaultTransition: Transition = { 
    duration: 0.1, // Un poco más rápida
    delay: delay,
    type: "tween", // 'tween' es más ligero que 'spring'
    ease: "easeInOut",
  }; 

  // Objeto 'custom' que pasamos a Framer Motion
  const customProps: CustomProps = {
    direction,
    offset,
    transition: transition ? transition : defaultTransition,
  };
  
  // Fix de SSR: Renderiza el estado 'hidden' en el servidor
  const initialStyle = { 
    opacity: 0.9, // Coincide con la variante 'hidden'
    scale: 0.98, // Coincide con la variante 'hidden'
    [direction]: offset 
  };
  
  return (
    <motion.div
      className={className}
      initial="hidden" 
      whileInView="show"
      variants={cardAnimationVariants}
      custom={customProps}
      viewport={{ once: true, amount: viewportAmount }} 
      style={initialStyle} 
      suppressHydrationWarning={true} 
    >
      {children}
    </motion.div>
  );
}
