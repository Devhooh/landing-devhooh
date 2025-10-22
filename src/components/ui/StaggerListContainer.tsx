"use client";

import { motion, Variants } from "framer-motion";
import React from 'react';

interface StaggerListContainerProps {
  className: string;
  children: React.ReactNode;
  staggerDelay?: number; 
  initialDelay?: number; 
  viewportAmount?: number;
  once?: boolean;
}

export default function StaggerListContainer({ 
  children, 
  className, 
  staggerDelay = 0.1, 
  initialDelay = 0,
  viewportAmount = 0.1,
  once = true,
}: StaggerListContainerProps) {
  
  const containerVariants: Variants = {
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
    hidden: {}, 
  };

  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show" 
      viewport={{ once: once, amount: viewportAmount }}
      variants={containerVariants}
    >
      {children}
    </motion.ul>
  );
}
