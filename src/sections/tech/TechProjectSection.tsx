import TechProjectSlider from "@/components/sliders/TechProjectSlider";
import TextRevealClient from "@/components/ui/TextRevealClient";

export default function TechProjectSection() {

  return (
    <section className="w-full my-20 py-16 px-4 table-lg:px-10 bg-gradient-to-b from-colorPrimario4 to-colorPrimario3">
      <div className="max-w-7xl mx-auto text-left mb-8">
        {/* Título animado */}
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="px-6 text-3xl md-tablet:text-4xl font-extrabold text-white">
            Proyectos con {" "}
            <strong className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
              nuestra tecnología:
            </strong>
          </h2>
        </TextRevealClient>

        {/* Subtítulo */}
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="px-6 mt-4 text-gray-300 max-w-2xl text-lg md-tablet:text-xl">
            Una selección de proyectos recientes donde aplicamos nuestras mejores
            tecnologías para lograr impacto real.
          </p>
        </TextRevealClient>

      </div>

      {/* Swiper con animación */}
      <TechProjectSlider/>
    </section>
  );
}
