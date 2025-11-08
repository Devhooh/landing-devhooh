
"use client"

import React, { useState } from 'react';
import TextRevealClient from './TextRevealClient';
import { FAQItemSection } from '../layout/FAQItemSection';
import { SimpleInViewWrapper } from './SimpleInViewWrapper';
import Link from 'next/link';

type FAQItemProps = {
  id: number;
  question: string;
  answer: string;
}

interface listFAQ {
  itemsDate: FAQItemProps[]
  title?: string;
  description?: string;
}

// Componente principal
export default function FAQSection({title, description, itemsDate}: listFAQ ) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-colorHover5 pb-24 pt-8 sm:px-6 table-lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-5 md-tablet:px-10">
        <div className="text-center mb-12">

          <TextRevealClient
            direction='y'
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          >
            <h1 className="text-2xl md-tablet:text-4xl table-lg:text-5xl font-extrabold text-black mb-4">
              {title ? title : "Preguntas frecuentes"}
            </h1>
          </TextRevealClient>

          <TextRevealClient
            direction='y'
            offset={30}
            transition={{duration: 0.3, delay: 0.4}}
          >
            <p className="text-lg md-tablet:text-xl text-gray-600 max-w-2xl mx-auto">
              {description 
                ? description 
                : "¿Tiene preguntas sobre nuestros servicios digitales? Explore nuestra sección de preguntas frecuentes o póngase en contacto con nosotros directamente para obtener asistencia e información personalizadas."
                }
            </p>
          </TextRevealClient>
        </div>
        <div className="space-y-4">
          {itemsDate.map((item, index) => (
            <FAQItemSection
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
              index={index} // para el delay de aparición
            />
          ))}
        </div>

        <div
          className="mt-16 text-center"
        >
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          >
            <p className="text-colorPrimario1/70 mb-4 font-medium text-xl">
              ¿Ya tienes una idea en mente?
            </p>
          </TextRevealClient>

          <SimpleInViewWrapper>
            <Link
              href="/contact"
              className="text-colorSecundario1 hover:text-colorSecundario3 text-xl
                font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-300
                hover:scale-[1.05] active:scale-[0.98] transform"
            >
              Empecemos con tu proyecto            
            </Link>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}
