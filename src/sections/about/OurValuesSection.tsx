"use client";
import Image from "next/image";

export default function OurValuesSection() {
  const values = [
    {
      title: "Innovación constante en Devhooh",
      description: "Adoptamos tecnologías modernas como IA y Blockchain para crear soluciones únicas y mantenernos a la vanguardia.",
      image: "/assets/images/innovacion.png",
      alt: "Innovación constante",
    },
    {
      title: "Calidad y enfoque al cliente",
      description: "Entregamos software confiable y eficiente, siempre adaptado a las necesidades de cada cliente.",
      image: "/assets/images/calidad.png",
      alt: "Calidad y enfoque al cliente",
    },
    {
      title: "Transparencia y colaboración",
      description: "Fomentamos comunicación clara y trabajo conjunto, generando confianza y proyectos bien gestionados.",
      image: "/assets/images/transparencia.png",
      alt: "Transparencia y colaboración",
    },
    {
      title: "Crecimiento y excelencia continua",
      description: "Impulsamos el aprendizaje constante y la mejora profesional para ofrecer soluciones modernas y competitivas.",
      image: "/assets/images/crecimiento.png",
      alt: "Crecimiento y excelencia continua",
    },
    {
      title: "Responsabilidad y cumplimiento",
      description: "Cumplimos con lo prometido, entregando proyectos a tiempo y con los más altos estándares de calidad.",
      image: "/assets/images/responsabilidad.png",
      alt: "Responsabilidad y cumplimiento",
    },
  ];

  return (
    <section className="bg-white py-16 md-tablet:px-4">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="
          text-4xl md-tablet:text-5xl font-extrabold mb-12
          bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-purple-400
          ">
          Nuestros Valores
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="
                  bg-gradient-to-t from-fuchsia-900 to-fuchsia-300 rounded-2xl shadow-xl p-6 flex flex-col items-center md-tablet:flex grid-cols-3 
                    text-center border border-fuchsia-400 w-80 max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative mb-4">
                  <Image
                    width={500}
                    height={500}
                    src={value.image}
                    alt={value.alt}
                    className="w-28 h-auto"
                  />
                </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-100/80">
                      {value.description}
                    </p>
                  </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
