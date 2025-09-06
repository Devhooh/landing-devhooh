// "use client";
// import Image from "next/image";
// import Link from "next/link";

// interface Project {
//   id: number;
//   slug: string;
//   company?: string;
//   imageSrc: string;
//   imageAlt?: string;
//   ProjectName: string;
//   location: string;
//   service: string;
//   technologies: string[];
//   description: string;
// }

// export default function PortfolioCard({ project }: { project: Project }) {
//   return (
//     <div className="w-full h-auto bg-colorPrimario2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
//       {/* Imagen */}
//       <div className="bg-colorFondo p-3 h-48 flex items-center justify-center">
//         <Image
//           width={400}
//           height={400}
//           src={project.imageSrc}
//           alt={project.imageAlt || project.ProjectName}
//           className="object-contain w-full h-full p-5"
//         />
//       </div>

//       {/* Info principal */}
//       <div className="p-6 flex flex-col flex-1">
//         <h3 className="text-xl font-semibold text-white">
//           {project.ProjectName}
//         </h3>

//         {/* Descripción */}
//         <p className="my-2 text-sm text-gray-300 flex-1 line-clamp-3">{project.description}</p>

//         {/* Chips */}
//         <div className="flex flex-wrap gap-2 mt-2">
//           {project.technologies.map((tech) => (
//             <span
//             key={tech}
//             className="bg-colorHover5 text-colorDarkFondo3 text-xs font-medium px-2.5 py-0.5 rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>


//         {/* Botones */}
//         <div className="flex flex-col justify-between tablet-md:flex-row gap-4 mt-6">
//           <Link
//             href={`/portfolio/${project.slug}`}
//             className="flex-1 text-center bg-colorSecundario2 hover:bg-colorSecundario4 text-white font-semibold py-2 px-4 rounded-lg transition"
//           >
//             Más detalles
//           </Link>
//           <Link
//             href={`/portfolio/${project.slug}`}
//             className="flex-1 text-center border border-colorPrimario1 bg-colorPrimario11 hover:bg-colorSecundario4 text-white font-semibold py-2 px-4 rounded-lg transition"
//           >
//             Ver proyecto
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  slug: string;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
}

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="w-full bg-colorPrimario2 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Imagen */}
      <div className="bg-colorFondo p-3 h-48 flex items-center justify-center">
        <Image
          width={400}
          height={400}
          src={project.imageSrc}
          alt={project.imageAlt || project.ProjectName}
          className="object-contain w-full h-full p-5"
        />
      </div>

      {/* Info principal */}
      <div className="p-6 flex flex-col flex-1 justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {project.ProjectName}
          </h3>

          <p className="text-sm text-gray-300 pb-5 line-clamp-3 overflow-hidden">
            {project.description}
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-colorSecundario4 text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col justify-between tablet-md:flex-row gap-4 mt-6">
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex-1 text-center border border-colorPrimario1 bg-colorPrimario11 hover:bg-colorSecundario4 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Más detalles
          </Link>
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex-1 text-center border border-colorPrimario1 bg-colorPrimario11 hover:bg-colorSecundario4 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Ver proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}
