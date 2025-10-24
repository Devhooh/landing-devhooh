import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import Image from "next/image";

export default function BeneficiosSection2() {
  return (
    <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
      {/* Texto */}
      <StaggerListContainer className="flex flex-col gap-8 order-1 table-lg:order-1">
        {[
          {
            title: "Optimización y Automatización de Procesos",
            desc: "Aceleramos la eficiencia operacional mediante la automatización de procesos y la reducción del TCO (Costo Total de Propiedad) sin sacrificar la calidad del código."
          },
          {
            title: "Arquitectura Escalable y a Prueba de Futuro",
            desc: "Diseñamos con Arquitectura Cloud y código limpio para garantizar la estabilidad y flexibilidad a largo plazo, permitiendo un crecimiento ilimitado."
          },
          {
            title: "Estrategia SEO/SEM y Posicionamiento de Marca",
            desc: "Tu producto digital será optimizado para SEO desde el frontend y backend, asegurando una mayor visibilidad y captación de clientes cualificados.."
          },
          {
            title: "Diseño UX/UI para Alta Conversión",
            desc: "Aplicamos un Diseño UX/UI centrado en el usuario para crear experiencias intuitivas que maximizan la retención y las tasas de conversión."
          }
        ].map((item, i) => (
          <StaggerListItemClient
            key={i}
            direction="x"
            offset={-20}
          >
            <h3 className="text-2xl md-tablet:text-3xl font-bold text-cyan-500">{item.title}</h3>
            <p className="text-gray-200 mt-1 text-base md-tablet:text-lg">{item.desc}</p>
          </StaggerListItemClient>
        ))}
      </StaggerListContainer>

      {/* Imagen */}
      <InViewAnimationWrapper
        direction="x"
        offset={20}
        delay={0.3}
        className="order-2 table-lg:order-2"
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/assets/images/beneficio2.png"
          alt="Beneficios de la optimización de procesos de software: ahorro de costes, escalabilidad, arquitectura a prueba de futuro y crecimiento de negocio a largo plazo."
          width={1200}
          height={1200}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </InViewAnimationWrapper>
    </div>
  )
}