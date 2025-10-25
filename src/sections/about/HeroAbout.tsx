import Link from "next/link";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";

export default function HeroAbout() {
  return (
    <section className="relative h-auto bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      
      <div className="max-w-[1550px] mx-auto px-6 pt-16 md-tablet:pt-12 md-tablet:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-6">
          {/* Contenedor central */}
          <div className="flex flex-col items-center text-center gap-5 col-span-1">
            {/* Título */}
            <InViewAnimationWrapper
              direction="y"
              offset={20}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <h1 className="text-colorPrimario2 table-lg:px-24 text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                Somos Devhooh: {""}
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
                  Tecnología con propósito.
                </span>
                <br className="hidden md-tablet:block" />
                <span className="block text-lg md-tablet:text-2xl font-semibold text-colorPrimario1/80 mt-2">
                  Nuestra misión va más allá del software
                </span>
              </h1>
            </InViewAnimationWrapper>

            {/* Subtítulo */}
            <InViewAnimationWrapper
              direction="y"
              offset={20}
              transition={{ duration: 0.3, delay: 0.5}}
            >
              <p className="text-lg md-tablet:text-xl text-colorPrimario1/70 max-w-xl mb-5 md-tablet:my-2 mx-auto">
                Detrás del código, somos un equipo que escucha, colabora y
                construye contigo. Conoce quiénes somos y por qué trabajamos
                diferente.
              </p>
            </InViewAnimationWrapper>

            {/* Botón CTA */}
            <InViewAnimationWrapper
              direction="y"
              offset={20}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="table-lg:mt-1 mb-8 table-lg:my-10 "
            >
              <Link href="/contact">
                <button
                  className="
                    px-7 md-tablet:px-10 py-5 text-xl md:text-2xl font-bold bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                    text-white rounded-2xl shadow-xl hover:bg-colorSecundario4 flex items-center gap-3 drop-shadow-lg 
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] transform"
                >
                  Hablemos de tu proyecto
                </button>
              </Link>
            </InViewAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
