"use client";

import Link from "next/link";
import ProjectsServicesCard from "./ProjectsServicesCard"; // tu card existente
import { projectsData } from "@/data/portfolioData";

export default function ProjectsServicesSection() {
  const limit: number = 6; // cantidad de proyectos a mostrar
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="mx-5 py-8 px-4 table-lg:px-10 bg-white">
      <div className="mx-auto mb-8">
        <h2 className="text-left text-3xl md-tablet:text-4xl font-bold text-blue-900">
          Los proyectos que hemos hecho realidad
        </h2>
      </div>

      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <ProjectsServicesCard key={project.id} projects={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/portfolio"
          className="inline-block px-8 py-3 text-base md-tablet:text-xl rounded-xl bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 transition"
        >
          Ver todos los proyectos
        </Link>
      </div>
    </section>
  );
}
