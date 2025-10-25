import Image from "next/image";
import Link from "next/link";

interface Project {
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
}

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="w-full bg-colorFondo rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {/* Imagen */}
      <div className="bg-colorFondo p-3 flex items-center justify-center relative w-full h-48 md-tablet:h-56 table-lg:h-64">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt || project.ProjectName}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 750px) 100vw, (max-width: 950px) 50vw, 33vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info principal */}
      <div className="p-6 flex flex-col flex-1 justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-colorPrimario2 mb-2">
            {project.ProjectName}
          </h2>

          <p className="text-sm text-gray-700 pb-5 line-clamp-3 overflow-hidden">
            {project.description}
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-colorSecundario4 text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col justify-between tablet-md:flex-row gap-4 mt-6">
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex-1 text-center border border-colorPrimario1 bg-colorFondo hover:bg-colorSecundario4 text-colorPrimario3 hover:text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Más detalles
          </Link>
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex-1 text-center border border-colorPrimario1 bg-colorFondo hover:bg-colorSecundario4 text-colorPrimario3 hover:text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Ver proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}
