"use client";

import { motion, Variants } from "@/utils/Motion";
import React, { ReactNode } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

interface ContainerCustomProps {
  staggerChildren: number;
  delayChildren: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 1 }, 
  
  show: (custom: ContainerCustomProps) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayChildren,
      staggerChildren: custom.staggerChildren,
    },
  }),
};

export default function StaggerListContainer({
  children,
  className,
  staggerChildren = 0.15,
  delayChildren = 0.2,
}: StaggerContainerProps) {

  const customProps: ContainerCustomProps = {
    staggerChildren,
    delayChildren
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      custom={customProps}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}