import BeneficiosSection1 from "@/components/cards/services/BeneficiosSection1";
import BeneficiosSection2 from "@/components/cards/services/BeneficiosSection2";
import BeneficiosSection3 from "@/components/cards/services/BeneficiosSection3";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function BeneficiosSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4">
      <div className="container mx-auto px-6 tablet-md:px-12 max-w-7xl flex flex-col gap-24">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">

          <InViewAnimationWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-3xl tablet-md:text-5xl font-extrabold text-colorPrimario7 py-3">
              Beneficios inmediatos para tu negocio
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="mt-4 text-lg md-tablet:text-2xl text-gray-200">
              Nuestro enfoque en el desarrollo ágil y la eficiencia operacional se traduce en resultados tangibles: ahorro de costes, ventaja competitiva y un crecimiento sostenible para tu plataforma digital.
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Bloque 1 */}
        <BeneficiosSection1/>

        {/* Bloque 2 */}
        <BeneficiosSection2/>

        {/* Bloque 3 */}
        <BeneficiosSection3/>

        {/* Bloque 4 - Stats */}
        <StaggerListContainer
          className="flex flex-wrap justify-center gap-8 mb-6"
        >{[
            {data: "+50", text: "Proyectos entregados con éxito."},
            {data: "Hasta 3x", text: "Más rápido en implementación que la media."},
            {data: "99%", text: "Uptime en soluciones en la nube."},
          ].map((value, index) => (
            <StaggerListItemClient 
              key={index} 
              direction="y"
              offset={20}
              className="text-center p-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">{value.data}</div>
              <p className="text-sm text-colorPrimario1/70">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

      </div>
    </section>
  );
}
