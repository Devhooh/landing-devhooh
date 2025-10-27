import Link from "next/link";
import { ServicesData } from "@/data/ServicesDetails";
import { Sparkles } from "lucide-react";
import { CardInViewWrapper } from "@/components/ui/CardInViewWrapper";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";

interface HeroSectionProps {
  service: ServicesData;
}

export default function HeroSectionServices({ service }: HeroSectionProps) {
  return (
    <section
      className="relative w-full pt-24 pb-16 bg-gradient-to-b from-colorPrimario5 to-white flex flex-col items-center text-center px-4 md-tablet:px-8 overflow-hidden"
    >
      {/* Sparkles decorativo */}
      <CardInViewWrapper
        direction="x"
        offset={20}
        transition={{duration: 0.2, delay: 0.3}}
        className="animate-pulse absolute top-8 right-8 text-colorFondo opacity-60"
      >
        <Sparkles className="w-10 h-10" />
      </CardInViewWrapper>

      {/* Título */}
      <InViewAnimationWrapper
        direction="y"
        offset={20}
        transition={{duration: 0.3, delay: 0.4}}
      >
        <h1
          className="
            text-5xl md-tablet:text-6xl table-lg:text-7xl font-extrabold mb-6 
            text-white drop-shadow-lg"
        >
          {service.name}
        </h1>
      </InViewAnimationWrapper>
      
      {/* Separador decorativo */}
      <InViewAnimationWrapper
        direction="y"
        offset={20}
        transition={{duration: 0.3, delay: 0.5}}
      >
        <div className="
          mx-auto mb-8 w-24 h-2 rounded-full shadow-md
          bg-gradient-to-r from-colorPrimario5 to-colorSecundario1"
        />
      </InViewAnimationWrapper>

      {/* Subtítulo */}
      <InViewAnimationWrapper
        direction="y"
        offset={20}
        transition={{duration: 0.3, delay: 0.6}}
      >
        <p className="
          text-xl md-tablet:text-2xl table-lg:text-3xl text-black 
          my-10 max-w-3xl px-10 md-tablet:px-5 mx-auto font-normal drop-shadow-sm"
        >
          {service.subtitle}
        </p>
      </InViewAnimationWrapper>
      
      {/* Botón global */}
      <InViewAnimationWrapper
        direction="y"
        offset={20}
        transition={{duration: 0.3, delay: 0.2}}
        className="my-8 mx-10"
      >
        <Link href="/contact">
          <button
            className="
              px-5 md-tablet:px-10 py-5 text-xl md:text-2xl font-bold bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
              text-white rounded-2xl shadow-xl hover:bg-colorSecundario4 transform transition-all duration-300 
              flex items-center gap-3 drop-shadow-lg hover:scale-[1.05] active:scale-[0.98]"
          >
            Cotiza tu proyecto
          </button>
        </Link>
      </InViewAnimationWrapper>
    </section>
  );
}
