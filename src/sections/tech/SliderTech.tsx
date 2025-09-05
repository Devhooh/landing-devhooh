"use client";
import { IconType } from "react-icons";

interface Logo {
  icon: IconType;
  // color: string,
  alt: string;
}

interface LogoSliderProps {
  logos: Logo[];
  direction?: "left" | "right";
}

export function SliderTech({logos, direction = "left",}: LogoSliderProps) {
  const directionLogo = direction === "right" ? "animate-scroll-reverse" : "animate-scroll";

  // duplicamos logos para loop infinito
  const logosLoop = logos.concat(logos);

  return (
    <div className="overflow-hidde m-0">
      <div
        
        className={`flex ${directionLogo} gap-12`}
        style={{ minWidth: `${logosLoop.length * 10}rem` }} // opcional, asegura que no se corte
      >
          {logosLoop.map((logo, i) => {
            const Icon = logo.icon; // asignamos el componente del icono
            return <Icon key={i} className={`text-gray-300 m-2 flex items-center justify-center w-14 h-14 md-tablet:w-16 md-tablet:h-16 table-lg:w-20 table-lg:h-20`} aria-label={logo.alt} />;
          })}
      </div>
    </div>
  );
}
