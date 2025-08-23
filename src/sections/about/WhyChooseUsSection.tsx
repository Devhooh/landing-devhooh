"use client";
import Image from "next/image";

export default function WhyChooseUsSection() {
  const features = [
    {
      title: "Entregas rápidas y confiables",
      description:
        "Cumplimos plazos y garantizamos que tu proyecto esté listo para despegar sin retrasos.",
      image: "/assets/icons/fast.png",
      alt: "Entregas rápidas y confiables",
    },
    {
      title: "Soluciones a medida",
      description:
        "Cada proyecto es único. Diseñamos estrategias y software que se adaptan exactamente a lo que necesitas.",
      image: "/assets/icons/solution.png",
      alt: "Soluciones a medida",
    },
    {
      title: "Trabajo colaborativo",
      description:
        "Te mantenemos al tanto en cada fase con metodologías ágiles y comunicación clara.",
      image: "/assets/icons/collaborative.png",
      alt: "Trabajo colaborativo",
    },
    {
      title: "Seguridad y calidad",
      description:
        "Aplicamos buenas prácticas para asegurar que tu producto sea confiable, escalable y protegido.",
      image: "/assets/icons/securities.png",
      alt: "Seguridad y calidad",
    },
    {
      title: "Crecimiento garantizado",
      description:
        "Creamos soluciones que no solo funcionan, sino que ayudan a que tu negocio evolucione y escale.",
      image: "/assets/icons/guaranteed.png",
      alt: "Crecimiento garantizado",
    },
  ];

  return (
    <section className="bg-white py-8 px-4 md-tablet:px-8">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md-tablet:text-5xl font-extrabold text-gray-900 mb-12">
          ¿Por qué elegir a Devhoo?
        </h2>

        <div className="flex flex-col gap-8 md-tablet:gap-10 table-lg:gap-12">
          {features.map((feature, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className={`flex items-center gap-10 bg-gray-100 border-2 border-black rounded-2xl shadow-2xl 
                  px- sm:px-6 md-tablet:px-8 table-lg:px-10 py-4 
                  mx-2 md-tablet:mx-8 table-lg:mx-32 
                  transform transition duration-300 hover:scale-105 hover:shadow-2xl
                  flex-col md-tablet:flex-row ${isReversed ? "md-tablet:flex-row-reverse" : ""}`}
              >
                {/* Imagen */}
                <div className="flex-shrink-0 w-20 h-20 md-tablet:w-20 md-tablet:h-20 relative">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                {/* Texto */}
                <div
                  className={`flex-grow min-w-0 text-center md-tablet:text-left ${
                    isReversed ? "md-tablet:text-right" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 m-2">
                    {feature.title}
                  </h3>
                  <p className="text-md text-gray-600 m-2">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
