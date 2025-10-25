"use client";
import { motion, Variants } from "framer-motion";

interface AnimateOnVisibleProps {
  children: React.ReactNode;
  className?: string;
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function AnimateOnVisible({children, className}: AnimateOnVisibleProps) {
  return (
    <motion.div
      variants={imageVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}








