"use client";

import { motion } from "framer-motion";
import React from 'react';

interface HeroImageAnimationProps {
  className?: string;
  children: React.ReactNode;
}

export default function HeroImageAnimation({ className, children }: HeroImageAnimationProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}