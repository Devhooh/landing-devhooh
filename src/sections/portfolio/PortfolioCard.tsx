import Image from "next/image";

interface Project {
  id: number;
  title: string;
  country: string;
  service: string;
  technologies: string[];
}

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="bg-gray-200 p-3 h-48 w-full flex items-center justify-center">
        <Image
          width={200}
          height={200}
          src="/assets/images/slide1.png"
          alt={project.title}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <div className="text-sm text-gray-500 mb-4">
          <p>
            <span className="font-medium">Servicio:</span> {project.service}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="text-sm text-gray-500">
            <p>
              <span className="font-medium">Tecnologias:</span>
            </p>
          </div>
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