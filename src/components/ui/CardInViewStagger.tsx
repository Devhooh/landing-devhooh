"use client";

import { motion, Variants } from "@/utils/Motion";
import React from 'react';

type Direction = 'x' | 'y' | 'none';

interface CardInViewStaggerProps {
  children: React.ReactNode;
  className?: string;
  index?: number; 
  direction?: Direction;
  offset?: number;
  staggerDelay?: number; 
}

// función
const generateStaggerVariants = (
  i: number, 
  direction: Direction, 
  offset: number,
  staggerDelay: number
  ): Variants => {
  const hiddenProps: { x?: number; y?: number } = {};
  
  if (direction === 'y') {
    hiddenProps.y = offset; 
  } else if (direction === 'x') {
    hiddenProps.x = offset; 
  }

  return {
    hidden: { ...hiddenProps, opacity: 0 },
    show: {
      opacity: 1,
      x: 0, 
      y: 0, 
      transition: { 
        delay: i * staggerDelay, 
        type: "tween", 
        stiffness: 80, 
        damping: 15,
      },
    },
  };
};

export default function CardInViewStagger({
  children,
  className,
  index = 0,
  direction = 'y',
  offset = 40,
  staggerDelay = 0.15
}: CardInViewStaggerProps) {

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2}}
      variants={generateStaggerVariants(index, direction, offset, staggerDelay)}
      custom={index} 
    >
      {children}
    </motion.div>
  );
}