import NotFound from "@/app/not-found";
import { portfolioDetails } from "@/data/portfolioDetails";
import ChallengeSection from "@/sections/portfolio/components/ChallengeSection";
import CTASlugfolio from "@/sections/portfolio/components/CTASlugfolio";
import ImageProject from "@/sections/portfolio/components/ImagesProject";
import PortfolioAbout from "@/sections/portfolio/components/PortfolioAbout";
import PortfolioHero from "@/sections/portfolio/components/PortfolioHero";
import PortfolioProcess from "@/sections/portfolio/components/PortfolioProcess";
import ResultSection from "@/sections/portfolio/components/ResultSection";
import StackTech from "@/sections/portfolio/components/StackTech";

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = portfolioDetails.find(p => p.slug === params.slug);

  if (!project) {
    return (
      NotFound()
    )
  }

  return (
    <div>
      <PortfolioHero project={project}/>

      <PortfolioAbout project={project}/>

      <ChallengeSection project={project}/>

      <PortfolioProcess project={project}/>

      <StackTech project={project}/>

      <ResultSection project={project}/>

      <ImageProject project={project}/>

      <CTASlugfolio/>

    </div>
  );
}
