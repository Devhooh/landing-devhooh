// import Image from "next/image";
// import { Project } from "@/data/portfolioDetails";
// import { CircleCheckIcon } from "lucide-react";

// interface ChallengeSectionProps {
//   project: Project;
// }

// export default function ChallengeSection({ project }: ChallengeSectionProps) {
//   return (
//     <section className="
//       bg-gradient-to-tr from-gray-800 via-gray-900 to-black text-white shadow-2xl border border-gray-700
//       rounded-xl my-10 mx-5 md-tablet:mx-10 py-12 px-4 md-tablet:px-8">

//       <div className="max-w-7xl mx-auto flex flex-col gap-16">
//         {project.challengeData.map((item, index) => {
//           const isEven = index % 2 !== 0; // para zig-zag
//           return (
//             <div key={item.title} className="flex flex-col gap-8">
//               <h3 className="text-3xl md-tablet:text-5xl font-bold text-white mb-4 text-center">
//                 {item.title}
//               </h3>

//               {/* Contenido en zig-zag */}
//               <div
//                 className={`flex flex-col table-lg:flex-row items-center gap-8 ${
//                   isEven ? "table-lg:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Texto */}
//                 <div className="table-lg:w-1/2 table-lg:text-left">
//                   <p className="text-gray-200 text-center text-base md-tablet:text-lg">
//                     {item.description}
//                   </p>
//                     <ul className="mt-2 pt-5 mx-5 text-gray-200 text-base md-tablet:text-lg">
//                       {item.listData?.map((items, index) => (
//                           <li key={index} className="flex items-start gap-2">
//                             <CircleCheckIcon className="text-fuchsia-600 w-5 h-5 flex-shrink-0"/>
//                             <span>{items}</span>
//                           </li>
//                       ))}
//                     </ul>
//                 </div>

//                 {/* Imagen */}
//                 <div className="table-lg:w-1/2 flex justify-center">
//                   <Image
//                     src={item.image}
//                     alt={`${item.title} - ${project.projectName}`}
//                     width={500}
//                     height={300}
//                     className="rounded-lg shadow-lg w-72 object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";
import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { CircleCheckIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ChallengeSectionProps {
  project: Project;
}

// Variantes de animación
const titleVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const descLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const descRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // escalonado
  },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ChallengeSection({ project }: ChallengeSectionProps) {
  return (
    <section
      className="
      bg-gradient-to-tr from-gray-800 via-gray-900 to-black text-white shadow-2xl border border-gray-700
      rounded-xl my-10 mx-5 md-tablet:mx-10 py-12 px-4 md-tablet:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {project.challengeData.map((item, index) => {
          const isEven = index % 2 !== 0; // zig-zag
          return (
            <div key={item.title} className="flex flex-col gap-8">
              {/* Título con animación desde abajo */}
              <motion.h3
                className="text-3xl md-tablet:text-5xl font-bold text-white mb-4 text-center"
                variants={titleVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.title}
              </motion.h3>

              {/* Contenido en zig-zag */}
              <div
                className={`flex flex-col table-lg:flex-row items-center gap-8 ${
                  isEven ? "table-lg:flex-row-reverse" : ""
                }`}
              >
                {/* Texto + lista */}
                <motion.div
                  className="table-lg:w-1/2 table-lg:text-left"
                  variants={isEven ? descRight : descLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-gray-200 text-center text-base md-tablet:text-lg">
                    {item.description}
                  </p>

                  {/* Lista escalonada */}
                  {item.listData && (
                    <motion.ul
                      className="mt-2 pt-5 mx-5 text-gray-200 text-base md-tablet:text-lg"
                      variants={listContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      {item.listData.map((items, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2"
                          variants={listItem}
                        >
                          <CircleCheckIcon className="text-fuchsia-600 w-5 h-5 flex-shrink-0" />
                          <span>{items}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>

                {/* Imagen */}
                <div className="table-lg:w-1/2 flex justify-center">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${project.projectName}`}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg w-72 object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
