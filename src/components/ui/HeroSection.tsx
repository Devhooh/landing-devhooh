// src/components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  imageSrc?: string;
  imageAlt?: string;
  layout: "left" | "right" | "center";
  backgroundImageSrc?: string;
  backgroundColor?: string;
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  ctaLink,
  imageSrc,
  imageAlt,
  layout = "left",
  backgroundImageSrc,
  backgroundColor = "bg-gray-100",
}: HeroProps) {
  const isLeftLayout = layout === "left";
  const isRightLayout = layout === "right";
  const isCenterLayout = layout === "center";

  // Clases CSS condicionales para el diseño
  const contentOrder = isLeftLayout ? "table-lg:order-1" : "table-lg:order-2";
  const imageOrder = isLeftLayout ? "table-lg:order-2" : "table-lg:order-1";
  const contentAlignment = isCenterLayout ? "text-center" : isRightLayout ? "text-center table-lg:text-right" : "text-center table-lg:text-left";
  const contentMargin = isCenterLayout ? "mx-auto" : isRightLayout ? "mx-auto table-lg:ml-auto table-lg:mr-0" : "mx-auto table-lg:mr-auto table-lg:ml-0";
  const buttonAlignment = isRightLayout ? "mx-auto table-lg:ml-auto table-lg:mr-0" : "mx-auto table-lg:mr-auto table-lg:ml-0";

  const sectionStyle = backgroundImageSrc
    ? {
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section className={`w-full p-8 ${!backgroundImageSrc ? backgroundColor : ''}`} style={sectionStyle}>
      <div className="max-w-7xl mx-auto flex flex-col table-lg:flex-row items-center gap-8 md-tablet:gap-16">
        {/* Lado del contenido (texto y CTA) */}
        <div
          className={`flex-1 ${contentAlignment} ${isCenterLayout ? "w-full" : contentOrder}`}
        >
          <h1 className="text-4xl md-tablet:text-5xl font-extrabold text-indigo-950 leading-tight mb-4">
            {title}
          </h1>
          
          {imageSrc && !isCenterLayout && (
            <div className={`table-lg:hidden flex justify-center mb-6`}>
              <Image
                src={imageSrc}
                alt={imageAlt || ""}
                width={500}
                height={500}
                className="w-96 h-auto object-contain rounded-3xl"
              />
            </div>
          )}

          <p className={`text-lg md-tablet:text-xl text-gray-700 my-12 mb-6 max-w-2xl ${contentMargin}`}>
            {subtitle}
          </p>
          {cta && ctaLink && (
            <Link href={ctaLink}>
              <button className={`px-8 py-4 text-lg md:text-xl font-semibold bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 ${buttonAlignment}`}>
                {cta}
              </button>
            </Link>
          )}
        </div>

        {imageSrc && !isCenterLayout && (
          <div
            className={`flex-1 hidden table-lg:flex justify-center ${imageOrder}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || ""}
              width={500}
              height={500}
              className="w-96 h-auto object-contain rounded-3xl"
            />
          </div>
        )}
      </div>
    </section>
  );
}
