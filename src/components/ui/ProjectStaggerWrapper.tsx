"use client";

import { motion, Variants } from "@/utils/Motion";
import React from 'react';

interface ProjectStaggerWrapperProps {
  children: React.ReactNode;
  className?: string;
  index?: number; 
}

// Devuelve las variantes de texto/párrafo
const generateTextVariants = (i: number): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, stiffness: 50 },
  },
});

export default function ProjectStaggerWrapper({
  children,
  className,
  index = 0
}: ProjectStaggerWrapperProps) {

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={generateTextVariants(index)}
      custom={index} 
    >
      {children}
    </motion.div>
  );
}