"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from 'react';

interface HeroImageAnimationProps {
  className?: string;
}

export default function HeroImageAnimation({ className }: HeroImageAnimationProps) {
  const imageAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3, delay: 0.1 },
  };

  return (
    <motion.div
      {...imageAnimation}
      className={className}
    >
      <div className="relative w-[460px] h-[460px] md-tablet:w-[600px] md-tablet:h-[600px] rounded-2xl">
        <Image
          src="/assets/images/hero-home.png"
          alt="Equipo de desarrollo creando software a medida con inteligencia artificial"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 462px"
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}