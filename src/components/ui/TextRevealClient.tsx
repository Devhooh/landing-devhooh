"use client";

import { motion, Transition, Variants } from "@/utils/Motion";
import React, { ReactNode } from 'react';

type Direction = "x" | "y";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  offset?: number;
  transition?: Transition;
  animateOnLoad?: boolean;
}

interface CustomProps {
  direction: Direction;
  offset: number;
}

const revealVariants: Variants = {
  hidden: (custom: CustomProps) => ({ 
    opacity: 0, 
    [custom.direction]: custom.offset,
  }),
  show: { 
    opacity: 1, 
    x: 0,
    y: 0,
  },
};

export default function TextRevealClient({ 
  children, 
  className, 
  direction = 'y',
  offset = 30,
  transition,
  animateOnLoad = false,
}: TextRevealProps) {

  const defaultTransition: Transition = { 
    duration: 0.8,
    delay: 0.2,
    ease: "backOut",
  };

  const finalTransition = transition ? transition : defaultTransition;

  const customProps: CustomProps = {
    direction,
    offset,
  };
  
  const animationProps = animateOnLoad
    ? { animate: "show" } 
    : { whileInView: "show", viewport: { once: true, amount: 0.3 }};

  return (
    <motion.div
      initial="hidden"
      variants={revealVariants}
      transition={finalTransition}
      custom={customProps}
      suppressHydrationWarning={true}
      style={{ overflow: "hidden" }}
      {...animationProps}
      className={className}
    >
        {children}
    </motion.div>
  );
}