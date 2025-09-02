// "use client";

// import * as Icons from "lucide-react";
// import { LucideProps } from "lucide-react";

// interface ProcessStep {
//   icon: string;
//   title: string;
//   description: string;
// }

// interface TechProcessProps {
//   name: string;
//   steps: ProcessStep[];
// }

// export default function TechProcess({ name, steps }: TechProcessProps) {
//   if (!steps || steps.length === 0) return null;
//   return (
//     <section className="py-12 px-8">
//       <h2 className="text-center text-2xl md-tablet:text-4xl text-blue-950 font-bold mb-12">
//         Cómo trabajamos con {name}
//       </h2>

//       <div className="relative max-w-4xl mx-auto bg-slate-200 p-6 rounded-2xl">
//         {/* Línea vertical */}
//         <div className="absolute top-0 left-4 md-tablet:left-12 w-1 bg-fuchsia-300 h-full"></div>

//         <div className="flex flex-col gap-12">
//           {steps.map((step, index) => {
//             const Icon =
//               (Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
//               Icons.HelpCircle;
//             return (
//               <div key={index} className="flex flex-row items-start">
//                 {/* Icono */}
//                 <div className="flex-shrink-0 w-16 h-16 bg-fuchsia-600 text-white rounded-full flex items-center justify-center z-10 relative">
//                   <Icon className="w-8 h-8" />
//                 </div>

//                 {/* Contenido */}
//                 <div className="ml-4">
//                   <h3 className="text-lg text-purple-950 font-semibold mb-1">{step.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface TechProcessProps {
  name: string;
  steps: ProcessStep[];
}

// Variantes para el contenedor (controla escalonado)
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // tiempo entre steps
    },
  },
};

// Variantes para cada step
const stepVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

  // El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function TechProcess({ name, steps }: TechProcessProps) {
  if (!steps || steps.length === 0) return null;
  return (
    <section className="py-12 px-8">
      {/* Título animado */}
      <motion.h2
        className="text-center text-2xl md-tablet:text-4xl text-blue-950 font-bold mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03} } }}
      >
        {splitText(`Cómo trabajamos con ${name}`).map((letter, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>


      <motion.div
        className="relative max-w-4xl mx-auto bg-slate-200 p-6 rounded-2xl"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Línea vertical */}
        <div className="absolute top-0 left-4 md-tablet:left-12 w-1 bg-fuchsia-300 h-full"></div>

        <motion.div className="flex flex-col gap-12">
          {steps.map((step, index) => {
            const Icon =
              (Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
              Icons.HelpCircle;
            return (
              <motion.div
                key={index}
                className="flex flex-row items-start"
                variants={stepVariant}
              >
                {/* Icono */}
                <div className="flex-shrink-0 w-16 h-16 bg-fuchsia-600 text-white rounded-full flex items-center justify-center z-10 relative">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Contenido */}
                <div className="ml-4">
                  <h3 className="text-lg text-purple-950 font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
