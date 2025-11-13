import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemSectionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export function FAQItemSection ({ 
  question, 
  answer, 
  isOpen, 
  onClick, 
}: FAQItemSectionProps) {
  return (
    <div
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
      <div
        className={`
          px-5 md-tablet:px-8 overflow-hidden 
          transition-all duration-500 ease-in-out 
          ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"} 
        `}
      >
        <p className="text-base md-tablet:text-lg text-gray-600 py-2 pb-5">{answer}</p>
      </div>
    </div>
  );
};