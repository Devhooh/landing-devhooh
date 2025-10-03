"use client"
import TechCard from "./TechCard";
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
  );
}
