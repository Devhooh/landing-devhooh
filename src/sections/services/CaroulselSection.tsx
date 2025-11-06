import React from "react";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import CardServicesSlider from "@/components/sliders/CardServicesSlider";
import TextRevealClient from "@/components/ui/TextRevealClient";

interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

interface CardCaroulselSectionProps {
  title: string;
  features?: {icon: string; text: string}[];
  cardData: CardData[];
}

export default function CaroulselSection({ title, cardData, features }: CardCaroulselSectionProps) {
  return (
    <section
      className="
        bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 w-full h-full pt-10 overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto px-3 tablet-md:px-10">
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.5, delay: 0.3, ease: "easeInOut"}}
        >
          <h2 className="px-4 text-3xl md-tablet:text-4xl text-center font-extrabold text-colorPrimario1 pb-4 drop-shadow-sm">
            {title}
          </h2>
        </TextRevealClient>

        {features && (
          <StaggerListContainer 
            staggerChildren={0.15}
            delayChildren={0.4}
            className="flex flex-col items-center tablet-md:flex-row tablet-md:justify-center gap-6 my-3"
          >
            {features.map((f, idx) => {
              const Icon = (Icons[f.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) || Icons.HelpCircle;
              return (
                <StaggerListItemClient 
                  key={idx} 
                  direction="y"
                  offset={30}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Icon className="w-6 h-6 tablet-md:w-8 tablet-md:h-8 text-colorSecundario3" />
                  <span>{f.text}</span>
                </StaggerListItemClient>
              );
            })}
          </StaggerListContainer>
        )}
        <CardServicesSlider cardData={cardData}/>
      </div>
    </section>
  );
}
