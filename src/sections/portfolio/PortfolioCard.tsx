// src/components/sections/portfolio/PortfolioCard.tsx

import React from "react";

// Definimos el tipo de dato para el proyecto para mayor claridad
interface Project {
  id: number;
  title: string;
  country: string;
  service: string;
  technologies: string[];
}

// El componente recibe un objeto 'project' como prop
export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      {/* Placeholder para la imagen del proyecto */}
      <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
        {/* Aquí podrías poner una imagen real del proyecto. Por ahora, un placeholder. */}
        <p className="text-gray-500 text-sm">Imagen del proyecto</p>
      </div>

      <div className="p-6">
        {/* Título del proyecto */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>

        {/* País y Servicio */}
        <div className="text-sm text-gray-500 mb-4">
          <p>
            <span className="font-medium">País:</span> {project.country}
          </p>
          <p>
            <span className="font-medium">Servicio:</span> {project.service}
          </p>
        </div>

        {/* Etiquetas de tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
