import CardReviewSlider from "@/components/sliders/CardReviewSlider";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function ReviewSection() {
  return (
    <section className="py-20 bg-colorHover6/50">
      <div className="container mx-auto max-w-6xl px-4 text-center">

        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-colorPrimarioLogo1/10 rounded-full border border-colorPrimarioLogo1/20 mb-6"
        >
          <div className="w-2 h-2 bg-colorPrimarioLogo1 rounded-full animate-pulse"></div>
          <span className="text-xl font-medium text-colorPrimario1">Testimonios</span>
        </InViewAnimationWrapper>

        {/* Título animado */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          delay={0.3}
          transition={{ duration: 0.4}}
        >
          <h2 className="text-3xl md-tablet:text-5xl font-extrabold text-primary mb-5">
            Lo que opinan nuestros clientes
          </h2>
        </InViewAnimationWrapper>

        <InViewAnimationWrapper
          direction="y"
          offset={30}
          delay={0.3}
          transition={{ duration: 0.5}}
        >
          <p className="text-base md-tablet:text-xl text-colorPrimario1/70 max-w-2xl mx-auto">
            Descubre por qué miles de clientes confían en nosotros
          </p>
        </InViewAnimationWrapper>


        {/* Slider */}
        <CardReviewSlider/>

        {/* Stats adicionales */}
        <StaggerListContainer className="mt-16 flex flex-wrap justify-center items-center gap-8 md-tablet:gap-12">
          {[
            { number: "50+", label: "Clientes satisfechos" },
            { number: "4.9", label: "Calificación promedio" },
            { number: "98%", label: "Recomendarían" }
          ].map((stat, index) => (
            <StaggerListItemClient
              key={index}
              direction="y"
              offset={30}
              className="text-center group bg-sky-100 p-2 md-tablet:p-4 rounded-xl"
            >
              <div className="text-2xl md-tablet:text-3xl font-bold bg-gradient-to-r from-colorPrimarioLogo1 to-colorSecundario bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-colorPrimario2 font-bold">
                {stat.label}
              </div>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>
      </div>
    </section>
  );
}
