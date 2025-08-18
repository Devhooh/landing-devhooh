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
  link: string;
}

export default function TechProjectCard({projects}: {projects: ProjectCardProps}) {
  return (
    <div className="relative w-full h-[660px] bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">

      {/* Título superior izquierdo */}
      <h4 className="text-lg font-bold text-indigo-950">{projects.company}</h4>

      {/* Imagen centrada */}
      <div className="flex justify-center">
        <Image
          src={projects.imageSrc}
          alt={projects.ProjectName}
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Subtítulo */}
      <p className="text-sm font-semibold text-gray-700 text-left">
        {projects.ProjectName} - {projects.location}
      </p>

      {/* Descripción */}
      <p className="text-sm text-gray-600 text-left">{projects.description}</p>

      <div className="flex justify-left">
        <Link href={projects.link}>
          <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-500 border-2 border-blue-700 py-2 px-6 rounded-3xl text-sm font-semibold">
            Ver proyecto
          </button>
        </Link>
      </div>

    </div>
  );
}
