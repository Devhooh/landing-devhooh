import { ServicesDetails } from "@/data/ServicesDetails";
import HeroSectionServices from "@/sections/services/components/HeroSectionServices";
import ServicesBenefits from "@/sections/services/components/ServicesBenefits";
import ServicesIncluded from "@/sections/services/components/ServicesIncluded";

interface Props {
  params: { slug: string };
}

export default function ServicePage({ params }: Props) {
  const service = ServicesDetails[params.slug];

  if (!service) {
    return (
      <div className="p-10 text-center text-red-600 font-bold">
        Servicio no encontrado
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <HeroSectionServices service={service}/>

      <ServicesIncluded service={service}/>

      <ServicesBenefits service={service}/>
    </div>
  );
}
