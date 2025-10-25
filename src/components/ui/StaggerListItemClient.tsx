"use client";
import { motion, Variants } from "@/utils/Motion";
import React from 'react';
import { ReactNode } from "react";

type Direction = 'x' | 'y';

interface CustomProps {
  direction: Direction;
  offset: number;
  index: number;
  delayBase: number;
}

// 2. Variantes actualizadas para usar el índice y el retraso base en 'show'
const itemVariants: Variants = { 
  hidden: (custom: CustomProps) => ({ 
    opacity: 0, 
    [custom.direction]: custom.offset 
  }),
  show: (custom: CustomProps) => ({
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20,
      // 3. ¡La clave! Aplicamos el retraso escalonado
      delay: custom.index * custom.delayBase, 
    } 
  }),
};

interface StaggerListItemClientProps {
  children: ReactNode;
  className?: string;
  direction?: Direction; 
  offset?: number;
  index?: number;
  delayBase?: number;
}

export function StaggerListItemClient({ 
  children, 
  className, 
  direction = 'x',
  offset = -20,
  index = 0,
  delayBase = 0.1
}: StaggerListItemClientProps) {

  const customProps: CustomProps = {
    direction,
    offset,
    index,
    delayBase,
  };

  return (
    <motion.li
      variants={itemVariants}
      className={className}
      custom={ customProps }
    >
      {children}
    </motion.li>
  );
}