import { Brain, Smartphone, Database, Layers } from "lucide-react";

export default function FeaturedSection() {
  const items = [
    {
      title: "Aplicaciones Full Stack",
      icon: <Layers className="w-8 h-8 text-indigo-600" />,
      description: "Creamos aplicaciones web escalables con frontend y backend modernos. Gestionamos clústeres en Kubernetes, microservicios y pruebas de seguridad para garantizar rendimiento, agilidad y crecimiento.",
    },
    {
      title: "Inteligencia Artificial",
      icon: <Brain className="w-8 h-8 text-indigo-600" />,
      description: "Desarrollamos soluciones de inteligencia artificial aplicando algoritmos avanzados y aprendizaje automático. Desde el análisis de datos hasta el entrenamiento de modelos predictivos, creamos sistemas inteligentes adaptados a cada necesidad.",
    },
    {
      title: "Aplicaciones con datos intensivos",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      description: "Administramos bases de datos a gran escala e integramos análisis avanzados y aprendizaje automático. Garantizamos aplicaciones confiables, seguras y escalables que se adaptan a sus necesidades más exigentes.",
    },
    {
      title: "Aplicaciones móviles (Android & iOS)",
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      description: "Desarrollamos aplicaciones móviles nativas y multiplataforma, asegurando interfaces intuitivas, alto rendimiento y compatibilidad con Android e iOS. Creamos experiencias móviles atractivas, responsivas y adaptadas a las necesidades de los usuarios.",
    },
  ];

  return (
    <section className="py-5 px-4 table-lg:px-16">
      <h2 className="text-3xl table-lg:text-5xl font-bold text-center mb-12">
        En qué nos destacamos
      </h2>

      <div className="grid grid-cols-1 md-tablet:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-2xl shadow-md p-6 relative"
          >
            {/* Icono arriba a la derecha */}
            <div className="absolute top-4 left-4">
              {item.icon}
            </div>

            {/* Título debajo del icono */}
            <h3 className="text-xl font-semibold text-left mt-12">
              {item.title}
            </h3>

            {/* Descripción alineada a la derecha */}
            <p className="text-gray-600 text-left mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
