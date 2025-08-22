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
    <div className="w-full h-full bg-white border border-gray-400 rounded-2xl shadow-lg p-4 flex flex-col justify-between">

      {/* Título superior izquierdo */}
      <h4 className="text-lg font-bold text-indigo-950">{projects.company}</h4>

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
      <p className="text-lg mb-3 font-semibold text-gray-700 text-left">
        {projects.ProjectName} - {projects.location}
      </p>

      {/* Descripción */}
      <p className="text-base mb-4 text-gray-600 text-left truncate">
        {projects.description}
      </p>

      <div className="flex justify-center pb-4">
        <Link href={`/portfolio/${projects.slug}`}>
          <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-500 border-2 border-blue-700 py-2 px-6 rounded-3xl text-sm font-semibold">
            Ver proyecto
          </button>
        </Link>
      </div>

    </div>
  );
}
