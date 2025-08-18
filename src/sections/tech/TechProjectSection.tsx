"use client";

import { TechProjectSlider } from "./TechProjectSlider";

interface Project {
  id: number;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
}

interface ProjectsSectionProps {
  projects: Project[];
  limit?: number;
}

export default function TechProjectSection({ projects, limit = 6 }: ProjectsSectionProps) {
  const displayedProjects = projects.slice(0, limit);

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left mb-8">
        <h2 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-indigo-950">
          Proyectos que hemos hecho realidad
        </h2>
      </div>

      <TechProjectSlider projects={displayedProjects} />
    </section>
  );
}
