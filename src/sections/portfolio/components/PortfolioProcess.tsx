import { Project } from "@/data/portfolioDetails";

interface ChallengeSectionProps {
  project: Project;
}

export default function PortfolioProcess({ project }: ChallengeSectionProps) {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-blue-950 tablet-md:text-4xl">
        Proceso de Desarrollo
      </h2>

      <div
        className="
          grid gap-6 justify-center md-tablet:grid-cols-2 table-lg:grid-cols-3 max-w-6xl mx-auto p-5 rounded-3xl
          bg-gradient-to-tr from-purple-800 via-purple-200 to-purple-800 border border-purple-300
          "
      >
        {project.process.map((proceso) => (
          <div
            key={proceso.id}
            className="
              bg-fuchsia-200 shadow-md rounded-2xl p-6 
              border border-fuchsia-300
              hover:shadow-lg transition-shadow
              flex flex-col items-center text-center
            "
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-fuchsia-500 text-white text-lg font-bold mb-4">
              {proceso.id}
            </div>
            <h3 className="text-xl font-semibold text-blue-950 mb-4">{proceso.title}</h3>
            <ul className="text-gray-600 text-sm mx-3 list-disc text-left">
              {proceso.process.map((items, idx) => (
                <li key={idx} className="pb-3">
                  {items}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
