"use client";

import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  logos: Logo[];
  direction?: "left" | "right";
  gap?: number; // opcional, para controlar espacio entre logos
}

export function ProjectSlider({
  logos,
  direction = "left",
  gap = 6,
}: LogoSliderProps) {
  const animationClass = direction === "right" ? "animate-scroll-reverse" : "animate-scroll";

  // duplicamos logos para loop infinito
  const logosLoop = logos.concat(logos);

  return (
    <div className="overflow-hidden bg-gray-400 m-0">
      <div
        className={`flex ${animationClass} gap-${gap}`}
        style={{ minWidth: `${logosLoop.length * 10}rem` }} // opcional, asegura que no se corte
      >
        {logosLoop.map((logo, i) => (
          <div
            key={i}
            className="w-32 h-16 md-tablet:w-36 md-tablet:h-20 table-lg:w-40 table-lg:h-20 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={80}
              className="object-contain w-full h-full"
              priority={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
