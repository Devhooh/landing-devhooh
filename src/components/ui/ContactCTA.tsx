// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export default function ContactCTA() {
//   // Estado para saber si el mouse está sobre el componente
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-full bg-gray-900 pt-10 flex justify-center overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`relative w-full max-w-[700px] h-[340px]
//           bg-gray-700 shadow-xl rounded-t-[500px]
//           flex flex-col items-center justify-center text-center
//           transition-all duration-700 ease-out
//           ${isHovered ? "scale-105" : "scale-100"}`}
//       >
//         <div className="relative z-10 px-8 pt-20 text-center flex flex-col justify-center items-center">
//           <div className="m-5">
//             <h2 className="text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold text-white mb-4 text-wrap">
//               Queremos que su empresa sea nuestro próximo caso de éxito
//             </h2>
//           </div>
          
//           {/* El botón mantiene sus clases responsivas.
//           */}
//           <Link
//             href="/contact"
//             className="relative inline-flex items-center justify-center px-10 py-3 text-sm
//             md-tablet:text-lg font-bold text-white bg-blue-600 rounded-2xl
//             shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
//           >
//             Escribenos
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/ui/ContactCTA.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactCTA() {
  // Estado para saber si el mouse está sobre el componente del semicírculo.
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full bg-gray-200 pt-10 flex justify-center">
      <div
        className="relative w-full max-w-[700px] h-[340px] rounded-t-[500px] bg-white
                   shadow-xl flex flex-col items-center justify-center text-center
                   overflow-hidden transition-all duration-2000 ease-out"
        // Los eventos onMouseEnter y onMouseLeave están aquí para activar el efecto.
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Este div crea el círculo que sube con el hover */}
        <div
          className={`absolute bottom-0 w-[1000px] h-[1000px] rounded-full
                      transition-transform duration-700 ease-out
                      ${isHovered ? "translate-y-1/3 bg-gray-900" : "translate-y-full bg-gray-900"}`}
        ></div>
        
        {/* Este es el contenedor del contenido (texto y botones) */}
        <div className="relative z-10 px-8 pt-20 text-center flex flex-col justify-center items-center">
          <div className="m-5">
            <h2
              className={`text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold mb-4 text-wrap
                         transition-colors duration-700 ease-out
                         ${isHovered ? "text-white" : "text-gray-900"}`}
            >
              Queremos que su empresa sea nuestro próximo caso de éxito
            </h2>
          </div>
          
          <div className="flex gap-4">
            <Link
              href="/contact"
              className={`relative inline-flex items-center justify-center px-10 py-3 text-sm
                         md-tablet:text-lg font-bold rounded-2xl shadow-lg transition-all duration-700 ease-out
                         ${isHovered ? "text-gray-900 bg-white" : "text-white bg-gray-900"}`}
            >
              Escribenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

