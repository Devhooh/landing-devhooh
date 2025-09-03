// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Mail } from "lucide-react"; // Ejemplo de ícono (puedes cambiarlo)

// export default function CTAHome() {
//   return (
//     <div className="relative w-full h-auto my-12 flex justify-center overflow-hidden">
//       {/* Contenedor principal */}
//       <div
//         className="
//           z-10 mx-5 px-6 py-10 w-full h-auto max-w-[900px]
//           flex flex-col md-tablet:flex-row md-tablet:items-center md-tablet:justify-start
//           gap-6 tablet-lg:gap-4
//           border-2 border-gray-700 rounded-3xl overflow-hidden bg-gradient-to-t from-fuchsia-400/60 to-fuchsia-100/60
//           text-center md-tablet:text-left
//         "
//       >
//         {/* Ícono solo visible en escritorio */}

//         <div className="hidden md-tablet:flex p-5 mx-3 tablet-md:mx-10 rounded-full border-4 border-black">
//           <div className="items-center justify-center text-gray-800 flex-shrink-0">
//             <Mail className="w-32 h-32" />
//           </div>
//         </div>

//         {/* Texto + botón */}
//         <div className="flex flex-col items-center md-tablet:items-start max-w-full">
//           <h2 className="text-2xl md-tablet:text-3xl font-extrabold text-gray-800 mb-2 break-words">
//             Queremos que su empresa sea nuestro próximo <span className="text-fuchsia-800">caso de éxito</span>
//           </h2>
//           <p className="text-base md-tablet:text-lg text-gray-700 mb-4">
//             Impulsa tu proyecto con soluciones digitales hechas a tu medida.
//           </p>

//           {/* Botón */}
//           <div className="flex justify-center md-tablet:justify-start w-full">
//             <Link href="/contact">
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="
//                   inline-flex items-center gap-2 px-6 py-3
//                   font-bold rounded-xl shadow-lg 
//                   bg-violet-600 text-white hover:bg-violet-800 transition-all
//                 "
//               >
//                 ¡Empieza ahora!
//                 <motion.svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   transition={{ type: "spring", stiffness: 120, damping: 12 }}
//                 >
//                   <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
//                 </motion.svg>
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail } from "lucide-react"; // Ícono de ejemplo

export default function CTAHome() {
  return (
    <div className="relative w-full h-auto my-12 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          group
          z-10 mx-5 px-6 py-10 w-full h-auto max-w-[900px]
          flex flex-col md-tablet:flex-row md-tablet:items-center md-tablet:justify-start
          gap-6 tablet-lg:gap-4
          border-2 border-gray-700 rounded-3xl overflow-hidden
          bg-gradient-to-t from-gray-50 to-white
          text-center md-tablet:text-left
          transition-all duration-500
          hover:from-fuchsia-500 hover:to-fuchsia-400
          shadow-xl hover:shadow-2xl
        "
      >
        {/* Ícono */}
        <div className="hidden md-tablet:flex p-5 mx-3 tablet-md:mx-10 rounded-full border-4 border-black transition-all duration-500 group-hover:border-white">
          <div className="items-center justify-center flex-shrink-0 text-gray-800 group-hover:text-white transition-colors duration-500">
            <Mail className="w-32 h-32" />
          </div>
        </div>

        {/* Texto + botón */}
        <div className="flex flex-col items-center md-tablet:items-start max-w-full">
          <h2
            className="
              text-2xl md-tablet:text-3xl font-extrabold text-gray-800 mb-2 break-words
              transition-colors duration-500 group-hover:text-white
            "
          >
            Queremos que su empresa sea nuestro próximo{" "}
            <span className="text-blue-600 group-hover:text-fuchsia-800 transition-colors duration-500">
              caso de éxito
            </span>
          </h2>
          <p
            className="
              text-base md-tablet:text-lg text-gray-700 mb-4
              transition-colors duration-500 group-hover:text-gray-100
            "
          >
            Impulsa tu proyecto con soluciones digitales hechas a tu medida.
          </p>

          {/* Botón */}
          <div className="flex justify-center md-tablet:justify-start w-full">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-2 px-6 py-3
                  font-bold rounded-xl shadow-lg 
                  bg-blue-600 text-black
                  transition-all duration-500
                  group-hover:bg-fuchsia-900 group-hover:text-white
                "
              >
                ¡Empieza ahora!
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                  <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                </motion.svg>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
