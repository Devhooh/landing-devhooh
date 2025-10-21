"use client";

import { motion, Variants } from "framer-motion";
import React from 'react';

interface StaggerListContainerProps {
  className: string;
  children: React.ReactNode;
}

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {}, 
};

export default function StaggerListContainer({ children, className }: StaggerListContainerProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants} // Aplica la orquestación
    >
      {children}
    </motion.ul>
  );
}