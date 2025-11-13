import Image from "next/image";
import { Check } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import ButtonCta from "@/components/ui/ButtonCta";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

export default function HeroSectionPort() {
  return (
    <section className="relative w-full h-auto overflow-hidden bg-colorFondo">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <TextRevealClient
            direction="x"
            offset={20}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="order-1 table-lg:order-2 mt-10 table-lg:mt-2"
          >
            <h1 className="text-4xl font-extrabold text-center table-lg:text-right text-colorPrimario2 leading-tight drop-shadow-lg">
              Realidades digitales. {""}
              <strong className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> 
                Resultados que hablan {""}
              </strong>
              por sí solos
            </h1>
          </TextRevealClient>

          {/* --- 2) IMAGEN --- */}
          <SimpleInViewWrapper
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="
              my-10 table-lg:mb-16 order-2 table-lg:order-1 table-lg:row-span-4
              flex justify-center table-lg:justify-start"
          >
            <div className="relative group">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/heroportfolio.png"
                  alt="Desarrollo de software, portafolio"
                  width={709}
                  height={514}
                  priority
                  className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              {/* Círculos decorativos flotantes */}
              <div className="animate-pulse absolute -top-4 -right-4  w-8 h-8 rounded-full bg-gray-500 opacity-20"></div>
            </div>
          </SimpleInViewWrapper>

          {/* --- 3) SUBTÍTULO --- */}
          <TextRevealClient
            direction="x"
            offset={20}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="order-3 mb-5 table-lg:mb-0"
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              Cada proyecto representa una historia de innovación, colaboración y éxito. Mira cómo ayudamos a crecer negocios con tecnología moderna.
            </p>
          </TextRevealClient>

          {/* --- 4) LISTA --- */}
          <StaggerListContainer 
            delayChildren={0.2}
            className="order-4 flex justify-end"
          >
            <ul className="space-y-3 text-gray-800 text-left max-w-md mx-auto table-lg:mx-0">
              {[
                "Tiendas online con integración de pagos",
                "Aplicaciones móviles multiplataforma",
                "Dashboards empresariales con análisis en tiempo real",
                "Proyectos con inteligencia artificial aplicada"

              ].map((feature, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="x"
                  offset={20}
                  className="flex items-start gap-3"
                  transition={{duration: 0.2}}
                >
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base md-tablet:text-xl">{feature}</span>
                </StaggerListItemClient>
              ))}
            </ul>
          </StaggerListContainer>

          {/* Boton CTA */}
          <SimpleInViewWrapper
            direction="x"
            offset={20}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
          >
            <ButtonCta
              href="/contact"
              className="px-8 py-4 text-lg md-tablet:text-xl font-semibold 
                bg-colorPrimario6 text-white rounded-xl shadow-md 
                hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
              Cotiza tu proyecto ahora
            </ButtonCta>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}

