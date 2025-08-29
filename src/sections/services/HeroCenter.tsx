"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroCenterProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string[];
  features?: string[]; 
}

export default function HeroCenter({ title, subtitle, cta, images, features = [] }: HeroCenterProps) {
  return (
    <section className="h-auto">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-3 items-center gap-6">

          {/* Imagen izquierda */}
          {images[0] && (
            <div className="hidden table-lg:flex justify-end">
              <Image
                src={images[0]}
                alt={title}
                width={500}
                height={500}
                className="flex-1 max-h-64 object-contain rounded-lg"
              />
            </div>
          )}

          {/* Contenedor central: título, subtítulo, lista y botón */}
          <div className="flex flex-col items-center table-lg:items-center text-center table-lg:text-center gap-6 col-span-1 table-lg:col-span-1">
            
            <div className="mt-6 table-lg:mt-2">
              <h2 className="text-3xl md-tablet:text-4xl font-extrabold text-indigo-950 leading-tight">
                {title}
              </h2>
            </div>

            {/* Imagen para mobile debajo del título */}
            {images[0] && (
              <div className="table-lg:hidden my-5">
                <Image
                  src={images[0]}
                  alt={title}
                  width={500}
                  height={500}
                  className="flex-1 w-96 max-h-64 object-contain rounded-lg"
                />
              </div>
            )}

            <div className="mb-5 table-lg:mb-3">
              <p className="text-lg md-tablet:text-xl text-gray-700 max-w-2xl">
                {subtitle}
              </p>
            </div>

            <div className="flex justify-center table-lg:justify-start">
              {features.length > 0 && (
                <ul className="
                    space-y-4 text-sm md-tablet:text-base text-gray-800
                    text-left table-lg:text-left
                    max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0
                  ">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-fuchsia-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href="/contact" className="mt-20 table-lg:mt-5">
              <button className="px-8 py-4 text-lg md:text-xl font-semibold bg-fuchsia-500 text-white rounded-xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
                {cta}
              </button>
            </Link>
          </div>

          {/* Imagen derecha */}
          {images[1] && (
            <div className="hidden table-lg:flex justify-start">
              <Image
                src={images[1]}
                alt={title}
                width={500}
                height={500}
                className="max-h-64 object-contain rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
