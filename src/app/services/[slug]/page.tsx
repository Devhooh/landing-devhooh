import NotFound from "@/app/not-found";
import { ServicesDetails } from "@/data/ServicesDetails";
import FAQSection from "@/components/ui/FAQSection";
import CTASlugServices from "@/sections/services/components/CTASlugServices";
import HeroSectionServices from "@/sections/services/components/HeroSectionServices";
import ProcessServicesSection from "@/sections/services/components/ProcessServicesSection";
import ProjectsServicesSection from "@/sections/services/components/ProjectsServicesSection";
import ServicesBenefits from "@/sections/services/components/ServicesBenefits";
import ServicesDataSection from "@/sections/services/components/ServicesDataSection";
import ServicesIncluded from "@/sections/services/components/ServicesIncluded";
import ServicesStackTech from "@/sections/services/components/ServicesStackTech";

interface Props {
  params: { slug: string };
}

export default function ServicePage({ params }: Props) {
  const service = ServicesDetails[params.slug];

  if (!service) {
    return (
      NotFound()
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <HeroSectionServices service={service}/>

      <ServicesIncluded service={service}/>

      <ServicesBenefits service={service}/>

      <ServicesDataSection service={service}/>

      <ServicesStackTech service={service}/>

      <ProjectsServicesSection/>

      <ProcessServicesSection service={service}/>

      <FAQSection itemsDate={service.faq}/>

      <CTASlugServices/>

    </div>
  );
}
