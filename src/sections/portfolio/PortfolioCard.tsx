"use client";
import { useState } from "react";
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
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      {/* Contenedor para rotación */}
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Lado frontal */}
        <div className="absolute w-full h-full backface-hidden bg-white border-2 border-fuchsia-400 rounded-lg overflow-hidden">
          <div className="bg-fuchsia-100 p-3 h-48 w-full flex flex-col items-center justify-center">
            <Image
              width={400}
              height={400}
              src={project.imageSrc}
              alt={project.ProjectName}
              className="object-contain w-full h-full p-5"
            />
            <p className="text-xl text-indigo-950 animate-pulse">
              <span className="font-semibold">Ver descripcion:</span>
            </p>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-indigo-950 mb-2">
              {project.ProjectName}
            </h3>
            <p className="text-sm text-indigo-800">
              <span className="font-medium">País:</span> {project.location}
            </p>
            <p className="text-sm text-indigo-800">
              <span className="font-medium">Servicio:</span> {project.service}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-fuchsia-300 text-black text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Lado trasero */}
        <div className="absolute w-full h-full bg-gradient-to-t from-fuchsia-900 to-blue-800 text-white p-6 rounded-lg shadow-xl backface-hidden rotate-y-180 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-white mb-2 items-center text-center">
            Descripcion
          </h3>
          <p>{project.description}</p>
          
          <Link 
            href={`/portfolio/${project.slug}`}
            className="bg-white text-center text-indigo-900 font-bold py-2 px-4 rounded-lg mt-4 hover:bg-gray-300 transform transition"
          >
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
