"use client";
import { motion } from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

interface AnimatedHeadingProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'x' | 'y';
    offset?: number;
}

export function AnimatedHeading({ 
  children, 
  className, 
  delay = 0.1,
  direction = 'y',
  offset = 30,
}: AnimatedHeadingProps) {
    const initialProps = { 
      opacity: 0,
      [direction]: offset 
    };

    const viewProps = {
      opacity: 1,
      [direction]: 0 
    };

  return (
    <motion.div
      className={className}
      initial={initialProps}
      whileInView={viewProps}
      transition={{ duration: 0.3, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}