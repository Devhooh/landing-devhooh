import Link from "next/link";

export function PlansSection() {

  const planes = [
    {
      title: "Plan Starter",
      subtitle: "Ideal para emprendedores y pequeñas empresas que buscan su primera presencia digital.",
      beneficio: [
        "Landing page o web básica profesional y rápida",
        "App prototipo o MVP",
        "Diseño personalizado con identidad de marca",
        "Optimización para velocidad y SEO inicial",
        "Soporte de implementación y guía básica"
      ]
    },
    {
      title: "Plan Enterprise",
      subtitle: "Para empresas que buscan desarrollo avanzado con soporte continuo y escalabilidad.",
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración de Inteligencia IA o Machine Learning",
        "Seguridad e infraestructura profesional con monitoreo",
        "Escalabilidad y actualizaciones constantes",
        "Soporte dedicado y consultoría técnica"
      ]
    },
    {
      title: "Plan Business",
      subtitle: "Para negocios en crecimiento que necesitan soluciones más robustas y escalables.",
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración con APIs o sistemas internos",
        "Panel administrativo para gestionar tu contenido",
        "Rendimiento optimizado para usuarios y buscadores",
        "Mantenimiento inicial y mejoras según tu feedback"
      ]
    },
  ]

  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-blue-400">
          Planes estimados
        </h2>

        {/* Contenedor de tarjetas */}
        <div className="flex flex-wrap justify-center gap-6">
          {planes.map((data, index) => (
            <div 
              key={index} 
              className={`
                rounded-2xl px-8 py-6 flex flex-col items-center text-center 
                w-80 md-tablet:w-96 table-lg:w-80  // ancho responsive
                transform transition duration-300 hover:scale-105 hover:shadow-2xl
                ${index === 1 
                  ? "bg-gray-800 text-white shadow-2xl border-2 border-gray-700"
                  : "bg-white text-gray-800 shadow-xl border-2 border-gray-200"}
              `}
            >
              {/* Título */}
              <h3 className="text-xl font-semibold mb-4">{data.title}</h3>
              <p className={`mb-6 ${index === 1 ? "text-gray-200" : "text-gray-500"}`}>
                {data.subtitle}
              </p>

              {/* Lista de beneficios */}
              <ul className={`list-disc text-left space-y-2 mb-6 ${index === 1 ? "text-gray-100" : "text-gray-700"}`}>
                {data.beneficio.map((values, idx) => (
                  <li key={idx}>{values}</li>
                ))}
              </ul>

              {/* Botón */}
              <Link href="/contact">
                <button 
                  className={`
                    w-full py-2 rounded-full px-6 font-semibold
                    ${index === 1 
                      ? "bg-gray-200 text-gray-800 hover:bg-gray-300" 
                      : "bg-gray-800 text-white hover:bg-gray-700"}
                  `}
                >
                  Cotiza tu proyecto
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
