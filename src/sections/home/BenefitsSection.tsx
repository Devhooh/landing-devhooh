"use client";
import styles from "./BenefitsSection.module.css";
import ReviewsHome from "./ReviewsHome";

export function BenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-violet-950 to to-blue-100 px-2 py-16 md-tablet:px-8 table-lg:px-32 relative">
      <div className="max-w-[1550px] pb-16 mx-auto flex flex-col items-center gap-8">

        {/* FILA SUPERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between table-lg:justify-around gap-4 md-tablet:gap-6">
          <div className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 ${styles.orangeCircle} bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-[0_0_20px_rgba(255,0,255,0.4)]`}>
            <h3 className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide">Entrega rápida</h3>
            <p className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug">
              Proyectos listos en tiempo récord, manteniendo calidad premium.
            </p>
          </div>

          <div className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 ${styles.blueCircle} bg-gradient-to-br from-blue-500 to-indigo-700 shadow-[0_0_20px_rgba(0,255,255,0.3)]`}>
            <h3 className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide">Seguro y confiable</h3>
            <p className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug">
              Tecnología moderna y buenas prácticas para tranquilidad total.
            </p>
          </div>
        </div>

        {/* TEXTO EN EL CENTRO */}
        <h2 className="text-4xl md-tablet:text-6xl table-lg:text-7xl font-extrabold text-center leading-tight mt-12 mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-400 to-indigo-400">
            Beneficios
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            inmediatos
          </span>
        </h2>

        {/* FILA INFERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between table-lg:justify-around gap-4 md-tablet:gap-6">
          <div className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 ${styles.redCircle} bg-gradient-to-br from-pink-500 to-pink-400 shadow-[0_0_20px_rgba(255,0,0,0.4)]`}>
            <h3 className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide">100% personalizado</h3>
            <p className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug">
              Soluciones únicas hechas a tu medida, sin plantillas.
            </p>
          </div>

          <div className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 ${styles.greenCircle} bg-gradient-to-br from-green-400 to-teal-600 shadow-[0_0_20px_rgba(0,255,0,0.3)]`}>
            <h3 className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide">Soporte constante</h3>
            <p className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug">
              A tu lado siempre, incluso después de la entrega.
            </p>
          </div>
        </div>

      </div>

      <ReviewsHome/>
      
    </section>
  );
}
