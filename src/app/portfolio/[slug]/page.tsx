import NotFound from "@/app/not-found";
import ContactCTA from "@/components/ui/ContactCTA";
import { portfolioDetails } from "@/data/portfolioDetails";
import ChallengeSection from "@/sections/portfolio/components/ChallengeSection";
import PortfolioAbout from "@/sections/portfolio/components/PortfolioAbout";
import PortfolioHero from "@/sections/portfolio/components/PortfolioHero";
import PortfolioProcess from "@/sections/portfolio/components/PortfolioProcess";
import ResultSection from "@/sections/portfolio/components/ResultSection";
import StackTech from "@/sections/portfolio/components/StackTech";
import Image from "next/image";

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

      {/* Galería de imágenes */}
      <div className="max-w-7xl mx-auto mt-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className=" text-3xl md-tablet:text-5xl font-bold pb-4">
            {project.company}
          </h2>
          {project.pictures.descripcion && (
            <p className="mt-2 text-lg text-gray-600">
              {project.pictures.descripcion}
            </p>
          )}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 gap-6">
          {project.pictures.images.map((src, index) => (
            <div key={index} className="flex justify-center m-8">
              <Image
                src={src}
                alt={`Imagen del proyecto ${project.projectName} - ${index + 1}`}
                width={600}
                height={400}
                className="min-w-10 h-auto rounded-xl shadow-lg object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <ContactCTA/>

    </div>
  );
}
