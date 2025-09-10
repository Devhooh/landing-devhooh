import FAQSection from "@/sections/portfolio/FAQSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";
import ReviewsSection from "@/sections/portfolio/ReviewSection";
import { faqData} from '@/data/faqData';
import HeroSectionPort from "@/sections/portfolio/HeroSectionPort";
import CTAPortfolio from "@/sections/portfolio/CTAPortfolio";
import { portfolioDesarrollo } from "@/data/portfolioDesarrollo";
import ProcessPortfolio from "@/sections/portfolio/ProcessPortfolio";

export default function Portfolio() {
  return (
    <div>

      <HeroSectionPort/>

      <PortfolioFilters/>

      <CTAPortfolio/>

      <ProcessPortfolio steps={portfolioDesarrollo.proceso || []}/>

      <ReviewsSection/>

      <FAQSection itemsDate={faqData}/>


    </div>
  )
}