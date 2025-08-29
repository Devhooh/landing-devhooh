"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

interface HeroLeftProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string;
  features?: string[];
}

export default function HeroLeft({
  title,
  subtitle,
  cta,
  images,
  features = [],
}: HeroLeftProps) {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <div className="order-1 mt-6 table-lg:mt-2">
            <h2 className=" text-3xl md-tablet:text-4xl font-extrabold text-indigo-950 leading-tight text-center table-lg:text-left">
            {title}
          </h2>
          </div>

          {/* --- 2) IMAGEN --- */}
          <div className="order-2 my-5 table-lg:order-2 table-lg:row-span-4 flex justify-center">
            <Image
              src={images}
              alt={title}
              width={500}
              height={500}
              className="max-w-2xl md-tablet:w-80 table-lg:w-96 h-auto object-contain rounded-2xl"
            />
          </div>

          {/* --- 3) SUBTÍTULO --- */}
          <div className="order-3 mb-5 table-lg:mb-3">
            <p className=" text-lg md-tablet:text-xl text-gray-700 text-center table-lg:text-left leading-relaxed max-w-xl mx-auto table-lg:mx-0">
              {subtitle}
            </p>
          </div>

          {/* --- 4) LISTA --- */}
          <div className="order-4 flex justify-center table-lg:justify-start">
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

          {/* --- 5) BOTÓN --- */}
          <div className="order-5 flex justify-center table-lg:justify-start py-5">
            <Link href="/contact">
              <button className="px-8 py-4 text-lg md-tablet:text-xl font-semibold bg-fuchsia-500 text-white rounded-2xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300">
                {cta}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
