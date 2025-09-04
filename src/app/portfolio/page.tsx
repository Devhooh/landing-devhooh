import FAQSection from "@/sections/portfolio/FAQSection";
import PortfolioFilters from "@/sections/portfolio/PortfolioFilters";
import ReviewsSection from "@/sections/portfolio/ReviewSection";
import { faqData} from '@/data/faqData';
import HeroSectionPort from "@/sections/portfolio/HeroSectionPort";
import CTAPortfolio from "@/sections/portfolio/CTAPortfolio";

export default function Portfolio() {
  return (
    <div>

      <HeroSectionPort/>

      <PortfolioFilters/>

      <ReviewsSection/>

      <FAQSection itemsDate={faqData}/>

      <CTAPortfolio/>

    </div>
  )
}