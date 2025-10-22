"use client";
import { motion, Variants, Transition} from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'x' | 'y';
  offset?: number;
  variants?: Variants;
  transition?: Transition;
}

export function AnimatedHeading({ 
  children, 
  className, 
  delay = 0.1,
  direction = 'y',
  offset = 30,
  variants,
  transition,
}: AnimatedHeadingProps) {

  const defaultTransition: Transition = { duration: 0.3, delay: delay };

  const finalVariants = variants || {
    hidden: { opacity: 0, [direction]: offset },
    show: { opacity: 1, [direction]: 0 },
  };

  return (
    <motion.div
      className={className}
      transition={transition ? transition : defaultTransition}
      variants={finalVariants} // 💡 USAR finalVariants
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}