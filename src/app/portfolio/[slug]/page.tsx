import { portfolioDetails } from "@/data/portfolioDetails";
import ChallengeSection from "@/sections/portfolio/components/ChallengeSection";
import PortfolioAbout from "@/sections/portfolio/components/PortfolioAbout";
import PortfolioHero from "@/sections/portfolio/components/PortfolioHero";
import PortfolioProcess from "@/sections/portfolio/components/PortfolioProcess";
import StackTech from "@/sections/portfolio/components/StackTech";

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

      <ChallengeSection project={project}/>

      <PortfolioProcess project={project}/>

      <StackTech project={project}/>
    </div>
  );
}
