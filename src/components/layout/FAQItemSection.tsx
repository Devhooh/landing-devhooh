"use client";

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, Variants } from '@/utils/Motion';

const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  })
};

// Props
interface FAQItemSectionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

// Componente 
export const FAQItemSection: React.FC<FAQItemSectionProps> = ({ 
  question, 
  answer, 
  isOpen, 
  onClick, 
  index 
}) => {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={faqItemVariants}
      className="bg-white border border-colorPrimario3 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-3 table-lg:p-6 text-left"
      >
        <span className="text-lg md-tablet:text-xl font-semibold text-colorDarkFondo1 m-1">
          {question}
        </span>
        {isOpen ? 
          <ChevronUp className="h-7 w-7 md-tablet:h-8 md-tablet:w-8 text-colorPrimarioLogo1 shrink-0" /> 
          : 
          <ChevronDown className="h-7 w-7 md-tablet:h-8 md-tablet:w-8 text-colorPrimarioLogo1 shrink-0" />
        }
      </button>

      {/* Animación de apertura/cierre */}
      <motion.div
        initial={false} // Evita el flicker si la transición anterior ya ha corrido
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="px-5 md-tablet:px-8 overflow-hidden"
      >
        <p className="text-base md-tablet:text-lg text-gray-600 py-2 pb-5">{answer}</p>
      </motion.div>
    </motion.div>
  );
};