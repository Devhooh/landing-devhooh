// "use client";

// import Link from "next/link";
// import * as Icons from "lucide-react";
// import { LucideProps } from "lucide-react";
// import { ServicesData } from "@/data/ServicesDetails"; // tus datos reales

// interface TechStackSectionProps {
//   service: ServicesData;
// }

// export default function ServicesStackTech({ service }: TechStackSectionProps) {
//   const stack = service.stackTech[0]; // asumimos que siempre hay un stackTech

//   return (
//     <section className="py-8 px-6 md-tablet:px-12 bg-violet-50">
//       {/* Encabezado global */}
//       <div className="max-w-3xl mb-10">
//         <h2 className="text-3xl md-tablet:text-4xl font-bold text-blue-900">
//           Stack de tecnología que utilizamos para {service.name}
//         </h2>
//         <p className="mt-3 text-gray-600 text-base md-tablet:text-lg leading-relaxed">
//           {stack.description}
//         </p>
//       </div>

//       {/* Grid de tecnologías */}
//       <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
//         {stack.tech.map((item, index) => {
//           const Icon =
//             (Icons[item.icon as keyof typeof Icons] as React.ComponentType<
//               LucideProps
//             >) || Icons.HelpCircle;

//           return (
//             <div
//               key={index}
//               className="flex flex-col items-start p-6 rounded-2xl bg-white border border-fuchsia-200 shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
//             >
//               {/* Icono arriba izquierda */}
//               <div className="mb-3 p-3 rounded-lg bg-purple-100">
//                 <Icon className={`w-8 h-8 text-${item.color}-600`} />
//               </div>

//               {/* Título */}
//               <h3 className="text-lg font-semibold text-blue-900 mb-2">
//                 {item.title}
//               </h3>

//               {/* Lista de tecnologías */}
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {item.listTech.map((tech, i) => (
//                   <span 
//                     key={i}
//                     className="bg-fuchsia-100 text-fuchsia-800 text-xs font-medium px-3 py-1 rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Botón global */}
//       <div className="mt-10 text-center">
//         <Link
//           href="/tecnologia"
//           className="inline-block px-6 py-3 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 transition"
//         >
//           Ver todas las tecnologías
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface TechStackSectionProps {
  service: ServicesData;
}

export default function ServicesStackTech({ service }: TechStackSectionProps) {
  const stack = service.stackTech[0]; // asumimos que siempre hay un stackTech

  // Variantes
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: stack.tech.length * 0.15 } },
  };

  return (
    <section className="py-8 px-6 md-tablet:px-12 bg-violet-50">
      {/* Encabezado */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h2 className="text-3xl md-tablet:text-4xl font-bold text-blue-900 mb-2" variants={textVariants}>
          Stack de tecnología que utilizamos para {service.name}
        </motion.h2>
        <motion.p className="mt-3 text-gray-600 text-base md-tablet:text-lg leading-relaxed" variants={textVariants}>
          {stack.description}
        </motion.p>
      </motion.div>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6 mt-8">
        {stack.tech.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) || Icons.HelpCircle;

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col items-start p-6 rounded-2xl bg-white border border-fuchsia-200 shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              <div className="mb-3 p-3 rounded-lg bg-purple-100">
                <Icon className={`w-8 h-8 text-${item.color}-600`} />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.listTech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-fuchsia-100 text-fuchsia-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Botón */}
      <motion.div className="mt-10 text-center" initial="hidden" whileInView="show" viewport={{ once: true }} variants={buttonVariants}>
        <Link
          href="/tecnologia"
          className="inline-block px-6 py-3 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 transition"
        >
          Ver todas las tecnologías
        </Link>
      </motion.div>
    </section>
  );
}
