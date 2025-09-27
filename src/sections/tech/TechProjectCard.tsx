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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechProjectCard({ projects }: { projects: ProjectCardProps }) {
  return (
    <motion.section
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-auto"
    >
      <div className="min-h-[500px] max-h-[600px] py-4 border border-colorHover3 rounded-2xl shadow-xl overflow-hidden flex flex-col
                bg-colorPrimario3/40 backdrop-blur-md transition-transform duration-300 hover:shadow-3xl">

  {/* Imagen */}
  <div className="bg-colorPrimarioLogo1 flex justify-center relative w-full h-48 md-tablet:h-56 table-lg:h-64">
    <Image
      src={projects.imageSrc}
      alt={projects.ProjectName}
      fill
      style={{ objectFit: "cover" }}
      loading="lazy"
      className="object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* Contenido principal */}
  <div className="flex-1 flex flex-col justify-start px-2 mt-2">
    <h2 className="text-xl md:text-2xl text-center font-bold text-white">
      {projects.ProjectName}
    </h2>

    <p className="text-sm md:text-base text-center text-gray-300 italic mt-1">
      {projects.company} · {projects.location}
    </p>

    <ul className="flex justify-center flex-wrap gap-2 mt-4">
      {projects.technologies.map((tech) => (
        <li
          key={tech}
          className="bg-white/10 text-gray-100 border border-white/20 text-xs font-medium px-4 py-1.5 rounded-full transition-all hover:bg-white/20"
        >
          {tech}
        </li>
      ))}
    </ul>

    {/* Botón empujado hacia abajo */}
    <div className="mt-auto flex justify-center mb-4">
      <Link href={`/portfolio/${projects.slug}`}>
        <button className="bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 hover:opacity-90 text-white transition-all py-2 px-8 rounded-xl text-base md:text-lg font-semibold shadow-md hover:shadow-xl">
          Ver proyecto
        </button>
      </Link>
    </div>
  </div>
</div>
    </motion.section>
  );
}
