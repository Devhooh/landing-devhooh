"use client";
import { motion, Variants } from "framer-motion";
import React from 'react';
import { ReactNode } from "react";

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

interface FlexibleAnimatedListProps {
  children: ReactNode;
  className?: string;
}

export function FlexibleAnimatedList({ children, className }: FlexibleAnimatedListProps) {
  
  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="show" 
      viewport={{ once: true, amount: 0.3 }} 
      className={className}
    >
      {children} 
    </motion.ul>
  );
}