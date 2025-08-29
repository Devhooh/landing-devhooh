"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroRightProps {
  title: string;
  subtitle: string;
  cta: string;
  images: string;
  features?: string[];
}

export default function HeroRight({ title, subtitle, cta, images, features = [] }: HeroRightProps) {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <div className="order-1 table-lg:order-2 mt-6 table-lg:mt-2">
            <h2 className="text-4xl font-extrabold text-indigo-950 leading-tight text-center table-lg:text-right">
            {title}
          </h2>
          </div>

          {/* --- 2) IMAGEN --- */}
          <div className="my-5 table-lg:m-2 order-2 table-lg:order-1 table-lg:row-span-4 flex justify-center table-lg:justify-start">
            <Image
              src={images}
              alt={title}
              width={500}
              height={500}
              className="w-64 md-tablet:w-80 table-lg:w-96 h-auto object-contain rounded-lg"
            />
          </div>

          {/* --- 3) SUBTÍTULO --- */}
          <div className="order-3 mb-3">
            <p className="text-lg md-tablet:text-xl text-gray-700 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
            {subtitle}
          </p>
          </div>

          {/* --- 4) LISTA --- */}
          <div className="order-4 flex justify-end">
            {features.length > 0 && (
              <ul className="space-y-3 text-gray-800 text-left max-w-md mx-auto table-lg:mx-0">
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
          <div className="order-5 flex justify-center table-lg:justify-end m-5 table-lg:m-4">
            <Link href="/contact">
              <button className="px-8 py-4 text-lg md-tablet:text-xl font-semibold bg-fuchsia-500 text-white rounded-xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300">
                {cta}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
