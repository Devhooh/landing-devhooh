import TechHero from "@/sections/tech/components/TechHero";
import { notFound } from "next/navigation";
import { techData } from "@/data/techDataPage";
import TechBenefits from "@/sections/tech/components/TechBenefits";
import TechServices from "@/sections/tech/components/TechServices";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import { projectsData } from "@/data/portfolioData";

interface Props {
  params: {
    slug: string;
  };
}

export default function TechPage({ params }: Props) {
  const tech = techData[params.slug];
  if (!tech) notFound();

  return (
    <div>
      <TechHero tech={tech} />

      <TechBenefits benefits={tech.beneficios} name={tech.title}/>

      <TechServices image={tech.image} name={tech.title} services={tech.servicios} />

      <ServicesSliderProjects title="Nuestra experiencia:" projects={projectsData} showService={false}/>

    </div>
  );
}
