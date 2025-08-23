import Image from "next/image";
import Link from "next/link";

interface CardData {
  slug: string;
  title: string;
  details: string;
  color: string;
  icon: string;
}

export default function CarouselCard({ card }: { card: CardData }) {
  return (
    <div
      className="
        bg-purple-800/60 rounded-2xl shadow-lg overflow-hidden h-[450px]
        flex flex-col transition-transform duration-300 hover:scale-[1.03]
      "
    >
      {/* Imagen */}
      <div className="flex items-center justify-center bg-black/10 p-6">
        <Image
          src={card.icon}
          alt={card.title}
          width={100}
          height={100}
          className="object-contain w-20 h-20"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-5 text-white">
        <h3 className="text-xl font-bold mb-2 text-left">{card.title}</h3>
        <p className="text-sm text-gray-100/90 leading-snug line-clamp-3 text-left mb-4">
          {card.details}
        </p>

      </div>
      {/* Botones */}
      <div className="mb-8 px-5 flex flex-col gap-4">
        <Link href="/contact">
          <button className="w-full py-2 rounded-lg bg-white text-gray-900 font-semibold transition hover:bg-gray-100">
            Cotiza tu proyecto
          </button>
        </Link>
        <Link href={`/services/${card.slug}`}>
          <button className="w-full py-2 rounded-lg border border-white/40 text-white font-medium transition hover:bg-white/10">
            Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
