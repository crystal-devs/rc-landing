import Navigation from './components/Navigation copy';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
