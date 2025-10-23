"use client";
import { motion, Variants, Transition } from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

type Direction = 'x' | 'y';

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  offset?: number;
  scale?: number;
  transition?: Transition;
  viewportAmount?: number;
}

// 2. Interfaz para la prop 'custom'
interface CustomProps {
  direction: Direction;
  offset: number;
  scale: number;
  transition: Transition;
}

// 3. Variantes estáticas usando la función custom
const animationVariants: Variants = {
  // Estado inicial (oculto y desplazado)
  hidden: (custom: CustomProps) => ({ 
    opacity: 0, 
    scale: custom.scale, 
    [custom.direction]: custom.offset,
  }),
  // Estado final (visible y en posición)
  show: (custom: CustomProps) => ({ 
    opacity: 1, 
    scale: 1, 
    x: 0,
    y: 0,
    transition: custom.transition,
  }),
};


export function InViewAnimationWrapper({ 
  children, 
  className, 
  delay = 0.1,
  direction = 'y',
  offset = 30,
  scale = 1,
  transition,
  viewportAmount = 0.3,
}: AnimateInViewProps) {

  // Transición por defecto tipo 'spring' (como ImageWrapper)
  const defaultTransition: Transition = { 
    duration: 0.5, 
    delay: delay,
    type: "spring",
    stiffness: 80,
  }; 

  // Objeto 'custom' que pasamos a Framer Motion
  const customProps: CustomProps = {
    direction,
    offset,
    scale,
    transition: transition ? transition : defaultTransition,
  };
  // Fix de SSR: Renderiza el estado 'hidden' en el servidor para evitar el salto
  const initialStyle = { 
    opacity: 0, 
    scale: scale,
    [direction]: offset 
  };
  
  return (
    <motion.div
      className={className}
      initial="hidden" 
      whileInView="show"
      variants={animationVariants}
      custom={customProps}
      viewport={{ once: true, amount: viewportAmount }} 
      style={initialStyle} 
      suppressHydrationWarning={true} 
    >
      {children}
    </motion.div>
  );
}
