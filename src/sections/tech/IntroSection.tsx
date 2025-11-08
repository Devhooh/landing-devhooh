import dynamic from "next/dynamic";
import { Award } from "lucide-react";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

// 1. Cargamos el componente SliderTech Y los datos (sliderLogoTech) de forma dinámica.
const DynamicSliderCarousel = dynamic(() =>
  Promise.all([
    import("../../components/cards/tech/SliderTech").then((mod) => mod.SliderTech),
    import("@/data/sliderLogoTech").then((mod) => mod.sliderLogoTech),
  ]).then(([SliderTech, sliderLogoTech]) => {
    
    const DynamicRenderer = () => (
      <>
        <SliderTech logos={sliderLogoTech} direction="left" />
        <SliderTech logos={sliderLogoTech} direction="right" />
      </>
    );

    // 2. Asigna el display name
    DynamicRenderer.displayName = "DynamicSliderRenderer"; 

    // 3. Devuelve el componente con nombre
    return DynamicRenderer;
  }),
  {
    loading: () => <div className="h-20 w-full bg-gray-900 animate-pulse border-y border-gray-700"></div>, 
    ssr: false, 
  }
);

export default function IntroSection() {
  return (
    <section className="w-full pb-5 pt-16 mx-auto">
      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="flex justify-center px-4">

          {/* Hero de Tecnología */}
          <div className="
            max-w-5xl mx-auto px-6 md-tablet:px-10 text-center items-center space-y-4 relative backdrop-blur-md
            bg-gradient-to-b from-colorHover2/10 to-colorHover3 py-10 rounded-3xl"
          >
            {/* Efectos decorativos en la card */}
            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-colorPrimario5 opacity-60"></div>
            <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-colorSecundario3 opacity-40"></div>
            
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h2
                className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-extrabold text-colorPrimario1"
              >
                Todo lo que necesitas para {""}
                <strong className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">construir y escalar</strong>
              </h2>
            </TextRevealClient>

            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <p className="text-lg text-colorPrimario1 md-tablet:text-xl max-w-3xl mx-auto my-7">
                Utilizamos herramientas modernas que aseguran rendimiento,
                escalabilidad y experiencias inolvidables. No solo se trata de usar
                tecnología, sino de cómo la aplicamos para hacer crecer tu proyecto.
              </p>
            </TextRevealClient>

            {/* Badge de años de experiencia */}
            <SimpleInViewWrapper
              direction="y"
              offset={30}
              className="inline-flex items-center gap-2 mt-8 px-4 md-tablet:px-8 py-3 rounded-3xl 
              bg-colorPrimario5 border border-colorPrimario5/30 backdrop-blur-sm"
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Award className="w-5 h-5 text-white flex-shrink-0" />
              <strong className="text-colorHover5 font-semibold">Empieza tu proyecto con calidad</strong>
            </SimpleInViewWrapper>
          </div>
        </div>
      </div>

      {/* Carrusel de logos */}
      <SimpleInViewWrapper
        direction="y"
        offset={30}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="overflow-hidden mt-12 py-5 mx-auto bg-colorPrimario5 border-y border-colorSecundario3"
      >
        <DynamicSliderCarousel /> 
      </SimpleInViewWrapper>
    </section>
  );
}
