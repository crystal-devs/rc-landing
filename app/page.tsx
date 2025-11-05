import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ReviewsSection from '../components/ReviewsSection';
import FAQSection from '../components/FAQSection';
import { productFaqs } from '@/datas/productFaqs';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <FAQSection faqs={productFaqs}/>
    </div>
  );
}
