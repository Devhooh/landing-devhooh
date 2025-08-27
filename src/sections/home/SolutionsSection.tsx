import { SolutionCard } from "./SolutionCard";
import Link from "next/link";

export function SolutionsSection() {
  const solutions = [
  {
    title: "Webs & Software",
    description: "Diseñamos sitios web y sistemas a medida, rápidos, escalables y optimizados para mejorar la presencia digital de tu negocio.",
    image: "/assets/images/webSoftware.png",
  },
  {
    title: "Aplicaciones Móviles",
    description: "Creamos apps nativas y multiplataforma para iOS y Android, enfocadas en experiencia de usuario y rendimiento eficiente.",
    image: "/assets/images/mobil.png",
  },
  {
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones de IA y machine learning que automatizan procesos y generan decisiones inteligentes para tu empresa.",
    image: "/assets/images/ia.png",
  },
];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-fuchsia-300/50 to-purple-200/80">
      {/* Encabezado */}
      <div className="px-5 md-tablet:px-10 flex flex-col text-center table-lg:flex-row justify-center items-center mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Impulsamos tu <span className="bg-clip-text bg-gradient-to-r from-fuchsia-500 to-pink-500">negocio</span> con <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">soluciones modernas</span>
          </h2>
          <p className="text-gray-700 text-base md-tablet:text-lg leading-relaxed">
            Desde tu primera idea hasta el lanzamiento, desarrollamos {""} 
            <span className="font-semibold text-blue-600">webs</span>, {""}
            <span className="font-semibold text-pink-500">apps</span> y {""}
            <span className="font-semibold text-blue-600">sistemas inteligentes</span> {""}
            que ayudan a tu empresa a destacar en el entorno digital, optimizando procesos y mejorando la experiencia de tus usuarios.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full pt-12 px-5 md-tablet:px-10">
        <div className="mx-auto flex flex-col gap-10 max-w-[1550px] justify-center">
          {solutions.map((s, i) => (
            <SolutionCard
              key={i}
              title={s.title}
              description={s.description}
              image={s.image}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <button className="text-xl md-tablet:text-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-blue-600 text-white py-4 px-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Vea todos nuestros servicios
            </button>
          </Link>
        </div>
      </div>

    </section>
  );
}
