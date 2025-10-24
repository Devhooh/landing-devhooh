import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function BeneficiosSection3() {
  return (
    <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
      {/* Imagen */}
      <InViewAnimationWrapper
        direction="x"
        offset={-20}
        delay={0.2}
        className="order-2 table-lg:order-1"
      >
        <Image
          src="/assets/images/beneficio3.png"
          alt="Servicio de soporte y mantenimiento de software post-implementación para garantizar la longevidad y el uptime de la plataforma digital."
          width={748}
          height={563}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </InViewAnimationWrapper>

      {/* Texto */}
      <div className="flex flex-col gap-8 order-1 table-lg:order-2">
        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3
            className="text-2xl md-tablet:text-4xl font-bold text-cyan-500">
            Mantenimiento, soporte y asesoría técnica
          </h3>
        </InViewAnimationWrapper>

        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-200 text-base md-tablet:text-lg">
            Establecemos un partnership estratégico para garantizar la longevidad de tu inversión. Nuestro soporte asegura un alto uptime y la evolución continuas del software, manteniéndolo siempre actualizado y competitivo.
          </p>
        </InViewAnimationWrapper>

        <StaggerListContainer className="flex flex-col gap-3 text-colorFondo text-base md-tablet:text-lg">
          {[
            "Monitoreo y Soporte especializado 24/7.",
            "Garantía y Soporte gratuito durante la etapa de Go-Live.",
            "Actualizaciones de seguridad y Mantenimiento preventivo."
          ].map((item, i) => (
            <StaggerListItemClient
              key={i}
              direction="y"
              offset={20}
              className="flex items-center gap-2"
            >
              <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
              <span>{item}</span>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>
      </div>
    </div>
  )
}