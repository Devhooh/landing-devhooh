import Image from "next/image";
import { Project } from "@/data/portfolioDetails";

interface PortfolioHeroProps {
  project: Project;
}

export default function PortfolioHero({ project }: PortfolioHeroProps) {
  return (
    <section className="w-full bg-gradient-to-b from-purple-950 via-purple-700 to-white py-12">
      {/* Título */}
      <div className="text-center mb-10">
        <h1 className="text-3xl mx-5 md-tablet:text-4xl font-extrabold text-white">
          {project.title}
        </h1>
      </div>

      {/* Grid de detalles */}
      <div className="grid grid-cols-2 table-lg:grid-cols-4 gap-6 max-w-4xl mx-5 md-tablet:mx-auto text-center mb-12">
        <div>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Proyecto</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.projectName}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Cliente</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.company}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Servicio</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.service}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold underline text-blue-300 uppercase">Ubicación</h3>
          <p className="mt-1 text-xl font-medium text-gray-200">{project.location}</p>
        </div>
      </div>

      {/* Imagen principal */}
      <div className="flex justify-center">
        <Image
          src={project.imageHero}
          alt={project.projectName}
          width={900}
          height={500}
          className="rounded-xl shadow-lg min-w-10 object-cover"
        />
      </div>
    </section>
  );
}
