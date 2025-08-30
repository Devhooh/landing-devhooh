"use client";
import Image from "next/image";

export default function AboutSection () {
  return (
    <div className="bg-white pt-16 px-4 md-tablet:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Card central de comunicación */}
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-b from-indigo-950 via-blue-950 to-black text-white rounded-3xl p-8 shadow-2xl max-w-5xl text-center">
            <h2 className="text-3xl table-lg:text-4xl font-extrabold mb-10">
              Cuando la confianza es alta, la comunicación es fácil, instantánea y efectiva.
            </h2>
            <p className="text-lg table-lg:text-xl font-light italic leading-relaxed max-w-3xl mx-auto">
              En solo 4 años, Devhoo ha ayudado a startups y empresas a transformar sus ideas en soluciones digitales reales. Con un equipo apasionado por la innovación, combinamos diseño, desarrollo y tecnologías modernas para que tu proyecto brille desde el primer día.
            </p>
          </div>
        </div>

        {/* Contenedor de las cards de Visión y Misión */}
        {/* El layout por defecto es en columna (móvil y tablet), cambia a fila en PC */}
        <div className="flex flex-col space-y-12 p-4">
          
          {/* Card de Visión - Alineada a la izquierda en PC */}
          <div className="w-full table-lg:w-3/4 table-lg:self-start bg-gradient-to-b from-white via-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden flex flex-col table-lg:flex-row border-2 border-fuchsia-300">
            {/* Imagen de Visión - Tamaño reducido y centrado en móvil/tablet */}
            <div className="p-4 md-tablet:w-1/2 md-tablet:mx-auto table-lg:w-1/3 flex items-center justify-center bg-fuchsia-100">
              <Image
                width={200}
                height={200}
                src="/assets/images/vision.png" 
                alt="Visión de la empresa" 
                className="w-full h-auto object-cover rounded-lg max-w-xs mx-auto"
              />
            </div>
            
            {/* Contenido de texto de Visión */}
            <div className="table-lg:w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Vision
              </h3>
              <p className="text-base table-lg:text-base text-gray-600 mb-4">
                Entregar proyectos que superen expectativas, siempre a tiempo, confiables y escalables.
              </p>
              <p className="text-base table-lg:text-base text-gray-600">
                En los próximos 3 a 5 años, nuestra meta es posicionarnos como una de las empresas tecnológicas más importantes del país y con presencia internacional, capaz de competir a nivel global.
              </p>
            </div>
          </div>

          {/* Card de Misión - Alineada a la derecha en PC */}
          <div className="w-full table-lg:w-3/4 table-lg:self-end bg-gradient-to-b from-white via-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden flex flex-col table-lg:flex-row-reverse border-2 border-fuchsia-300">
            {/* Imagen de Misión - Tamaño reducido y centrado en móvil/tablet */}
            <div className="p-4 md-tablet:w-1/2 md-tablet:mx-auto table-lg:w-1/3 flex items-center justify-center bg-fuchsia-100">
              <Image
                width={200}
                height={200}
                src="/assets/images/mision.png" 
                alt="Misión de la empresa" 
                className="w-full h-auto object-cover rounded-lg max-w-xs mx-auto"
              />
            </div>
            
            {/* Contenido de texto de Misión */}
            <div className="table-lg:w-2/3 px-10 py-5 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                Mision
              </h3>
              <p className="text-base table-lg:text-base text-gray-600 mb-3">
                Ayudar a las personas a construir y hacer realidad sus ideas a través de soluciones de TI innovadoras, utilizando tecnologías modernas que la empresa ofrece.
              </p>
              <ul className="list-disc text-base table-lg:text-base text-gray-600 space-y-2">
                <li>Contratar y desarrollar el mejor talento nacional e internacional.</li>
                <li>Mantener una transparencia total en todas las operaciones y comunicaciones.</li>
                <li>Trabajar siempre de la mano con el cliente y las personas adecuadas para cada proyecto.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
