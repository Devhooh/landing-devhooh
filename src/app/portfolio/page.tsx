import FAQSection from "@/components/ui/FAQSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";
import ReviewsSection from "@/sections/portfolio/ReviewSection";
import { faqData} from '@/data/faqData';
import HeroSectionPort from "@/sections/portfolio/HeroSectionPort";
import CTAPortfolio from "@/sections/portfolio/CTAPortfolio";
import { portfolioDesarrollo } from "@/data/portfolioDesarrollo";
import ProcessPortfolio from "@/sections/portfolio/ProcessPortfolio";
import { PortfolioSlider } from "@/sections/portfolio/PortfolioSlider";

export default function Portfolio() {
  return (
    <div>

      <HeroSectionPort/>

      <PortfolioFilters/>

      <PortfolioSlider/>

      <ProcessPortfolio steps={portfolioDesarrollo.proceso || []}/>

      <ReviewsSection/>

      <CTAPortfolio/>

      <FAQSection itemsDate={faqData}/>


    </div>
  )
}