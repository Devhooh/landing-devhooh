"use client";
import styles from "./BenefitsSection.module.css";

export function BenefitsSection() {
  return (
    <section className="bg-white px-6 py-16 md-tablet:px-8 table-lg:px-32 relative">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">

        {/* FILA SUPERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between">
          <div className={`w-32 h-32 md-tablet:w-52 md-tablet:h-52 bg-orange-500 rounded-full flex flex-col items-center justify-center text-white p-4 ${styles.orangeCircle}`}>
            <h3 className="font-semibold text-sm text-gray-900 md-tablet:text-xl text-center">Entrega rápida</h3>
            <p className="text-xs md-tablet:text-base text-center mt-1">
              Tu proyecto listo en tiempo récord sin perder calidad.
            </p>
          </div>

          <div className={`w-32 h-32 md-tablet:w-52 md-tablet:h-52 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white p-4 ${styles.blueCircle}`}>
            <h3 className="font-semibold text-sm text-gray-900 md-tablet:text-xl text-center">Seguro y confiable</h3>
            <p className="text-xs md-tablet:text-base text-center mt-1">
              Usamos buenas prácticas y tecnología moderna.
            </p>
          </div>
        </div>

        {/* TEXTO EN EL CENTRO */}
        <h2 className="text-4xl md-tablet:text-6xl table-lg:text-7xl font-extrabold text-center leading-tight">
          <span className="text-indigo-900">Beneficios</span>
          <br />
          <span className="text-blue-400">inmediatos</span>
        </h2>

        {/* FILA INFERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between">
          <div className={`w-32 h-32 md-tablet:w-52 md-tablet:h-52 bg-red-500 rounded-full flex flex-col items-center justify-center text-white p-4 ${styles.redCircle}`}>
            <h3 className="font-semibold text-sm text-gray-900 md-tablet:text-xl text-center">100% personalizado</h3>
            <p className="text-xs md-tablet:text-base text-center mt-1">
              Nada de plantillas, todo hecho a tu medida.
            </p>
          </div>

          <div className={`w-32 h-32 md-tablet:w-52 md-tablet:h-52 bg-lime-500 rounded-full flex flex-col items-center justify-center text-white p-4 ${styles.greenCircle}`}>
            <h3 className="font-semibold text-sm text-gray-900 md-tablet:text-xl text-center">Soporte constante</h3>
            <p className="text-xs md-tablet:text-base text-center mt-1">
              No te dejamos solo después de la entrega.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
