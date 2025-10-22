"use client";
import { motion, Variants } from "framer-motion";
import React from 'react';
import { ReactNode } from "react";

type Direction = 'x' | 'y';

const itemVariants: Variants = { 
  hidden: (custom: { direction: Direction, offset: number }) => ({ 
    opacity: 0, 
    [custom.direction]: custom.offset 
  }),
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  },
};

interface StaggerListItemClientProps {
  children: ReactNode;
  className?: string;
  // 💡 Props de Flexibilidad
  direction?: Direction; 
  offset?: number;
}

export function StaggerListItemClient({ 
  children, 
  className, 
  direction = 'x',
  offset = -20
}: StaggerListItemClientProps) {

  return (
    <motion.li
      variants={itemVariants}
      className={className}
      custom={{ direction, offset }}
    >
      {children}
    </motion.li>
  );
}