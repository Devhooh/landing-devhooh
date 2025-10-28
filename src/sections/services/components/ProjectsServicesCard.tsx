import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

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

export default function ProjectsServicesCard({ projects }: { projects: ProjectCardProps }) {
  return (
    <div
      className="
        group relative w-full h-full rounded-3xl overflow-hidden 
        bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 
        border border-colorPrimario5/20 shadow-[0_0_25px_rgba(103,61,230,0.15)] hover:shadow-[0_0_35px_rgba(103,61,230,0.25)]
        transition-all duration-500
      "
    >
      <div className="w-full h-full rounded-2xl shadow-lg p-4 flex flex-col justify-between relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white group-hover:text-colorPrimario5 transition-colors duration-300 mb-2">
            {projects.company}
          </h2>
          <div className="flex items-center gap-2 text-colorHover5/80 text-sm">
            <MapPin className="w-4 h-4 flex-shrink-0"/>
            <span>{projects.location}</span>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center mb-6 group/image">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
            <Image
              src={projects.imageSrc}
              alt={projects.ProjectName}
              width={150}
              height={150}
              className="w-32 h-32 rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-colorPrimario5" />
            <h3 className="text-lg font-semibold text-white">{projects.ProjectName}</h3>
          </div>

          <p className="text-colorHover5/90 text-sm leading-relaxed mb-4 line-clamp-3">
            {projects.description}
          </p>

          {/* Tecnologías */}
          {projects.technologies?.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {projects.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-colorPrimario5/20 text-white border border-colorPrimario5/30"
                  >
                    {tech}
                  </span>
                ))}
                {projects.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-full bg-colorHover5/20 text-colorHover5 border border-colorHover5/30">
                    +{projects.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Botón (todo el ancho clickeable) */}
        <div className="mt-auto">
          <Link
            href={`/portfolio/${projects.slug}`}
            className="
              group/link relative w-full overflow-hidden py-3 px-6 rounded-2xl 
              bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
              text-white font-semibold shadow-lg hover:shadow-xl 
              transition-all duration-300 flex items-center justify-center gap-2
            "
          >
            {/* Brillo: no intercepta el mouse */}
            <div
              className="
                pointer-events-none absolute inset-0 bg-gradient-to-r 
                from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover/link:translate-x-full 
                transition-transform duration-700
              "
            />
            <span className="relative z-10">Ver proyecto</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Overlays decorativos: desactivados para el mouse */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-colorPrimario5/30 transition-all duration-300"></div>
    </div>
  );
}
