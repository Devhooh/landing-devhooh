import { BenefitsSection } from "@/sections/home/BenefitsSection";
import CTAHome from "@/sections/home/CTAHome";
import HeroSectionHome from "@/sections/home/HeroSectionHome";
import { PlansSection } from "@/sections/home/PlansSection";
import { ProjectsBenefits } from "@/sections/home/ProjectsBenefits";
import ProjectSectionSlider  from "@/sections/home/ProjectSectionSlider";
import { ProjectsSection } from "@/sections/home/ProjectsSection";
import ReviewsHome from "@/sections/home/ReviewsHome";
import { SolutionsSection } from "@/sections/home/SolutionsSection";
import TechSection from "@/sections/home/TechSection";

export default function Home() {
  return (
    <div>
      <HeroSectionHome/>

      <SolutionsSection/>

      <ProjectsSection/>

      {/* Beneficios de proyectos */}
      <BenefitsSection/>

      {/* Nuestros clientes */}
      <ProjectSectionSlider/>

      {/* Reviews de clientes */}
      <ReviewsHome/>

      <ProjectsBenefits/>

      <TechSection/>

      <PlansSection/>

      <CTAHome/>

    </div>
  );
}
