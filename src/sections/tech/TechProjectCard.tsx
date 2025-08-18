"use client";

import Image from "next/image";

interface ProjectCardProps {
  id: number;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
}

export default function TechProjectCard({
  company,
  imageSrc,
  ProjectName,
  location,
  description,
}: ProjectCardProps) {
  return (
    <div className="flex-shrink-0 w-72 md-tablet:w-80 table-lg:w-96 bg-white rounded-2xl shadow-lg p-4 m-2">
      {/* Título superior izquierdo */}
      <h4 className="text-lg font-bold text-indigo-950 mb-2">{company}</h4>

      {/* Imagen centrada */}
      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          alt={ProjectName}
          width={300}
          height={200}
          className="rounded-xl object-cover"
        />
      </div>

      {/* Subtítulo */}
      <p className="text-sm font-semibold text-gray-700 text-center mb-2">
        {ProjectName} - {location}
      </p>

      {/* Descripción */}
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}
