// "use client";

// import Image from "next/image";
// import Link from "next/link";

// interface ProjectCardProps {
//   id: number;
//   company: string;
//   imageSrc: string;
//   ProjectName: string;
//   location: string;
//   service: string;
//   technologies: string[];
//   description: string;
//   slug: string;
// }

// export default function TechProjectCard({projects}: {projects: ProjectCardProps}) {
//   return (
//     <section className="w-full h-auto">
//       <div className="h-[500px] max-h-[600px] py-4 bg-gradient-to-t from-blue-950/90 to-blue-400/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

//         {/* Imagen centrada */}
//         <div className="flex justify-center m-5">
//           <Image
//             src={projects.imageSrc}
//             alt={projects.ProjectName}
//             width={500}
//             height={500}
//             className="w-48 h-auto rounded-xl object-contain"
//           />
//         </div>

//         {/* Título */}
//         <h4 className="text-lg md-tablet:text-2xl text-center font-bold text-white/90">{projects.company}</h4>
        
//         {/* Subtítulo */}
//         <div className="m-5 text-center">
//           <p className="text-sm font-semibold text-gray-200 ">
//             {projects.ProjectName} - {projects.location}
//           </p>
//         </div>

//         {/* Descripción */}
//         <div className="flex justify-center">
//           <div className="flex flex-wrap gap-2 px-2">
//             {projects.technologies.map((tech) => (
//               <button
//                 key={tech}
//                 className="bg-fuchsia-300/60 text-indigo-950 hover:scale-x-110 hover:shadow-xl
//                   text-xs font-semibold px-5 py-2 text-center rounded-full"
//               >
//                 {tech}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center mt-3 mb-3">
//           <Link href={`/portfolio/${projects.slug}`}>
//             <button className="
//               bg-fuchsia-200 hover:bg-fuchsia-400 hover:text-white text-blue-950 border-fuchsia-400 transition-all transform
//               py-2 px-6 rounded-3xl text-base md-tablet:text-lg font-medium">
//               Ver proyecto
//             </button>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  id: number;
  company: string;
  imageSrc: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
  slug: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TechProjectCard({
  projects,
}: {
  projects: ProjectCardProps;
}) {
  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-auto"
    >
      <div className="h-[500px] max-h-[600px] py-4 bg-gradient-to-t from-blue-950/90 to-blue-400/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Imagen centrada */}
        <div className="flex justify-center m-5">
          <Image
            src={projects.imageSrc}
            alt={projects.ProjectName}
            width={500}
            height={500}
            className="w-48 h-auto rounded-xl object-contain"
          />
        </div>

        {/* Título */}
        <h4 className="text-lg md-tablet:text-2xl text-center font-bold text-white/90">
          {projects.company}
        </h4>

        {/* Subtítulo */}
        <div className="m-5 text-center">
          <p className="text-sm font-semibold text-gray-200 ">
            {projects.ProjectName} - {projects.location}
          </p>
        </div>

        {/* Descripción */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 px-2">
            {projects.technologies.map((tech) => (
              <button
                key={tech}
                className="bg-fuchsia-300/60 text-indigo-950 hover:scale-x-110 hover:shadow-xl
                  text-xs font-semibold px-5 py-2 text-center rounded-full"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-3 mb-3">
          <Link href={`/portfolio/${projects.slug}`}>
            <button
              className="bg-fuchsia-200 hover:bg-fuchsia-400 hover:text-white text-blue-950 border-fuchsia-400 transition-all transform
              py-2 px-6 rounded-3xl text-base md-tablet:text-lg font-medium"
            >
              Ver proyecto
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
