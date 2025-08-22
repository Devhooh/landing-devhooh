import { ServicesDetails } from "@/data/ServicesDetails";
import HeroSectionServices from "@/sections/services/components/HeroSectionServices";

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
    <div className="flex flex-col gap-12">
      <HeroSectionServices service={service}/>
    </div>
  );
}
