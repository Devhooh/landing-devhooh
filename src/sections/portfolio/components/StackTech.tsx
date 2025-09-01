import { Project } from "@/data/portfolioDetails";
import { iconsData } from "@/data/techData";

interface StackSectionProps {
  project: Project;
}

export default function StackTech({ project }: StackSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-purple-300 to-white py-12 px-5 md-tablet:px-8">
      <h2 className="text-3xl md-tablet:text-4xl font-bold text-blue-950 text-center mb-8">
        Stack de tecnologías del proyecto
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {project.stackTech.map((tech) => {
          const Icon = iconsData[tech.icon]; // obtenemos el componente dinámicamente
          return (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-gray-50 rounded-lg shadow p-3 min-w-[220px]"
            >
              <Icon className={`text-3xl ${tech.color} w-10 h-10`} />
              <span className="text-xl md-tablet:text-2xl font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
