"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
}

interface listFAQ {
  itemsDate: FAQItemProps[]
}

// Animación para cards
const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  })
};

// Animación para subtítulo
const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");


// Componente FAQItem con motion
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}> = ({ question, answer, isOpen, onClick, index }) => {
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
        className="flex justify-between items-center w-full p-4 table-lg:p-6 text-left"
      >
        <span className="text-lg sm:text-xl font-semibold text-colorDarkFondo1 m-1">
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
        initial={{ height: 0, opacity: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="px-4 sm:px-6 overflow-hidden"
      >
        <p className="text-sm sm:text-base text-gray-600 py-2 pb-5">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// Componente principal
export default function FAQSection({itemsDate}: listFAQ ) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-colorHover5 pb-24 pt-8 sm:px-6 table-lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl table-lg:text-5xl font-extrabold text-black mb-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
          >
            {splitText("Preguntas frecuentes").map((letter, idx) => (
              <motion.span key={idx} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
          >
            ¿Tiene preguntas sobre nuestros servicios digitales? Explore nuestra sección de preguntas frecuentes o póngase en contacto con nosotros directamente para obtener asistencia e información personalizadas.
          </motion.p>
        </div>
        <div className="space-y-4">
          {itemsDate.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
              index={index} // para el delay de aparición
            />
          ))}
        </div>
      </div>
    </section>
  );
}
