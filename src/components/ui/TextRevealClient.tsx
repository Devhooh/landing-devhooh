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
  transition
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
  
  const initialStyle: React.CSSProperties = { 
    opacity: 0, 
    [direction]: offset,
  };

  return (
      <div className={className} style={{ overflow: "hidden" }}> 
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={revealVariants}
            transition={finalTransition}
            custom={customProps}
            viewport={{ once: true, amount: 0.3 }} 
            style={initialStyle} 
            suppressHydrationWarning={true}
        >
            {children}
        </motion.div>
    </div>
  );
}