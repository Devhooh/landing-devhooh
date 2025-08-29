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
  company,
  slug,
}: ProjectCardProps) {
  return (
    <div className="h-[450px] bg-white/5 backdrop-blur-md border border-fuchsia-400 rounded-3xl overflow-hidden flex flex-col w-full transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(150,72,219,0.35)]">
      
      {/* Imagen */}
      <div className="relative w-full h-48 md-tablet:h-56 table-lg:h-64 border-b border-purple-500/30">
        <Image
          src={imageSrc}
          alt={ProjectName}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 550px) 100vw, (max-width: 950px) 50vw, 33vw"
        />
        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6 md-tablet:p-7 table-lg:p-8 flex flex-col gap-3 flex-1">
        <h3 className="text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
          {ProjectName}
        </h3>
        {company && (
          <p className="text-fuchsia-800 text-base md-tablet:text-lg font-semibold">
            Empresa: {company}
          </p>
        )}
        {subtitle && (
          <p className="text-gray-700 text-sm md-tablet:text-base">
            {subtitle}
          </p>
        )}

        {/* Botón premium */}
        <div className="flex justify-center mt-5">
          <Link href={`/portfolio/${slug}`}>
            <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white py-2.5 md-tablet:py-3 px-7 md-tablet:px-9 rounded-2xl text-sm md-tablet:text-base font-semibold shadow-md transition-all duration-300">
              Ver proyecto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
