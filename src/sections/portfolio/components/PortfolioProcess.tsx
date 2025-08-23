import { Project } from "@/data/portfolioDetails";

interface ChallengeSectionProps {
  project: Project;
}

export default function PortfolioProcess({ project }: ChallengeSectionProps) {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center tablet-md:text-4xl">
        Proceso de Desarrollo
      </h2>

      <div
        className="
          grid 
          gap-6 
          justify-center 
          md-tablet:grid-cols-2 
          table-lg:grid-cols-3
          max-w-6xl mx-auto
        "
      >
        {project.process.map((proceso) => (
          <div
            key={proceso.id}
            className="
              bg-white shadow-md rounded-2xl p-6 
              border border-gray-200 
              hover:shadow-lg transition-shadow
              flex flex-col items-center text-center
            "
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white text-lg font-bold mb-4">
              {proceso.id}
            </div>
            <h3 className="text-xl font-semibold mb-4">{proceso.title}</h3>
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
