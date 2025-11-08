import Image from "next/image";
import ButtonCta from "@/components/ui/ButtonCta";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

export default function HeroSectionTech() {

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.3}}
          >
            <h1 className="order-1 text-center table-lg:text-left text-4xl font-extrabold drop-shadow-lg
              leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-50"
            >
              La tecnología detrás de nuestras  
              <strong className="text-colorPrimario5"> soluciones de vanguardia</strong>
            </h1>
          </TextRevealClient>

          {/* --- 2) IMAGEN --- */}
          <SimpleInViewWrapper
            direction="x"
            offset={20}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="
              order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Añade un contenedor con aspect-square y una altura */}
              <div className="relative aspect-square w-full bg-white/10 px-1 py-2 overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/tecnologia.png"
                  alt="Equipo desarrollando software a medida"
                  width={484}
                  height={436}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="animate-pulse absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white opacity-20"
              ></div>
            </div>
          </SimpleInViewWrapper>

          {/* --- 3) SUBTÍTULO --- */}
          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{duration: 0.3, delay: 0.4}}
            className="order-3 text-lg md-tablet:text-xl 
              text-center table-lg:text-left my-5 table-lg:pr-32
            text-gray-200 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
          >
            <p>
              Donde los frameworks y la innovación de productos se unen con la experiencia técnica.
            </p>
          </TextRevealClient>

          {/* --- 5) BOTÓN --- */}
          <SimpleInViewWrapper
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="order-5 flex justify-center table-lg:justify-start"
          >
            <ButtonCta
              href="/contact"
              className="
                px-8 py-4 text-lg md-tablet:text-xl font-semibold
                bg-colorPrimario5 hover:bg-colorSecundario2 text-white
                rounded-2xl shadow-lg
                hover:shadow-xl hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
              Construyamos tu proyecto!
            </ButtonCta>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}
