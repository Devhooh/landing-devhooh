"use client";
import Image from "next/image";

export default function ProblemsSection() {
  const problems = [
    {
      icon: "/assets/icons/web-slow.png",
      title1: "Tu web es lenta o anticuada",
      title2: "Pérdida de clientes y mala imagen",
      description: "Nosotros la optimizamos con tecnología moderna y diseño atractivo.",
    },
    {
      icon: "/assets/icons/app-bug.png",
      title1: "Tu app no funciona bien en todos los dispositivos",
      title2: "Malas reseñas y usuarios frustrados",
      description: "Creamos apps rápidas, seguras y 100% compatibles con iOS y Android.",
    },
    {
      icon: "/assets/icons/seo.png",
      title1: "Nadie encuentra tu negocio online",
      title2: "Tu web no aparece en Google ni atrae clientes",
      description: "Diseñamos sitios con SEO y rendimiento optimizado desde el día uno.",
    },
    {
      icon: "/assets/icons/process.png",
      title1: "Procesos manuales y lentos",
      title2: "Pierdes tiempo en tareas repetitivas o sistemas que no se conectan",
      description: "Creamos software y automatizaciones que ahorran tiempo y dinero.",
    },
    {
      icon: "/assets/icons/security.png",
      title1: "Riesgo de datos o poca seguridad",
      title2: "Tus sistemas están desactualizados y vulnerables",
      description: "Implementamos seguridad y buenas prácticas para proteger tu negocio.",
    },
    {
      icon: "/assets/icons/team.png",
      title1: "Ideas sin equipo técnico",
      title2: "Tienes una idea de proyecto pero no sabes por dónde empezar",
      description: "Te acompañamos desde el diseño hasta el despliegue completo del producto.",
    },
  ];

  return (
    <section className="bg-gray-50 border-2 border-gray-400 rounded-2xl my-10 mx-4 py-8 px-6 md-tablet:px-10 md-tablet:mx-10 table-lg:mx-20">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md-tablet:text-5xl font-extrabold text-blue-900">
          ¿Qué problemas solucionamos?
        </h2>
        <p className="mt-4 text-xl text-gray-800">
          Si esto te suena familiar... podemos ayudarte
        </p>
      </div>

      <div className="grid grid-cols-1 md-tablet:grid-cols-1 table-lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex flex-col md-tablet:flex-row items-center md-tablet:items-center gap-4 bg-white border-2 border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            {/* Icono */}
            <div className="w-16 h-16 relative flex-shrink-0">
              <Image
                width={200}
                height={200}
                src={problem.icon}
                alt={problem.title1}
                className="object-contain"
              />
            </div>

            {/* Texto */}
            <div className="text-center md-tablet:text-left">
              <h3 className="text-lg font-bold text-gray-900">{problem.title1}</h3>
              <h4 className="text-md font-semibold text-gray-700">{problem.title2}</h4>
              <p className="mt-2 text-gray-600">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
