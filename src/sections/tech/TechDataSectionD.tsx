import TextRevealClient from "@/components/ui/TextRevealClient";
import TechCard from "../../components/cards/tech/TechCard";
import {
  backendTech,
  designerTech,
  frontendTech,
  iaTech,
  infraTech,
  mobilTech,
  softwareTech,
} from "@/data/techData";

export default function TechDataSection() {
  return (
    <section>

      <div className="w-full pb-5 mx-auto">

        <div className="overflow-hidden mx-auto mt-16 px-5 md-tablet:px-10 space-y-4 pb-5 text-left">
          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-2xl md-tablet:text-3xl font-extrabold text-colorPrimario1">
              De un vistazo a nuestro kit 
              <br/>de 
              <strong className="text-colorPrimario5">  herramientas tecnológicas</strong>
            </h3>
          </TextRevealClient>
          
          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <p className="text-lg md-tablet:text-xl max-w-2xl text-gray-700">
              Profundizamos en las necesidades de su proyecto para asegurarnos de
              seleccionar las mejores herramientas y marcos para su producto. La
              mayoría de los proyectos en los que trabajamos se dividen en el
              siguiente stack de tecnológicas.
            </p>
          </TextRevealClient>
        </div>
      </div>

      <div className="grid md-tablet:grid-cols-2 lg-table:grid-cols-1 gap-8 px-7 md-tablet:px-10 pb-16">
        <TechCard
          title="Front-End"
          subtitle="Interfaces modernas, responsivas y optimizadas para brindar experiencias de usuario fluidas."
          technologies={frontendTech}
        />
        <TechCard
          title="Back-End & Databases"
          subtitle="Arquitecturas sólidas, seguras y escalables con bases de datos confiables y alto rendimiento."
          technologies={backendTech}
        />
        <TechCard
          title="Mobile"
          subtitle="Aplicaciones nativas y multiplataforma rápidas, intuitivas y listas para Android e iOS."
          technologies={mobilTech}
        />
        <TechCard
          title="Software empresarial y de escritorio"
          subtitle="Soluciones robustas para gestión, productividad y automatización en entornos corporativos."
          technologies={softwareTech}
        />
        <TechCard
          title="IA & Blockchain"
          subtitle="Inteligencia Artificial aplicada a datos y sistemas descentralizados para potenciar la innovación."
          technologies={iaTech}
        />
        <TechCard
          title="Infraestructura"
          subtitle="Entornos en la nube, DevOps y servidores escalables que aseguran disponibilidad 24/7."
          technologies={infraTech}
        />
        <TechCard
          title="Diseño"
          subtitle="Prototipado creativo, diseño UI/UX centrado en el usuario y experiencias digitales memorables."
          technologies={designerTech}
        />
      </div>
    </section>

  );
}
