import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BeneficiosSection1 () {
  return (
    <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
      {/* Imagen */}
      <SimpleInViewWrapper
        direction="x"
        offset={-20}
        transition={{duration: 0.3, delay: 0.3}}
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
      </SimpleInViewWrapper>

      {/* Texto */}
      <div className="flex flex-col gap-8 order-1 table-lg:order-2">
        <TextRevealClient
          direction="x"
          offset={20}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <h3 className="text-2xl md-tablet:text-4xl font-bold text-cyan-500">
            Confianza y seguridad
          </h3>
        </TextRevealClient>

        <TextRevealClient
          direction="x"
          offset={20}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <p className="text-white text-base md-tablet:text-lg">
            Garantizamos la transparencia total de la inversión. Aplicamos una metodología ágil y DevOps para un desarrollo seguro, fiable y con entregas incrementales que puedes ver en tiempo real.
          </p>
        </TextRevealClient>

        <StaggerListContainer 
          delayChildren={0.3}
          className="flex flex-col gap-3 text-colorFondo text-base md-tablet:text-lg"
        >
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
              transition={{duration: 0.2, ease: "easeInOut"}}
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