import { SolutionCard } from "./SolutionCard";
import Link from "next/link";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Webs & Software",
      description: "Sitios, plataformas y sistemas hechos a medida, rápidos y escalables.",
      image: "/assets/images/vision.png",
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas y multiplataforma que llevan tu negocio al bolsillo de tus clientes.",
      image: "/assets/images/vision.png",
    },
    {
      title: "Inteligencia Artificial",
      description: "Automatiza, analiza y predice con soluciones impulsadas por IA y Machine Learning.",
      image: "/assets/images/vision.png",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-100 to-blue-200 py-10 px-10 md-tablet:px-20">
      {/* Encabezado */}
      <div className="flex flex-col text-center table-lg:flex-row justify-center items-center mb-10 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-bold text-blue-900 mb-8">
            Impulsamos tu negocio con soluciones modernas
          </h2>
          <p className="text-gray-700 text-lg md-tablet:text-xl">
            Desde tu primera idea hasta el lanzamiento, desarrollamos webs, apps y sistemas inteligentes que hacen crecer tu empresa.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-12">
        {solutions.map((s, i) => (
          <SolutionCard
            key={i}
            title={s.title}
            description={s.description}
            image={s.image}
            reverse={i % 2 === 1} // alterna automáticamente
          />
        ))}
      </div>

      {/* Botón */}
      <div className="flex justify-center mt-10">
        <Link href="/services">
          <button className="text-xl md-tablet:text-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white py-4 px-8 rounded-2xl font-semibold hover:opacity-90 transition">
            Vea todos nuestros servicios
          </button>
        </Link>
      </div>
    </section>
  );
}

