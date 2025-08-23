"use client";

import Link from "next/link";
import { ServicesData } from "@/data/ServicesDetails";

interface HeroSectionProps {
  service: ServicesData;
}

export default function HeroSectionServices({ service }: HeroSectionProps) {
  return (
    <section className="w-full pt-20 bg-indigo-50 flex flex-col items-center text-center px-4 md-tablet:px-8">
      {/* Título */}
      <h1 className="text-4xl md-tablet:text-6xl font-extrabold text-indigo-950 mb-6">
        {service.name}
      </h1>

      {/* Subtítulo */}
      <p className="text-base md-tablet:text-lg tablet-md:text-xl table-lg:text-2xl text-gray-700 mb-10 max-w-3xl">
        {service.subtitle}
      </p>

      {/* Botón global */}
      <div className="my-8 mx-10">
        <Link href="/contact">
          <button className="px-6 py-3 md-tablet:px-8 md-tablet:py-4 bg-indigo-950 text-white rounded-full font-semibold text-base md-tablet:text-lg hover:bg-indigo-800 transition-colors">
            Contáctanos
          </button>
        </Link>
      </div>
    </section>
  );
}
