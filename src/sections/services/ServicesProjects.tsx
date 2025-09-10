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
        className="h-[400px] border border-colorPrimarioLogo1 bg-colorSecundario rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Imagen */}
        <div className="p-3 flex items-center justify-center relative w-full h-48 md-tablet:h-56 table-lg:h-64">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt || project.ProjectName}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 750px) 100vw, (max-width: 950px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.ProjectName}
            </h3>

            {showService && project.service && (
              <p className="text-base text-gray-200">
                <span className="font-medium">Servicio:</span> {project.service}
              </p>
            )}
          </div>

          <div>
            <Link href={`/portfolio/${project.slug}`}>
              <button className="bg-white text-colorSecundario3 font-bold mt-3 py-2 px-4 rounded-lg hover:bg-colorHover3 hover:border border-colorSecundario transform transition-all">
                Ver más detalles
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

