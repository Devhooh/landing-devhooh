import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

export default function CaroulselCard({
  card,
  index = 0,
}: {
  card: CardData;
  index?: number;
}) {
  return (
    <InViewAnimationWrapper
      direction="y"
      offset={30}
      delay={index * 0.2}
      transition={{ duration: 0.4, delay: index * 0.2}}
      className="
        bg-white border border-colorPrimarioLogo2 hover:border-colorPrimarioLogo1
        rounded-2xl shadow-xl overflow-hidden h-[490px] flex flex-col 
        hover:scale-[1.05] active:scale-[0.98] transform transition-all"
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
      <div className="mb-12 px-5 flex flex-col gap-4">
        <Link href="/contact">
          <button 
            className="
            relative w-full py-2 rounded-lg bg-colorPrimario5 text-white font-semibold overflow-hidden
            hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
          >
            <span className="relative z-10">Cotiza tu proyecto</span>
            <span className="absolute inset-0 bg-white/30 -translate-x-full rotate-45 animate-shine" />
          </button>
        </Link>

        <Link href={`/services/${card.slug}`}>
          <button className="
            w-full py-2 rounded-lg border border-colorSecundario2 text-colorPrimario4 font-medium bg-white
            hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
          >
            Ver más detalles
          </button>
        </Link>
      </div>
    </InViewAnimationWrapper>
  );
}
