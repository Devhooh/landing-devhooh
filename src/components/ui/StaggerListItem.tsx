"use client";
import { motion, Variants } from "@/utils/Motion"; 
import React from 'react';

interface StaggerListItemProps {
  children: React.ReactNode;
  className?: string;
}

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
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

export function StaggerListItem({ children, className }: StaggerListItemProps) {
  return (
    <motion.li
      className={className}
      variants={listItemVariants}
    >
      {children}
    </motion.li>
  );
}