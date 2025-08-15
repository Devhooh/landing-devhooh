import Image from "next/image";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;      // ruta de imagen en public/
  reverse?: boolean;  // alterna izquierda/derecha en desktop
}

export function SolutionCard({
  title,
  description,
  image,
  reverse = false,
}: SolutionCardProps) {
  return (
    // Contenedor externo que controla ancho y alineación de la card entera
    <div
      className={`
        w-full table-lg:w-3/4
        ${reverse ? "table-lg:self-end" : "table-lg:self-start"}
      `}
    >
      {/* Card interna */}
      <div
        className={`
          bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200
          flex flex-col table-lg:flex-row
          ${reverse ? "table-lg:flex-row-reverse" : ""}
        `}
      >
        {/* Imagen */}
        <div className="p-6 md-tablet:w-1/2 md-tablet:mx-auto table-lg:w-1/3 flex items-center justify-center bg-gray-100">
          <Image
            width={220}
            height={220}
            src={image}
            alt={title}
            className="w-full h-auto object-contain max-w-[200px]"
          />
        </div>

        {/* Texto */}
        <div className="table-lg:w-2/3 p-6 md-tablet:p-8 flex flex-col md-tablet:justify-center text-center">
          <h3 className="text-2xl md-tablet:text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h3>
          <p className="text-gray-600 text-base md-tablet:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

