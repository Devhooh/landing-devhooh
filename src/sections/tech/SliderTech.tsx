"use client";
import { TechIcon } from "@/components/utils/TechIconMapper";

interface Logo {
  iconKey: string; // ⬅️ Ahora esperamos una clave de texto
  alt: string;
}

interface LogoSliderProps {
  logos: Logo[];
  direction?: "left" | "right";
}

export function SliderTech({ logos, direction = "left" }: LogoSliderProps) {
  const directionLogo =
    direction === "right" ? "animate-scroll-reverse" : "animate-scroll";

  // duplicamos logos para loop infinito
  const logosLoop = logos.concat(logos);

  return (
    <div className="overflow-hidden m-0">
      <ul
        className={`flex ${directionLogo} gap-12`}
        style={{ minWidth: `${logosLoop.length * 10}rem` }}
      >
        {logosLoop.map((logo, i) => {
          return (
            <li
              key={i}
              className="
                group relative flex items-center justify-center
                w-16 h-16 md-tablet:w-20 md-tablet:h-20 table-lg:w-24 table-lg:h-24
                transition-all duration-300
              "
            >
              {/* Glow animado */}
              <div
                className="
                  absolute inset-0 rounded-full opacity-0 group-hover:opacity-80
                  blur-lg bg-colorHover2
                  transition-opacity duration-500"
              />

              {/* Icono */}
              <TechIcon
                iconKey={logo.iconKey}
                aria-label={logo.alt}
                className="
                  relative z-10 text-gray-400 group-hover:text-white
                  transition-colors duration-300
                  w-12 h-12 md-tablet:w-14 md-tablet:h-14 table-lg:w-16 table-lg:h-16
                "
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
