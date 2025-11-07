import { Target, Zap } from "lucide-react";
import Link from "next/link";
import SmallCard from "@/components/cards/services/SmallCard";
import MediumCard from "@/components/cards/services/MediumCard";
import LargeCard from "@/components/cards/services/LargeCard";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

export default function ServicesCardsSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="px-6 table-lg:px-8 py-10 bg-colorFondo">
        <div className="max-w-[1550px] mx-auto grid grid-cols-1 table-lg:grid-cols-[6fr_4fr] gap-6 items-start">
          {/* Lado izquierdo - Contenedor de las tarjetas */}
          <div className="flex flex-col gap-10 self-start order-last table-lg:order-first">
            {/* Tarjeta pequeña */}
            <CardInViewStagger
              direction="x"
              index={0.2}
              offset={-20}
              className="
                bg-colorSecundario4 ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-md w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <SmallCard/>
            </CardInViewStagger>

            {/* Tarjeta mediana */}
            <CardInViewStagger
              direction="x"
              index={0.3}
              offset={-20}
              className="
                bg-colorSecundario4 ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <MediumCard/>
            </CardInViewStagger>

            {/* Tarjeta grande */}
            <CardInViewStagger
              direction="x"
              index={0.4}
              offset={-20}
              className="
                bg-colorSecundario4 ring-2 ring-white/20 hover:ring-colorSecundario2
                backdrop-blur-xl shadow-xl rounded-3xl p-6 table-lg:max-w-2xl w-full
                transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <LargeCard/>
            </CardInViewStagger>
          </div>
          
          {/* Lado derecho - Título y subtítulo */}
          <div className="text-center table-lg:text-right order-first table-lg:order-last">
            <TextRevealClient
              direction="x"
              offset={20}
              transition={{duration: 0.3, delay: 0.3, ease: "easeIn"}}
            >
              <h2 className="text-4xl md-tablet:text-7xl font-extrabold text-colorPrimario2 mb-8">
                ¿En qué etapa se encuentra 
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> tu proyecto?</span>
              </h2>
            </TextRevealClient>

            <TextRevealClient
              direction="x"
              offset={20}
              transition={{duration: 0.3, delay: 0.4, ease: "easeIn"}}
            >
              <p className="text-lg md-tablet:text-2xl font-semibold text-gray-700 mb-8 mx-auto table-lg:mx-0">
                Desde la conceptualización (MVP y Startups) hasta el crecimiento (PyMEs) y la modernización de plataformas (Legacy), adaptamos nuestra experiencia para 
                <span className="text-colorSecundario4"> impulsar tu visión. </span>
              </p>
            </TextRevealClient>
          </div>
        </div>

        {/* Call to action final */}
        <SimpleInViewWrapper
          className="relative z-10 text-center mt-20"
          direction="y"
          offset={20}
          transition={{ duration: 0.3, delay: 0.4}}
        >
          <Link
            href="/contact"
            className="
              inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl
              bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm
              hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-base md-tablet:text-2xl">
              Trabajemos en tu próximo proyecto ahora!
            </span>
            <Zap className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </Link>
        </SimpleInViewWrapper>
      </div>

      {/* CTA para los servicios */}
      <div
        className="
          relative overflow-hidden block
          text-center py-12 px-8 my-20 shadow-2xl mx-auto select-none 
          bg-colorHover2
          w-full cursor-pointer
          transition-all duration-300 ease-in-out transform 
          md-tablet:hover:scale-[1.05] 
          md-tablet:hover:skew-x-[-5deg]
        "
      >
        {/* Glow animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-sky-400 opacity-30 blur-2xl animate-pulse" />
        
        <h3 className="relative text-3xl md-tablet:text-4xl font-extrabold text-white leading-tight italic table-lg:not-italic">
          Tenemos una amplia <span className="text-colorDarkFondo2">gama de servicios. </span>  
          Escoge el ideal <span className="text-colorDarkFondo2">para ti</span>
        </h3>
      </div>
    </section>
  );
}
