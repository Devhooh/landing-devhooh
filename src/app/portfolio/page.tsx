import FAQSection from "@/components/ui/FAQSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";
import ReviewsSection from "@/sections/portfolio/ReviewSection";
import { faqData} from '@/data/faqData';
import HeroSectionPort from "@/sections/portfolio/HeroSectionPort";
import CTAPortfolio from "@/sections/portfolio/CTAPortfolio";
import ProcessPortfolio from "@/sections/portfolio/ProcessPortfolio";
import { PortfolioSlider } from "@/sections/portfolio/PortfolioSlider";

export default function Portfolio() {
  return (
    <div>

      <HeroSectionPort/>

      <PortfolioFilters/>

      <PortfolioSlider/>

      <ProcessPortfolio/>

      <ReviewsSection/>

      <CTAPortfolio/>

      <FAQSection itemsDate={faqData}/>


    </div>
  )
}