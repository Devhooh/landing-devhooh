"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path: string) => {
      setIsLoading(true);
      setTimeout(() => {
          router.push(path);
      }, 50);
  };

  return (
    <div
      className="
        bg-white border border-colorPrimarioLogo2 hover:border-colorPrimarioLogo1
        rounded-2xl shadow-xl overflow-hidden h-[490px] flex flex-col 
        hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
    >
      {isLoading && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl">
          <Loader2 className="w-10 h-10 text-colorPrimario5 animate-spin" />
        </div>
      )}

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
        <Link href="/contact" passHref legacyBehavior>
          <button 
            onClick={() => handleNavigation("/contact")}
            className="
              relative w-full py-2 rounded-lg bg-colorPrimario5 text-white border border-colorSecundario2 transform delay-100
              font-semibold overflow-hidden hover:bg-colorPrimario5/70 transition-colors"
          >
            <span className="relative z-10">Cotiza tu proyecto</span>
            <span className="absolute inset-0 bg-white/30 -translate-x-full rotate-45 animate-shine" />
          </button>
        </Link>

        <Link href={`/services/${card.slug}`} passHref legacyBehavior>
          <button
            onClick={() => handleNavigation(`/services/${card.slug}`)}
            className="
              w-full py-2 rounded-lg border border-colorSecundario2 text-colorPrimario4 font-medium bg-white 
              hover:bg-colorPrimario5/30 transition-colors transform delay-100"
          >
            Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
