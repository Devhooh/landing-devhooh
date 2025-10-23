import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function HeroRight() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            className="order-1 table-lg:order-2 mt-10 table-lg:mt-2"
            transition={{duration: 0.5}}
          >
            <h2 className="text-4xl font-extrabold leading-tight drop-shadow-lg text-center table-lg:text-right text-white">
              Servicios completos con
              <span className="text-colorPrimario2"> tecnologías actuales</span>
            </h2>
          </InViewAnimationWrapper>

          {/* --- 2) IMAGEN --- */}
          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            delay={0.3}
            transition={{ duration: 0.4}}
            className="
              my-10 table-lg:mb-16 order-2 table-lg:order-1 table-lg:row-span-4 
              flex justify-center table-lg:justify-start"
          >

            <div className="relative group">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/heroright.png"
                  alt="Desarrollo con tecnologías de vanguardia: Inteligencia Artificial, apps móviles y blockchain para soluciones completas."
                  width={800}
                  height={520}
                  className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="absolute -top-4 -right-4  w-8 h-8 rounded-full bg-white opacity-20"
              ></div>
            </div>
          </InViewAnimationWrapper>

          {/* --- 3) SUBTÍTULO --- */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            transition={{ duration: 0.4}}
            className="order-3 mb-5 table-lg:mb-0"
          >
            <p className="text-lg md-tablet:text-xl text-white text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              Impulsamos la innovación en tu negocio. Nuestro Stack Tecnológico incluye Inteligencia Artificial, Apps Móviles nativas (iOS/Android), Blockchain y arquitectura Cloud para máxima escalabilidad.
            </p>
          </InViewAnimationWrapper>

          {/* --- 4) LISTA --- */}
          <StaggerListContainer className="order-4 flex justify-end">
            <ul className="space-y-3 text-white text-left max-w-md mx-auto table-lg:mx-0">
              {[
                "Desarrollo de aplicaciones móviles multiplataforma modernas",
                "Diseño de sitios web rápidos, atractivos y optimizados",
                "Soluciones digitales personalizadas según tus necesidades"
              ].map((feature, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="x"
                  offset={20}
                  className="flex items-start gap-3"
                >
                  <BadgeCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-base md-tablet:text-xl">{feature}</span>
                </StaggerListItemClient>
              ))}
            </ul>
          </StaggerListContainer>

          {/* --- 5) BOTÓN --- */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            transition={{ duration: 0.4}}
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
          >
            <Link href="/contact">
              <button className="
                px-10 py-3 text-lg md-tablet:text-xl font-semibold bg-white text-black rounded-lg shadow-md
                transform transition-all duration-300 border border-colorSecundario2 hover:scale-[1.05] active:scale-[0.98]">
                Empieza tu proyecto
              </button>
            </Link>
          </InViewAnimationWrapper>

        </div>
      </div>
    </section>
  );
}

