import Image from "next/image";
import { Eye, Tag } from "lucide-react";
import Link from "next/link";
import AnimateOnVisible from "@/components/layout/AnimateOnVisible";

interface Project {
  slug: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  service?: string;
}

interface ServicesProjectsProps {
  project: Project;
  showService?: boolean;
  index?: number;
}

export default function ServicesProjectCard({
  project,
  showService = true,
  index = 0,
}: ServicesProjectsProps) {

  return (
    <Link href={`/portfolio/${project.slug}`}>
      <section className="w-full h-auto">
        <div
          className="group relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 border border-colorPrimario5/20 shadow-[0_0_25px_rgba(103,61,230,0.15)] hover:shadow-[0_0_35px_rgba(103,61,230,0.25)] transition-all duration-500"
        >
          {/* Efectos decorativos */}
          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
          <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Contenedor de imagen mejorado */}
          <div className="relative h-64 overflow-hidden">
            <AnimateOnVisible
              className="relative w-full h-full bg-white/5 backdrop-blur-sm"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || project.ProjectName}
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
                sizes="(max-width: 750px) 100vw, (max-width: 950px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-colorPrimario1" />
                </div>
              </div>
            </AnimateOnVisible>
          </div>

          <div className="relative p-6 h-[186px] flex flex-col justify-between bg-gradient-to-t from-colorDarkFondo4/50 to-transparent backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-xl md-tablet:text-2xl font-bold text-white group-hover:text-colorPrimario5 transition-colors duration-300 line-clamp-2">
                {project.ProjectName}
              </h3>
              {showService && project.service && (
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm w-fit">
                  <Tag className="w-4 h-4 text-colorHover4" />
                  <strong className="text-colorPrimario5 font-semibold text-sm">
                    {project.service}
                  </strong>
                </div>
              )}
            </div>
          </div>

          {/* Efecto de brillo general en hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          {/* Borde animado en hover */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-colorPrimario5/30 transition-all duration-300"></div>
        </div>
      </section>
    </Link>
  );
}