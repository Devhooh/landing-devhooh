"use client";

import Link from "next/link";
import React, { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";

interface ServiceCardButtonsProps {
  slug: string;
}

export default function ServiceCardButtons({ slug }: ServiceCardButtonsProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    startTransition(() => {
      router.push(path);
    });
  };

  const cardLoadingOverlay = isPending ? (
    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-20 flex items-center justify-center rounded-2xl">
      <Loader2 className="w-10 h-10 text-colorPrimario5 animate-spin" />
    </div>
  ) : null;

  return (
    <div className="mb-12 px-5 flex flex-col gap-4">
      {/* Overlay del Loader (Lo hacemos absoluto con respecto al padre de la Card) */}
      {cardLoadingOverlay} 

      {/* Botón 1: Cotiza tu proyecto */}
      <Link href="/contact" passHref legacyBehavior>
        <button 
          onClick={(e) => handleNavigation(e, "/contact")}
          disabled={isPending}
          className="
            relative w-full py-2 rounded-lg bg-colorPrimario5 text-white border border-colorSecundario2 transform delay-100
            font-semibold overflow-hidden hover:bg-colorPrimario5/70 transition-colors disabled:opacity-50"
        >
          <span className="relative z-10">Cotiza tu proyecto</span>
          <span className="absolute inset-0 bg-white/30 -translate-x-full rotate-45 animate-shine" />
        </button>
      </Link>

      {/* Botón 2: Ver más detalles */}
      <Link href={`/services/${slug}`} passHref legacyBehavior>
        <button
          onClick={(e) => handleNavigation(e, `/services/${slug}`)}
          disabled={isPending}
          className="
            w-full py-2 rounded-lg border border-colorSecundario2 text-colorPrimario4 font-medium bg-white 
            hover:bg-colorPrimario5/30 transition-colors transform delay-100 disabled:opacity-50"
        >
          Ver más detalles
        </button>
      </Link>
    </div>
  );
}