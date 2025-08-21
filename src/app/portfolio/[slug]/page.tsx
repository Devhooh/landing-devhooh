import { portfolioDetails } from "@/data/portfolioDetails";
import PortfolioAbout from "@/sections/portfolio/components/PortfolioAbout";
import PortfolioHero from "@/sections/portfolio/components/PortfolioHero";

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = portfolioDetails.find(p => p.slug === params.slug);

  if (!project) {
    return <div className="p-10 text-center">Proyecto no encontrado</div>;
  }

  return (
    <div>
      <PortfolioHero project={project}/>

      <PortfolioAbout project={project}/>
    </div>
  );
}
