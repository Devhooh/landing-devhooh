"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";
import React from 'react';

interface InViewAnimationWrapperProps {
  variants?: Variants; 
  transition?: HTMLMotionProps<'div'>['transition']; 
  className?: string;
  children: React.ReactNode;
  once?: boolean;
  amount?: number;
}

// Variants por defecto para una animación simple de "fade-up"
const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 15 } },
};

export default function InViewAnimationWrapper({
  variants = defaultVariants,
  transition,
  className,
  children,
  once = true,
  amount = 0.1,
}: InViewAnimationWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: once, amount: amount }} 
      transition={transition}
    >
      {children}
    </motion.div>
  );
}