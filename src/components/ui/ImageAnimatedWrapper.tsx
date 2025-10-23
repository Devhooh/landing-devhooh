"use client";

import { motion, Variants} from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

type Direction = 'x' | 'y';

const wrapperVariants: Variants = {
  initial: (custom: { direction: Direction, offset: number, scale: number }) => ({
    opacity: 0,
    scale: custom.scale,
    [custom.direction]: custom.offset,
  }),
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 80,
      delay: 0.1,
    },
  },
};

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  direction?: Direction; 
  offset?: number;
  scale?: number;
  viewportAmount?: number;
}

export default function ImageAnimatedWrapper({ 
  children,
  className,
  direction = 'y',
  offset = 30,
  scale = 1,
  viewportAmount = 0.3
}: AnimatedWrapperProps) {
  const customProps = { direction, offset, scale };

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: viewportAmount }} 
      variants={wrapperVariants}
      custom={customProps}
    >
      {children} 
    </motion.div>
  );
}
