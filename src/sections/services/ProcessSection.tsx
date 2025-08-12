"use client";

const processSteps = [
  {
    step: 1,
    title: "Descubrimiento y analisis",
    description: "Primero entendemos tu idea o revisamos tu software actual.",
    details: [
      "Definimos los objetivos principales de tu proyecto.",
      "Analizamos el mercado y a tu competencia.",
      "Creamos un plan inicial para garantizar que vamos en la dirección correcta.",
    ],
  },
  {
    step: 2,
    title: "Diseño y Planificación",
    description: "Damos forma visual y estructural a tu proyecto.",
    details: [
      "Diseñamos la experiencia de usuario (UX) y la interfaz (UI).",
      "Identificamos funcionalidades y establecemos prioridades.",
      "Creamos prototipos para que visualices tu producto antes de desarrollarlo.",
    ],
  },
  {
    step: 3,
    title: "Desarrollo del Producto",
    description: "Aquí tu idea empieza a tomar vida.",
    details: [
      "Desarrollamos tu frontend y/o mobile según tus necesidades.",
      "Usamos tecnologías modernas para asegurar rendimiento y escalabilidad.",
      "Integramos tu proyecto con APIs, servicios externos o sistemas existentes.",
    ],
  },
  {
    step: 4,
    title: "Pruebas de Calidad (QA)",
    description: "Nos aseguramos de que todo funcione perfecto antes del lanzamiento.",
    details: [
      "Realizamos pruebas de funcionalidad, rendimiento y seguridad.",
      "Identificamos y solucionamos cualquier error o mejora pendiente.",
      "Validamos que tu producto cumpla con lo que necesitas.",
    ],
  },
  {
    step: 5,
    title: "Lanzamiento y Entrega",
    description: "Tu producto está listo para ver la luz.",
    details: [
      "Implementamos la solución en el entorno de producción.",
      "Migramos datos si es necesario y hacemos pruebas finales.",
      "Entregamos un proyecto funcional, listo para tus usuarios.",
    ],
  },
  {
    step: 6,
    title: "Soporte y Evolución",
    description: "No termina con la entrega: seguimos contigo.",
    details: [
      "Monitoreamos el rendimiento y aplicamos mejoras.",
      "Ofrecemos mantenimiento y soporte técnico según tus necesidades.",
      "Evolucionamos tu producto a medida que tu negocio crece.",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-blue-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Título y subtítulo */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Nuestro Proceso de Desarrollo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ya sea que tengas solo una idea, un prototipo, o un software existente,
            nuestro proceso se adapta para llevar tu proyecto al siguiente nivel.
          </p>
        </div>

        {/* Contenedor de los pasos del proceso */}
        <div className="space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              // Se actualiza la clase para el sombreado y el efecto hover
              className="bg-white rounded-2xl shadow-lg m-5 p-8 flex flex-col md-tablet:flex-row items-center gap-6 px-10 py-4
              hover:shadow-xl hover:scale-[1.07] transition-all duration-300 transform"
              style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.05)' }}
            >
              {/* Círculo con el número del paso */}
              <div
                className="flex-shrink-0 flex justify-center items-center h-24 w-24 rounded-full bg-blue-600 text-white font-bold text-5xl md-tablet:h-24 md-tablet:w-24 md-tablet:text-5xl shiny-number-container"
              >
                <div style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.6)' }}>
                  {step.step}
                </div>
              </div>

              {/* Contenido del paso: título y detalles */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 text-center md-tablet:text-left">
                  {step.title}
                </h3>
                <p className="text-lg text-center md-tablet:text-left text-gray-700 mb-3">
                  {step.description}
                </p>
                <ul className="space-y-1 text-gray-600 list-disc">
                  {step.details.map((detail, index) => (
                    <li key={index}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
