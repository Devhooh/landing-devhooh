import Image from "next/image";
import ServiceCardButtons from "@/components/layout/ServiceCardButtons";

interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

export default function CaroulselCard({
  card,
}: {
  card: CardData;
  index?: number;
}) {

  return (
    <div
      className="
        bg-white border border-colorPrimarioLogo2 hover:border-colorPrimarioLogo1
        rounded-2xl shadow-xl overflow-hidden h-[490px] flex flex-col 
        hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
    >
      {/* Imagen */}
      <div className="flex items-center justify-center p-6 h-40 md-tablet:h-48">
        <Image
          src={card.icon}
          alt={card.title}
          width={550}
          height={550}
          loading="lazy"
          className="object-contain max-h-36 w-auto h-auto"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-5 text-gray-900">
        <h2 className="text-xl font-bold mb-2 text-left text-colorPrimario2 flex items-center gap-2">
          <span>{card.title}</span>
          <span className="animate-pulse w-2 h-2 rounded-full bg-green-700" />
        </h2>
        <p className="text-sm text-gray-600 leading-snug line-clamp-3 text-left mb-4">
          {card.details}
        </p>
      </div>

      {/* Botones */}
      <ServiceCardButtons slug={card.slug}/>
    </div>
  );
}
