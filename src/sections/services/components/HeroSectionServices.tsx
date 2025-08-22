"use client";

import Link from "next/link";
import { ServicesData } from "@/data/ServicesDetails";

interface HeroSectionProps {
  service: ServicesData;
}

export default function HeroSectionServices({ service }: HeroSectionProps) {
  return (
    <section className="w-full py-24 bg-indigo-50 flex flex-col items-center text-center px-4 md:px-8">
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-950 mb-6">
        {service.title}
      </h1>

      {/* Subtítulo */}
      <p className="text-lg md:text-2xl text-gray-700 mb-10 max-w-3xl">
        {service.subtitle}
      </p>

      {/* Botón global */}
      <Link href="/contact">
        <button className="px-8 py-4 bg-indigo-950 text-white rounded-full font-semibold text-lg hover:bg-indigo-800 transition-colors">
          Contáctanos
        </button>
      </Link>
    </section>
  );
}
