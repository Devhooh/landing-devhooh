"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

const fadeUpStagger: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
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
    <motion.div
      custom={index + 1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpStagger}
      className="h-[400px] bg-gradient-to-t from-indigo-700/80 to-fuchsia-500/80 rounded-lg shadow-2xl overflow-hidden flex flex-col"
    >
      {/* Imagen */}
      <div className="bg-gradient-to-b from-purple-700 to-fuchsia-400/50 p-3 h-48 w-full flex items-center justify-center">
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
            <button className="bg-white text-indigo-950 font-bold mt-3 py-2 px-4 rounded-lg hover:bg-fuchsia-400/80 hover:text-white hover:border border-fuchsia-600 transform transition">
              Ver más detalles
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

