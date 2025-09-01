import { Project } from "@/data/portfolioDetails";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

interface ResultSectionProps {
  project: Project;
}

export default function ResultSection({ project }: ResultSectionProps) {
  const result = project.result;

  return (
    <section className="w-full bg-gray-50 py-12 px-4 md-tablet:px-8">
      {/* Título */}
      <h2 className="text-2xl md-tablet:text-4xl font-bold text-blue-950 mb-4 text-center">
        Resultado
      </h2>

      {/* Descripción */}
      <p className="text-gray-600 text-base md-tablet:text-lg mb-8 max-w-3xl mx-auto text-center">
        {result.descripcion}
      </p>

      {/* Bloques Before / After */}
      <div className="flex flex-col table-lg:flex-row gap-8">
        {/* Before */}
        <div className="table-lg:w-1/2 bg-white border border-fuchsia-300 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Antes:</h3>
          <ul className="space-y-2">
            {result.antes.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <AiOutlineClose className="flex-shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="table-lg:w-1/2 bg-white border border-fuchsia-300 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">Despues:</h3>
          <ul className="space-y-2">
            {result.despues.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <AiOutlineCheck className="flex-shrink-0 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
