import Image from "next/image";
import { Project } from "@/data/portfolioDetails";

interface ProjectAboutProps {
  project: Project;
}

export default function PortfolioAbout({ project }: ProjectAboutProps) {
  return (
    <section className="w-full bg-white py-12 px-4 md-tablet:px-8">
      {/* Sobre el proyecto */}
      <div className="max-w-7xl mx-auto flex flex-col table-lg:flex-row items-center gap-8 mb-16">
        {/* Texto a la izquierda */}
        <div className="
          table-lg:w-1/2 text-left p-5 rounded-2xl
          bg-gradient-to-b from-purple-50 to-purple-500/60 shadow-2xl">
          <h2 className="text-2xl md-tablet:text-3xl font-bold text-blue-800 mb-4">
            Sobre el proyecto
          </h2>
          <p className="text-gray-700 text-base md-tablet:text-lg">
            {project.aboutProject.description}
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="table-lg:w-1/2 flex justify-center mt-4 table-lg:mt-0">
          <Image
            src={project.aboutProject.image}
            alt={`Sobre el proyecto ${project.projectName}`}
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Sobre la compañía */}
      <div className="max-w-7xl mx-auto flex flex-col table-lg:flex-row items-center gap-8">
        {/* Texto a la derecha en desktop, arriba en móvil */}
        <div className="
          table-lg:w-1/2 text-left table-lg:text-right order-1 table-lg:order-2 p-5 rounded-2xl
          bg-gradient-to-b from-purple-50 to-purple-500/60 shadow-2xl
          ">
          <h2 className="text-2xl md-tablet:text-3xl font-bold text-blue-800 mb-4">
            Sobre la compañía
          </h2>
          <p className="text-gray-600 text-base md-tablet:text-lg">
            {project.aboutCompany.description}
          </p>
        </div>

        {/* Imagen a la izquierda en desktop, abajo en móvil */}
        <div className="table-lg:w-1/2 flex justify-center mt-4 table-lg:mt-0 order-2 table-lg:order-1">
          <Image
            src={project.aboutCompany.image}
            alt={`Sobre la compañía ${project.company}`}
            width={300}
            height={200}
            className="rounded-2xl shadow-lg w-64 object-cover"
          />
        </div>
      </div>
    </section>

  );
}
