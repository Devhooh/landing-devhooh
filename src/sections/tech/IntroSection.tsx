"use client"

import { logoTech } from "@/data/logoTech";
import { SliderTech } from "./SliderTech";

// src/components/Tecnologia.tsx
export default function IntroSection() {
  return (
    <section className="w-full bg-white py-16 mx-auto">
      {/* Hero de Tecnología */}
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-2xl md-tablet:text-3xl table-lg:text-4xl font-bold text-indigo-950">
          Todo lo que necesitas para construir y escalar
        </h2>
        <p className="text-sm md-tablet:text-base table-lg:text-lg max-w-3xl mx-auto">
          Utilizamos herramientas modernas que aseguran rendimiento,
          escalabilidad y experiencias inolvidables. No solo se trata de usar
          tecnología, sino de cómo la aplicamos para hacer crecer tu proyecto.
        </p>
      </div>

      {/* Carrusel de logos */}
      <div className="overflow-hidden mt-12 mx-auto">
        <SliderTech logos={logoTech} direction="left" />
        <SliderTech logos={logoTech} direction="right" />
      </div>

      {/* Bloque de Kit Tecnológico */}
      <div className="overflow-hidden mx-auto mt-16 px-10 space-y-4 text-left">
        <h3 className="text-xl md-tablet:text-2xl table-lg:text-3xl font-bold text-indigo-950">
          De un vistazo a nuestro kit <br /> de herramientas tecnológicas
        </h3>
        <p className="text-sm md-tablet:text-base table-lg:text-lg max-w-2xl">
          Profundizamos en las necesidades de su proyecto para asegurarnos de
          seleccionar las mejores herramientas y marcos para su producto. La
          mayoría de los proyectos en los que trabajamos se dividen en el
          siguiente stack de tecnológicas.
        </p>
      </div>
    </section>
  );
}
