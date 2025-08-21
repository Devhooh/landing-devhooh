"use client";

import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
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
  subtitle?: string;
}

export function ProjectCard({
  imageSrc,
  ProjectName,
  subtitle,
  slug
}: ProjectCardProps) {

  return (
    <div className="bg-gray-300 rounded-2xl shadow-xl overflow-hidden flex flex-col w-full">
      {/* Imagen (altura controlada por breakpoint) */}
      <div className="relative w-full h-48 md-tablet:h-56 table-lg:h-64">
        <Image
          src={imageSrc}
          alt={ProjectName}
          fill
          style={{ objectFit: "cover" }} // ⚡ Esto evita el warning
          sizes="(max-width: 550px) 100vw, (max-width: 950px) 50vw, 33vw"
          priority={false}
        />
      </div>

      {/* Contenido */}
      <div className="p-4 md-tablet:p-5 table-lg:p-6 flex flex-col gap-2 flex-1">
        <h3 className="text-lg md-tablet:text-xl table-lg:text-2xl font-bold text-gray-900">
          {ProjectName}
        </h3>
        <p className="text-gray-600 text-sm md-tablet:text-base">
          {subtitle}
        </p>

          <div className="flex justify-center mt-3 md-tablet:mt-4">
            <Link href={`/portfolio/${slug}`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 md-tablet:py-3 px-6 md-tablet:px-8 rounded-xl text-sm md-tablet:text-base font-semibold">
                Ver proyecto
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
}
