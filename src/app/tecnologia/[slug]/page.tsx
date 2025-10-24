import TechHero from "@/sections/tech/components/TechHero";
import { techData } from "@/data/techDataPage";
import TechBenefits from "@/sections/tech/components/TechBenefits";
import TechServices from "@/sections/tech/components/TechServices";
import { ServicesSliderProjects } from "@/sections/services/ServicesSliderProjects";
import { projectsData } from "@/data/portfolioData";
import TechWhy from "@/sections/tech/components/TechWhy";
import TechProcess from "@/sections/tech/components/TechProcess";
import FAQSection from "@/components/ui/FAQSection";
import NotFound from "@/app/not-found";

interface Props {
  params: {
    slug: string;
  };
}

export default function TechPage({ params }: Props) {
  const tech = techData[params.slug];
  if (!tech) {
    return (
      NotFound()
    )
  }

  return (
    <div>
      <TechHero tech={tech} />

      <TechWhy title={tech.title} color={tech.color} description={tech.whyTech} image={tech.image[0]}/>

      <TechBenefits benefits={tech.beneficios} name={tech.title}/>

      <TechServices image={tech.image[1]} name={tech.title} services={tech.servicios} />

      <ServicesSliderProjects projects={projectsData} showService={false}/>

      <TechProcess name={tech.title} steps={tech.proceso || []}/>

      <FAQSection itemsDate={tech.faq}/>

    </div>
  );
}
