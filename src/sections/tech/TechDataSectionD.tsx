"use client"
import TechCard from "./TechCard";
import{ backendTech, designerTech, frontendTech, iaTech, infraTech, mobilTech, softwareTech } from "@/data/techData"

export default function TechDataSection() {
  return (
    <div className="grid md-tablet:grid-cols-2 lg-table:grid-cols-1 gap-8 px-10 pb-16">
      <TechCard
        title="Front-End"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={frontendTech}
      />
      <TechCard
        title="Back-End & Databases"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={backendTech}
      />
      <TechCard
        title="Mobile"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={mobilTech}
      />
      <TechCard
        title="Software empresarial y de escritorio"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={softwareTech}
      />
      <TechCard
        title="IA & Blockchain"
        subtitle="Soluciones con IA, modelos de Machine Learning y desarrollo sobre Blockchain."
        technologies={iaTech}
      />
      <TechCard
        title="Infraestructura"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={infraTech}
      />
      <TechCard
        title="Diseño"
        subtitle="Sitios web modernos, rápidos, escalables y optimizados para SEO."
        technologies={designerTech}
      />
      {/* Puedes agregar otra card: Back-End, Diseño, etc */}
    </div>
  );
}
