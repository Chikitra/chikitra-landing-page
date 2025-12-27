import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ChaosSection from "@/components/sections/ChaosSection";
import WhyChikitraSection from "@/components/sections/WhyChikitraSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CommunitySection from "@/components/sections/CommunitySection";
import PricingSection from "@/components/sections/PricingSection";
import BookDemoSection from "@/components/sections/BookDemoSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section based on route
    const path = location.pathname;
    let sectionId = "";

    switch (path) {
      case "/about":
        sectionId = "about";
        break;
      case "/features":
        sectionId = "features";
        break;
      case "/pricing":
        sectionId = "pricing";
        break;
      case "/contact":
      case "/book-demo":
        sectionId = "book-demo";
        break;
      case "/testimonials":
        sectionId = "community";
        break;
      default:
        sectionId = "";
    }

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Screen 1: Hero */}
      <HeroSection />
      
      {/* Screen 2: Chaos / Problem */}
      <ChaosSection />
      
      {/* Screen 3: Why Chikitra */}
      <WhyChikitraSection />
      
      {/* Screen 4: Features (6 empty cards) */}
      <FeaturesSection />
      
      {/* Screen 5: Community + Founders */}
      <CommunitySection />
      
      {/* Screen 6: Pricing */}
      <PricingSection />
      
      {/* Screen 7: Book Demo CTA + Form */}
      <BookDemoSection />
      
      {/* Screen 8: Footer */}
      <Footer />
    </main>
  );
};

export default Index;
