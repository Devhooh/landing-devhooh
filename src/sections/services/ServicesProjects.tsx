"use client";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  link?: string;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location?: string;
  service?: string; // opcional
  technologies?: string[];
  description?: string;
  subtitle?: string;
}

interface ServicesProjectsProps {
  project: Project;
  showService?: boolean; // <-- nuevo prop opcional
}

export default function ServicesProjects({
  project,
  showService = true, // por defecto true
}: ServicesProjectsProps) {
  return (
    <section className="w-full h-auto">
      {/* Card */}
      <div className="h-[400px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        {/* Imagen */}
        <div className="bg-gray-200 p-3 h-48 w-full flex items-center justify-center">
          <Image
            width={400}
            height={400}
            src={project.imageSrc}
            alt={project.imageAlt || project.ProjectName}
            className="object-contain w-full h-full p-5"
          />
        </div>

        {/* Contenido */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {project.ProjectName}
            </h3>

            {/* Mostrar servicio solo si existe y showService es true */}
            {showService && project.service && (
              <p className="text-base text-gray-700">
                <span className="font-medium">Servicio:</span> {project.service}
              </p>
            )}
          </div>

          <div>
            <Link href={project.link || "/contact"}>
              <button className="bg-white text-indigo-900 hover:border-2 border-indigo-950 font-bold mt-3 py-2 px-4 rounded-lg hover:bg-gray-300 transform transition">
                Ver más detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

