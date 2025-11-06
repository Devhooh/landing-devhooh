import Image from "next/image";
import { CheckCircle, Shield, Clock, Headphones, TrendingUp } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import ButtonCta from "@/components/ui/ButtonCta";

export default function GarantiasSection() {
  return (
    <section className="relative w-full pb-20 bg-colorFondo">
      <div className="container mx-auto px-6 tablet-md:px-12 max-w-7xl">
        {/* Bloque 1 */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <TextRevealClient
              direction="x"
              offset={-20}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-3xl tablet-md:text-5xl font-extrabold text-colorPrimario1 py-2">
                <strong className="text-colorPrimario5">Confianza y calidad </strong>
                en cada entrega
              </h2>
            </TextRevealClient>
            
            <StaggerListContainer
              staggerChildren={0.15}
              delayChildren={0.2}
              className="flex flex-col gap-4 text-colorPrimario1 text-lg"
            >
              {[ 
                "Transparencia total en la gestión y desarrollo del proyecto.",
                "Revisión continua de código y mejoras post-lanzamiento incluidas.",
                "Política clara de tiempos de entrega y alcances definidos.",
                "Soporte técnico y mantenimiento garantizado.",
                "Arquitectura de software preparada para escalabilidad y futuro crecimiento."
              ].map((item, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="y"
                  offset={-30}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
                  <span>{item}</span>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>
          </div>

          {/* Imagen */}
          <SimpleInViewWrapper
            direction="x"
            offset={20}
            transition={{ duration: 0.4, delay: 0.4}}
            className="flex justify-center"
          >
            <Image
              src="/assets/images/garantia.png"
              alt="Sello de garantía que representa la calidad, seguridad y confianza en los servicios de desarrollo de software profesional."
              width={1500}
              height={1500}
              className="rounded-2xl shadow-lg"
              loading="lazy"
            />
          </SimpleInViewWrapper>
        </div>

        {/* Bloque 2 */}
        <div className="mt-20 bg-colorPrimario22 rounded-3xl shadow-xl p-7 flex flex-col items-center gap-12">
          <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-8 w-full">
            {/* Tarjetas */}
            {[
              { icon: <Shield className="w-8 h-8 text-white" />, title: "Garantía de satisfacción", text: "Si no cumple lo prometido, lo ajustamos hasta que estés conforme." },
              { icon: <Clock className="w-8 h-8 text-white" />, title: "Entrega puntual", text: "Compromiso firme en los tiempos pactados." },
              { icon: <Headphones className="w-8 h-8 text-white" />, title: "Soporte continuo", text: "Incluye soporte gratuito post-entrega (30-60 días)." },
              { icon: <TrendingUp className="w-8 h-8 text-white" />, title: "Escalabilidad asegurada", text: "Diseño y código listos para crecer junto a tu negocio." }
            ].map((item, i) => (
              <CardInViewStagger
                key={i}
                index={i}
                direction="y"
                offset={20}
                className="
                  flex flex-col items-center text-center gap-4 p-6 rounded-2xl 
                  bg-gradient-to-br from-colorDarkFondo2 to-colorDarkFondo4 shadow-lg"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario7 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.text}</p>
              </CardInViewStagger>
            ))}
          </div>

          {/* CTA */}
          <SimpleInViewWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonCta
              href="/portfolio"
              className="
                px-4 md-tablet:px-8 py-4 rounded-xl font-semibold text-white text-center
                bg-colorPrimario5 hover:bg-colorPrimario6 inline-block
                hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
              Descubre cómo nuestras garantías hacen la diferencia
            </ButtonCta>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}
