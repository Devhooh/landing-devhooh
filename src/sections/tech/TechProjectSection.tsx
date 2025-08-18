"use client";

import { TechProjectSlider } from "./TechProjectSlider";
import { projectsData } from "@/data/portfolioData";

export default function TechProjectSection() {
  const limit: number = 5;
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="w-full py-16 px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto text-left mb-8">
        <h2 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-indigo-950">
          Proyectos que hemos hecho realidad
        </h2>
      </div>

      <TechProjectSlider projectsData={displayedProjects} />
    </section>
  );
}
