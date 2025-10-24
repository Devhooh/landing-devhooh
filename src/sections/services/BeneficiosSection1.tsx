import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BeneficiosSection1 () {
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
          src="/assets/images/beneficio1.png"
          alt="Proceso de desarrollo de software transparente basado en metodología ágil, con foco en seguridad, pruebas y comunicación continua con el cliente."
          width={1939}
          height={1940}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </InViewAnimationWrapper>

      {/* Texto */}
      <div className="flex flex-col gap-8 order-1 table-lg:order-2">

        <InViewAnimationWrapper
          direction="x"
          offset={20}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h3 className="text-2xl md-tablet:text-4xl font-bold text-cyan-500">
            Confianza y seguridad
          </h3>
        </InViewAnimationWrapper>

        <InViewAnimationWrapper
          direction="x"
          offset={20}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-white text-base md-tablet:text-lg">
            Garantizamos la transparencia total de la inversión. Aplicamos una metodología ágil y DevOps para un desarrollo seguro, fiable y con entregas incrementales que puedes ver en tiempo real.
          </p>
        </InViewAnimationWrapper>

        <StaggerListContainer className="flex flex-col gap-3 text-colorFondo text-base md-tablet:text-lg">
          {[
            "Metodología Ágil con procesos y flujos de trabajo claros.",
            "Revisiones de código y sprints periódicos durante el desarrollo.",
            "Pruebas de seguridad y calidad en cada entrega final.",
            "Compromiso con la satisfacción del cliente y orientación a resultados."
          ].map((item, i) => (
            <StaggerListItemClient
              key={i}
              direction="x"
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