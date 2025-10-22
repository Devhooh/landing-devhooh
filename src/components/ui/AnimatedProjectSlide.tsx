"use client";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from 'react';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20 
    } 
  },
};

interface AnimatedProjectSlideProps {
  children: ReactNode;
}
export function AnimatedProjectSlide({ children }: AnimatedProjectSlideProps) {
  return (
    <motion.div 
      variants={itemVariants} 
      className="h-full w-full" 
    >
      {children}
    </motion.div>
  );
}