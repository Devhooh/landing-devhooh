"use client";
import { motion, Variants, Transition } from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

type Direction = 'x' | 'y';

interface SimpleInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  offset?: number;
  scale?: number;
  transition?: Transition;
  viewportAmount?: number;
}

interface CustomProps {
  direction: Direction;
  offset: number;
  scale: number;
  transition: Transition;
}

const animationVariants: Variants = {
  hidden: (custom: CustomProps) => ({ 
    opacity: 0, 
    scale: custom.scale, 
    [custom.direction]: custom.offset,
  }),
  show: (custom: CustomProps) => ({ 
    opacity: 1, 
    scale: 1, 
    x: 0,
    y: 0,
    transition: custom.transition,
  }),
};

export function SimpleInViewWrapper({
  children, 
  className, 
  delay = 0.1,
  direction = 'y',
  offset = 30,
  scale = 1,
  transition,
  viewportAmount = 0.2,
}: SimpleInViewProps) {

  const defaultTransition: Transition = { 
    duration: 0.5, 
    delay: delay,
    type: "spring",
    stiffness: 80,
  }; 

  const customProps: CustomProps = {
    direction,
    offset,
    scale,
    transition: transition ? transition : defaultTransition, 
  };
  
  const initialStyle: React.CSSProperties = { 
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