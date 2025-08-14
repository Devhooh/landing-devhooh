// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// // Importamos los datos y el tipo de dato desde el archivo faqData.ts
// // Asegúrate de que la ruta sea correcta según la ubicación de tu archivo
// import { faqData} from '@/data/faqData';

// // Componente para una sola pregunta con tipado de propiedades
// const FAQItem: React.FC<{
//   question: string;
//   answer: string;
//   isOpen: boolean;
//   onClick: () => void;
// }> = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
//       <button
//         onClick={onClick}
//         className="flex justify-between items-center w-full p-4 sm:p-6 text-left"
//       >
//         <span className="text-base sm:text-lg font-medium text-gray-800">
//           {question}
//         </span>
//         {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
//       </button>
//       {isOpen && (
//         <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 animate-fadeIn">
//           <p className="text-sm sm:text-base">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Componente principal
// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-[#eaf1f9] min-h-screen pb-16 px-4 sm:px-6 table-lg:px-8 flex items-center justify-center">
//       <div className="w-full max-w-4xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
//             Preguntas frecuentes
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
//             ¿Tiene preguntas sobre nuestros servicios digitales? Explore nuestra sección de preguntas frecuentes o póngase en contacto con nosotros directamente para obtener asistencia e información personalizadas.
//           </p>
//         </div>
//         <div className="space-y-4">
//           {/* Usamos el array importado */}
//           {faqData.map((item, index) => (
//             <FAQItem
//               key={item.id}
//               question={item.question}
//               answer={item.answer}
//               isOpen={index === openIndex}
//               onClick={() => handleToggle(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// Importamos los datos y el tipo de dato desde el archivo faqData.ts
// Asegúrate de que la ruta sea correcta según la ubicación de tu archivo
import { faqData} from '@/data/faqData';

// Componente para una sola pregunta con tipado de propiedades
const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-gray-100 border border-gray-500 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-4 sm:p-6 text-left"
      >
        <span className="text-lg sm:text-xl font-semibold text-indigo-950">
          {question}
        </span>
        {isOpen ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 animate-fadeIn">
          <p className="text-sm sm:text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente principal
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#eaf1f9] pb-8 pt-8 sm:px-6 table-lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl table-lg:text-5xl font-extrabold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tiene preguntas sobre nuestros servicios digitales? Explore nuestra sección de preguntas frecuentes o póngase en contacto con nosotros directamente para obtener asistencia e información personalizadas.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
