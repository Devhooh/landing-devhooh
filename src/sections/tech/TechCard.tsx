// "use client";

// import Link from "next/link";
// import { IconType } from "react-icons";
// import { HiArrowRight } from "react-icons/hi";
// import { motion, Variants } from "framer-motion";

// interface Technology {
//   name: string;
//   icon: IconType;
//   color?: string;
//   slug: string;
// }

// interface TechCardProps {
//   title: string;
//   subtitle: string;
//   technologies: Technology[];
// }

// const subtitleVariants: Variants = {
//   hidden: { opacity: 0, x: -20 },
//   show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut", delay: 0.15 } },
// };

// // Contenedor del grid → se encarga del stagger
// const gridVariants: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.12, // delay entre cada tech
//       delayChildren: 0.2,    // espera un poco tras el subtítulo
//     },
//   },
// };

// // Cada item de tecnología
// const techItemVariants: Variants = {
//   hidden: { opacity: 0, y: 15 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
// };

// // El texto saldra uno por uno
// const letterVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// };

// const splitText = (text: string) => text.split("");

// export default function TechCard({ title, subtitle, technologies }: TechCardProps) {
//   return (
//     <article
//       className="p-4 rounded-xl shadow-md max-w-full bg-colorPrimario11"
//     >
//       {/* Título */}
//       <motion.h2
//         className="text-xl md-tablet:text-2xl font-bold text-colorHover2 m-2"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
//       >
//         {splitText(title).map((letter, idx) => (
//           <motion.span key={idx} variants={letterVariants}>
//             {letter}
//           </motion.span>
//         ))}
//       </motion.h2>

//       {/* Subtítulo animado */}
//       <motion.p
//         variants={subtitleVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="text-base md-tablet:text-lg font-light text-white/80 mx-2 my-4"
//       >
//         {subtitle}
//       </motion.p>

//       {/* Grid de tecnologías con stagger */}
//       <motion.div
//         variants={gridVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="my-3 grid grid-cols-1 table-lg:grid-cols-2 lg-table:grid-cols-4 gap-4"
//       >
//         {technologies.map((tech, idx) => {
//           const Icon = tech.icon;
//           return (
//             <motion.div key={idx} variants={techItemVariants}>
//               <Link
//                 href={`/tecnologia/${tech.slug}`}
//                 className="flex items-center justify-between p-2 rounded-lg bg-white border border-colorPrimarioLogo1
//                   transform transition duration-300 hover:scale-95 hover:shadow-xl"
//               >
//                 <div className="flex items-center gap-2">
//                   <Icon className={`${tech.color || "text-gray-700"} text-2xl`} />
//                   <span className="text-lg md-tablet:text-xl font-medium text-gray-600">{tech.name}</span>
//                 </div>
//                 <HiArrowRight className="text-black" />
//               </Link>
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </article>
//   );
// }


"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

interface Technology {
  name: string;
  icon: IconType;
  color?: string;
  slug: string;
}

interface TechCardProps {
  title: string;
  subtitle: string;
  technologies: Technology[];
}

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const techItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TechCard({ title, subtitle, technologies }: TechCardProps) {
  const splitText = (text: string) => text.split("");

  return (
    <article className="relative group">
      <div className="relative p-4 rounded-3xl bg-colorPrimario11 border border-colorPrimario5/20 shadow-[0_0_30px_rgba(103,61,230,0.15)] hover:shadow-[0_0_40px_rgba(103,61,230,0.25)] transition-all duration-500 overflow-hidden">
        
        {/* Efectos decorativos */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-50"></div>

        {/* Badge superior */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg">
            <Code className="w-5 h-5 text-white" />
          </div>
          <div className="px-3 py-1 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <span className="text-white font-semibold text-sm">Especialización</span>
          </div>
        </div>

        {/* Título con animación letra por letra */}
        <motion.h2
          className="text-2xl md-tablet:text-3xl font-extrabold text-white mb-4 leading-tight"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText(title).map((letter, idx) => {
            return (
              <motion.span 
                key={idx} 
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.h2>

        {/* Subtítulo mejorado */}
        <motion.p
          variants={subtitleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg text-colorHover5 mb-8 leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>

        {/* Contador de tecnologías */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <Sparkles className="w-4 h-4 text-colorSecundario1" />
          <span className="text-colorHover5 font-semibold text-sm">
            {technologies.length} tecnologías disponibles
          </span>
        </div>

        {/* Grid de tecnologías mejorado */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="my-3 grid grid-cols-1 table-lg:grid-cols-2 lg-table:grid-cols-4 gap-4"
        >
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;

            return (
              <motion.div key={idx} variants={techItemVariants}>
                <Link
                  href={`/tecnologia/${tech.slug}`}
                  className={`
                    group/tech relative block p-2 rounded-2xl 
                    bg-gradient-to-r from-colorHover5/80 to-colorHover6/80
                    backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40
                    shadow-lg hover:shadow-xl 
                    transform transition-all duration-300 hover:scale-102 hover:-translate-y-1
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Icono con contenedor */}
                      <div className="w-8 h-8 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover/tech:bg-white/80 transition-all duration-300 shadow-sm">
                        <Icon className={`${tech.color || "text-colorPrimario2"} text-2xl group-hover/tech:scale-110 transition-transform duration-300`} />
                      </div>
                      
                      {/* Información */}
                      <div>
                        <span className="text-lg md-tablet:text-xl font-bold text-colorPrimario2 group-hover/tech:text-colorPrimario5 transition-colors duration-300">
                          {tech.name}
                        </span>
                        <div className="text-xs text-colorPrimario1/70 font-medium">
                          Explorar tecnología
                        </div>
                      </div>
                    </div>

                    {/* Flecha con animación */}
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-colorPrimario5/20 flex items-center justify-center group-hover/tech:bg-colorPrimario5 transition-all duration-300">
                      <ArrowRight className="flex-shrink-0 w-4 h-4 text-colorPrimario5 group-hover/tech:text-white transition-all duration-300" />
                    </div>
                  </div>

                  {/* Línea decorativa animada */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 w-0 group-hover/tech:w-full transition-all duration-300"></div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <span className="text-white font-semibold text-sm">
              Haz clic en cualquier tecnología para explorar más
            </span>
          </div>
        </motion.div>

        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </article>
  );
}