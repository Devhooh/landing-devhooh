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
    <div
      className={`
        w-full table-lg:w-3/4
        ${reverse ? "table-lg:self-end" : "table-lg:self-start"}
      `}
    >
      <div
        className={`
          bg-purple-400/50 rounded-2xl shadow-lg border border-purple-400
          overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
          flex flex-col table-lg:flex-row
          ${reverse ? "table-lg:flex-row-reverse" : ""}
        `}
      >
        {/* Imagen */}
        <div className="p-6 md-tablet:w-1/2 table-lg:w-1/3 flex items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100">
          <Image
            width={220}
            height={220}
            src={image}
            alt={title}
            className="w-full h-auto object-contain max-w-[200px]"
          />
        </div>

        {/* Texto */}
        <div className="table-lg:w-2/3 p-6 md-tablet:p-10 flex flex-col justify-center text-center md-tablet:text-left">
          <h3 className="text-2xl md-tablet:text-3xl font-extrabold text-gray-900 mb-3">
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
