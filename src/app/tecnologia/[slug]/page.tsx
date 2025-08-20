import TechHero from "@/sections/tech/components/TechHero";
import { notFound } from "next/navigation";
import { techData } from "@/data/techDataPage";

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
    </div>
  );
}
