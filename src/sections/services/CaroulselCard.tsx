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
        bg-gradient-to-b from-blue-100 to-blue-50 border border-fuchsia-400 rounded-2xl shadow-lg overflow-hidden h-[490px]
        flex flex-col transition-transform duration-300 hover:scale-[1.03]
      "
    >
      {/* Imagen */}
      <div className="flex items-center justify-center bg-black/10 p-6">
        <Image
          src={card.icon}
          alt={card.title}
          width={300}
          height={300}
          className="object-contain w-36 h-36"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-5 text-gray-950">
        <h3 className="text-xl font-bold mb-2 text-left">{card.title}</h3>
        <p className="text-sm text-gray-700 leading-snug line-clamp-3 text-left mb-4">
          {card.details}
        </p>

      </div>
      {/* Botones */}
      <div className="mb-12 px-5 flex flex-col gap-4">
        <Link href="/contact">
          <button className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold transition hover:bg-blue-600">
            Cotiza tu proyecto
          </button>
        </Link>
        <Link href={`/services/${card.slug}`}>
          <button className="w-full py-2 rounded-lg border border-blue-400 text-gray-900 font-medium transition bg-blue-100/60 hover:bg-blue-200">
            Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
