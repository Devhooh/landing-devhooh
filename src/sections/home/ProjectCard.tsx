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
  technologies,
  description
}: ProjectCardProps) {
  return (
    <div className="
      h-[650px] backdrop-blur-md border-b-4 tablet-md:border-b-8 border-colorPrimarioLogo1 border tablet-md:border-2 rounded-3xl 
      overflow-hidden flex flex-col max-w-3xl transition-transform duration-300 hover:scale-[1.01]">
      
      {/* Imagen */}
      <div className="relative w-full h-48 md-tablet:h-56 table-lg:h-64 border-b border-purple-500/30">
        <Image
          src={imageSrc}
          alt={ProjectName}
          width={600} // ajusta según el diseño real, por ejemplo 600px de ancho máximo
          height={256} // ajusta según el alto real mostrado
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={false} // solo pon true si es LCP
          loading="lazy"
        />
        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6 md-tablet:p-7 table-lg:p-8 flex flex-col gap-3 flex-1">
        <h4 className="text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold text-colorPrimario2">
          {ProjectName}
        </h4>
        {company && (
          <p className="text-colorSecundario3 text-base md-tablet:text-xl font-semibold">
            Empresa: {company}
          </p>
        )}
        {subtitle && (
          <p className="text-colorPrimario1 font-medium text-sm md-tablet:text-lg">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-colorPrimario4 text-sm md-tablet:text-base line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mt-2">
          {technologies?.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-colorHover3 text-colorPrimario2 text-xs md-tablet:text-sm px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón */}
        <div className="flex justify-center m-5">
          <Link href={`/portfolio/${slug}`}>
            <button className="
              bg-colorSecundario2 hover:bg-colorSecundario3 text-white py-2.5 md-tablet:py-3 px-7 md-tablet:px-14 rounded-xl 
              text-sm md-tablet:text-base font-semibold shadow-md transition-all duration-300">
              Ver proyecto
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
