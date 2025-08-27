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
    <div className="h-[450px] bg-gradient-to-b from-fuchsia-500/80 to-purple-300/80 rounded-3xl overflow-hidden flex flex-col w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]">
      
      {/* Imagen */}
      <div className="relative w-full h-48 md-tablet:h-56 table-lg:h-64 border-b border-cyan-500/40">
        <Image
          src={imageSrc}
          alt={ProjectName}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 550px) 100vw, (max-width: 950px) 50vw, 33vw"
        />
        {/* Overlay neón sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
      </div>

      {/* Contenido */}
      <div className="p-4 md-tablet:p-5 table-lg:p-6 flex flex-col gap-2 flex-1 text-white">
        <h3 className="text-lg md-tablet:text-xl table-lg:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-800">
          {ProjectName}
        </h3>
        {company && (
          <p className="text-blue-800 text-base md-tablet:text-lg font-semibold">
            Empresa: {company}
          </p>
        )}
        {subtitle && (
          <p className="text-gray-800 text-base md-tablet:text-lg">
            {subtitle}
          </p>
        )}

        {/* Botón futurista */}
        <div className="flex justify-center mt-3 md-tablet:mt-4">
          <Link href={`/portfolio/${slug}`}>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 md-tablet:py-3 px-6 md-tablet:px-8 rounded-xl text-sm md-tablet:text-base font-semibold shadow-md hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300">
              Ver proyecto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
