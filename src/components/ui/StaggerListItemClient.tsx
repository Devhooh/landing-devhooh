"use client";

import { motion, Variants, Transition } from "@/utils/Motion";
import React, { ReactNode } from 'react';

type Direction = 'x' | 'y';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  transition?: Transition; 
  direction?: Direction;
  offset?: number;
}

interface ItemCustomProps {
  direction: Direction;
  offset: number;
}

const itemVariants: Variants = {
  hidden: (custom: ItemCustomProps) => ({
    opacity: 0,
    [custom.direction]: custom.offset,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export function StaggerListItemClient({
  children,
  className,
  transition,
  direction = 'x', 
  offset = -20, 
}: StaggerItemProps) {

  const defaultTransition: Transition = { 
    type: "tween",
    duration: 0.6, 
    ease: "easeOut", 
  };
  
  const finalTransition = transition ? transition : defaultTransition;
  
  const customProps: ItemCustomProps = {
    direction,
    offset,
  };

  return (
    <motion.li
      className={`${className} list-none`}
      variants={itemVariants}
      custom={customProps}
      transition={finalTransition}
    >
      {children}
    </motion.li>
  );
}