"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function ProjectsServicesCard({projects}: {projects: ProjectCardProps}) {
  return (
    <div className="
      w-full h-full rounded-2xl shadow-lg p-4 flex flex-col justify-between 
      bg-gradient-to-bl from-purple-800 via-purple-900 to-black text-white border border-gray-400">

      {/* Título superior izquierdo */}
      <h4 className="text-lg font-bold text-gray-200">{projects.company}</h4>

      {/* Imagen centrada */}
      <div className="flex justify-center m-6">
        <Image
          src={projects.imageSrc}
          alt={projects.ProjectName}
          width={500}
          height={500}
          className="w-32 h-auto rounded-xl object-cover"
        />
      </div>

      {/* Subtítulo */}
      <p className="text-lg mb-3 font-semibold text-left">
        {projects.ProjectName} - {projects.location}
      </p>

      {/* Descripción */}
      <p className="text-base mb-4 text-gray-400 text-left truncate">
        {projects.description}
      </p>

      <div className="flex justify-center pb-4">
        <Link href={`/portfolio/${projects.slug}`}>
          <button className="
          bg-blue-100 hover:bg-purple-700 hover:text-white text-blue-800 border border-purple-900 
            py-2 px-6 rounded-3xl text-sm font-semibold transform transition-all">
            Ver proyecto
          </button>
        </Link>
      </div>

    </div>
  );
}
