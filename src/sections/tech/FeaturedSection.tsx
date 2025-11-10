import { Star, TrendingUp } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { techFeaturedData } from "@/data/sections/tech/techFeaturedData";
import { TechFeaturedCard } from "@/components/cards/tech/TechFeaturedCard";
import CardInViewStagger from "@/components/ui/CardInViewStagger";

export default function FeaturedSection() {
  return (
    <section className="relative my-24 mx-4 md-tablet:mx-8 py-20 rounded-3xl bg-colorPrimario4 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md-tablet:px-8">
        {/* Badge superior */}
        <SimpleInViewWrapper
          className="flex justify-center mb-8"
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Star className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            <strong className="text-colorPrimario5 font-semibold">Nuestras especialidades</strong>
          </div>
        </SimpleInViewWrapper>

        {/* Título */}
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.3}}
        >
          <h2 className="text-3xl table-lg:text-5xl font-extrabold text-center mb-4 text-white">
            En qué nos 
            <strong className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> destacamos</strong>
          </h2>
        </TextRevealClient>

        {/* Subtítulo mejorado */}
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <p className="text-center text-colorHover5 mb-8 max-w-3xl mx-auto text-lg md-tablet:text-xl leading-relaxed">
            Soluciones tecnológicas de vanguardia que marcan la diferencia en cada proyecto que desarrollamos.
          </p>
        </TextRevealClient>

        {/* Estadísticas rápidas */}
        <StaggerListContainer
          className="flex flex-wrap justify-center gap-6 mb-16"
        >{[
            {data: "4", text: "Especialidades"},
            {data: "5+", text: "Años perfeccionando"},
            {data: "100%", text: "Tecnología moderna"},
          ].map((value, index) => (

            <StaggerListItemClient
              key={index}
              direction="y"
              offset={30}
              className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl font-bold text-colorPrimario7">{value.data}</div>
              <p className="text-sm text-colorHover5">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* Grid mejorado con cards premium */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-8">
          {techFeaturedData.map((item, index) => (
            <CardInViewStagger
              key={index}
              index={index}
              direction="y"
              offset={30}
              className={`
                group relative p-8 rounded-3xl 
                bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm
                border-2 border-white/20 hover:border-colorPrimario5/40
                shadow-[0_0_25px_rgba(103,61,230,0.1)] hover:shadow-[0_0_35px_rgba(103,61,230,0.2)]
                hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300
              `}
            >
              <TechFeaturedCard
                title={item.title}
                icon={item.icon}
                description={item.description}
                index={index}
              />
            </CardInViewStagger>
          ))}
        </div>

        {/* Call to action final */}
        <SimpleInViewWrapper
          direction="y"
          offset={30}
          className="text-center mt-16"
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Star className="flex-shrink-0 w-6 h-6 text-colorPrimario5" />
            <strong className="text-white font-semibold text-lg">
              ¿Cuál de estas especialidades necesita tu proyecto?
            </strong>
            <TrendingUp className="flex-shrink-0 w-6 h-6 text-colorPrimario5" />
          </div>
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}