"use client";
import { motion } from "@/utils/Motion"; 
import React, { ReactNode } from 'react';

interface AnimatedHeadingProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedHeading({ children, className, delay = 0.1 }: AnimatedHeadingProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}