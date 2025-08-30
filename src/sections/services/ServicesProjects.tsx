"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


interface Project {
  id: number;
  slug: string;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location?: string;
  service?: string; // opcional
  technologies?: string[];
  description?: string;
  subtitle?: string;
}

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
  };


interface ServicesProjectsProps {
  project: Project;
  showService?: boolean;
  index?: number; // <-- nuevo
}

export default function ServicesProjects({
  project,
  showService = true,
  index = 0,
}: ServicesProjectsProps) {
  return (

    <section className="w-full h-auto">
      <motion.div
        initial="hidden"
      whileInView="show"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardVariants}
      transition={{ duration: 0.3, delay: index * 0.1 }}
        className="h-[400px] bg-gradient-to-t from-indigo-700/80 to-fuchsia-500/80 rounded-lg shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Imagen */}
        <div className="bg-purple-700/50 p-3 h-48 w-full flex items-center justify-center">
          <Image
            width={400}
            height={400}
            src={project.imageSrc}
            alt={project.imageAlt || project.ProjectName}
            className="object-contain w-full h-full p-5"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.ProjectName}
            </h3>

            {showService && project.service && (
              <p className="text-base text-white/90">
                <span className="font-medium">Servicio:</span> {project.service}
              </p>
            )}
          </div>

          <div>
            <Link href={`/portfolio/${project.slug}`}>
              <button className="bg-fuchsia-200/90 text-indigo-950 font-bold mt-3 py-2 px-4 rounded-lg hover:bg-fuchsia-400/80 hover:text-white hover:border border-fuchsia-600 transform transition-all">
                Ver más detalles
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

